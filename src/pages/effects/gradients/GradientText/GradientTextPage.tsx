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
import { GradientTextPlayground } from "./GradientTextPlayground.tsx";
import { AngleGradientText } from "./examples/AngleGradientText.tsx";
import angleCode from "./examples/AngleGradientText.tsx?raw";
import { AsChildGradientText } from "./examples/AsChildGradientText.tsx";
import asChildCode from "./examples/AsChildGradientText.tsx?raw";
import { BaseGradientText } from "./examples/BaseGradientText.tsx";
import baseCode from "./examples/BaseGradientText.tsx?raw";
import { CallbacksGradientText } from "./examples/CallbacksGradientText.tsx";
import callbacksCode from "./examples/CallbacksGradientText.tsx?raw";
import { ColorsGradientText } from "./examples/ColorsGradientText.tsx";
import colorsCode from "./examples/ColorsGradientText.tsx?raw";
import { DurationGradientText } from "./examples/DurationGradientText.tsx";
import durationCode from "./examples/DurationGradientText.tsx?raw";
import overridesCss from "./examples/gradient-text-overrides.css?raw";
import { HeadingGradientText } from "./examples/HeadingGradientText.tsx";
import headingCode from "./examples/HeadingGradientText.tsx?raw";
import { InlineGradientText } from "./examples/InlineGradientText.tsx";
import inlineCode from "./examples/InlineGradientText.tsx?raw";
import { IntensityGradientText } from "./examples/IntensityGradientText.tsx";
import intensityCode from "./examples/IntensityGradientText.tsx?raw";
import { StateGradientText } from "./examples/StateGradientText.tsx";
import stateCode from "./examples/StateGradientText.tsx?raw";
import { StyledGradientText } from "./examples/StyledGradientText.tsx";
import styledCode from "./examples/StyledGradientText.tsx?raw";
import { TailwindGradientText } from "./examples/TailwindGradientText.tsx";
import tailwindCode from "./examples/TailwindGradientText.tsx?raw";
import { TriggerGradientText } from "./examples/TriggerGradientText.tsx";
import triggerCode from "./examples/TriggerGradientText.tsx?raw";
import { VariantGradientText } from "./examples/VariantGradientText.tsx";
import variantCode from "./examples/VariantGradientText.tsx?raw";
import { VariantsGradientText } from "./examples/VariantsGradientText.tsx";
import variantsCode from "./examples/VariantsGradientText.tsx?raw";
import "./GradientTextPage.scss";

type StoryId =
  | "base"
  | "variants"
  | "heading"
  | "inline"
  | "colors"
  | "angle"
  | "triggers"
  | "intensity"
  | "duration"
  | "asChild"
  | "state"
  | "callbacks";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode; stack?: boolean };

const importCode = `import "@gem-org/gemffects/gradient-text.css";
import { GradientText } from "@gem-org/gemffects/gradient-text";`;

const story = { returnObjects: true } as const;

export function GradientTextPage() {
  const { t } = useTranslation("gradientText");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseGradientText.tsx",
      code: baseCode,
      preview: <BaseGradientText {...t("stories.base.texts", story)} />,
    },
    {
      id: "variants",
      file: "VariantsGradientText.tsx",
      code: variantsCode,
      preview: <VariantsGradientText />,
    },
    {
      id: "heading",
      file: "HeadingGradientText.tsx",
      code: headingCode,
      preview: <HeadingGradientText {...t("stories.heading.texts", story)} />,
    },
    {
      id: "inline",
      file: "InlineGradientText.tsx",
      code: inlineCode,
      preview: <InlineGradientText {...t("stories.inline.texts", story)} />,
    },
    {
      id: "colors",
      file: "ColorsGradientText.tsx",
      code: colorsCode,
      preview: <ColorsGradientText />,
    },
    { id: "angle", file: "AngleGradientText.tsx", code: angleCode, preview: <AngleGradientText /> },
    {
      id: "triggers",
      file: "TriggerGradientText.tsx",
      code: triggerCode,
      preview: <TriggerGradientText {...t("stories.triggers.texts", story)} />,
    },
    {
      id: "intensity",
      file: "IntensityGradientText.tsx",
      code: intensityCode,
      preview: <IntensityGradientText />,
    },
    {
      id: "duration",
      file: "DurationGradientText.tsx",
      code: durationCode,
      preview: <DurationGradientText />,
    },
    {
      id: "asChild",
      file: "AsChildGradientText.tsx",
      code: asChildCode,
      preview: <AsChildGradientText {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "state",
      file: "StateGradientText.tsx",
      code: stateCode,
      preview: <StateGradientText {...t("stories.state.texts", story)} />,
      stack: true,
    },
    {
      id: "callbacks",
      file: "CallbacksGradientText.tsx",
      code: callbacksCode,
      preview: <CallbacksGradientText {...t("stories.callbacks.texts", story)} />,
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

      <GradientTextPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindGradientText.tsx">
            <TailwindGradientText {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantGradientText.tsx">
            <VariantGradientText />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="gradient-text-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledGradientText.tsx">
              <StyledGradientText {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="GradientText"
        to="/effects/gradients/gradient-text/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
