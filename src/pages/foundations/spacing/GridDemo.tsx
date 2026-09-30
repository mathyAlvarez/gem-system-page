import { Col, Grid, Typography } from "@gem-org/gem-system";
import { grid } from "@gem-org/gem-system/tokens";
import { Trans, useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { cellStyle, gridCells } from "./spacingTokens.ts";

const code = `import { Col, Grid } from "@gem-org/gem-system";

export function GridDemo() {
  return (
    <Grid columns={12} gap={4}>
${gridCells
  .map((cell) => `      <Col span={12} md={${cell.span}}>{${cell.span}}</Col>`)
  .join("\n")}
    </Grid>
  );
}`;

const rich = { strong: <strong />, code: <code /> };

export function GridDemo() {
  const { t } = useTranslation("spacing");

  return (
    <DocsSection
      title={t("grid.title")}
      description={t("grid.meta", {
        columns: grid.columns,
        gap: grid.gutter,
        gapLg: grid.gutterLg,
      })}
    >
      <Typography variant="body" className="docs-page__meta">
        <Trans t={t} i18nKey="grid.description" components={rich} />
      </Typography>
      <DemoBlock stack code={code} label="GridDemo.tsx">
        <div className="spacing-grid-frame">
          <Grid columns={12} gap={4}>
            {gridCells.map((cell, index) => (
              <Col
                key={`${cell.span}-${index}`}
                span={12}
                md={cell.span}
                className="spacing-cell"
                style={cellStyle(cell)}
              >
                {cell.span}
              </Col>
            ))}
          </Grid>
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
