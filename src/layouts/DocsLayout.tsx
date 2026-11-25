import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button, Navbar, Sidebar, type SidebarItem } from "@gem-org/gem-system";
import { ChevronRight, Menu } from "@gem-org/gem-system/icons";
import { useTranslation } from "react-i18next";
import { LanguageSelect, ThemeToggle, VersionSelect } from "../components/NavbarControls.tsx";
import { ProductSelect } from "../components/ProductSelect.tsx";
import { ScrollToTopFab } from "../components/ScrollToTopFab.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import { MiddleDot } from "../components/ThemeIcons.tsx";
import {
  apiNavIdFor,
  navigationFor,
  routeGroupsFor,
  type NavEntry,
  type NavLeaf,
} from "../data/navigation.ts";
import { PRODUCTS, resolveProduct, type ProductId } from "../data/products.ts";
import { implementedRoutes } from "../data/routes.ts";
import { preloadMonaco } from "../lib/preloadMonaco.ts";
import "./AppNavbar.scss";
import "./DocsLayout.scss";

const SIDEBAR_OVERLAY_MQ = "(max-width: 767.98px)";

function useSidebarOverlay() {
  const [isOverlay, setIsOverlay] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(SIDEBAR_OVERLAY_MQ).matches : false,
  );

  useEffect(() => {
    const media = window.matchMedia(SIDEBAR_OVERLAY_MQ);
    const onChange = () => setIsOverlay(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return isOverlay;
}

function resetScroll(container: HTMLElement | null, hash: string) {
  const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
  if (target) target.scrollIntoView({ block: "start" });
  else container?.scrollTo({ top: 0 });
}

function Brand({ label }: { label: string }) {
  return (
    <span className="docs-brand">
      <img className="docs-brand__logo" src="/gem-org-favicon.png" alt="" width={32} height={32} />
      <span className="docs-brand__text">{label}</span>
    </span>
  );
}

function buildSidebarItems(
  entries: NavEntry[],
  apiNavId: string,
  pathname: string,
  labelOf: (entry: NavEntry) => string,
  navigate: (to: string) => void,
): SidebarItem[] {
  const toLeaf = (item: NavLeaf, nested: boolean): SidebarItem => {
    const Icon = nested || !item.icon ? MiddleDot : item.icon;
    return {
      id: item.id,
      label: labelOf(item),
      icon: <Icon size="sm" />,
      current: pathname === item.to,
      onClick: () => navigate(item.to),
    };
  };

  return entries.map((entry) => {
    if (!("items" in entry)) return toLeaf(entry, false);
    const items = entry.items
      .filter((item) => {
        if (entry.id !== apiNavId) return true;
        const routePath = item.to.slice(1).replace(/\/api$/, "");
        return implementedRoutes.has(routePath);
      })
      .map((item) => toLeaf(item, true));
    return {
      id: entry.id,
      label: labelOf(entry),
      icon: <ChevronRight size="sm" />,
      defaultOpen: items.some((item) => item.current),
      items,
    };
  });
}

export function DocsLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isOverlay = useSidebarOverlay();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarPath, setSidebarPath] = useState(location.pathname);
  const contentRef = useRef<HTMLElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const productId: ProductId = resolveProduct(location.pathname) ?? "system";
  const product = PRODUCTS[productId];
  const routeGroups = routeGroupsFor(productId);
  const apiNavId = apiNavIdFor(productId);

  // Close the overlay sidebar on navigation without an effect (avoids set-state-in-effect).
  if (location.pathname !== sidebarPath) {
    setSidebarPath(location.pathname);
    setSidebarOpen(false);
  }

  // TOC only on component/effect routes (not getting-started / foundations-only pages).
  const hasToc = routeGroups.some(({ base }) =>
    location.pathname.startsWith(`/${productId}/${base}/`),
  );

  // Warm Monaco as soon as docs shell mounts so the first CodeBlock is not cold.
  useEffect(() => {
    void preloadMonaco();
  }, []);

  // Reset main scroll on every route change. Second frame covers Tabs that scroll on mount.
  useLayoutEffect(() => {
    resetScroll(contentRef.current, location.hash);
    const frame = requestAnimationFrame(() => resetScroll(contentRef.current, location.hash));
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  // Sidebar groups are uncontrolled: open the current group's disclosure if needed, then scroll.
  // When the product changes the Sidebar remounts (key), so defaultOpen already opens the group.
  useEffect(() => {
    if (isOverlay && !sidebarOpen) return;
    let cancelled = false;
    let frame = requestAnimationFrame(() => {
      const current = bodyRef.current?.querySelector<HTMLElement>(
        '.gem-sidebar__item[aria-current="page"]',
      );
      if (!current) return;
      const panel = current.closest<HTMLElement>(".gem-sidebar__panel");
      const control = panel?.parentElement?.querySelector<HTMLButtonElement>(
        ":scope > .gem-sidebar__control",
      );
      if (control?.getAttribute("aria-expanded") === "false") control.click();
      frame = requestAnimationFrame(async () => {
        await Promise.allSettled(
          (panel?.getAnimations({ subtree: true }) ?? []).map((a) => a.finished),
        );
        if (!cancelled) current.scrollIntoView({ block: "center" });
      });
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [location.pathname, productId, isOverlay, sidebarOpen]);

  const sidebarItems = useMemo(() => {
    const labelOf = (entry: NavEntry) =>
      entry.labelKey ? t(`nav.${entry.labelKey}`) : (entry.label as string);
    return buildSidebarItems(
      navigationFor(productId),
      apiNavId,
      location.pathname,
      labelOf,
      navigate,
    );
  }, [productId, apiNavId, location.pathname, navigate, t]);

  return (
    <div className="docs-shell">
      <Navbar
        className="docs-navbar"
        position="static"
        bordered
        shadow="sm"
        collapseBreakpoint="md"
        isOpen
        brand={
          <span className="docs-navbar__start">
            {isOverlay ? (
              <Button
                variant="transparent"
                size="md"
                iconOnly
                aria-label={t("navbar.openMenu")}
                aria-expanded={sidebarOpen}
                onClick={() => setSidebarOpen(true)}
              >
                <Menu size="md" />
              </Button>
            ) : null}
            <Link to="/" aria-label={t("products.ecosystem")}>
              <Brand label={product.brand} />
            </Link>
          </span>
        }
        actions={
          <div className="docs-navbar__actions">
            <ProductSelect />
            <VersionSelect />
            <LanguageSelect />
            <ThemeToggle />
          </div>
        }
      />
      <div ref={bodyRef} className="docs-body">
        {/*
          Remount the Sidebar when the product changes so uncontrolled group state
          from another zone never leaks. Same-product navigations keep the instance.
        */}
        <Sidebar
          key={productId}
          items={sidebarItems}
          position="static"
          collapsible={!isOverlay}
          overlayBreakpoint="md"
          isOpen={sidebarOpen}
          onOpenChange={setSidebarOpen}
          navLabel={t("navbar.docsNav")}
          bordered
          menuLabel={t("navbar.openMenu")}
          closeLabel={t("navbar.closeMenu")}
        />
        <main ref={contentRef} className="docs-content">
          {/*
            Remount page content when the product changes to drop any local UI state
            (playgrounds, open modals, Monaco models) from the previous zone.
          */}
          <div key={productId} className="docs-content__zone">
            {hasToc ? (
              <div className="docs-content__grid">
                <Outlet />
                <TableOfContents targetRef={contentRef} />
              </div>
            ) : (
              <Outlet />
            )}
          </div>
          <ScrollToTopFab targetRef={contentRef} />
        </main>
      </div>
    </div>
  );
}
