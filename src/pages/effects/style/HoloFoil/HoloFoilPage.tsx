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
import { HoloFoilPlayground } from "./HoloFoilPlayground.tsx";
import { AsChildHoloFoil } from "./examples/AsChildHoloFoil.tsx";
import asChildCode from "./examples/AsChildHoloFoil.tsx?raw";
import { BlendHoloFoil } from "./examples/BlendHoloFoil.tsx";
import blendCode from "./examples/BlendHoloFoil.tsx?raw";
import { CallbacksHoloFoil } from "./examples/CallbacksHoloFoil.tsx";
import callbacksCode from "./examples/CallbacksHoloFoil.tsx?raw";
import { CardHoloFoil } from "./examples/CardHoloFoil.tsx";
import cardCode from "./examples/CardHoloFoil.tsx?raw";
import { DurationHoloFoil } from "./examples/DurationHoloFoil.tsx";
import durationCode from "./examples/DurationHoloFoil.tsx?raw";
import overridesCss from "./examples/holofoil-overrides.css?raw";
import { ImageHoloFoil } from "./examples/ImageHoloFoil.tsx";
import imageCode from "./examples/ImageHoloFoil.tsx?raw";
import { IntensityHoloFoil } from "./examples/IntensityHoloFoil.tsx";
import intensityCode from "./examples/IntensityHoloFoil.tsx?raw";
import { LayersHoloFoil } from "./examples/LayersHoloFoil.tsx";
import layersCode from "./examples/LayersHoloFoil.tsx?raw";
import { StateHoloFoil } from "./examples/StateHoloFoil.tsx";
import stateCode from "./examples/StateHoloFoil.tsx?raw";
import { StyledHoloFoil } from "./examples/StyledHoloFoil.tsx";
import styledCode from "./examples/StyledHoloFoil.tsx?raw";
import { TailwindHoloFoil } from "./examples/TailwindHoloFoil.tsx";
import tailwindCode from "./examples/TailwindHoloFoil.tsx?raw";
import { TiltHoloFoil } from "./examples/TiltHoloFoil.tsx";
import tiltCode from "./examples/TiltHoloFoil.tsx?raw";
import { TriggerHoloFoil } from "./examples/TriggerHoloFoil.tsx";
import triggerCode from "./examples/TriggerHoloFoil.tsx?raw";
import { VariantHoloFoil } from "./examples/VariantHoloFoil.tsx";
import variantCode from "./examples/VariantHoloFoil.tsx?raw";
import { VariantsHoloFoil } from "./examples/VariantsHoloFoil.tsx";
import variantsCode from "./examples/VariantsHoloFoil.tsx?raw";
import "./HoloFoilPage.scss";

type StoryId =
  | "card"
  | "image"
  | "variants"
  | "blend"
  | "triggers"
  | "tilt"
  | "layers"
  | "intensity"
  | "duration"
  | "asChild"
  | "state"
  | "callbacks";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode; stack?: boolean };

const importCode = `import "@gem-org/gemffects/holo-foil.css";
import { HoloFoil } from "@gem-org/gemffects/holo-foil";`;

const story = { returnObjects: true } as const;

export function HoloFoilPage() {
  const { t } = useTranslation("holoFoil");

  const stories: Story[] = [
    {
      id: "card",
      file: "CardHoloFoil.tsx",
      code: cardCode,
      preview: <CardHoloFoil {...t("stories.card.texts", story)} />,
    },
    {
      id: "image",
      file: "ImageHoloFoil.tsx",
      code: imageCode,
      preview: <ImageHoloFoil {...t("stories.image.texts", story)} />,
    },
    {
      id: "variants",
      file: "VariantsHoloFoil.tsx",
      code: variantsCode,
      preview: <VariantsHoloFoil />,
    },
    { id: "blend", file: "BlendHoloFoil.tsx", code: blendCode, preview: <BlendHoloFoil /> },
    {
      id: "triggers",
      file: "TriggerHoloFoil.tsx",
      code: triggerCode,
      preview: <TriggerHoloFoil {...t("stories.triggers.texts", story)} />,
    },
    {
      id: "tilt",
      file: "TiltHoloFoil.tsx",
      code: tiltCode,
      preview: <TiltHoloFoil {...t("stories.tilt.texts", story)} />,
    },
    { id: "layers", file: "LayersHoloFoil.tsx", code: layersCode, preview: <LayersHoloFoil /> },
    {
      id: "intensity",
      file: "IntensityHoloFoil.tsx",
      code: intensityCode,
      preview: <IntensityHoloFoil />,
    },
    {
      id: "duration",
      file: "DurationHoloFoil.tsx",
      code: durationCode,
      preview: <DurationHoloFoil />,
    },
    {
      id: "asChild",
      file: "AsChildHoloFoil.tsx",
      code: asChildCode,
      preview: <AsChildHoloFoil {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "state",
      file: "StateHoloFoil.tsx",
      code: stateCode,
      preview: <StateHoloFoil {...t("stories.state.texts", story)} />,
      stack: true,
    },
    {
      id: "callbacks",
      file: "CallbacksHoloFoil.tsx",
      code: callbacksCode,
      preview: <CallbacksHoloFoil {...t("stories.callbacks.texts", story)} />,
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

      <HoloFoilPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindHoloFoil.tsx">
            <TailwindHoloFoil {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantHoloFoil.tsx">
            <VariantHoloFoil />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="holofoil-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledHoloFoil.tsx">
              <StyledHoloFoil {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="HoloFoil"
        to="/effects/style/holo-foil/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
