import { Link, Outlet } from "react-router-dom";
import { Navbar } from "@gem-org/gem-system";
import { LanguageSelect, ThemeToggle, VersionSelect } from "../components/NavbarControls.tsx";
import { ProductSelect } from "../components/ProductSelect.tsx";
import "./AppNavbar.scss";
import "./MarketingLayout.scss";

function Brand() {
  return (
    <span className="docs-brand">
      <img className="docs-brand__logo" src="/gem-org-favicon.png" alt="" width={32} height={32} />
      <span className="docs-brand__text">Gem Org</span>
    </span>
  );
}

export function MarketingLayout() {
  return (
    <div className="marketing-shell">
      <Navbar
        className="docs-navbar marketing-navbar"
        position="sticky"
        bordered
        shadow="sm"
        collapseBreakpoint="md"
        isOpen
        brand={
          <Link to="/" aria-label="Gem Org">
            <Brand />
          </Link>
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
      <main className="marketing-main">
        <Outlet />
      </main>
    </div>
  );
}
