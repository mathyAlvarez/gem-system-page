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
import { FlashPlayground } from "./FlashPlayground.tsx";
import overridesCss from "./examples/flash-overrides.css?raw";
import { AsChildFlash } from "./examples/AsChildFlash.tsx";
import asChildCode from "./examples/AsChildFlash.tsx?raw";
import { CallbacksFlash } from "./examples/CallbacksFlash.tsx";
import callbacksCode from "./examples/CallbacksFlash.tsx?raw";
import { ColorFlash } from "./examples/ColorFlash.tsx";
import colorCode from "./examples/ColorFlash.tsx?raw";
import { DurationFlash } from "./examples/DurationFlash.tsx";
import durationCode from "./examples/DurationFlash.tsx?raw";
import { ImageFlash } from "./examples/ImageFlash.tsx";
import imageCode from "./examples/ImageFlash.tsx?raw";
import { IntensityFlash } from "./examples/IntensityFlash.tsx";
import intensityCode from "./examples/IntensityFlash.tsx?raw";
import { OriginFlash } from "./examples/OriginFlash.tsx";
import originCode from "./examples/OriginFlash.tsx?raw";
import { StateFlash } from "./examples/StateFlash.tsx";
import stateCode from "./examples/StateFlash.tsx?raw";
import { StyledFlash } from "./examples/StyledFlash.tsx";
import styledCode from "./examples/StyledFlash.tsx?raw";
import { TailwindFlash } from "./examples/TailwindFlash.tsx";
import tailwindCode from "./examples/TailwindFlash.tsx?raw";
import { TriggerFlash } from "./examples/TriggerFlash.tsx";
import triggerCode from "./examples/TriggerFlash.tsx?raw";
import { VariantFlash } from "./examples/VariantFlash.tsx";
import variantCode from "./examples/VariantFlash.tsx?raw";
import { VariantsFlash } from "./examples/VariantsFlash.tsx";
import variantsCode from "./examples/VariantsFlash.tsx?raw";
import "./FlashPage.scss";

type StoryId =
  | "variants"
  | "origin"
  | "image"
  | "triggers"
  | "duration"
  | "intensity"
  | "color"
  | "asChild"
  | "state"
  | "callbacks";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode; stack?: boolean };

const importCode = `import "@gem-org/gemffects/flash.css";
import { Flash } from "@gem-org/gemffects/flash";`;

const story = { returnObjects: true } as const;

export function FlashPage() {
  const { t } = useTranslation("flash");

  const stories: Story[] = [
    {
      id: "variants",
      file: "VariantsFlash.tsx",
      code: variantsCode,
      preview: <VariantsFlash {...t("stories.variants.texts", story)} />,
    },
    {
      id: "origin",
      file: "OriginFlash.tsx",
      code: originCode,
      preview: <OriginFlash {...t("stories.origin.texts", story)} />,
    },
    {
      id: "image",
      file: "ImageFlash.tsx",
      code: imageCode,
      preview: <ImageFlash {...t("stories.image.texts", story)} />,
    },
    {
      id: "triggers",
      file: "TriggerFlash.tsx",
      code: triggerCode,
      preview: <TriggerFlash {...t("stories.triggers.texts", story)} />,
    },
    { id: "duration", file: "DurationFlash.tsx", code: durationCode, preview: <DurationFlash /> },
    {
      id: "intensity",
      file: "IntensityFlash.tsx",
      code: intensityCode,
      preview: <IntensityFlash />,
    },
    { id: "color", file: "ColorFlash.tsx", code: colorCode, preview: <ColorFlash /> },
    {
      id: "asChild",
      file: "AsChildFlash.tsx",
      code: asChildCode,
      preview: <AsChildFlash {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "state",
      file: "StateFlash.tsx",
      code: stateCode,
      preview: <StateFlash {...t("stories.state.texts", story)} />,
      stack: true,
    },
    {
      id: "callbacks",
      file: "CallbacksFlash.tsx",
      code: callbacksCode,
      preview: <CallbacksFlash {...t("stories.callbacks.texts", story)} />,
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

      <FlashPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindFlash.tsx">
            <TailwindFlash {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantFlash.tsx">
            <VariantFlash />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="flash-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledFlash.tsx">
              <StyledFlash {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="Flash" to="/effects/light/flash/api" linkLabel={t("apiLink")} />
    </div>
  );
}
