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
import { RipZonePlayground } from "./RipZonePlayground.tsx";
import { AsChildRipZone } from "./examples/AsChildRipZone.tsx";
import asChildCode from "./examples/AsChildRipZone.tsx?raw";
import { BaseRipZone } from "./examples/BaseRipZone.tsx";
import baseCode from "./examples/BaseRipZone.tsx?raw";
import { CallbacksRipZone } from "./examples/CallbacksRipZone.tsx";
import callbacksCode from "./examples/CallbacksRipZone.tsx?raw";
import { ColorsRipZone } from "./examples/ColorsRipZone.tsx";
import colorsCode from "./examples/ColorsRipZone.tsx?raw";
import { DurationRipZone } from "./examples/DurationRipZone.tsx";
import durationCode from "./examples/DurationRipZone.tsx?raw";
import { ImageRipZone } from "./examples/ImageRipZone.tsx";
import imageCode from "./examples/ImageRipZone.tsx?raw";
import { IntensityRipZone } from "./examples/IntensityRipZone.tsx";
import intensityCode from "./examples/IntensityRipZone.tsx?raw";
import { RadiusRipZone } from "./examples/RadiusRipZone.tsx";
import radiusCode from "./examples/RadiusRipZone.tsx?raw";
import { ResetRipZone } from "./examples/ResetRipZone.tsx";
import resetCode from "./examples/ResetRipZone.tsx?raw";
import overridesCss from "./examples/rip-zone-overrides.css?raw";
import { StateRipZone } from "./examples/StateRipZone.tsx";
import stateCode from "./examples/StateRipZone.tsx?raw";
import { StyledRipZone } from "./examples/StyledRipZone.tsx";
import styledCode from "./examples/StyledRipZone.tsx?raw";
import { TailwindRipZone } from "./examples/TailwindRipZone.tsx";
import tailwindCode from "./examples/TailwindRipZone.tsx?raw";
import { ThresholdRipZone } from "./examples/ThresholdRipZone.tsx";
import thresholdCode from "./examples/ThresholdRipZone.tsx?raw";
import { TriggerRipZone } from "./examples/TriggerRipZone.tsx";
import triggerCode from "./examples/TriggerRipZone.tsx?raw";
import { VariantRipZone } from "./examples/VariantRipZone.tsx";
import variantCode from "./examples/VariantRipZone.tsx?raw";
import { VariantsRipZone } from "./examples/VariantsRipZone.tsx";
import variantsCode from "./examples/VariantsRipZone.tsx?raw";
import "./RipZonePage.scss";

type StoryId =
  | "base"
  | "variants"
  | "image"
  | "triggers"
  | "colors"
  | "radius"
  | "threshold"
  | "duration"
  | "intensity"
  | "reset"
  | "asChild"
  | "state"
  | "callbacks";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode; stack?: boolean };

const importCode = `import "@gem-org/gemffects/rip-zone.css";
import { RipZone } from "@gem-org/gemffects/rip-zone";`;

const story = { returnObjects: true } as const;

export function RipZonePage() {
  const { t } = useTranslation("ripZone");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseRipZone.tsx",
      code: baseCode,
      preview: <BaseRipZone {...t("stories.base.texts", story)} />,
    },
    {
      id: "variants",
      file: "VariantsRipZone.tsx",
      code: variantsCode,
      preview: <VariantsRipZone />,
    },
    {
      id: "image",
      file: "ImageRipZone.tsx",
      code: imageCode,
      preview: <ImageRipZone {...t("stories.image.texts", story)} />,
    },
    { id: "triggers", file: "TriggerRipZone.tsx", code: triggerCode, preview: <TriggerRipZone /> },
    { id: "colors", file: "ColorsRipZone.tsx", code: colorsCode, preview: <ColorsRipZone /> },
    { id: "radius", file: "RadiusRipZone.tsx", code: radiusCode, preview: <RadiusRipZone /> },
    {
      id: "threshold",
      file: "ThresholdRipZone.tsx",
      code: thresholdCode,
      preview: <ThresholdRipZone />,
    },
    {
      id: "duration",
      file: "DurationRipZone.tsx",
      code: durationCode,
      preview: <DurationRipZone />,
    },
    {
      id: "intensity",
      file: "IntensityRipZone.tsx",
      code: intensityCode,
      preview: <IntensityRipZone />,
    },
    {
      id: "reset",
      file: "ResetRipZone.tsx",
      code: resetCode,
      preview: <ResetRipZone {...t("stories.reset.texts", story)} />,
      stack: true,
    },
    {
      id: "asChild",
      file: "AsChildRipZone.tsx",
      code: asChildCode,
      preview: <AsChildRipZone {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "state",
      file: "StateRipZone.tsx",
      code: stateCode,
      preview: <StateRipZone {...t("stories.state.texts", story)} />,
      stack: true,
    },
    {
      id: "callbacks",
      file: "CallbacksRipZone.tsx",
      code: callbacksCode,
      preview: <CallbacksRipZone {...t("stories.callbacks.texts", story)} />,
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

      <RipZonePlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindRipZone.tsx">
            <TailwindRipZone {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantRipZone.tsx">
            <VariantRipZone />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="rip-zone-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledRipZone.tsx">
              <StyledRipZone {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="RipZone"
        to="/effects/particles/rip-zone/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
