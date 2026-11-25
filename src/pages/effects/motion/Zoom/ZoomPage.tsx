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
import { ZoomPlayground } from "./ZoomPlayground.tsx";
import overridesCss from "./examples/zoom-overrides.css?raw";
import { AsChildZoom } from "./examples/AsChildZoom.tsx";
import asChildCode from "./examples/AsChildZoom.tsx?raw";
import { CallbacksZoom } from "./examples/CallbacksZoom.tsx";
import callbacksCode from "./examples/CallbacksZoom.tsx?raw";
import { ClipZoom } from "./examples/ClipZoom.tsx";
import clipCode from "./examples/ClipZoom.tsx?raw";
import { DurationZoom } from "./examples/DurationZoom.tsx";
import durationCode from "./examples/DurationZoom.tsx?raw";
import { ImageZoom } from "./examples/ImageZoom.tsx";
import imageCode from "./examples/ImageZoom.tsx?raw";
import { IntensityZoom } from "./examples/IntensityZoom.tsx";
import intensityCode from "./examples/IntensityZoom.tsx?raw";
import { LensZoom } from "./examples/LensZoom.tsx";
import lensCode from "./examples/LensZoom.tsx?raw";
import { OriginZoom } from "./examples/OriginZoom.tsx";
import originCode from "./examples/OriginZoom.tsx?raw";
import { ScaleZoom } from "./examples/ScaleZoom.tsx";
import scaleCode from "./examples/ScaleZoom.tsx?raw";
import { StateZoom } from "./examples/StateZoom.tsx";
import stateCode from "./examples/StateZoom.tsx?raw";
import { StyledZoom } from "./examples/StyledZoom.tsx";
import styledCode from "./examples/StyledZoom.tsx?raw";
import { TailwindZoom } from "./examples/TailwindZoom.tsx";
import tailwindCode from "./examples/TailwindZoom.tsx?raw";
import { TriggerZoom } from "./examples/TriggerZoom.tsx";
import triggerCode from "./examples/TriggerZoom.tsx?raw";
import { VariantZoom } from "./examples/VariantZoom.tsx";
import variantCode from "./examples/VariantZoom.tsx?raw";
import { VariantsZoom } from "./examples/VariantsZoom.tsx";
import variantsCode from "./examples/VariantsZoom.tsx?raw";
import "./ZoomPage.scss";

type StoryId =
  | "image"
  | "variants"
  | "lens"
  | "origin"
  | "triggers"
  | "scale"
  | "clip"
  | "duration"
  | "intensity"
  | "asChild"
  | "state"
  | "callbacks";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode; stack?: boolean };

const importCode = `import "@gem-org/gemffects/zoom.css";
import { Zoom } from "@gem-org/gemffects/zoom";`;

const story = { returnObjects: true } as const;

export function ZoomPage() {
  const { t } = useTranslation("zoom");

  const stories: Story[] = [
    {
      id: "image",
      file: "ImageZoom.tsx",
      code: imageCode,
      preview: <ImageZoom {...t("stories.image.texts", story)} />,
    },
    { id: "variants", file: "VariantsZoom.tsx", code: variantsCode, preview: <VariantsZoom /> },
    {
      id: "lens",
      file: "LensZoom.tsx",
      code: lensCode,
      preview: <LensZoom {...t("stories.lens.texts", story)} />,
    },
    { id: "origin", file: "OriginZoom.tsx", code: originCode, preview: <OriginZoom /> },
    { id: "triggers", file: "TriggerZoom.tsx", code: triggerCode, preview: <TriggerZoom /> },
    { id: "scale", file: "ScaleZoom.tsx", code: scaleCode, preview: <ScaleZoom /> },
    { id: "clip", file: "ClipZoom.tsx", code: clipCode, preview: <ClipZoom /> },
    { id: "duration", file: "DurationZoom.tsx", code: durationCode, preview: <DurationZoom /> },
    { id: "intensity", file: "IntensityZoom.tsx", code: intensityCode, preview: <IntensityZoom /> },
    {
      id: "asChild",
      file: "AsChildZoom.tsx",
      code: asChildCode,
      preview: <AsChildZoom {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "state",
      file: "StateZoom.tsx",
      code: stateCode,
      preview: <StateZoom {...t("stories.state.texts", story)} />,
      stack: true,
    },
    {
      id: "callbacks",
      file: "CallbacksZoom.tsx",
      code: callbacksCode,
      preview: <CallbacksZoom {...t("stories.callbacks.texts", story)} />,
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

      <ZoomPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindZoom.tsx">
            <TailwindZoom {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantZoom.tsx">
            <VariantZoom />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="zoom-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledZoom.tsx">
              <StyledZoom {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="Zoom" to="/effects/motion/zoom/api" linkLabel={t("apiLink")} />
    </div>
  );
}
