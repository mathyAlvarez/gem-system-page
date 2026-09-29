import { useEffect, useState, type MouseEvent, type RefObject } from "react";
import { Typography } from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

type TocItem = { id: string; label: string; sub: boolean };

const SECTION_SELECTOR = ".docs-page > .docs-section[id], .docs-page > .docs-section > .docs-section--sub[id]";
const ACTIVE_OFFSET_PX = 96;

function readSections(container: HTMLElement): TocItem[] {
  return Array.from(container.querySelectorAll<HTMLElement>(SECTION_SELECTOR)).map((section) => ({
    id: section.id,
    label: section.querySelector(":scope > .docs-section__title")?.textContent ?? section.id,
    sub: section.classList.contains("docs-section--sub"),
  }));
}

export function TableOfContents({ targetRef }: { targetRef: RefObject<HTMLElement | null> }) {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const container = targetRef.current;
    if (!container) return;
    const frame = requestAnimationFrame(() => setItems(readSections(container)));
    return () => cancelAnimationFrame(frame);
  }, [targetRef, pathname, i18n.language]);

  useEffect(() => {
    const container = targetRef.current;
    if (!container || items.length === 0) return;

    const update = () => {
      const top = container.getBoundingClientRect().top + ACTIVE_OFFSET_PX;
      const atBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 2;
      let current = items[0].id;
      for (const item of items) {
        const section = document.getElementById(item.id);
        if (section && section.getBoundingClientRect().top <= top) current = item.id;
      }
      setActiveId(atBottom ? items[items.length - 1].id : current);
    };

    update();
    container.addEventListener("scroll", update, { passive: true });
    return () => container.removeEventListener("scroll", update);
  }, [targetRef, items]);

  if (items.length === 0) return null;

  const goTo = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(id)?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <nav className="docs-toc" aria-label={t("toc")}>
      <Typography variant="caption" className="docs-toc__title">
        {t("toc")}
      </Typography>
      <ul className="docs-toc__list">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={[
                "docs-toc__link",
                item.sub && "docs-toc__link--sub",
                item.id === activeId && "docs-toc__link--active",
              ]
                .filter(Boolean)
                .join(" ")}
              aria-current={item.id === activeId ? "location" : undefined}
              onClick={(event) => goTo(event, item.id)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
