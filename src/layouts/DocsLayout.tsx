import { useEffect, useMemo, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button, Navbar, Sidebar, type SidebarItem } from "@gem-org/gem-system";
import { ChevronRight, Menu } from "@gem-org/gem-system/icons";
import { useTranslation } from "react-i18next";
import { LanguageSelect, ThemeToggle, VersionSelect } from "../components/NavbarControls.tsx";
import { MiddleDot } from "../components/ThemeIcons.tsx";
import { navigation, type NavEntry, type NavLeaf } from "../data/navigation.ts";
import "./AppNavbar.scss";
import "./DocsLayout.scss";

const SIDEBAR_OVERLAY_MQ = "(max-width: 767.98px)";

function useSidebarOverlay() {
  const [isOverlay, setIsOverlay] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia(SIDEBAR_OVERLAY_MQ).matches
      : false,
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

function Brand() {
  return (
    <span className="docs-brand">
      <img
        className="docs-brand__logo"
        src="/gem-org-favicon.png"
        alt=""
        width={32}
        height={32}
      />
      <span className="docs-brand__text">Gem System</span>
    </span>
  );
}

export function DocsLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isOverlay = useSidebarOverlay();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  const sidebarItems = useMemo<SidebarItem[]>(() => {
    const labelOf = (entry: NavEntry) =>
      entry.labelKey ? t(`nav.${entry.labelKey}`) : entry.label;

    const toLeaf = (item: NavLeaf, nested: boolean): SidebarItem => {
      const Icon = nested || !item.icon ? MiddleDot : item.icon;
      return {
        id: item.id,
        label: labelOf(item),
        icon: <Icon size="sm" />,
        current: location.pathname === item.to,
        onClick: () => navigate(item.to),
      };
    };

    return navigation.map((entry) =>
      "items" in entry
        ? {
            id: entry.id,
            label: labelOf(entry),
            icon: <ChevronRight size="sm" />,
            defaultOpen: true,
            items: entry.items.map((item) => toLeaf(item, true)),
          }
        : toLeaf(entry, false),
    );
  }, [location.pathname, navigate, t]);

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
            <Link to="/" aria-label="Gem System">
              <Brand />
            </Link>
          </span>
        }
        actions={
          <div className="docs-navbar__actions">
            <VersionSelect />
            <LanguageSelect />
            <ThemeToggle />
          </div>
        }
      />
      <div className="docs-body">
        <Sidebar
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
        <main className="docs-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
