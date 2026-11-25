import { Typography } from "@gem-org/gem-system";
import { StaggerGroup } from "@gem-org/gemsitions";
import { useTranslation } from "react-i18next";

const reasons = ["api", "tokens", "docs", "motion"] as const;

export function HomePageUsage() {
  const { t } = useTranslation("base");

  return (
    <section className="home-section home-section--alt">
      <header className="home-section__header">
        <Typography variant="h2">{t("reasons.title")}</Typography>
        <Typography variant="body" className="docs-page__meta">
          {t("reasons.description")}
        </Typography>
      </header>
      <StaggerGroup isIn from="bottom" staggerDelay={70} distance={12} className="home-reason-grid">
        {reasons.map((reason) => (
          <article key={reason} className="home-reason">
            <Typography variant="h4">{t(`reasons.${reason}.title`)}</Typography>
            <Typography variant="body" className="docs-page__meta">
              {t(`reasons.${reason}.body`)}
            </Typography>
          </article>
        ))}
      </StaggerGroup>
    </section>
  );
}
