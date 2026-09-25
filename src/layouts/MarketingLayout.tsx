import { Link, Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "@gem-org/gem-system";
import { LanguageSelect, ThemeToggle, VersionSelect } from "../components/NavbarControls.tsx";
import "./AppNavbar.scss";
import "./MarketingLayout.scss";

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

export function MarketingLayout() {
  const navigate = useNavigate();

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
          <Link to="/" aria-label="Gem System">
            <Brand />
          </Link>
        }
        items={[
          {
            id: "docs",
            label: "Getting started",
            onClick: () => navigate("/getting-started"),
          },
          {
            id: "npm",
            label: "npm",
            href: "https://www.npmjs.com/package/@gem-org/gem-system",
          },
        ]}
        actions={
          <div className="docs-navbar__actions">
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
