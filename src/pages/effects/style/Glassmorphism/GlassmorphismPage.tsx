import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { ApiLinkSection } from "../../../../components/ApiLinkSection.tsx";
import {
  CodeBlock,
  DemoBlock,
  DocsPageHeader,
  DocsSection,
} from "../../../../components/DocsPrimitives.tsx";
import { StyleChangesSection } from "../../../../components/StyleChangesSection.tsx";
import { GlassmorphismPlayground } from "./GlassmorphismPlayground.tsx";
import { AsChildGlassmorphism } from "./examples/AsChildGlassmorphism.tsx";
import asChildCode from "./examples/AsChildGlassmorphism.tsx?raw";
import { BlurGlassmorphism } from "./examples/BlurGlassmorphism.tsx";
import blurCode from "./examples/BlurGlassmorphism.tsx?raw";
import { CallbacksGlassmorphism } from "./examples/CallbacksGlassmorphism.tsx";
import callbacksCode from "./examples/CallbacksGlassmorphism.tsx?raw";
import { CardGlassmorphism } from "./examples/CardGlassmorphism.tsx";
import cardCode from "./examples/CardGlassmorphism.tsx?raw";
import { ColorGlassmorphism } from "./examples/ColorGlassmorphism.tsx";
import colorCode from "./examples/ColorGlassmorphism.tsx?raw";
import { DurationGlassmorphism } from "./examples/DurationGlassmorphism.tsx";
import durationCode from "./examples/DurationGlassmorphism.tsx?raw";
import overridesCss from "./examples/glassmorphism-overrides.css?raw";
import { ImageGlassmorphism } from "./examples/ImageGlassmorphism.tsx";
import imageCode from "./examples/ImageGlassmorphism.tsx?raw";
import { IntensityGlassmorphism } from "./examples/IntensityGlassmorphism.tsx";
import intensityCode from "./examples/IntensityGlassmorphism.tsx?raw";
import { SaturateGlassmorphism } from "./examples/SaturateGlassmorphism.tsx";
import saturateCode from "./examples/SaturateGlassmorphism.tsx?raw";
import { StateGlassmorphism } from "./examples/StateGlassmorphism.tsx";
import stateCode from "./examples/StateGlassmorphism.tsx?raw";
import { StyledGlassmorphism } from "./examples/StyledGlassmorphism.tsx";
import styledCode from "./examples/StyledGlassmorphism.tsx?raw";
import { TailwindGlassmorphism } from "./examples/TailwindGlassmorphism.tsx";
import tailwindCode from "./examples/TailwindGlassmorphism.tsx?raw";
import { TriggerGlassmorphism } from "./examples/TriggerGlassmorphism.tsx";
import triggerCode from "./examples/TriggerGlassmorphism.tsx?raw";
import { VariantGlassmorphism } from "./examples/VariantGlassmorphism.tsx";
import variantCode from "./examples/VariantGlassmorphism.tsx?raw";
import { VariantsGlassmorphism } from "./examples/VariantsGlassmorphism.tsx";
import variantsCode from "./examples/VariantsGlassmorphism.tsx?raw";
import "./GlassmorphismPage.scss";

type StoryId =
  | "card"
  | "variants"
  | "image"
  | "triggers"
  | "blur"
  | "saturate"
  | "intensity"
  | "color"
  | "duration"
  | "state"
  | "asChild"
  | "callbacks";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode; stack?: boolean };

const importCode = `import "@gem-org/gemffects/glassmorphism.css";
import { Glassmorphism } from "@gem-org/gemffects/glassmorphism";`;

const story = { returnObjects: true } as const;

export function GlassmorphismPage() {
  const { t } = useTranslation("glassmorphism");

  const stories: Story[] = [
    {
      id: "card",
      file: "CardGlassmorphism.tsx",
      code: cardCode,
      preview: <CardGlassmorphism {...t("stories.card.texts", story)} />,
    },
    {
      id: "variants",
      file: "VariantsGlassmorphism.tsx",
      code: variantsCode,
      preview: <VariantsGlassmorphism />,
    },
    {
      id: "image",
      file: "ImageGlassmorphism.tsx",
      code: imageCode,
      preview: <ImageGlassmorphism {...t("stories.image.texts", story)} />,
    },
    {
      id: "triggers",
      file: "TriggerGlassmorphism.tsx",
      code: triggerCode,
      preview: <TriggerGlassmorphism {...t("stories.triggers.texts", story)} />,
    },
    { id: "blur", file: "BlurGlassmorphism.tsx", code: blurCode, preview: <BlurGlassmorphism /> },
    {
      id: "saturate",
      file: "SaturateGlassmorphism.tsx",
      code: saturateCode,
      preview: <SaturateGlassmorphism />,
    },
    {
      id: "intensity",
      file: "IntensityGlassmorphism.tsx",
      code: intensityCode,
      preview: <IntensityGlassmorphism />,
    },
    {
      id: "color",
      file: "ColorGlassmorphism.tsx",
      code: colorCode,
      preview: <ColorGlassmorphism />,
    },
    {
      id: "duration",
      file: "DurationGlassmorphism.tsx",
      code: durationCode,
      preview: <DurationGlassmorphism />,
    },
    {
      id: "state",
      file: "StateGlassmorphism.tsx",
      code: stateCode,
      preview: <StateGlassmorphism {...t("stories.state.texts", story)} />,
      stack: true,
    },
    {
      id: "asChild",
      file: "AsChildGlassmorphism.tsx",
      code: asChildCode,
      preview: <AsChildGlassmorphism {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "callbacks",
      file: "CallbacksGlassmorphism.tsx",
      code: callbacksCode,
      preview: <CallbacksGlassmorphism {...t("stories.callbacks.texts", story)} />,
      stack: true,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath={importCode}
      />

      <GlassmorphismPlayground />

      {stories.map((item) => (
        <DocsSection
          key={item.id}
          title={t(`stories.${item.id}.title`)}
          description={t(`stories.${item.id}.description`)}
        >
          <DemoBlock code={item.code} label={item.file} stack={item.stack}>
            {item.preview}
          </DemoBlock>
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindGlassmorphism.tsx">
            <TailwindGlassmorphism {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantGlassmorphism.tsx">
            <VariantGlassmorphism />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="glassmorphism-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledGlassmorphism.tsx">
              <StyledGlassmorphism {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="Glassmorphism"
        to="/effects/style/glassmorphism/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
