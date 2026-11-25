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
import { PulseScalePlayground } from "./PulseScalePlayground.tsx";
import overridesCss from "./examples/pulse-scale-overrides.css?raw";
import { AsChildPulseScale } from "./examples/AsChildPulseScale.tsx";
import asChildCode from "./examples/AsChildPulseScale.tsx?raw";
import { BadgePulseScale } from "./examples/BadgePulseScale.tsx";
import badgeCode from "./examples/BadgePulseScale.tsx?raw";
import { CallbacksPulseScale } from "./examples/CallbacksPulseScale.tsx";
import callbacksCode from "./examples/CallbacksPulseScale.tsx?raw";
import { DurationPulseScale } from "./examples/DurationPulseScale.tsx";
import durationCode from "./examples/DurationPulseScale.tsx?raw";
import { IntensityPulseScale } from "./examples/IntensityPulseScale.tsx";
import intensityCode from "./examples/IntensityPulseScale.tsx?raw";
import { RingPulseScale } from "./examples/RingPulseScale.tsx";
import ringCode from "./examples/RingPulseScale.tsx?raw";
import { ScalePulseScale } from "./examples/ScalePulseScale.tsx";
import scaleCode from "./examples/ScalePulseScale.tsx?raw";
import { StatePulseScale } from "./examples/StatePulseScale.tsx";
import stateCode from "./examples/StatePulseScale.tsx?raw";
import { StyledPulseScale } from "./examples/StyledPulseScale.tsx";
import styledCode from "./examples/StyledPulseScale.tsx?raw";
import { TailwindPulseScale } from "./examples/TailwindPulseScale.tsx";
import tailwindCode from "./examples/TailwindPulseScale.tsx?raw";
import { TriggerPulseScale } from "./examples/TriggerPulseScale.tsx";
import triggerCode from "./examples/TriggerPulseScale.tsx?raw";
import { VariantPulseScale } from "./examples/VariantPulseScale.tsx";
import variantCode from "./examples/VariantPulseScale.tsx?raw";
import { VariantsPulseScale } from "./examples/VariantsPulseScale.tsx";
import variantsCode from "./examples/VariantsPulseScale.tsx?raw";
import "./PulseScalePage.scss";

type StoryId =
  | "variants"
  | "badge"
  | "triggers"
  | "duration"
  | "intensity"
  | "scale"
  | "ring"
  | "asChild"
  | "state"
  | "callbacks";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode; stack?: boolean };

const importCode = `import "@gem-org/gemffects/pulse-scale.css";
import { PulseScale } from "@gem-org/gemffects/pulse-scale";`;

const story = { returnObjects: true } as const;

export function PulseScalePage() {
  const { t } = useTranslation("pulseScale");

  const stories: Story[] = [
    {
      id: "variants",
      file: "VariantsPulseScale.tsx",
      code: variantsCode,
      preview: <VariantsPulseScale />,
    },
    {
      id: "badge",
      file: "BadgePulseScale.tsx",
      code: badgeCode,
      preview: <BadgePulseScale {...t("stories.badge.texts", story)} />,
    },
    {
      id: "triggers",
      file: "TriggerPulseScale.tsx",
      code: triggerCode,
      preview: <TriggerPulseScale {...t("stories.triggers.texts", story)} />,
    },
    {
      id: "duration",
      file: "DurationPulseScale.tsx",
      code: durationCode,
      preview: <DurationPulseScale />,
    },
    {
      id: "intensity",
      file: "IntensityPulseScale.tsx",
      code: intensityCode,
      preview: <IntensityPulseScale />,
    },
    { id: "scale", file: "ScalePulseScale.tsx", code: scaleCode, preview: <ScalePulseScale /> },
    { id: "ring", file: "RingPulseScale.tsx", code: ringCode, preview: <RingPulseScale /> },
    {
      id: "asChild",
      file: "AsChildPulseScale.tsx",
      code: asChildCode,
      preview: <AsChildPulseScale {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "state",
      file: "StatePulseScale.tsx",
      code: stateCode,
      preview: <StatePulseScale {...t("stories.state.texts", story)} />,
      stack: true,
    },
    {
      id: "callbacks",
      file: "CallbacksPulseScale.tsx",
      code: callbacksCode,
      preview: <CallbacksPulseScale {...t("stories.callbacks.texts", story)} />,
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

      <PulseScalePlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindPulseScale.tsx">
            <TailwindPulseScale {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantPulseScale.tsx">
            <VariantPulseScale />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="pulse-scale-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledPulseScale.tsx">
              <StyledPulseScale {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="PulseScale"
        to="/effects/motion/pulse-scale/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
