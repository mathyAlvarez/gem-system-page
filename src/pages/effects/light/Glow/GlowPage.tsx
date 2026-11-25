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
import { GlowPlayground } from "./GlowPlayground.tsx";
import overridesCss from "./examples/glow-overrides.css?raw";
import { AsChildGlow } from "./examples/AsChildGlow.tsx";
import asChildCode from "./examples/AsChildGlow.tsx?raw";
import { CallbacksGlow } from "./examples/CallbacksGlow.tsx";
import callbacksCode from "./examples/CallbacksGlow.tsx?raw";
import { ColorGlow } from "./examples/ColorGlow.tsx";
import colorCode from "./examples/ColorGlow.tsx?raw";
import { DualGlow } from "./examples/DualGlow.tsx";
import dualCode from "./examples/DualGlow.tsx?raw";
import { DurationGlow } from "./examples/DurationGlow.tsx";
import durationCode from "./examples/DurationGlow.tsx?raw";
import { EdgeGlow } from "./examples/EdgeGlow.tsx";
import edgeCode from "./examples/EdgeGlow.tsx?raw";
import { IntensityGlow } from "./examples/IntensityGlow.tsx";
import intensityCode from "./examples/IntensityGlow.tsx?raw";
import { SpreadGlow } from "./examples/SpreadGlow.tsx";
import spreadCode from "./examples/SpreadGlow.tsx?raw";
import { StateGlow } from "./examples/StateGlow.tsx";
import stateCode from "./examples/StateGlow.tsx?raw";
import { StyledGlow } from "./examples/StyledGlow.tsx";
import styledCode from "./examples/StyledGlow.tsx?raw";
import { TailwindGlow } from "./examples/TailwindGlow.tsx";
import tailwindCode from "./examples/TailwindGlow.tsx?raw";
import { TextGlow } from "./examples/TextGlow.tsx";
import textCode from "./examples/TextGlow.tsx?raw";
import { TriggerGlow } from "./examples/TriggerGlow.tsx";
import triggerCode from "./examples/TriggerGlow.tsx?raw";
import { VariantGlow } from "./examples/VariantGlow.tsx";
import variantCode from "./examples/VariantGlow.tsx?raw";
import { VariantsGlow } from "./examples/VariantsGlow.tsx";
import variantsCode from "./examples/VariantsGlow.tsx?raw";
import "./GlowPage.scss";

type StoryId =
  | "variants"
  | "edge"
  | "dual"
  | "text"
  | "triggers"
  | "spread"
  | "intensity"
  | "duration"
  | "color"
  | "asChild"
  | "state"
  | "callbacks";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode; stack?: boolean };

const importCode = `import "@gem-org/gemffects/glow.css";
import { Glow } from "@gem-org/gemffects/glow";`;

const story = { returnObjects: true } as const;

export function GlowPage() {
  const { t } = useTranslation("glow");

  const stories: Story[] = [
    { id: "variants", file: "VariantsGlow.tsx", code: variantsCode, preview: <VariantsGlow /> },
    { id: "edge", file: "EdgeGlow.tsx", code: edgeCode, preview: <EdgeGlow /> },
    {
      id: "dual",
      file: "DualGlow.tsx",
      code: dualCode,
      preview: <DualGlow {...t("stories.dual.texts", story)} />,
    },
    {
      id: "text",
      file: "TextGlow.tsx",
      code: textCode,
      preview: <TextGlow {...t("stories.text.texts", story)} />,
    },
    {
      id: "triggers",
      file: "TriggerGlow.tsx",
      code: triggerCode,
      preview: <TriggerGlow {...t("stories.triggers.texts", story)} />,
    },
    { id: "spread", file: "SpreadGlow.tsx", code: spreadCode, preview: <SpreadGlow /> },
    { id: "intensity", file: "IntensityGlow.tsx", code: intensityCode, preview: <IntensityGlow /> },
    { id: "duration", file: "DurationGlow.tsx", code: durationCode, preview: <DurationGlow /> },
    { id: "color", file: "ColorGlow.tsx", code: colorCode, preview: <ColorGlow /> },
    {
      id: "asChild",
      file: "AsChildGlow.tsx",
      code: asChildCode,
      preview: <AsChildGlow {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "state",
      file: "StateGlow.tsx",
      code: stateCode,
      preview: <StateGlow {...t("stories.state.texts", story)} />,
      stack: true,
    },
    {
      id: "callbacks",
      file: "CallbacksGlow.tsx",
      code: callbacksCode,
      preview: <CallbacksGlow {...t("stories.callbacks.texts", story)} />,
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

      <GlowPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindGlow.tsx">
            <TailwindGlow {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantGlow.tsx">
            <VariantGlow />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="glow-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledGlow.tsx">
              <StyledGlow {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="Glow" to="/effects/light/glow/api" linkLabel={t("apiLink")} />
    </div>
  );
}
