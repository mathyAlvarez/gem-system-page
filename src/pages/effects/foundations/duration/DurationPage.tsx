import { Typography } from "@gem-org/gem-system";
import { durationCss } from "@gem-org/gemffects/tokens";
import { useTranslation } from "react-i18next";
import { ApiTable } from "../../../../components/ApiTable.tsx";
import { CodeBlock, DocsPageHeader, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { durationOrder } from "./durationTokens.ts";
import "./DurationPage.scss";

const cssCode = `.toast {
  transition: opacity var(--gemfx-duration-fast) var(--gemfx-easing-exit);
}

.drawer {
  transition: transform var(--gemfx-duration-moderate) var(--gemfx-easing-emphasized);
}`;

export function DurationPage() {
  const { t } = useTranslation("duration");

  const tsCode = `import { Glow } from "@gem-org/gemffects";
import { duration, durationCss } from "@gem-org/gemffects/tokens";

// ${t("code.props")}
<Glow duration={duration.slower}>…</Glow>

// ${t("code.css")}
element.style.transitionDuration = durationCss.normal; // "300ms"`;

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { duration, durationCss, type DurationToken } from "@gem-org/gemffects/tokens"'
      />

      <DocsSection title={t("scale.title")} description={t("scale.description")}>
        <ApiTable
          columns={[
            t("scale.columns.token"),
            t("scale.columns.value"),
            t("scale.columns.variable"),
            t("scale.columns.preview"),
          ]}
          rows={durationOrder.map((token) => ({
            id: token,
            cells: [
              <code key="token" className="docs-api-table__name">
                {token}
              </code>,
              <code key="value" className="docs-api-table__code">
                {durationCss[token]}
              </code>,
              <code
                key="variable"
                className="docs-api-table__muted"
              >{`--gemfx-duration-${token}`}</code>,
              <span key="preview" className="duration-scale__track" aria-hidden>
                <span
                  className="duration-scale__bar"
                  style={{ animationDuration: durationCss[token] }}
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
