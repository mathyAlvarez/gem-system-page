import type { CSSProperties } from "react";
import { Badge, Button, Typography } from "@gem-org/gem-system";
import { Trans, useTranslation } from "react-i18next";
import { CodeBlock, DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";

const brandPalette = {
  "--gem-palette-primary-50": "#f5f3ff",
  "--gem-palette-primary-100": "#ede9fe",
  "--gem-palette-primary-300": "#c4b5fd",
  "--gem-palette-primary-600": "#7c3aed",
  "--gem-palette-primary-700": "#6d28d9",
  "--gem-palette-primary-800": "#5b21b6",
};

const buttonOverrides = {
  "--gem-btn-bg": "#0f172a",
  "--gem-btn-border": "#0f172a",
  "--gem-btn-fg": "#ffffff",
  "--gem-btn-bg-hover": "#334155",
  "--gem-btn-border-hover": "#334155",
  "--gem-btn-fg-hover": "#ffffff",
};

function toDeclarations(vars: Record<string, string>) {
  return Object.entries(vars)
    .map(([name, value]) => `  ${name}: ${value};`)
    .join("\n");
}

const code = <code />;

export function ColorOverridesSection() {
  const { t } = useTranslation("tokens");

  const globalCode = `:root {
  /* ${t("overrides.global.codeComment")} */
${toDeclarations(brandPalette)}
}`;

  const scopedCode = `.checkout {
${toDeclarations(brandPalette)}
}`;

  const componentCode = `.danger-zone .gem-button {
${toDeclarations(buttonOverrides)}
}`;

  return (
    <DocsSection title={t("overrides.title")}>
      <Typography variant="body" className="docs-page__meta">
        <Trans t={t} i18nKey="overrides.description" components={{ code }} />
      </Typography>

      <div className="tokens-overrides">
        <div className="tokens-usage__panel">
          <Typography variant="h5">{t("overrides.global.title")}</Typography>
          <Typography variant="bodySm" className="docs-page__meta">
            <Trans t={t} i18nKey="overrides.global.description" components={{ code }} />
          </Typography>
          <CodeBlock code={globalCode} label="theme.css" language="css" />
        </div>

        <div className="tokens-usage__panel">
          <Typography variant="h5">{t("overrides.scoped.title")}</Typography>
          <Typography variant="bodySm" className="docs-page__meta">
            {t("overrides.scoped.description")}
          </Typography>
          <DemoBlock code={scopedCode} label="checkout.css" language="css">
            <div className="tokens-overrides__scope" style={brandPalette as CSSProperties}>
              <Button variant="primary">{t("overrides.scoped.button")}</Button>
              <Badge tone="primary">{t("overrides.scoped.badge")}</Badge>
            </div>
          </DemoBlock>
        </div>

        <div className="tokens-usage__panel">
          <Typography variant="h5">{t("overrides.component.title")}</Typography>
          <Typography variant="bodySm" className="docs-page__meta">
            {t("overrides.component.description")}
          </Typography>
          <DemoBlock code={componentCode} label="danger-zone.css" language="css">
            <Button variant="primary" style={buttonOverrides as CSSProperties}>
              {t("overrides.component.button")}
            </Button>
          </DemoBlock>
        </div>
      </div>
    </DocsSection>
  );
}
