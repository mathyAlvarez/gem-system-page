import { Typography } from "@gem-org/gem-system";
import { easing } from "@gem-org/gemffects/tokens";
import { useTranslation } from "react-i18next";
import { ApiTable } from "../../../../components/ApiTable.tsx";
import { CodeBlock, DocsPageHeader, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { propText } from "../../../../components/PropText.tsx";
import { easingOrder } from "./easingTokens.ts";
import "./EasingPage.scss";

const cssCode = `.popover {
  transition:
    opacity var(--gemfx-duration-fast) var(--gemfx-easing-enter),
    transform var(--gemfx-duration-normal) var(--gemfx-easing-emphasized);
}

.ticker {
  animation: scroll 12s var(--gemfx-easing-linear) infinite;
}`;

export function EasingPage() {
  const { t } = useTranslation("easing");

  const tsCode = `import { duration, easing } from "@gem-org/gemffects/tokens";

// ${t("code.waapi")}
element.animate([{ opacity: 0 }, { opacity: 1 }], {
  duration: duration.normal,
  easing: easing.enter,
});`;

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { easing, type EasingToken } from "@gem-org/gemffects/tokens"'
      />

      <DocsSection title={t("scale.title")} description={t("scale.description")}>
        <ApiTable
          columns={[
            t("scale.columns.token"),
            t("scale.columns.value"),
            t("scale.columns.usage"),
            t("scale.columns.preview"),
          ]}
          rows={easingOrder.map((token) => ({
            id: token,
            cells: [
              <span key="token" className="docs-api-table__name">
                {token}
                <br />
                <code className="docs-api-table__muted">{`--gemfx-easing-${token}`}</code>
              </span>,
              <code key="value" className="docs-api-table__code">
                {easing[token]}
              </code>,
              <Typography key="usage" variant="body">
                {propText(t(`scale.usage.${token}`))}
              </Typography>,
              <span key="preview" className="easing-scale__track" aria-hidden>
                <span
                  className="easing-scale__dot"
                  style={{ animationTimingFunction: easing[token] }}
                />
              </span>,
            ],
          }))}
        />
        <Typography variant="body" className="docs-page__meta">
          {t("scale.reducedMotion")}
        </Typography>
      </DocsSection>

      <DocsSection title={t("usage.title")} description={t("usage.description")}>
        <CodeBlock code={cssCode} label="CSS" language="css" />
        <CodeBlock code={tsCode} label="TypeScript" />
      </DocsSection>
    </div>
  );
}
