import { Alert, Button, Typography } from "@gem-org/gem-system";
import { ArrowRight } from "@gem-org/gem-system/icons";
import { Trans, useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { DocsPageHeader, DocsSection } from "../../../components/DocsPrimitives.tsx";
import "./OverrideStylesPage.scss";

const guides = [
  { id: "tailwind", to: "/system/override-styles/tailwind" },
  { id: "cva", to: "/system/override-styles/cva" },
  { id: "cssVars", to: "/system/override-styles/css-variables" },
] as const;

const whenRows = ["layout", "override", "variants", "dynamic", "theme"] as const;

const rich = { strong: <strong /> };

export function OverrideStylesPage() {
  const { t } = useTranslation("overrideStyles");
  const navigate = useNavigate();

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("overview.header.title")}
        description={t("overview.header.description")}
      />

      <Alert status="info" title={t("overview.recommendation.title")}>
        <Trans t={t} i18nKey="overview.recommendation.body" components={rich} />
      </Alert>

      <DocsSection title={t("overview.guides.title")}>
        <div className="override-guides">
          {guides.map((guide, index) => (
            <article key={guide.id} className="override-guides__card">
              <span className="override-guides__step">{index + 1}</span>
              <Typography variant="h5">{t(`overview.guides.${guide.id}.title`)}</Typography>
              <Typography variant="body" className="docs-page__meta">
                {t(`overview.guides.${guide.id}.body`)}
              </Typography>
              <Button
                variant="link"
                rightIcon={<ArrowRight size="sm" />}
                onClick={() => navigate(guide.to)}
              >
                {t("overview.guides.open")}
              </Button>
            </article>
          ))}
        </div>
      </DocsSection>

      <DocsSection title={t("overview.when.title")}>
        <div className="override-table">
          <table>
            <thead>
              <tr>
                <th scope="col">{t("overview.when.need")}</th>
                <th scope="col">{t("overview.when.tool")}</th>
              </tr>
            </thead>
            <tbody>
              {whenRows.map((row) => (
                <tr key={row}>
                  <td>{t(`overview.when.rows.${row}`)}</td>
                  <td>
                    <code>{t(`overview.when.tools.${row}`)}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocsSection>
    </div>
  );
}
