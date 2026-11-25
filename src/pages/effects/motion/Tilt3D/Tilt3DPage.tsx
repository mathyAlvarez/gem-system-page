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
import { Tilt3DPlayground } from "./Tilt3DPlayground.tsx";
import overridesCss from "./examples/tilt-3d-overrides.css?raw";
import { AsChildTilt3D } from "./examples/AsChildTilt3D.tsx";
import asChildCode from "./examples/AsChildTilt3D.tsx?raw";
import { CallbacksTilt3D } from "./examples/CallbacksTilt3D.tsx";
import callbacksCode from "./examples/CallbacksTilt3D.tsx?raw";
import { CardTilt3D } from "./examples/CardTilt3D.tsx";
import cardCode from "./examples/CardTilt3D.tsx?raw";
import { DepthTilt3D } from "./examples/DepthTilt3D.tsx";
import depthCode from "./examples/DepthTilt3D.tsx?raw";
import { GlareTilt3D } from "./examples/GlareTilt3D.tsx";
import glareCode from "./examples/GlareTilt3D.tsx?raw";
import { HookTilt3D } from "./examples/HookTilt3D.tsx";
import hookCode from "./examples/HookTilt3D.tsx?raw";
import { ImageTilt3D } from "./examples/ImageTilt3D.tsx";
import imageCode from "./examples/ImageTilt3D.tsx?raw";
import { IntensityTilt3D } from "./examples/IntensityTilt3D.tsx";
import intensityCode from "./examples/IntensityTilt3D.tsx?raw";
import { MaxTiltTilt3D } from "./examples/MaxTiltTilt3D.tsx";
import maxTiltCode from "./examples/MaxTiltTilt3D.tsx?raw";
import { ReverseTilt3D } from "./examples/ReverseTilt3D.tsx";
import reverseCode from "./examples/ReverseTilt3D.tsx?raw";
import { StateTilt3D } from "./examples/StateTilt3D.tsx";
import stateCode from "./examples/StateTilt3D.tsx?raw";
import { StyledTilt3D } from "./examples/StyledTilt3D.tsx";
import styledCode from "./examples/StyledTilt3D.tsx?raw";
import { TailwindTilt3D } from "./examples/TailwindTilt3D.tsx";
import tailwindCode from "./examples/TailwindTilt3D.tsx?raw";
import { TriggerTilt3D } from "./examples/TriggerTilt3D.tsx";
import triggerCode from "./examples/TriggerTilt3D.tsx?raw";
import { VariantTilt3D } from "./examples/VariantTilt3D.tsx";
import variantCode from "./examples/VariantTilt3D.tsx?raw";
import "./Tilt3DPage.scss";

type StoryId =
  | "card"
  | "image"
  | "triggers"
  | "intensity"
  | "maxTilt"
  | "depth"
  | "reverse"
  | "glare"
  | "asChild"
  | "state"
  | "callbacks"
  | "hook";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode; stack?: boolean };

const importCode = `import "@gem-org/gemffects/tilt-3d.css";
import { Tilt3D } from "@gem-org/gemffects/tilt-3d";`;

const story = { returnObjects: true } as const;

export function Tilt3DPage() {
  const { t } = useTranslation("tilt3D");

  const stories: Story[] = [
    {
      id: "card",
      file: "CardTilt3D.tsx",
      code: cardCode,
      preview: <CardTilt3D {...t("stories.card.texts", story)} />,
    },
    {
      id: "image",
      file: "ImageTilt3D.tsx",
      code: imageCode,
      preview: <ImageTilt3D {...t("stories.image.texts", story)} />,
    },
    {
      id: "triggers",
      file: "TriggerTilt3D.tsx",
      code: triggerCode,
      preview: <TriggerTilt3D {...t("stories.triggers.texts", story)} />,
    },
    {
      id: "intensity",
      file: "IntensityTilt3D.tsx",
      code: intensityCode,
      preview: <IntensityTilt3D />,
    },
    { id: "maxTilt", file: "MaxTiltTilt3D.tsx", code: maxTiltCode, preview: <MaxTiltTilt3D /> },
    { id: "depth", file: "DepthTilt3D.tsx", code: depthCode, preview: <DepthTilt3D /> },
    { id: "reverse", file: "ReverseTilt3D.tsx", code: reverseCode, preview: <ReverseTilt3D /> },
    { id: "glare", file: "GlareTilt3D.tsx", code: glareCode, preview: <GlareTilt3D /> },
    {
      id: "asChild",
      file: "AsChildTilt3D.tsx",
      code: asChildCode,
      preview: <AsChildTilt3D {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "state",
      file: "StateTilt3D.tsx",
      code: stateCode,
      preview: <StateTilt3D {...t("stories.state.texts", story)} />,
      stack: true,
    },
    {
      id: "callbacks",
      file: "CallbacksTilt3D.tsx",
      code: callbacksCode,
      preview: <CallbacksTilt3D {...t("stories.callbacks.texts", story)} />,
      stack: true,
    },
    {
      id: "hook",
      file: "HookTilt3D.tsx",
      code: hookCode,
      preview: <HookTilt3D {...t("stories.hook.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath={importCode}
      />

      <Tilt3DPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindTilt3D.tsx">
            <TailwindTilt3D {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantTilt3D.tsx">
            <VariantTilt3D />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="tilt-3d-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledTilt3D.tsx">
              <StyledTilt3D {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="Tilt3D"
        to="/effects/motion/tilt-3d/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
