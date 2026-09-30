import type { ReactNode } from "react";
import { Typography } from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { ApiLinkSection } from "../../../components/ApiLinkSection.tsx";
import { ApiTable } from "../../../components/ApiTable.tsx";
import { propText } from "../../../components/PropText.tsx";
import { CodeBlock, DemoBlock, DocsPageHeader, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { StyleChangesSection } from "../../../components/StyleChangesSection.tsx";
import { AspectRatioPlayground } from "./AspectRatioPlayground.tsx";
import { aspectNamedPresets } from "./aspectRatioDocs.ts";
import demoCss from "./examples/aspect-demo.css?raw";
import overridesCss from "./examples/aspect-ratio-overrides.css?raw";
import { BaseAspectRatio } from "./examples/BaseAspectRatio.tsx";
import baseCode from "./examples/BaseAspectRatio.tsx?raw";
import { CardAspectRatio } from "./examples/CardAspectRatio.tsx";
import cardCode from "./examples/CardAspectRatio.tsx?raw";
import { CustomAspectRatio } from "./examples/CustomAspectRatio.tsx";
import customCode from "./examples/CustomAspectRatio.tsx?raw";
import { EmbedAspectRatio } from "./examples/EmbedAspectRatio.tsx";
import embedCode from "./examples/EmbedAspectRatio.tsx?raw";
import { FigureAspectRatio } from "./examples/FigureAspectRatio.tsx";
import figureCode from "./examples/FigureAspectRatio.tsx?raw";
import { MaxWidthAspectRatio } from "./examples/MaxWidthAspectRatio.tsx";
import maxWidthCode from "./examples/MaxWidthAspectRatio.tsx?raw";
import { ObjectFitAspectRatio } from "./examples/ObjectFitAspectRatio.tsx";
import objectFitCode from "./examples/ObjectFitAspectRatio.tsx?raw";
import { ObjectPositionAspectRatio } from "./examples/ObjectPositionAspectRatio.tsx";
import objectPositionCode from "./examples/ObjectPositionAspectRatio.tsx?raw";
import { PlaceholderAspectRatio } from "./examples/PlaceholderAspectRatio.tsx";
import placeholderCode from "./examples/PlaceholderAspectRatio.tsx?raw";
import { PresetsAspectRatio } from "./examples/PresetsAspectRatio.tsx";
import presetsCode from "./examples/PresetsAspectRatio.tsx?raw";
import { RadiusAspectRatio } from "./examples/RadiusAspectRatio.tsx";
import radiusCode from "./examples/RadiusAspectRatio.tsx?raw";
import { StyledAspectRatios } from "./examples/StyledAspectRatios.tsx";
import styledCode from "./examples/StyledAspectRatios.tsx?raw";
import { TailwindAspectRatio } from "./examples/TailwindAspectRatio.tsx";
import tailwindCode from "./examples/TailwindAspectRatio.tsx?raw";
import { VariantAspectRatios } from "./examples/VariantAspectRatio.tsx";
import variantCode from "./examples/VariantAspectRatio.tsx?raw";
import "./AspectRatioPage.scss";

type StoryId =
  | "base"
  | "presets"
  | "card"
  | "custom"
  | "objectFit"
  | "objectPosition"
  | "placeholder"
  | "embed"
  | "radius"
  | "maxWidth"
  | "figure";

type Story = {
  id: StoryId;
  file: string;
  code: string;
  preview: ReactNode;
  extra?: ReactNode;
};

export function AspectRatioPage() {
  const { t } = useTranslation("aspectRatio");
  const banner = t("alt.banner");
  const mark = t("alt.mark");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseAspectRatio.tsx",
      code: baseCode,
      preview: <BaseAspectRatio alt={banner} />,
      extra: <CodeBlock code={demoCss} label="aspect-demo.css" language="css" />,
    },
    {
      id: "presets",
      file: "PresetsAspectRatio.tsx",
      code: presetsCode,
      preview: <PresetsAspectRatio alt={banner} />,
      extra: (
        <ApiTable
          columns={[t("presets.columns.name"), t("presets.columns.ratio"), t("presets.columns.usage")]}
          rows={aspectNamedPresets.map((preset) => ({
            id: preset.name,
            cells: [
              <code key="name" className="docs-api-table__name">{`"${preset.name}"`}</code>,
              <code key="ratio" className="docs-api-table__code">{preset.ratio}</code>,
              <Typography key="usage" variant="body">
                {propText(t(`presets.items.${preset.name}`))}
              </Typography>,
            ],
          }))}
        />
      ),
    },
    { id: "card", file: "CardAspectRatio.tsx", code: cardCode, preview: <CardAspectRatio alt={mark} /> },
    {
      id: "custom",
      file: "CustomAspectRatio.tsx",
      code: customCode,
      preview: <CustomAspectRatio {...t("stories.custom.texts", { returnObjects: true })} alt={banner} />,
    },
    {
      id: "objectFit",
      file: "ObjectFitAspectRatio.tsx",
      code: objectFitCode,
      preview: <ObjectFitAspectRatio alt={banner} />,
    },
    {
      id: "objectPosition",
      file: "ObjectPositionAspectRatio.tsx",
      code: objectPositionCode,
      preview: <ObjectPositionAspectRatio alt={banner} />,
    },
    {
      id: "placeholder",
      file: "PlaceholderAspectRatio.tsx",
      code: placeholderCode,
      preview: <PlaceholderAspectRatio {...t("stories.placeholder.texts", { returnObjects: true })} alt={banner} />,
    },
    {
      id: "embed",
      file: "EmbedAspectRatio.tsx",
      code: embedCode,
      preview: <EmbedAspectRatio {...t("stories.embed.texts", { returnObjects: true })} />,
    },
    { id: "radius", file: "RadiusAspectRatio.tsx", code: radiusCode, preview: <RadiusAspectRatio alt={mark} /> },
    {
      id: "maxWidth",
      file: "MaxWidthAspectRatio.tsx",
      code: maxWidthCode,
      preview: <MaxWidthAspectRatio alt={banner} />,
    },
    {
      id: "figure",
      file: "FigureAspectRatio.tsx",
      code: figureCode,
      preview: <FigureAspectRatio alt={banner} caption={t("stories.figure.caption")} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { AspectRatio } from "@gem-org/gem-system"'
      />

      <AspectRatioPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindAspectRatio.tsx" stack>
            <TailwindAspectRatio alt={banner} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantAspectRatio.tsx" stack>
            <VariantAspectRatios alt={banner} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="aspect-ratio-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledAspectRatios.tsx" stack>
              <StyledAspectRatios alt={banner} title={t("styled.title")} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="AspectRatio" to="/layout/aspect-ratio/api" linkLabel={t("apiLink")} />
    </div>
  );
}
