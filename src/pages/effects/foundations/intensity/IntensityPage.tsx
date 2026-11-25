import { Typography } from "@gem-org/gem-system";
import {
  intensity,
  intensityCss,
  intensityCssValue,
  intensitySamples,
  mixIntensity,
} from "@gem-org/gemffects/tokens";
import { useTranslation } from "react-i18next";
import { ApiTable } from "../../../../components/ApiTable.tsx";
import { CodeBlock, DocsPageHeader, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { propText } from "../../../../components/PropText.tsx";
import { IntensitySwatch } from "./IntensitySwatch.tsx";
import { IntensityTester } from "./IntensityTester.tsx";
import { blurMap, intensityHelpers, intensityOrder } from "./intensityTokens.ts";
import "./IntensityPage.scss";

const cssCode = `.badge-glow {
  background: color-mix(in srgb, var(--gem-color-accent) var(--gemfx-intensity-md), transparent);
}`;

export function IntensityPage() {
  const { t } = useTranslation("intensity");

  const tsCode = `import { Glow } from "@gem-org/gemffects";
import { mixIntensity } from "@gem-org/gemffects/tokens";

// ${t("code.token")}
<Glow intensity="lg">…</Glow>

// ${t("code.unit")}
<Glow intensity={0.7}>…</Glow>

// ${t("code.mix")}
const blur = mixIntensity({ sm: ${blurMap.sm}, md: ${blurMap.md}, lg: ${blurMap.lg} }, 0.7); // ${Number(mixIntensity(blurMap, 0.7).toFixed(2))}`;

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { intensity, intensityCss, mixIntensity, type IntensityInput } from "@gem-org/gemffects/tokens"'
      />

      <DocsSection title={t("scale.title")} description={t("scale.description")}>
        <div className="intensity-swatches">
          {intensityOrder.map((token) => (
            <IntensitySwatch
              key={token}
              mix={intensityCss[token]}
              label={token}
              value={`${intensity[token]} · --gemfx-intensity-${token}`}
            />
          ))}
        </div>
      </DocsSection>

      <DocsSection title={t("custom.title")} description={t("custom.description")}>
        <div className="intensity-swatches">
          {intensitySamples.map((unit) => (
            <IntensitySwatch
              key={unit}
              mix={intensityCssValue(unit)}
              label={String(unit)}
              value={intensityCssValue(unit)}
            />
          ))}
        </div>
        <DocsSection sub title={t("tester.title")} description={t("tester.description")}>
          <IntensityTester />
        </DocsSection>
      </DocsSection>

      <DocsSection title={t("helpers.title")} description={t("helpers.description")}>
        <ApiTable
          columns={[
            t("helpers.columns.name"),
            t("helpers.columns.signature"),
            t("helpers.columns.description"),
          ]}
          rows={intensityHelpers.map((item) => ({
            id: item.name,
            cells: [
              <code key="name" className="docs-api-table__name">
                {item.name}
              </code>,
              <code key="signature" className="docs-api-table__code">
                {item.signature}
              </code>,
              <Typography key="description" variant="body">
                {propText(t(`helpers.items.${item.name}`))}
              </Typography>,
            ],
          }))}
        />
      </DocsSection>

      <DocsSection title={t("usage.title")} description={t("usage.description")}>
        <CodeBlock code={cssCode} label="CSS" language="css" />
        <CodeBlock code={tsCode} label="TypeScript" />
      </DocsSection>
    </div>
  );
}
