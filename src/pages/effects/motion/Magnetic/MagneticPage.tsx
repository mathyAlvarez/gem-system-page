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
import { MagneticPlayground } from "./MagneticPlayground.tsx";
import overridesCss from "./examples/magnetic-overrides.css?raw";
import { AsChildMagnetic } from "./examples/AsChildMagnetic.tsx";
import asChildCode from "./examples/AsChildMagnetic.tsx?raw";
import { AxisMagnetic } from "./examples/AxisMagnetic.tsx";
import axisCode from "./examples/AxisMagnetic.tsx?raw";
import { CallbacksMagnetic } from "./examples/CallbacksMagnetic.tsx";
import callbacksCode from "./examples/CallbacksMagnetic.tsx?raw";
import { HookMagnetic } from "./examples/HookMagnetic.tsx";
import hookCode from "./examples/HookMagnetic.tsx?raw";
import { ImageMagnetic } from "./examples/ImageMagnetic.tsx";
import imageCode from "./examples/ImageMagnetic.tsx?raw";
import { IntensityMagnetic } from "./examples/IntensityMagnetic.tsx";
import intensityCode from "./examples/IntensityMagnetic.tsx?raw";
import { ProximityMagnetic } from "./examples/ProximityMagnetic.tsx";
import proximityCode from "./examples/ProximityMagnetic.tsx?raw";
import { PullMagnetic } from "./examples/PullMagnetic.tsx";
import pullCode from "./examples/PullMagnetic.tsx?raw";
import { RadiusMagnetic } from "./examples/RadiusMagnetic.tsx";
import radiusCode from "./examples/RadiusMagnetic.tsx?raw";
import { StateMagnetic } from "./examples/StateMagnetic.tsx";
import stateCode from "./examples/StateMagnetic.tsx?raw";
import { StyledMagnetic } from "./examples/StyledMagnetic.tsx";
import styledCode from "./examples/StyledMagnetic.tsx?raw";
import { TailwindMagnetic } from "./examples/TailwindMagnetic.tsx";
import tailwindCode from "./examples/TailwindMagnetic.tsx?raw";
import { TileMagnetic } from "./examples/TileMagnetic.tsx";
import tileCode from "./examples/TileMagnetic.tsx?raw";
import { TriggerMagnetic } from "./examples/TriggerMagnetic.tsx";
import triggerCode from "./examples/TriggerMagnetic.tsx?raw";
import { VariantMagnetic } from "./examples/VariantMagnetic.tsx";
import variantCode from "./examples/VariantMagnetic.tsx?raw";
import "./MagneticPage.scss";

type StoryId =
  | "tile"
  | "image"
  | "triggers"
  | "proximity"
  | "radius"
  | "intensity"
  | "pull"
  | "axis"
  | "asChild"
  | "state"
  | "callbacks"
  | "hook";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode; stack?: boolean };

const importCode = `import "@gem-org/gemffects/magnetic.css";
import { Magnetic } from "@gem-org/gemffects/magnetic";`;

const story = { returnObjects: true } as const;

export function MagneticPage() {
  const { t } = useTranslation("magnetic");

  const stories: Story[] = [
    {
      id: "tile",
      file: "TileMagnetic.tsx",
      code: tileCode,
      preview: <TileMagnetic {...t("stories.tile.texts", story)} />,
    },
    {
      id: "image",
      file: "ImageMagnetic.tsx",
      code: imageCode,
      preview: <ImageMagnetic {...t("stories.image.texts", story)} />,
    },
    {
      id: "triggers",
      file: "TriggerMagnetic.tsx",
      code: triggerCode,
      preview: <TriggerMagnetic {...t("stories.triggers.texts", story)} />,
    },
    {
      id: "proximity",
      file: "ProximityMagnetic.tsx",
      code: proximityCode,
      preview: <ProximityMagnetic {...t("stories.proximity.texts", story)} />,
    },
    { id: "radius", file: "RadiusMagnetic.tsx", code: radiusCode, preview: <RadiusMagnetic /> },
    {
      id: "intensity",
      file: "IntensityMagnetic.tsx",
      code: intensityCode,
      preview: <IntensityMagnetic />,
    },
    { id: "pull", file: "PullMagnetic.tsx", code: pullCode, preview: <PullMagnetic /> },
    { id: "axis", file: "AxisMagnetic.tsx", code: axisCode, preview: <AxisMagnetic /> },
    {
      id: "asChild",
      file: "AsChildMagnetic.tsx",
      code: asChildCode,
      preview: <AsChildMagnetic {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "state",
      file: "StateMagnetic.tsx",
      code: stateCode,
      preview: <StateMagnetic {...t("stories.state.texts", story)} />,
      stack: true,
    },
    {
      id: "callbacks",
      file: "CallbacksMagnetic.tsx",
      code: callbacksCode,
      preview: <CallbacksMagnetic {...t("stories.callbacks.texts", story)} />,
      stack: true,
    },
    {
      id: "hook",
      file: "HookMagnetic.tsx",
      code: hookCode,
      preview: <HookMagnetic {...t("stories.hook.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath={importCode}
      />

      <MagneticPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindMagnetic.tsx">
            <TailwindMagnetic {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantMagnetic.tsx">
            <VariantMagnetic />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="magnetic-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledMagnetic.tsx">
              <StyledMagnetic {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="Magnetic"
        to="/effects/motion/magnetic/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
