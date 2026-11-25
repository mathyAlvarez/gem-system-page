import { Link } from "react-router-dom";
import { Button, Typography } from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { HomePageHero } from "./HomePageHero.tsx";
import { HomePagePackages } from "./HomePagePackages.tsx";
import { HomePageUsage } from "./HomePageUsage.tsx";
// import { HomePageUtility } from "./HomePageUtility.tsx";
import "./HomePage.scss";

const PACKAGES_SECTION_ID = "paquetes";

export function HomePage() {
  const { t } = useTranslation("base");

  return (
    <div className="home-page">
      <HomePageHero scrollTargetId={PACKAGES_SECTION_ID} />

      <HomePagePackages id={PACKAGES_SECTION_ID} />

      <HomePageUsage />

      {/* <HomePageUtility /> */}

      <footer className="home-footer">
        <Typography variant="bodySm" className="docs-page__meta">
          {t("footer.brands")}
        </Typography>
        <Link to="/system/getting-started">
          <Button variant="link" size="sm">
            {t("footer.cta")}
          </Button>
        </Link>
      </footer>
    </div>
  );
}
