import { Grid, Typography } from "@gem-org/gem-system";
import { Trans, useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { cellStyle, columnLayouts } from "./spacingTokens.ts";

const rich = { strong: <strong />, code: <code /> };

export function ColumnLayouts() {
  const { t } = useTranslation("spacing");

  return (
    <DocsSection title={t("columns.title")}>
      <Typography variant="body" className="docs-page__meta">
        <Trans t={t} i18nKey="columns.description" components={rich} />
      </Typography>

      {columnLayouts.map((layout) => {
        const code = `import { Grid } from "@gem-org/gem-system";

export function Columns${layout.cols}() {
  return (
    <Grid columns={${layout.cols}} gap={4}>
${layout.cells
  .map((_, index) => `      <div>{${JSON.stringify(`Col ${index + 1}/${layout.cols}`)}}</div>`)
  .join("\n")}
    </Grid>
  );
}`;

        return (
          <div key={layout.cols} className="spacing-columns">
            <div className="spacing-columns__header">
              <Typography variant="h5">
                {t("columns.layoutTitle", { count: layout.cols })}
              </Typography>
              <code className="spacing-columns__meta">
                {`<Grid columns={${layout.cols}} />`} · {t("columns.stacks")}
              </code>
            </div>
            <DemoBlock stack code={code} label={`Columns${layout.cols}.tsx`}>
              <div className="spacing-grid-frame">
                <Grid columns={layout.cols} gap={4}>
                  {layout.cells.map((cell, index) => (
                    <div key={index} className="spacing-cell" style={cellStyle(cell)}>
                      Col {index + 1}/{layout.cols}
                    </div>
                  ))}
                </Grid>
              </div>
            </DemoBlock>
          </div>
        );
      })}
    </DocsSection>
  );
}
