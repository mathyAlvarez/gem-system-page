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
import { GradientGlossyPlayground } from "./GradientGlossyPlayground.tsx";
import { AsChildGradientGlossy } from "./examples/AsChildGradientGlossy.tsx";
import asChildCode from "./examples/AsChildGradientGlossy.tsx?raw";
import { BaseGradientGlossy } from "./examples/BaseGradientGlossy.tsx";
import baseCode from "./examples/BaseGradientGlossy.tsx?raw";
import { CallbacksGradientGlossy } from "./examples/CallbacksGradientGlossy.tsx";
import callbacksCode from "./examples/CallbacksGradientGlossy.tsx?raw";
import { CardGradientGlossy } from "./examples/CardGradientGlossy.tsx";
import cardCode from "./examples/CardGradientGlossy.tsx?raw";
import { ColorsGradientGlossy } from "./examples/ColorsGradientGlossy.tsx";
import colorsCode from "./examples/ColorsGradientGlossy.tsx?raw";
import { DirectionGradientGlossy } from "./examples/DirectionGradientGlossy.tsx";
import directionCode from "./examples/DirectionGradientGlossy.tsx?raw";
import { DurationGradientGlossy } from "./examples/DurationGradientGlossy.tsx";
import durationCode from "./examples/DurationGradientGlossy.tsx?raw";
import overridesCss from "./examples/gradient-glossy-overrides.css?raw";
import { IntensityGradientGlossy } from "./examples/IntensityGradientGlossy.tsx";
import intensityCode from "./examples/IntensityGradientGlossy.tsx?raw";
import { StateGradientGlossy } from "./examples/StateGradientGlossy.tsx";
import stateCode from "./examples/StateGradientGlossy.tsx?raw";
import { StyledGradientGlossy } from "./examples/StyledGradientGlossy.tsx";
import styledCode from "./examples/StyledGradientGlossy.tsx?raw";
import { TailwindGradientGlossy } from "./examples/TailwindGradientGlossy.tsx";
import tailwindCode from "./examples/TailwindGradientGlossy.tsx?raw";
import { TriggerGradientGlossy } from "./examples/TriggerGradientGlossy.tsx";
import triggerCode from "./examples/TriggerGradientGlossy.tsx?raw";
import { TuningGradientGlossy } from "./examples/TuningGradientGlossy.tsx";
import tuningCode from "./examples/TuningGradientGlossy.tsx?raw";
import { VariantGradientGlossy } from "./examples/VariantGradientGlossy.tsx";
import variantCode from "./examples/VariantGradientGlossy.tsx?raw";
import { VariantsGradientGlossy } from "./examples/VariantsGradientGlossy.tsx";
import variantsCode from "./examples/VariantsGradientGlossy.tsx?raw";
import "./GradientGlossyPage.scss";

type StoryId =
  | "base"
  | "variants"
  | "direction"
  | "card"
  | "colors"
  | "tuning"
  | "triggers"
  | "intensity"
  | "duration"
  | "asChild"
  | "state"
  | "callbacks";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode; stack?: boolean };

const importCode = `import "@gem-org/gemffects/gradient-glossy.css";
import { GradientGlossy } from "@gem-org/gemffects/gradient-glossy";`;

const story = { returnObjects: true } as const;

export function GradientGlossyPage() {
  const { t } = useTranslation("gradientGlossy");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseGradientGlossy.tsx",
      code: baseCode,
      preview: <BaseGradientGlossy {...t("stories.base.texts", story)} />,
    },
    {
      id: "variants",
      file: "VariantsGradientGlossy.tsx",
      code: variantsCode,
      preview: <VariantsGradientGlossy />,
    },
    {
      id: "direction",
      file: "DirectionGradientGlossy.tsx",
      code: directionCode,
      preview: <DirectionGradientGlossy />,
    },
    {
      id: "card",
      file: "CardGradientGlossy.tsx",
      code: cardCode,
      preview: <CardGradientGlossy {...t("stories.card.texts", story)} />,
    },
    {
      id: "colors",
      file: "ColorsGradientGlossy.tsx",
      code: colorsCode,
      preview: <ColorsGradientGlossy />,
    },
    {
      id: "tuning",
      file: "TuningGradientGlossy.tsx",
      code: tuningCode,
      preview: <TuningGradientGlossy />,
    },
    {
      id: "triggers",
      file: "TriggerGradientGlossy.tsx",
      code: triggerCode,
      preview: <TriggerGradientGlossy {...t("stories.triggers.texts", story)} />,
    },
    {
      id: "intensity",
      file: "IntensityGradientGlossy.tsx",
      code: intensityCode,
      preview: <IntensityGradientGlossy />,
    },
    {
      id: "duration",
      file: "DurationGradientGlossy.tsx",
      code: durationCode,
      preview: <DurationGradientGlossy />,
    },
    {
      id: "asChild",
      file: "AsChildGradientGlossy.tsx",
      code: asChildCode,
      preview: <AsChildGradientGlossy {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "state",
      file: "StateGradientGlossy.tsx",
      code: stateCode,
      preview: <StateGradientGlossy {...t("stories.state.texts", story)} />,
      stack: true,
    },
    {
      id: "callbacks",
      file: "CallbacksGradientGlossy.tsx",
      code: callbacksCode,
      preview: <CallbacksGradientGlossy {...t("stories.callbacks.texts", story)} />,
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

      <GradientGlossyPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindGradientGlossy.tsx">
            <TailwindGradientGlossy {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantGradientGlossy.tsx">
            <VariantGradientGlossy />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="gradient-glossy-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledGradientGlossy.tsx">
              <StyledGradientGlossy {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="GradientGlossy"
        to="/effects/gradients/gradient-glossy/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
