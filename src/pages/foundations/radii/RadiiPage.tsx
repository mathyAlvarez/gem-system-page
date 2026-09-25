import { Typography } from "@gem-org/gem-system";
import { radius } from "@gem-org/gem-system/tokens";
import { Trans, useTranslation } from "react-i18next";
import {
  CodeBlock,
  DocsPageHeader,
  DocsSection,
} from "../../../components/DocsPrimitives.tsx";
import { RadiusPlayground } from "./RadiusPlayground.tsx";
import { radiusOrder, radiusValueLabel } from "./radiusTokens.ts";
import "./RadiiPage.scss";

const cssCode = `.card {
  border-radius: var(--gem-radius-lg);
}

.avatar,
.badge {
  border-radius: var(--gem-radius-full);
}`;

export function RadiiPage() {
  const { t } = useTranslation("radii");

  const tsCode = `import { radius } from "@gem-org/gem-system/tokens";

<div style={{ borderRadius: radius.md }} />

// ${t("code.utilities")}
// .gem-radius-sm | md | lg | full`;

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { radius, radiusPx } from "@gem-org/gem-system/tokens"'
      />

      <Typography variant="body" className="docs-page__meta">
        <Trans
          t={t}
          i18nKey="intro"
          components={{ strong: <strong />, code: <code /> }}
        />
      </Typography>

      <DocsSection title={t("scale.title")} description={t("scale.description")}>
        <div className="radii-grid">
          {radiusOrder.map((token) => (
            <div key={token} className="radii-card">
              <div className="radii-card__swatch" style={{ borderRadius: radius[token] }}>
                {token}
              </div>
              <div className="radii-card__meta">
                <Typography variant="label">{token}</Typography>
                <code className="radii-card__value">{radiusValueLabel(token)}</code>
              </div>
            </div>
          ))}
        </div>
      </DocsSection>

      <DocsSection title={t("applied.title")} description={t("applied.description")}>
        <div className="radii-code-grid">
          <CodeBlock code={cssCode} label="CSS" language="css" />
          <CodeBlock code={tsCode} label="TypeScript" />
        </div>
      </DocsSection>

      <RadiusPlayground />
    </div>
  );
}
