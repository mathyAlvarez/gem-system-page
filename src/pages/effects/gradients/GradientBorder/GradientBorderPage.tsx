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
import { GradientBorderPlayground } from "./GradientBorderPlayground.tsx";
import { AngleGradientBorder } from "./examples/AngleGradientBorder.tsx";
import angleCode from "./examples/AngleGradientBorder.tsx?raw";
import { AsChildGradientBorder } from "./examples/AsChildGradientBorder.tsx";
import asChildCode from "./examples/AsChildGradientBorder.tsx?raw";
import { BaseGradientBorder } from "./examples/BaseGradientBorder.tsx";
import baseCode from "./examples/BaseGradientBorder.tsx?raw";
import { CallbacksGradientBorder } from "./examples/CallbacksGradientBorder.tsx";
import callbacksCode from "./examples/CallbacksGradientBorder.tsx?raw";
import { CardGradientBorder } from "./examples/CardGradientBorder.tsx";
import cardCode from "./examples/CardGradientBorder.tsx?raw";
import { ColorsGradientBorder } from "./examples/ColorsGradientBorder.tsx";
import colorsCode from "./examples/ColorsGradientBorder.tsx?raw";
import { DurationGradientBorder } from "./examples/DurationGradientBorder.tsx";
import durationCode from "./examples/DurationGradientBorder.tsx?raw";
import overridesCss from "./examples/gradient-border-overrides.css?raw";
import { IntensityGradientBorder } from "./examples/IntensityGradientBorder.tsx";
import intensityCode from "./examples/IntensityGradientBorder.tsx?raw";
import { PadGradientBorder } from "./examples/PadGradientBorder.tsx";
import padCode from "./examples/PadGradientBorder.tsx?raw";
import { StateGradientBorder } from "./examples/StateGradientBorder.tsx";
import stateCode from "./examples/StateGradientBorder.tsx?raw";
import { StyledGradientBorder } from "./examples/StyledGradientBorder.tsx";
import styledCode from "./examples/StyledGradientBorder.tsx?raw";
import { TailwindGradientBorder } from "./examples/TailwindGradientBorder.tsx";
import tailwindCode from "./examples/TailwindGradientBorder.tsx?raw";
import { ThicknessGradientBorder } from "./examples/ThicknessGradientBorder.tsx";
import thicknessCode from "./examples/ThicknessGradientBorder.tsx?raw";
import { TriggerGradientBorder } from "./examples/TriggerGradientBorder.tsx";
import triggerCode from "./examples/TriggerGradientBorder.tsx?raw";
import { VariantGradientBorder } from "./examples/VariantGradientBorder.tsx";
import variantCode from "./examples/VariantGradientBorder.tsx?raw";
import { VariantsGradientBorder } from "./examples/VariantsGradientBorder.tsx";
import variantsCode from "./examples/VariantsGradientBorder.tsx?raw";
import "./GradientBorderPage.scss";

type StoryId =
  | "base"
  | "variants"
  | "pad"
  | "card"
  | "triggers"
  | "thickness"
  | "angle"
  | "colors"
  | "intensity"
  | "duration"
  | "asChild"
  | "state"
  | "callbacks";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode; stack?: boolean };

const importCode = `import "@gem-org/gemffects/gradient-border.css";
import { GradientBorder } from "@gem-org/gemffects/gradient-border";`;

const story = { returnObjects: true } as const;

export function GradientBorderPage() {
  const { t } = useTranslation("gradientBorder");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseGradientBorder.tsx",
      code: baseCode,
      preview: <BaseGradientBorder {...t("stories.base.texts", story)} />,
    },
    {
      id: "variants",
      file: "VariantsGradientBorder.tsx",
      code: variantsCode,
      preview: <VariantsGradientBorder />,
    },
    {
      id: "pad",
      file: "PadGradientBorder.tsx",
      code: padCode,
      preview: <PadGradientBorder {...t("stories.pad.texts", story)} />,
    },
    {
      id: "card",
      file: "CardGradientBorder.tsx",
      code: cardCode,
      preview: <CardGradientBorder {...t("stories.card.texts", story)} />,
    },
    {
      id: "triggers",
      file: "TriggerGradientBorder.tsx",
      code: triggerCode,
      preview: <TriggerGradientBorder {...t("stories.triggers.texts", story)} />,
    },
    {
      id: "thickness",
      file: "ThicknessGradientBorder.tsx",
      code: thicknessCode,
      preview: <ThicknessGradientBorder />,
    },
    {
      id: "angle",
      file: "AngleGradientBorder.tsx",
      code: angleCode,
      preview: <AngleGradientBorder />,
    },
    {
      id: "colors",
      file: "ColorsGradientBorder.tsx",
      code: colorsCode,
      preview: <ColorsGradientBorder />,
    },
    {
      id: "intensity",
      file: "IntensityGradientBorder.tsx",
      code: intensityCode,
      preview: <IntensityGradientBorder />,
    },
    {
      id: "duration",
      file: "DurationGradientBorder.tsx",
      code: durationCode,
      preview: <DurationGradientBorder />,
    },
    {
      id: "asChild",
      file: "AsChildGradientBorder.tsx",
      code: asChildCode,
      preview: <AsChildGradientBorder {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "state",
      file: "StateGradientBorder.tsx",
      code: stateCode,
      preview: <StateGradientBorder {...t("stories.state.texts", story)} />,
      stack: true,
    },
    {
      id: "callbacks",
      file: "CallbacksGradientBorder.tsx",
      code: callbacksCode,
      preview: <CallbacksGradientBorder {...t("stories.callbacks.texts", story)} />,
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

      <GradientBorderPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindGradientBorder.tsx">
            <TailwindGradientBorder {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantGradientBorder.tsx">
            <VariantGradientBorder />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="gradient-border-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledGradientBorder.tsx">
              <StyledGradientBorder {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="GradientBorder"
        to="/effects/gradients/gradient-border/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
