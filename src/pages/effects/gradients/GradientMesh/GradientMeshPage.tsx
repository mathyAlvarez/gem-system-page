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
import { GradientMeshPlayground } from "./GradientMeshPlayground.tsx";
import { AsChildGradientMesh } from "./examples/AsChildGradientMesh.tsx";
import asChildCode from "./examples/AsChildGradientMesh.tsx?raw";
import { BaseGradientMesh } from "./examples/BaseGradientMesh.tsx";
import baseCode from "./examples/BaseGradientMesh.tsx?raw";
import { BlurGradientMesh } from "./examples/BlurGradientMesh.tsx";
import blurCode from "./examples/BlurGradientMesh.tsx?raw";
import { CallbacksGradientMesh } from "./examples/CallbacksGradientMesh.tsx";
import callbacksCode from "./examples/CallbacksGradientMesh.tsx?raw";
import { ColorsGradientMesh } from "./examples/ColorsGradientMesh.tsx";
import colorsCode from "./examples/ColorsGradientMesh.tsx?raw";
import { DurationGradientMesh } from "./examples/DurationGradientMesh.tsx";
import durationCode from "./examples/DurationGradientMesh.tsx?raw";
import overridesCss from "./examples/gradient-mesh-overrides.css?raw";
import { HeroGradientMesh } from "./examples/HeroGradientMesh.tsx";
import heroCode from "./examples/HeroGradientMesh.tsx?raw";
import { IntensityGradientMesh } from "./examples/IntensityGradientMesh.tsx";
import intensityCode from "./examples/IntensityGradientMesh.tsx?raw";
import { StateGradientMesh } from "./examples/StateGradientMesh.tsx";
import stateCode from "./examples/StateGradientMesh.tsx?raw";
import { StyledGradientMesh } from "./examples/StyledGradientMesh.tsx";
import styledCode from "./examples/StyledGradientMesh.tsx?raw";
import { TailwindGradientMesh } from "./examples/TailwindGradientMesh.tsx";
import tailwindCode from "./examples/TailwindGradientMesh.tsx?raw";
import { TriggerGradientMesh } from "./examples/TriggerGradientMesh.tsx";
import triggerCode from "./examples/TriggerGradientMesh.tsx?raw";
import { VariantGradientMesh } from "./examples/VariantGradientMesh.tsx";
import variantCode from "./examples/VariantGradientMesh.tsx?raw";
import { VariantsGradientMesh } from "./examples/VariantsGradientMesh.tsx";
import variantsCode from "./examples/VariantsGradientMesh.tsx?raw";
import "./GradientMeshPage.scss";

type StoryId =
  | "base"
  | "variants"
  | "hero"
  | "colors"
  | "blur"
  | "triggers"
  | "intensity"
  | "duration"
  | "asChild"
  | "state"
  | "callbacks";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode; stack?: boolean };

const importCode = `import "@gem-org/gemffects/gradient-mesh.css";
import { GradientMesh } from "@gem-org/gemffects/gradient-mesh";`;

const story = { returnObjects: true } as const;

export function GradientMeshPage() {
  const { t } = useTranslation("gradientMesh");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseGradientMesh.tsx",
      code: baseCode,
      preview: <BaseGradientMesh {...t("stories.base.texts", story)} />,
    },
    {
      id: "variants",
      file: "VariantsGradientMesh.tsx",
      code: variantsCode,
      preview: <VariantsGradientMesh />,
    },
    {
      id: "hero",
      file: "HeroGradientMesh.tsx",
      code: heroCode,
      preview: <HeroGradientMesh {...t("stories.hero.texts", story)} />,
    },
    {
      id: "colors",
      file: "ColorsGradientMesh.tsx",
      code: colorsCode,
      preview: <ColorsGradientMesh />,
    },
    { id: "blur", file: "BlurGradientMesh.tsx", code: blurCode, preview: <BlurGradientMesh /> },
    {
      id: "triggers",
      file: "TriggerGradientMesh.tsx",
      code: triggerCode,
      preview: <TriggerGradientMesh {...t("stories.triggers.texts", story)} />,
    },
    {
      id: "intensity",
      file: "IntensityGradientMesh.tsx",
      code: intensityCode,
      preview: <IntensityGradientMesh />,
    },
    {
      id: "duration",
      file: "DurationGradientMesh.tsx",
      code: durationCode,
      preview: <DurationGradientMesh />,
    },
    {
      id: "asChild",
      file: "AsChildGradientMesh.tsx",
      code: asChildCode,
      preview: <AsChildGradientMesh {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "state",
      file: "StateGradientMesh.tsx",
      code: stateCode,
      preview: <StateGradientMesh {...t("stories.state.texts", story)} />,
      stack: true,
    },
    {
      id: "callbacks",
      file: "CallbacksGradientMesh.tsx",
      code: callbacksCode,
      preview: <CallbacksGradientMesh {...t("stories.callbacks.texts", story)} />,
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

      <GradientMeshPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindGradientMesh.tsx">
            <TailwindGradientMesh {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantGradientMesh.tsx">
            <VariantGradientMesh />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="gradient-mesh-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledGradientMesh.tsx">
              <StyledGradientMesh {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="GradientMesh"
        to="/effects/gradients/gradient-mesh/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
