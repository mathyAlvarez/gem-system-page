import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@gem-org/gem-system";
import { BorderBeam } from "@gem-org/gemffects";
import { SlideTransition, StaggerGroup } from "@gem-org/gemsitions";
import { useTranslation } from "react-i18next";

const packages = [
  {
    id: "system",
    name: "@gem-org/gem-system",
    title: "Gem System",
    detailTo: "/getting-started",
  },
  {
    id: "effects",
    name: "@gem-org/gemffects",
    title: "Gemffects",
    detailTo: import.meta.env.VITE_GEMFFECTS_PAGE,
  },
  {
    id: "motions",
    name: "@gem-org/gemsitions",
    title: "Gemsitions",
    detailTo: import.meta.env.VITE_GEMSITIONS_PAGE,
  },
] as const;

function DetailLink({ to, children }: { to: string; children: ReactNode }) {
  const button = (
    <Button variant="secondary" size="sm">
      {children}
    </Button>
  );

  if (!to) return button;

  return /^https?:\/\//.test(to) ? (
    <a href={to} target="_blank" rel="noreferrer">
      {button}
    </a>
  ) : (
    <Link to={to}>{button}</Link>
  );
}

type HomePagePackagesProps = {
  id?: string;
};

export function HomePagePackages({ id }: HomePagePackagesProps) {
  const { t } = useTranslation("base");

  return (
    <section id={id} className="home-section">
      <SlideTransition isIn from="bottom" offset="1.25rem" duration={500}>
        <header className="home-section__header">
          <Typography variant="h2">{t("packages.title")}</Typography>
          <Typography variant="body" className="docs-page__meta">
            {t("packages.description")}
          </Typography>
        </header>
      </SlideTransition>

      <StaggerGroup
        isIn
        from="bottom"
        staggerDelay={90}
        distance={16}
        className="home-product-grid"
      >
        {packages.map((pkg) => (
          <BorderBeam
            key={pkg.id}
            trigger="hover"
            variant="orbit"
            thickness={1.5}
            className="home-product-card"
          >
            <article className="home-product-card__inner">
              <Typography variant="caption" className="docs-page__meta">
                {pkg.name}
              </Typography>
              <Typography variant="h3">{pkg.title}</Typography>
              <Typography variant="body">{t(`packages.${pkg.id}.description`)}</Typography>
              <div className="home-product-card__footer">
                <DetailLink to={pkg.detailTo}>{t(`packages.${pkg.id}.detail`)}</DetailLink>
              </div>
            </article>
          </BorderBeam>
        ))}
      </StaggerGroup>
    </section>
  );
}
