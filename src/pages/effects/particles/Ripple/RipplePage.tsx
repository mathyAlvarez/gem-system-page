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
import { RipplePlayground } from "./RipplePlayground.tsx";
import { AsChildRipple } from "./examples/AsChildRipple.tsx";
import asChildCode from "./examples/AsChildRipple.tsx?raw";
import { BaseRipple } from "./examples/BaseRipple.tsx";
import baseCode from "./examples/BaseRipple.tsx?raw";
import { CallbacksRipple } from "./examples/CallbacksRipple.tsx";
import callbacksCode from "./examples/CallbacksRipple.tsx?raw";
import { ColorsRipple } from "./examples/ColorsRipple.tsx";
import colorsCode from "./examples/ColorsRipple.tsx?raw";
import { DelayRipple } from "./examples/DelayRipple.tsx";
import delayCode from "./examples/DelayRipple.tsx?raw";
import { DurationRipple } from "./examples/DurationRipple.tsx";
import durationCode from "./examples/DurationRipple.tsx?raw";
import { ImageRipple } from "./examples/ImageRipple.tsx";
import imageCode from "./examples/ImageRipple.tsx?raw";
import { IntensityRipple } from "./examples/IntensityRipple.tsx";
import intensityCode from "./examples/IntensityRipple.tsx?raw";
import { OriginRipple } from "./examples/OriginRipple.tsx";
import originCode from "./examples/OriginRipple.tsx?raw";
import overridesCss from "./examples/ripple-overrides.css?raw";
import { StateRipple } from "./examples/StateRipple.tsx";
import stateCode from "./examples/StateRipple.tsx?raw";
import { StyledRipple } from "./examples/StyledRipple.tsx";
import styledCode from "./examples/StyledRipple.tsx?raw";
import { TailwindRipple } from "./examples/TailwindRipple.tsx";
import tailwindCode from "./examples/TailwindRipple.tsx?raw";
import { TriggerRipple } from "./examples/TriggerRipple.tsx";
import triggerCode from "./examples/TriggerRipple.tsx?raw";
import { VariantRipple } from "./examples/VariantRipple.tsx";
import variantCode from "./examples/VariantRipple.tsx?raw";
import { VariantsRipple } from "./examples/VariantsRipple.tsx";
import variantsCode from "./examples/VariantsRipple.tsx?raw";
import "./RipplePage.scss";

type StoryId =
  | "base"
  | "variants"
  | "origin"
  | "image"
  | "triggers"
  | "colors"
  | "duration"
  | "delay"
  | "intensity"
  | "asChild"
  | "state"
  | "callbacks";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode; stack?: boolean };

const importCode = `import "@gem-org/gemffects/ripple.css";
import { Ripple } from "@gem-org/gemffects/ripple";`;

const story = { returnObjects: true } as const;

export function RipplePage() {
  const { t } = useTranslation("ripple");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseRipple.tsx",
      code: baseCode,
      preview: <BaseRipple {...t("stories.base.texts", story)} />,
    },
    { id: "variants", file: "VariantsRipple.tsx", code: variantsCode, preview: <VariantsRipple /> },
    { id: "origin", file: "OriginRipple.tsx", code: originCode, preview: <OriginRipple /> },
    {
      id: "image",
      file: "ImageRipple.tsx",
      code: imageCode,
      preview: <ImageRipple {...t("stories.image.texts", story)} />,
    },
    { id: "triggers", file: "TriggerRipple.tsx", code: triggerCode, preview: <TriggerRipple /> },
    { id: "colors", file: "ColorsRipple.tsx", code: colorsCode, preview: <ColorsRipple /> },
    { id: "duration", file: "DurationRipple.tsx", code: durationCode, preview: <DurationRipple /> },
    { id: "delay", file: "DelayRipple.tsx", code: delayCode, preview: <DelayRipple /> },
    {
      id: "intensity",
      file: "IntensityRipple.tsx",
      code: intensityCode,
      preview: <IntensityRipple />,
    },
    {
      id: "asChild",
      file: "AsChildRipple.tsx",
      code: asChildCode,
      preview: <AsChildRipple {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "state",
      file: "StateRipple.tsx",
      code: stateCode,
      preview: <StateRipple {...t("stories.state.texts", story)} />,
      stack: true,
    },
    {
      id: "callbacks",
      file: "CallbacksRipple.tsx",
      code: callbacksCode,
      preview: <CallbacksRipple {...t("stories.callbacks.texts", story)} />,
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

      <RipplePlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindRipple.tsx">
            <TailwindRipple {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantRipple.tsx">
            <VariantRipple />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="ripple-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledRipple.tsx">
              <StyledRipple {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="Ripple"
        to="/effects/particles/ripple/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
