import { Typography } from "@gem-org/gem-system";
import { elevation, zIndex } from "@gem-org/gem-system/tokens";
import { Trans, useTranslation } from "react-i18next";
import { CodeBlock, DocsPageHeader, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { ElevationPlayground } from "./ElevationPlayground.tsx";
import {
  elevationOrder,
  elevationShadowToken,
  elevationZIndexToken,
  shadowOrder,
  zIndexOrder,
} from "./shadowTokens.ts";
import "./ShadowsPage.scss";

const stackLayers = [
  { id: "overlay", shadow: null },
  { id: "modal", shadow: "xl" },
  { id: "toast", shadow: "lg" },
  { id: "tooltip", shadow: "md" },
] as const;

const cssCode = `.dialog {
  box-shadow: var(--gem-shadow-xl);
  z-index: var(--gem-z-modal);
}

.toast {
  box-shadow: var(--gem-shadow-lg);
  z-index: var(--gem-z-toast);
}`;

const elevationCode = elevationOrder
  .map(
    (token) => `.elevation-${token} {
  box-shadow: var(--gem-shadow-${elevationShadowToken(token)});
  z-index: var(--gem-z-${elevationZIndexToken(token)});
}`,
  )
  .join("\n\n");

const rich = { strong: <strong />, code: <code /> };

export function ShadowsPage() {
  const { t } = useTranslation("shadows");

  const tsCode = `import { elevation, shadow, zIndex } from "@gem-org/gem-system/tokens";

const card = elevation.card;
// { shadow: shadow.sm, zIndex: 1 }

<div
  style={{
    boxShadow: shadow.lg,
    zIndex: zIndex.popover,
  }}
/>`;

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { elevation, shadow, zIndex } from "@gem-org/gem-system/tokens"'
      />

      <Typography variant="body" className="docs-page__meta">
        <Trans t={t} i18nKey="intro" components={rich} />
      </Typography>

      <DocsSection title={t("scale.title")} description="shadow / --gem-shadow-*">
        <div className="shadows-grid">
          {shadowOrder.map((token) => (
            <div key={token} className="shadows-card">
              <div
                className={`shadows-card__surface shadows-card__surface--${token}`}
                style={{ boxShadow: `var(--gem-shadow-${token})` }}
              >
                {token}
              </div>
              <div className="shadows-card__meta">
                <Typography variant="label">{token}</Typography>
                <code className="shadows-card__value">--gem-shadow-{token}</code>
              </div>
            </div>
          ))}
        </div>
      </DocsSection>

      <DocsSection title={t("zIndex.title")} description={t("zIndex.description")}>
        <div className="shadows-z">
          {zIndexOrder.map((token) => (
            <div key={token} className="shadows-z__row">
              <Typography variant="label">{token}</Typography>
              <code className="shadows-z__value">{zIndex[token]}</code>
              <div className="shadows-z__track">
                <div
                  className="shadows-z__bar"
                  style={{ width: `${Math.max(4, (zIndex[token] / zIndex.max) * 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </DocsSection>

      <DocsSection title={t("elevation.title")} description={t("elevation.description")}>
        <div className="shadows-elevation">
          {elevationOrder.map((token) => {
            const step = elevationShadowToken(token);
            return (
              <div key={token} className="shadows-elevation__row">
                <div className="shadows-elevation__meta">
                  <Typography variant="label">{token}</Typography>
                  <code className="shadows-elevation__value">
                    shadow.{step} · z {elevation[token].zIndex}
                  </code>
                </div>
                <div
                  className="shadows-elevation__preview"
                  style={{ boxShadow: `var(--gem-shadow-${step})` }}
                >
                  elevation.{token}
                </div>
              </div>
            );
          })}
        </div>
        <CodeBlock code={elevationCode} label="elevation.css" language="css" />
      </DocsSection>

      <DocsSection title={t("stacking.title")}>
        <Typography variant="body" className="docs-page__meta">
          <Trans t={t} i18nKey="stacking.description" components={rich} />
        </Typography>
        <div className="shadows-stack">
          {stackLayers.map((layer) => (
            <div
              key={layer.id}
              className={[
                "shadows-stack__layer",
                `shadows-stack__layer--${layer.id}`,
                `gem-z-${layer.id}`,
                layer.shadow ? `gem-shadow-${layer.shadow}` : "",
              ].join(" ")}
            >
              {t(`stacking.layers.${layer.id}`)}
              <span className="shadows-stack__z">z {zIndex[layer.id]}</span>
            </div>
          ))}
        </div>
      </DocsSection>

      <DocsSection title={t("applied.title")} description={t("applied.description")}>
        <div className="shadows-code-grid">
          <CodeBlock code={cssCode} label="CSS" language="css" />
          <CodeBlock code={tsCode} label="TypeScript" />
        </div>
      </DocsSection>

      <ElevationPlayground />
    </div>
  );
}
