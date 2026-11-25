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
import { RipPlayground } from "./RipPlayground.tsx";
import { AsChildRip } from "./examples/AsChildRip.tsx";
import asChildCode from "./examples/AsChildRip.tsx?raw";
import { BaseRip } from "./examples/BaseRip.tsx";
import baseCode from "./examples/BaseRip.tsx?raw";
import { CallbacksRip } from "./examples/CallbacksRip.tsx";
import callbacksCode from "./examples/CallbacksRip.tsx?raw";
import { ColorsRip } from "./examples/ColorsRip.tsx";
import colorsCode from "./examples/ColorsRip.tsx?raw";
import { CustomParticleRip } from "./examples/CustomParticleRip.tsx";
import customParticleCode from "./examples/CustomParticleRip.tsx?raw";
import { DurationRip } from "./examples/DurationRip.tsx";
import durationCode from "./examples/DurationRip.tsx?raw";
import { GapRip } from "./examples/GapRip.tsx";
import gapCode from "./examples/GapRip.tsx?raw";
import { ImageRip } from "./examples/ImageRip.tsx";
import imageCode from "./examples/ImageRip.tsx?raw";
import { IntensityRip } from "./examples/IntensityRip.tsx";
import intensityCode from "./examples/IntensityRip.tsx?raw";
import { LinesRip } from "./examples/LinesRip.tsx";
import linesCode from "./examples/LinesRip.tsx?raw";
import { ParticlesRip } from "./examples/ParticlesRip.tsx";
import particlesCode from "./examples/ParticlesRip.tsx?raw";
import overridesCss from "./examples/rip-overrides.css?raw";
import { StateRip } from "./examples/StateRip.tsx";
import stateCode from "./examples/StateRip.tsx?raw";
import { StyledRip } from "./examples/StyledRip.tsx";
import styledCode from "./examples/StyledRip.tsx?raw";
import { TailwindRip } from "./examples/TailwindRip.tsx";
import tailwindCode from "./examples/TailwindRip.tsx?raw";
import { TriggerRip } from "./examples/TriggerRip.tsx";
import triggerCode from "./examples/TriggerRip.tsx?raw";
import { VariantRip } from "./examples/VariantRip.tsx";
import variantCode from "./examples/VariantRip.tsx?raw";
import { VariantsRip } from "./examples/VariantsRip.tsx";
import variantsCode from "./examples/VariantsRip.tsx?raw";
import { WidthRip } from "./examples/WidthRip.tsx";
import widthCode from "./examples/WidthRip.tsx?raw";
import "./RipPage.scss";

type StoryId =
  | "base"
  | "variants"
  | "image"
  | "triggers"
  | "lines"
  | "gap"
  | "particles"
  | "customParticle"
  | "colors"
  | "width"
  | "duration"
  | "intensity"
  | "asChild"
  | "state"
  | "callbacks";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode; stack?: boolean };

const importCode = `import "@gem-org/gemffects/particles.css";
import "@gem-org/gemffects/rip.css";
import { Rip } from "@gem-org/gemffects/rip";`;

const story = { returnObjects: true } as const;

export function RipPage() {
  const { t } = useTranslation("rip");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseRip.tsx",
      code: baseCode,
      preview: <BaseRip {...t("stories.base.texts", story)} />,
    },
    { id: "variants", file: "VariantsRip.tsx", code: variantsCode, preview: <VariantsRip /> },
    {
      id: "image",
      file: "ImageRip.tsx",
      code: imageCode,
      preview: <ImageRip {...t("stories.image.texts", story)} />,
    },
    { id: "triggers", file: "TriggerRip.tsx", code: triggerCode, preview: <TriggerRip /> },
    { id: "lines", file: "LinesRip.tsx", code: linesCode, preview: <LinesRip /> },
    { id: "gap", file: "GapRip.tsx", code: gapCode, preview: <GapRip /> },
    { id: "particles", file: "ParticlesRip.tsx", code: particlesCode, preview: <ParticlesRip /> },
    {
      id: "customParticle",
      file: "CustomParticleRip.tsx",
      code: customParticleCode,
      preview: <CustomParticleRip />,
    },
    { id: "colors", file: "ColorsRip.tsx", code: colorsCode, preview: <ColorsRip /> },
    { id: "width", file: "WidthRip.tsx", code: widthCode, preview: <WidthRip /> },
    { id: "duration", file: "DurationRip.tsx", code: durationCode, preview: <DurationRip /> },
    { id: "intensity", file: "IntensityRip.tsx", code: intensityCode, preview: <IntensityRip /> },
    {
      id: "asChild",
      file: "AsChildRip.tsx",
      code: asChildCode,
      preview: <AsChildRip {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "state",
      file: "StateRip.tsx",
      code: stateCode,
      preview: <StateRip {...t("stories.state.texts", story)} />,
      stack: true,
    },
    {
      id: "callbacks",
      file: "CallbacksRip.tsx",
      code: callbacksCode,
      preview: <CallbacksRip {...t("stories.callbacks.texts", story)} />,
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

      <RipPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindRip.tsx">
            <TailwindRip {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantRip.tsx">
            <VariantRip />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="rip-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledRip.tsx">
              <StyledRip {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="Rip" to="/effects/particles/rip/api" linkLabel={t("apiLink")} />
    </div>
  );
}
