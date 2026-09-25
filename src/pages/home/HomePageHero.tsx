import { Link } from "react-router-dom";
import { Button, Typography } from "@gem-org/gem-system";
import { ArrowDown } from "@gem-org/gem-system/icons";
import { BlurUnveil } from "@gem-org/gemffects";
import { useTranslation } from "react-i18next";

type HomePageHeroProps = {
  scrollTargetId: string;
};

export function HomePageHero({ scrollTargetId }: HomePageHeroProps) {
  const { t } = useTranslation("base");

  return (
    <section className="home-hero" aria-label={t("hero.ariaLabel")}>
      <img
        className="home-hero__banner"
        src="/gem-org-banner-base.jpeg"
        alt={t("hero.bannerAlt")}
      />
      <div className="home-hero__veil" />
      <div className="home-hero__content">
        <BlurUnveil variant="in" duration={800}>
          <div className="home-hero__copy">
            <Typography variant="body" className="home-hero__lead">
              {t("hero.lead")}
            </Typography>
            <div className="home-hero__actions">
              <Link to="/getting-started">
                <Button variant="primary" size="lg">
                  {t("hero.cta")}
                </Button>
              </Link>
              <Button
                variant="secondary"
                size="lg"
                rightIcon={<ArrowDown size="sm" />}
                onClick={() =>
                  document
                    .getElementById(scrollTargetId)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                {t("hero.more")}
              </Button>
            </div>
          </div>
        </BlurUnveil>
      </div>
    </section>
  );
}
