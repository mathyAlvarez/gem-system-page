import type { CSSProperties } from "react";
import { Typography } from "@gem-org/gem-system";
import {
  breakpoints,
  container,
  grid,
  space,
  spacePx,
} from "@gem-org/gem-system/tokens";
import { Trans, useTranslation } from "react-i18next";
import {
  CodeBlock,
  DocsPageHeader,
  DocsSection,
} from "../../../components/DocsPrimitives.tsx";
import { ColumnLayouts } from "./ColumnLayouts.tsx";
import { GridDemo } from "./GridDemo.tsx";
import { spaceOrder } from "./spacingTokens.ts";
import "./SpacingPage.scss";

type ContainerToken = keyof typeof container;
type BreakpointToken = keyof typeof breakpoints;

const containerEntries = Object.entries(container) as [ContainerToken, string][];
const breakpointEntries = Object.entries(breakpoints) as [BreakpointToken, string][];
const largestContainer = Math.max(...containerEntries.map(([, value]) => Number.parseFloat(value)));

const cssCode = `.card {
  padding: var(--gem-space-4);
  gap: var(--gem-space-2);
}

.layout {
  display: grid;
  grid-template-columns: repeat(var(--gem-grid-columns), 1fr);
  gap: var(--gem-grid-gutter);
}`;

const rich = { strong: <strong />, code: <code /> };

export function SpacingPage() {
  const { t } = useTranslation("spacing");

  const tsCode = `import { grid, space } from "@gem-org/gem-system/tokens";

const card = {
  padding: space[4],      // 16px
  gap: space[2],          // 8px
  marginBottom: space[6], // 24px
};

// ${t("code.gridTokens")}
grid.columns; // ${grid.columns}
grid.gutter;  // ${grid.gutter}`;

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { space, spacePx, grid, container, breakpoints } from "@gem-org/gem-system/tokens"'
      />

      <Typography variant="body" className="docs-page__meta">
        <Trans t={t} i18nKey="intro" components={rich} />
      </Typography>

      <DocsSection title={t("scale.title")} description="space / --gem-space-*">
        <div className="spacing-scale">
          {spaceOrder.map((token) => (
            <div key={token} className="spacing-scale__row">
              <div className="spacing-scale__meta">
                <Typography variant="label">{token}</Typography>
                <code className="spacing-scale__value">
                  {space[token]} · {spacePx[token]}px
                </code>
              </div>
              <div className="spacing-scale__track">
                <div
                  className="spacing-scale__bar"
                  style={{ "--spacing-bar-size": space[token] } as CSSProperties}
                />
              </div>
            </div>
          ))}
        </div>
      </DocsSection>

      <GridDemo />

      <DocsSection title={t("containers.title")} description={t("containers.description")}>
        <div className="spacing-containers">
          {containerEntries.map(([name, value]) => (
            <div key={name} className="spacing-containers__row">
              <div className="spacing-containers__meta">
                <Typography variant="label">{name}</Typography>
                <code className="spacing-containers__value">{value}</code>
              </div>
              <div className="spacing-containers__track">
                <div
                  className="spacing-containers__box"
                  style={{ width: `${(Number.parseFloat(value) / largestContainer) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </DocsSection>

      <DocsSection title={t("breakpoints.title")} description="breakpoints">
        <div className="spacing-breakpoints">
          {breakpointEntries.map(([name, value]) => (
            <div key={name} className="spacing-breakpoints__chip">
              <Typography variant="label">{name}</Typography>
              <code className="spacing-breakpoints__value">{value}</code>
            </div>
          ))}
        </div>
      </DocsSection>

      <DocsSection title={t("applied.title")} description={t("applied.description")}>
        <div className="spacing-code-grid">
          <CodeBlock code={tsCode} label="TypeScript" />
          <CodeBlock code={cssCode} label="CSS" language="css" />
        </div>
      </DocsSection>

      <ColumnLayouts />
    </div>
  );
}
