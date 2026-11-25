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
import { GlitchPlayground } from "./GlitchPlayground.tsx";
import { AsChildGlitch } from "./examples/AsChildGlitch.tsx";
import asChildCode from "./examples/AsChildGlitch.tsx?raw";
import { CallbacksGlitch } from "./examples/CallbacksGlitch.tsx";
import callbacksCode from "./examples/CallbacksGlitch.tsx?raw";
import { ColorGlitch } from "./examples/ColorGlitch.tsx";
import colorCode from "./examples/ColorGlitch.tsx?raw";
import { DurationGlitch } from "./examples/DurationGlitch.tsx";
import durationCode from "./examples/DurationGlitch.tsx?raw";
import overridesCss from "./examples/glitch-overrides.css?raw";
import { ImageGlitch } from "./examples/ImageGlitch.tsx";
import imageCode from "./examples/ImageGlitch.tsx?raw";
import { IntensityGlitch } from "./examples/IntensityGlitch.tsx";
import intensityCode from "./examples/IntensityGlitch.tsx?raw";
import { SplitGlitch } from "./examples/SplitGlitch.tsx";
import splitCode from "./examples/SplitGlitch.tsx?raw";
import { StateGlitch } from "./examples/StateGlitch.tsx";
import stateCode from "./examples/StateGlitch.tsx?raw";
import { StyledGlitch } from "./examples/StyledGlitch.tsx";
import styledCode from "./examples/StyledGlitch.tsx?raw";
import { TailwindGlitch } from "./examples/TailwindGlitch.tsx";
import tailwindCode from "./examples/TailwindGlitch.tsx?raw";
import { TextGlitch } from "./examples/TextGlitch.tsx";
import textCode from "./examples/TextGlitch.tsx?raw";
import { TriggerGlitch } from "./examples/TriggerGlitch.tsx";
import triggerCode from "./examples/TriggerGlitch.tsx?raw";
import { VariantGlitch } from "./examples/VariantGlitch.tsx";
import variantCode from "./examples/VariantGlitch.tsx?raw";
import { VariantsGlitch } from "./examples/VariantsGlitch.tsx";
import variantsCode from "./examples/VariantsGlitch.tsx?raw";
import "./GlitchPage.scss";

type StoryId =
  | "image"
  | "variants"
  | "text"
  | "triggers"
  | "split"
  | "duration"
  | "intensity"
  | "color"
  | "state"
  | "asChild"
  | "callbacks";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode; stack?: boolean };

const importCode = `import "@gem-org/gemffects/glitch.css";
import { Glitch } from "@gem-org/gemffects/glitch";`;

const story = { returnObjects: true } as const;

export function GlitchPage() {
  const { t } = useTranslation("glitch");

  const stories: Story[] = [
    {
      id: "image",
      file: "ImageGlitch.tsx",
      code: imageCode,
      preview: <ImageGlitch {...t("stories.image.texts", story)} />,
    },
    { id: "variants", file: "VariantsGlitch.tsx", code: variantsCode, preview: <VariantsGlitch /> },
    {
      id: "text",
      file: "TextGlitch.tsx",
      code: textCode,
      preview: <TextGlitch {...t("stories.text.texts", story)} />,
    },
    { id: "triggers", file: "TriggerGlitch.tsx", code: triggerCode, preview: <TriggerGlitch /> },
    { id: "split", file: "SplitGlitch.tsx", code: splitCode, preview: <SplitGlitch /> },
    { id: "duration", file: "DurationGlitch.tsx", code: durationCode, preview: <DurationGlitch /> },
    {
      id: "intensity",
      file: "IntensityGlitch.tsx",
      code: intensityCode,
      preview: <IntensityGlitch />,
    },
    { id: "color", file: "ColorGlitch.tsx", code: colorCode, preview: <ColorGlitch /> },
    {
      id: "state",
      file: "StateGlitch.tsx",
      code: stateCode,
      preview: <StateGlitch {...t("stories.state.texts", story)} />,
      stack: true,
    },
    {
      id: "asChild",
      file: "AsChildGlitch.tsx",
      code: asChildCode,
      preview: <AsChildGlitch {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "callbacks",
      file: "CallbacksGlitch.tsx",
      code: callbacksCode,
      preview: <CallbacksGlitch {...t("stories.callbacks.texts", story)} />,
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
      <GlitchPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindGlitch.tsx">
            <TailwindGlitch {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantGlitch.tsx">
            <VariantGlitch />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="glitch-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledGlitch.tsx">
              <StyledGlitch {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="Glitch" to="/effects/style/glitch/api" linkLabel={t("apiLink")} />
    </div>
  );
}
