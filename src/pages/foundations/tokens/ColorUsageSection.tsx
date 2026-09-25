import { Alert, Badge, Button, Typography } from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";

const buttonVariants = ["primary", "secondary", "success", "danger"] as const;
const badgeTones = ["primary", "success", "warning", "error", "info"] as const;
const alertStatuses = ["info", "success", "warning", "error"] as const;

export function ColorUsageSection() {
  const { t } = useTranslation("tokens");

  const actionsCode = `import { Button } from "@gem-org/gem-system";

export function ColorActions() {
  return (
    <>
${buttonVariants
  .map(
    (variant) =>
      `      <Button variant="${variant}">{${JSON.stringify(t(`usage.actions.labels.${variant}`))}}</Button>`,
  )
  .join("\n")}
    </>
  );
}`;

  const statusCode = `import { Badge } from "@gem-org/gem-system";

export function ColorStatus() {
  return (
    <>
${badgeTones
  .map(
    (tone) =>
      `      <Badge tone="${tone}">{${JSON.stringify(t(`usage.status.labels.${tone}`))}}</Badge>`,
  )
  .join("\n")}
    </>
  );
}`;

  const feedbackCode = `import { Alert } from "@gem-org/gem-system";

export function ColorFeedback() {
  return (
    <>
${alertStatuses
  .map(
    (status) =>
      `      <Alert status="${status}" title={${JSON.stringify(t(`usage.feedback.alerts.${status}.title`))}}>
        {${JSON.stringify(t(`usage.feedback.alerts.${status}.body`))}}
      </Alert>`,
  )
  .join("\n")}
    </>
  );
}`;

  return (
    <>
      <DocsSection title={t("usage.title")} description={t("usage.description")}>
        <div className="tokens-usage">
          <div className="tokens-usage__panel">
            <Typography variant="h5">{t("usage.actions.title")}</Typography>
            <Typography variant="bodySm" className="docs-page__meta">
              {t("usage.actions.description")}
            </Typography>
            <DemoBlock code={actionsCode} label="ColorActions.tsx">
              {buttonVariants.map((variant) => (
                <Button key={variant} variant={variant}>
                  {t(`usage.actions.labels.${variant}`)}
                </Button>
              ))}
            </DemoBlock>
          </div>

          <div className="tokens-usage__panel">
            <Typography variant="h5">{t("usage.status.title")}</Typography>
            <Typography variant="bodySm" className="docs-page__meta">
              {t("usage.status.description")}
            </Typography>
            <DemoBlock code={statusCode} label="ColorStatus.tsx">
              {badgeTones.map((tone) => (
                <Badge key={tone} tone={tone}>
                  {t(`usage.status.labels.${tone}`)}
                </Badge>
              ))}
            </DemoBlock>
          </div>
        </div>
      </DocsSection>

      <DocsSection
        title={t("usage.feedback.title")}
        description={t("usage.feedback.description")}
      >
        <DemoBlock code={feedbackCode} label="ColorFeedback.tsx">
          <div className="tokens-usage__alerts">
            {alertStatuses.map((status) => (
              <Alert
                key={status}
                status={status}
                title={t(`usage.feedback.alerts.${status}.title`)}
              >
                {t(`usage.feedback.alerts.${status}.body`)}
              </Alert>
            ))}
          </div>
        </DemoBlock>
      </DocsSection>
    </>
  );
}
