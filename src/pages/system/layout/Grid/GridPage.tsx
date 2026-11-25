import type { ReactNode } from "react";
import { Typography } from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { ApiLinkSection } from "../../../../components/ApiLinkSection.tsx";
import { ApiTable } from "../../../../components/ApiTable.tsx";
import {
  CodeBlock,
  DemoBlock,
  DocsPageHeader,
  DocsSection,
} from "../../../../components/DocsPrimitives.tsx";
import { propText } from "../../../../components/PropText.tsx";
import { StyleChangesSection } from "../../../../components/StyleChangesSection.tsx";
import { GridPlayground } from "./GridPlayground.tsx";
import { gridBreakpoints } from "./gridDocs.ts";
import { AlignGrid } from "./examples/AlignGrid.tsx";
import alignCode from "./examples/AlignGrid.tsx?raw";
import { AutoGrid } from "./examples/AutoGrid.tsx";
import autoCode from "./examples/AutoGrid.tsx?raw";
import { BaseGrid } from "./examples/BaseGrid.tsx";
import baseCode from "./examples/BaseGrid.tsx?raw";
import { GapGrid } from "./examples/GapGrid.tsx";
import gapCode from "./examples/GapGrid.tsx?raw";
import demoCss from "./examples/grid-demo.css?raw";
import overridesCss from "./examples/grid-overrides.css?raw";
import cellCode from "./examples/GridCell.tsx?raw";
import { NestedGrid } from "./examples/NestedGrid.tsx";
import nestedCode from "./examples/NestedGrid.tsx?raw";
import { OffsetGrid } from "./examples/OffsetGrid.tsx";
import offsetCode from "./examples/OffsetGrid.tsx?raw";
import { PageLayoutGrid } from "./examples/PageLayoutGrid.tsx";
import pageLayoutCode from "./examples/PageLayoutGrid.tsx?raw";
import { ResponsiveGrid } from "./examples/ResponsiveGrid.tsx";
import responsiveCode from "./examples/ResponsiveGrid.tsx?raw";
import { RowColGrid } from "./examples/RowColGrid.tsx";
import rowColCode from "./examples/RowColGrid.tsx?raw";
import { StackGrid } from "./examples/StackGrid.tsx";
import stackCode from "./examples/StackGrid.tsx?raw";
import { StyledGrids } from "./examples/StyledGrids.tsx";
import styledCode from "./examples/StyledGrids.tsx?raw";
import { TailwindGrid } from "./examples/TailwindGrid.tsx";
import tailwindCode from "./examples/TailwindGrid.tsx?raw";
import { TemplateGrid } from "./examples/TemplateGrid.tsx";
import templateCode from "./examples/TemplateGrid.tsx?raw";
import { VariantGrids } from "./examples/VariantGrid.tsx";
import variantCode from "./examples/VariantGrid.tsx?raw";
import "./GridPage.scss";

type StoryId =
  | "base"
  | "stack"
  | "rowCol"
  | "responsive"
  | "gap"
  | "auto"
  | "template"
  | "offset"
  | "align"
  | "nested"
  | "pageLayout";

type Story = {
  id: StoryId;
  file: string;
  code: string;
  preview: ReactNode;
  extra?: ReactNode;
};

const trackModes = [
  { id: "columns", prop: "columns={3}", css: "repeat(3, minmax(0, 1fr))" },
  { id: "template", prop: 'template="16rem 1fr"', css: "16rem 1fr" },
  { id: "auto", prop: 'auto="fit"', css: "repeat(auto-fit, minmax(min(100%, 16rem), 1fr))" },
] as const;

export function GridPage() {
  const { t } = useTranslation("grid");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseGrid.tsx",
      code: baseCode,
      preview: <BaseGrid />,
      extra: (
        <>
          <CodeBlock code={cellCode} label="GridCell.tsx" language="typescript" />
          <CodeBlock code={demoCss} label="grid-demo.css" language="css" />
        </>
      ),
    },
    { id: "stack", file: "StackGrid.tsx", code: stackCode, preview: <StackGrid /> },
    { id: "rowCol", file: "RowColGrid.tsx", code: rowColCode, preview: <RowColGrid /> },
    {
      id: "responsive",
      file: "ResponsiveGrid.tsx",
      code: responsiveCode,
      preview: <ResponsiveGrid />,
      extra: (
        <ApiTable
          columns={[
            t("stories.responsive.columns.breakpoint"),
            t("stories.responsive.columns.minWidth"),
            t("stories.responsive.columns.span"),
            t("stories.responsive.columns.offset"),
          ]}
          rows={gridBreakpoints.map((step) => ({
            id: step.id,
            cells: [
              <Typography key="breakpoint" variant="body">
                {t(`stories.responsive.breakpoints.${step.id}`)}
              </Typography>,
              <code key="min" className="docs-api-table__code">
                {step.minWidth}
              </code>,
              <code key="span" className="docs-api-table__name">
                {step.prop}
              </code>,
              <code key="offset" className="docs-api-table__muted">
                {step.id === "base"
                  ? "offset"
                  : `offset${step.id[0].toUpperCase()}${step.id.slice(1)}`}
              </code>,
            ],
          }))}
        />
      ),
    },
    { id: "gap", file: "GapGrid.tsx", code: gapCode, preview: <GapGrid /> },
    { id: "auto", file: "AutoGrid.tsx", code: autoCode, preview: <AutoGrid /> },
    {
      id: "template",
      file: "TemplateGrid.tsx",
      code: templateCode,
      preview: <TemplateGrid {...t("stories.template.texts", { returnObjects: true })} />,
    },
    { id: "offset", file: "OffsetGrid.tsx", code: offsetCode, preview: <OffsetGrid /> },
    { id: "align", file: "AlignGrid.tsx", code: alignCode, preview: <AlignGrid /> },
    { id: "nested", file: "NestedGrid.tsx", code: nestedCode, preview: <NestedGrid /> },
    {
      id: "pageLayout",
      file: "PageLayoutGrid.tsx",
      code: pageLayoutCode,
      preview: <PageLayoutGrid texts={t("stories.pageLayout.texts", { returnObjects: true })} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Col, Grid, Row } from "@gem-org/gem-system"'
      />

      <GridPlayground />

      <DocsSection title={t("tracks.title")} description={t("tracks.description")}>
        <ApiTable
          columns={[
            t("tracks.columns.mode"),
            t("tracks.columns.example"),
            t("tracks.columns.result"),
            t("tracks.columns.use"),
          ]}
          rows={trackModes.map((mode) => ({
            id: mode.id,
            cells: [
              <code key="mode" className="docs-api-table__name">
                {mode.id}
              </code>,
              <code key="prop" className="docs-api-table__code">
                {mode.prop}
              </code>,
              <code key="css" className="docs-api-table__muted">
                {mode.css}
              </code>,
              <Typography key="use" variant="body">
                {propText(t(`tracks.items.${mode.id}`))}
              </Typography>,
            ],
          }))}
        />
      </DocsSection>

      {stories.map((story) => (
        <DocsSection
          key={story.id}
          title={t(`stories.${story.id}.title`)}
          description={t(`stories.${story.id}.description`)}
        >
          {story.extra}
          <DemoBlock code={story.code} label={story.file} stack>
            {story.preview}
          </DemoBlock>
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindGrid.tsx" stack>
            <TailwindGrid />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantGrid.tsx" stack>
            <VariantGrids />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="grid-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledGrids.tsx" stack>
              <StyledGrids texts={t("styleChanges.css", { returnObjects: true })} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="Grid" to="/system/layout/grid/api" linkLabel={t("apiLink")} />
    </div>
  );
}
