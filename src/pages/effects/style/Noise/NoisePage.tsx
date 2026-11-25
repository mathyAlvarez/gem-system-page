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
import { NoisePlayground } from "./NoisePlayground.tsx";
import { AsChildNoise } from "./examples/AsChildNoise.tsx";
import asChildCode from "./examples/AsChildNoise.tsx?raw";
import { BaseNoise } from "./examples/BaseNoise.tsx";
import baseCode from "./examples/BaseNoise.tsx?raw";
import { CallbacksNoise } from "./examples/CallbacksNoise.tsx";
import callbacksCode from "./examples/CallbacksNoise.tsx?raw";
import { ColorNoise } from "./examples/ColorNoise.tsx";
import colorCode from "./examples/ColorNoise.tsx?raw";
import { DurationNoise } from "./examples/DurationNoise.tsx";
import durationCode from "./examples/DurationNoise.tsx?raw";
import { ImageNoise } from "./examples/ImageNoise.tsx";
import imageCode from "./examples/ImageNoise.tsx?raw";
import { IntensityNoise } from "./examples/IntensityNoise.tsx";
import intensityCode from "./examples/IntensityNoise.tsx?raw";
import overridesCss from "./examples/noise-overrides.css?raw";
import { StateNoise } from "./examples/StateNoise.tsx";
import stateCode from "./examples/StateNoise.tsx?raw";
import { StyledNoise } from "./examples/StyledNoise.tsx";
import styledCode from "./examples/StyledNoise.tsx?raw";
import { SurfacesNoise } from "./examples/SurfacesNoise.tsx";
import surfacesCode from "./examples/SurfacesNoise.tsx?raw";
import { TailwindNoise } from "./examples/TailwindNoise.tsx";
import tailwindCode from "./examples/TailwindNoise.tsx?raw";
import { TriggerNoise } from "./examples/TriggerNoise.tsx";
import triggerCode from "./examples/TriggerNoise.tsx?raw";
import { VariantNoise } from "./examples/VariantNoise.tsx";
import variantCode from "./examples/VariantNoise.tsx?raw";
import { VariantsNoise } from "./examples/VariantsNoise.tsx";
import variantsCode from "./examples/VariantsNoise.tsx?raw";
import "./NoisePage.scss";

type StoryId =
  | "base"
  | "variants"
  | "image"
  | "surfaces"
  | "color"
  | "triggers"
  | "intensity"
  | "duration"
  | "asChild"
  | "state"
  | "callbacks";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode; stack?: boolean };

const importCode = `import "@gem-org/gemffects/noise.css";
import { Noise } from "@gem-org/gemffects/noise";`;

const story = { returnObjects: true } as const;

export function NoisePage() {
  const { t } = useTranslation("noise");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseNoise.tsx",
      code: baseCode,
      preview: <BaseNoise {...t("stories.base.texts", story)} />,
    },
    { id: "variants", file: "VariantsNoise.tsx", code: variantsCode, preview: <VariantsNoise /> },
    {
      id: "image",
      file: "ImageNoise.tsx",
      code: imageCode,
      preview: <ImageNoise {...t("stories.image.texts", story)} />,
    },
    { id: "surfaces", file: "SurfacesNoise.tsx", code: surfacesCode, preview: <SurfacesNoise /> },
    { id: "color", file: "ColorNoise.tsx", code: colorCode, preview: <ColorNoise /> },
    {
      id: "triggers",
      file: "TriggerNoise.tsx",
      code: triggerCode,
      preview: <TriggerNoise {...t("stories.triggers.texts", story)} />,
    },
    {
      id: "intensity",
      file: "IntensityNoise.tsx",
      code: intensityCode,
      preview: <IntensityNoise />,
    },
    { id: "duration", file: "DurationNoise.tsx", code: durationCode, preview: <DurationNoise /> },
    {
      id: "asChild",
      file: "AsChildNoise.tsx",
      code: asChildCode,
      preview: <AsChildNoise {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "state",
      file: "StateNoise.tsx",
      code: stateCode,
      preview: <StateNoise {...t("stories.state.texts", story)} />,
      stack: true,
    },
    {
      id: "callbacks",
      file: "CallbacksNoise.tsx",
      code: callbacksCode,
      preview: <CallbacksNoise {...t("stories.callbacks.texts", story)} />,
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

      <NoisePlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindNoise.tsx">
            <TailwindNoise {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantNoise.tsx">
            <VariantNoise />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="noise-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledNoise.tsx">
              <StyledNoise {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="Noise" to="/effects/style/noise/api" linkLabel={t("apiLink")} />
    </div>
  );
}
