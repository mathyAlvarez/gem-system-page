import { useEffect, useState, type RefObject } from "react";
import { Fab } from "@gem-org/gem-system";
import { ArrowUp } from "@gem-org/gem-system/icons";
import { useTranslation } from "react-i18next";

const SHOW_AFTER_PX = 400;

type ScrollToTopFabProps = {
  targetRef: RefObject<HTMLElement | null>;
};

export function ScrollToTopFab({ targetRef }: ScrollToTopFabProps) {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const onScroll = () => setVisible(target.scrollTop > SHOW_AFTER_PX);
    target.addEventListener("scroll", onScroll, { passive: true });
    return () => target.removeEventListener("scroll", onScroll);
  }, [targetRef]);

  if (!visible) return null;

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    targetRef.current?.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <div className="docs-scroll-top">
      <Fab
        icon={<ArrowUp size="md" />}
        tone="primary"
        size="md"
        position="static"
        aria-label={t("scrollTop")}
        title={t("scrollTop")}
        classNames={{ root: "docs-scroll-top__fab" }}
        onClick={scrollToTop}
      />
    </div>
  );
}
