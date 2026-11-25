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
import { FloatPlayground } from "./FloatPlayground.tsx";
import overridesCss from "./examples/float-overrides.css?raw";
import { AmplitudeFloat } from "./examples/AmplitudeFloat.tsx";
import amplitudeCode from "./examples/AmplitudeFloat.tsx?raw";
import { AsChildFloat } from "./examples/AsChildFloat.tsx";
import asChildCode from "./examples/AsChildFloat.tsx?raw";
import { CallbacksFloat } from "./examples/CallbacksFloat.tsx";
import callbacksCode from "./examples/CallbacksFloat.tsx?raw";
import { DurationFloat } from "./examples/DurationFloat.tsx";
import durationCode from "./examples/DurationFloat.tsx?raw";
import { IntensityFloat } from "./examples/IntensityFloat.tsx";
import intensityCode from "./examples/IntensityFloat.tsx?raw";
import { ShadowFloat } from "./examples/ShadowFloat.tsx";
import shadowCode from "./examples/ShadowFloat.tsx?raw";
import { StateFloat } from "./examples/StateFloat.tsx";
import stateCode from "./examples/StateFloat.tsx?raw";
import { StyledFloat } from "./examples/StyledFloat.tsx";
import styledCode from "./examples/StyledFloat.tsx?raw";
import { TailwindFloat } from "./examples/TailwindFloat.tsx";
import tailwindCode from "./examples/TailwindFloat.tsx?raw";
import { TileFloat } from "./examples/TileFloat.tsx";
import tileCode from "./examples/TileFloat.tsx?raw";
import { TriggerFloat } from "./examples/TriggerFloat.tsx";
import triggerCode from "./examples/TriggerFloat.tsx?raw";
import { VariantFloat } from "./examples/VariantFloat.tsx";
import variantCode from "./examples/VariantFloat.tsx?raw";
import { VariantsFloat } from "./examples/VariantsFloat.tsx";
import variantsCode from "./examples/VariantsFloat.tsx?raw";
import "./FloatPage.scss";

type StoryId =
  | "variants"
  | "tile"
  | "triggers"
  | "duration"
  | "intensity"
  | "amplitude"
  | "shadow"
  | "asChild"
  | "state"
  | "callbacks";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode; stack?: boolean };

const importCode = `import "@gem-org/gemffects/float.css";
import { Float } from "@gem-org/gemffects/float";`;

const story = { returnObjects: true } as const;

export function FloatPage() {
  const { t } = useTranslation("float");

  const stories: Story[] = [
    { id: "variants", file: "VariantsFloat.tsx", code: variantsCode, preview: <VariantsFloat /> },
    { id: "tile", file: "TileFloat.tsx", code: tileCode, preview: <TileFloat /> },
    {
      id: "triggers",
      file: "TriggerFloat.tsx",
      code: triggerCode,
      preview: <TriggerFloat {...t("stories.triggers.texts", story)} />,
    },
    { id: "duration", file: "DurationFloat.tsx", code: durationCode, preview: <DurationFloat /> },
    {
      id: "intensity",
      file: "IntensityFloat.tsx",
      code: intensityCode,
      preview: <IntensityFloat />,
    },
    {
      id: "amplitude",
      file: "AmplitudeFloat.tsx",
      code: amplitudeCode,
      preview: <AmplitudeFloat />,
    },
    { id: "shadow", file: "ShadowFloat.tsx", code: shadowCode, preview: <ShadowFloat /> },
    {
      id: "asChild",
      file: "AsChildFloat.tsx",
      code: asChildCode,
      preview: <AsChildFloat {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "state",
      file: "StateFloat.tsx",
      code: stateCode,
      preview: <StateFloat {...t("stories.state.texts", story)} />,
      stack: true,
    },
    {
      id: "callbacks",
      file: "CallbacksFloat.tsx",
      code: callbacksCode,
      preview: <CallbacksFloat {...t("stories.callbacks.texts", story)} />,
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

      <FloatPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindFloat.tsx">
            <TailwindFloat {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantFloat.tsx">
            <VariantFloat />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="float-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledFloat.tsx">
              <StyledFloat {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="Float" to="/effects/motion/float/api" linkLabel={t("apiLink")} />
    </div>
  );
}
