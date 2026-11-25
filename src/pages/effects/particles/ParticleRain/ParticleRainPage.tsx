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
import { ParticleRainPlayground } from "./ParticleRainPlayground.tsx";
import { AsChildParticleRain } from "./examples/AsChildParticleRain.tsx";
import asChildCode from "./examples/AsChildParticleRain.tsx?raw";
import { BaseParticleRain } from "./examples/BaseParticleRain.tsx";
import baseCode from "./examples/BaseParticleRain.tsx?raw";
import { CallbacksParticleRain } from "./examples/CallbacksParticleRain.tsx";
import callbacksCode from "./examples/CallbacksParticleRain.tsx?raw";
import { ColorsParticleRain } from "./examples/ColorsParticleRain.tsx";
import colorsCode from "./examples/ColorsParticleRain.tsx?raw";
import { CountParticleRain } from "./examples/CountParticleRain.tsx";
import countCode from "./examples/CountParticleRain.tsx?raw";
import { DurationParticleRain } from "./examples/DurationParticleRain.tsx";
import durationCode from "./examples/DurationParticleRain.tsx?raw";
import { ImageParticleRain } from "./examples/ImageParticleRain.tsx";
import imageCode from "./examples/ImageParticleRain.tsx?raw";
import { IntensityParticleRain } from "./examples/IntensityParticleRain.tsx";
import intensityCode from "./examples/IntensityParticleRain.tsx?raw";
import overridesCss from "./examples/particle-rain-overrides.css?raw";
import { SpanParticleRain } from "./examples/SpanParticleRain.tsx";
import spanCode from "./examples/SpanParticleRain.tsx?raw";
import { SpreadParticleRain } from "./examples/SpreadParticleRain.tsx";
import spreadCode from "./examples/SpreadParticleRain.tsx?raw";
import { StateParticleRain } from "./examples/StateParticleRain.tsx";
import stateCode from "./examples/StateParticleRain.tsx?raw";
import { StyledParticleRain } from "./examples/StyledParticleRain.tsx";
import styledCode from "./examples/StyledParticleRain.tsx?raw";
import { TailwindParticleRain } from "./examples/TailwindParticleRain.tsx";
import tailwindCode from "./examples/TailwindParticleRain.tsx?raw";
import { TriggerParticleRain } from "./examples/TriggerParticleRain.tsx";
import triggerCode from "./examples/TriggerParticleRain.tsx?raw";
import { VariantParticleRain } from "./examples/VariantParticleRain.tsx";
import variantCode from "./examples/VariantParticleRain.tsx?raw";
import { VariantsParticleRain } from "./examples/VariantsParticleRain.tsx";
import variantsCode from "./examples/VariantsParticleRain.tsx?raw";
import "./ParticleRainPage.scss";

type StoryId =
  | "base"
  | "variants"
  | "image"
  | "triggers"
  | "span"
  | "colors"
  | "count"
  | "spread"
  | "duration"
  | "intensity"
  | "asChild"
  | "state"
  | "callbacks";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode; stack?: boolean };

const importCode = `import "@gem-org/gemffects/particles.css";
import "@gem-org/gemffects/particle-rain.css";
import { ParticleRain } from "@gem-org/gemffects/particle-rain";`;

const story = { returnObjects: true } as const;

export function ParticleRainPage() {
  const { t } = useTranslation("particleRain");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseParticleRain.tsx",
      code: baseCode,
      preview: <BaseParticleRain {...t("stories.base.texts", story)} />,
    },
    {
      id: "variants",
      file: "VariantsParticleRain.tsx",
      code: variantsCode,
      preview: <VariantsParticleRain />,
    },
    {
      id: "image",
      file: "ImageParticleRain.tsx",
      code: imageCode,
      preview: <ImageParticleRain {...t("stories.image.texts", story)} />,
    },
    {
      id: "triggers",
      file: "TriggerParticleRain.tsx",
      code: triggerCode,
      preview: <TriggerParticleRain {...t("stories.triggers.texts", story)} />,
    },
    { id: "span", file: "SpanParticleRain.tsx", code: spanCode, preview: <SpanParticleRain /> },
    {
      id: "colors",
      file: "ColorsParticleRain.tsx",
      code: colorsCode,
      preview: <ColorsParticleRain />,
    },
    { id: "count", file: "CountParticleRain.tsx", code: countCode, preview: <CountParticleRain /> },
    {
      id: "spread",
      file: "SpreadParticleRain.tsx",
      code: spreadCode,
      preview: <SpreadParticleRain />,
    },
    {
      id: "duration",
      file: "DurationParticleRain.tsx",
      code: durationCode,
      preview: <DurationParticleRain />,
    },
    {
      id: "intensity",
      file: "IntensityParticleRain.tsx",
      code: intensityCode,
      preview: <IntensityParticleRain />,
    },
    {
      id: "asChild",
      file: "AsChildParticleRain.tsx",
      code: asChildCode,
      preview: <AsChildParticleRain {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "state",
      file: "StateParticleRain.tsx",
      code: stateCode,
      preview: <StateParticleRain {...t("stories.state.texts", story)} />,
      stack: true,
    },
    {
      id: "callbacks",
      file: "CallbacksParticleRain.tsx",
      code: callbacksCode,
      preview: <CallbacksParticleRain {...t("stories.callbacks.texts", story)} />,
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

      <ParticleRainPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindParticleRain.tsx">
            <TailwindParticleRain {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantParticleRain.tsx">
            <VariantParticleRain />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="particle-rain-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledParticleRain.tsx">
              <StyledParticleRain {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="ParticleRain"
        to="/effects/particles/particle-rain/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
