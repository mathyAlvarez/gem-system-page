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
import { StyleChangesSection } from "../../../../components/StyleChangesSection.tsx";
import { ContainerPlayground } from "./ContainerPlayground.tsx";
import { containerBreakpoints } from "./containerDocs.ts";
import { BaseContainer } from "./examples/BaseContainer.tsx";
import baseCode from "./examples/BaseContainer.tsx?raw";
import demoCss from "./examples/container-demo.css?raw";
import overridesCss from "./examples/container-overrides.css?raw";
import demoBoxCode from "./examples/ContainerDemoBox.tsx?raw";
import { ContainerSizes } from "./examples/ContainerSizes.tsx";
import sizesCode from "./examples/ContainerSizes.tsx?raw";
import { CustomMaxWidthContainer } from "./examples/CustomMaxWidthContainer.tsx";
import customMaxWidthCode from "./examples/CustomMaxWidthContainer.tsx?raw";
import { FluidContainer } from "./examples/FluidContainer.tsx";
import fluidCode from "./examples/FluidContainer.tsx?raw";
import { FlushContainer } from "./examples/FlushContainer.tsx";
import flushCode from "./examples/FlushContainer.tsx?raw";
import { LandmarkContainer } from "./examples/LandmarkContainer.tsx";
import landmarkCode from "./examples/LandmarkContainer.tsx?raw";
import { ResponsiveContainer } from "./examples/ResponsiveContainer.tsx";
import responsiveCode from "./examples/ResponsiveContainer.tsx?raw";
import { StyledContainers } from "./examples/StyledContainers.tsx";
import styledCode from "./examples/StyledContainers.tsx?raw";
import { TailwindContainer } from "./examples/TailwindContainer.tsx";
import tailwindCode from "./examples/TailwindContainer.tsx?raw";
import { VariantContainers } from "./examples/VariantContainer.tsx";
import variantCode from "./examples/VariantContainer.tsx?raw";
import "./ContainerPage.scss";

type StoryId = "base" | "sizes" | "customMaxWidth" | "fluid" | "flush" | "landmark" | "responsive";

type Story = {
  id: StoryId;
  file: string;
  code: string;
  preview: ReactNode;
  extra?: ReactNode;
};

export function ContainerPage() {
  const { t } = useTranslation("container");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseContainer.tsx",
      code: baseCode,
      preview: <BaseContainer {...t("stories.base.texts", { returnObjects: true })} />,
      extra: (
        <>
          <CodeBlock code={demoBoxCode} label="ContainerDemoBox.tsx" language="typescript" />
          <CodeBlock code={demoCss} label="container-demo.css" language="css" />
        </>
      ),
    },
    {
      id: "sizes",
      file: "ContainerSizes.tsx",
      code: sizesCode,
      preview: <ContainerSizes body={t("stories.sizes.body")} />,
    },
    {
      id: "customMaxWidth",
      file: "CustomMaxWidthContainer.tsx",
      code: customMaxWidthCode,
      preview: <CustomMaxWidthContainer body={t("stories.customMaxWidth.body")} />,
    },
    {
      id: "fluid",
      file: "FluidContainer.tsx",
      code: fluidCode,
      preview: <FluidContainer {...t("stories.fluid.texts", { returnObjects: true })} />,
    },
    {
      id: "flush",
      file: "FlushContainer.tsx",
      code: flushCode,
      preview: <FlushContainer {...t("stories.flush.texts", { returnObjects: true })} />,
    },
    {
      id: "landmark",
      file: "LandmarkContainer.tsx",
      code: landmarkCode,
      preview: <LandmarkContainer {...t("stories.landmark.texts", { returnObjects: true })} />,
    },
    {
      id: "responsive",
      file: "ResponsiveContainer.tsx",
      code: responsiveCode,
      preview: <ResponsiveContainer {...t("stories.responsive.texts", { returnObjects: true })} />,
      extra: (
        <ApiTable
          columns={[
            t("stories.responsive.columns.breakpoint"),
            t("stories.responsive.columns.minWidth"),
            t("stories.responsive.columns.token"),
            t("stories.responsive.columns.value"),
          ]}
          rows={containerBreakpoints.map((step) => ({
            id: step.id,
            cells: [
              <Typography key="breakpoint" variant="body">
                {t(`stories.responsive.breakpoints.${step.id}`)}
              </Typography>,
              <code key="min" className="docs-api-table__code">
                {step.minWidth}
              </code>,
              <code key="token" className="docs-api-table__name">
                {step.token}
              </code>,
              <code key="value" className="docs-api-table__muted">
                {step.value}
              </code>,
            ],
          }))}
        />
      ),
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Container } from "@gem-org/gem-system"'
      />

      <ContainerPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindContainer.tsx" stack>
            <TailwindContainer texts={t("styleChanges.tailwind", { returnObjects: true })} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantContainer.tsx" stack>
            <VariantContainers body={t("styleChanges.cva.body")} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="container-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledContainers.tsx" stack>
              <StyledContainers texts={t("styleChanges.css", { returnObjects: true })} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="Container"
        to="/system/layout/container/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
