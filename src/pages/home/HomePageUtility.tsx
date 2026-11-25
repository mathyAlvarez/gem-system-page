import { Link } from "react-router-dom";
import { Button, Typography } from "@gem-org/gem-system";
import { AnimatedNumber } from "@gem-org/gemsitions";
import { useTranslation } from "react-i18next";

const stats = [
  { id: "stories", value: 67, duration: 900 },
  { id: "sections", value: 7, duration: 700 },
  { id: "packages", value: 3, duration: 600 },
] as const;

export function HomePageUtility() {
  const { t } = useTranslation("base");

  return (
    <section className="home-section">
      <header className="home-section__header">
        <Typography variant="h2">{t("explore.title")}</Typography>
        <Typography variant="body" className="docs-page__meta">
          {t("explore.description")}
        </Typography>
      </header>
      <div className="home-stats">
        {stats.map((stat) => (
          <div key={stat.id} className="home-stat">
            <Typography variant="h2">
              <AnimatedNumber value={stat.value} duration={stat.duration} />
            </Typography>
            <Typography variant="bodySm" className="docs-page__meta">
              {t(`explore.stats.${stat.id}`)}
            </Typography>
          </div>
        ))}
      </div>
      <div className="docs-hero-actions">
        <Link to="/system/getting-started">
          <Button variant="primary" size="lg">
            {t("explore.openDocs")}
          </Button>
        </Link>
        <a
          href="https://www.npmjs.com/package/@gem-org/gem-system"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="secondary" size="lg">
            {t("explore.npm")}
          </Button>
        </a>
      </div>
    </section>
  );
}
