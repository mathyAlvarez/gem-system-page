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
import { ParticleBurstPlayground } from "./ParticleBurstPlayground.tsx";
import { AsChildParticleBurst } from "./examples/AsChildParticleBurst.tsx";
import asChildCode from "./examples/AsChildParticleBurst.tsx?raw";
import { BaseParticleBurst } from "./examples/BaseParticleBurst.tsx";
import baseCode from "./examples/BaseParticleBurst.tsx?raw";
import { CallbacksParticleBurst } from "./examples/CallbacksParticleBurst.tsx";
import callbacksCode from "./examples/CallbacksParticleBurst.tsx?raw";
import { ColorsParticleBurst } from "./examples/ColorsParticleBurst.tsx";
import colorsCode from "./examples/ColorsParticleBurst.tsx?raw";
import { CountParticleBurst } from "./examples/CountParticleBurst.tsx";
import countCode from "./examples/CountParticleBurst.tsx?raw";
import { DurationParticleBurst } from "./examples/DurationParticleBurst.tsx";
import durationCode from "./examples/DurationParticleBurst.tsx?raw";
import { HoldParticleBurst } from "./examples/HoldParticleBurst.tsx";
import holdCode from "./examples/HoldParticleBurst.tsx?raw";
import { ImageParticleBurst } from "./examples/ImageParticleBurst.tsx";
import imageCode from "./examples/ImageParticleBurst.tsx?raw";
import { IntensityParticleBurst } from "./examples/IntensityParticleBurst.tsx";
import intensityCode from "./examples/IntensityParticleBurst.tsx?raw";
import overridesCss from "./examples/particle-burst-overrides.css?raw";
import { SpreadParticleBurst } from "./examples/SpreadParticleBurst.tsx";
import spreadCode from "./examples/SpreadParticleBurst.tsx?raw";
import { StateParticleBurst } from "./examples/StateParticleBurst.tsx";
import stateCode from "./examples/StateParticleBurst.tsx?raw";
import { StyledParticleBurst } from "./examples/StyledParticleBurst.tsx";
import styledCode from "./examples/StyledParticleBurst.tsx?raw";
import { TailwindParticleBurst } from "./examples/TailwindParticleBurst.tsx";
import tailwindCode from "./examples/TailwindParticleBurst.tsx?raw";
import { VariantParticleBurst } from "./examples/VariantParticleBurst.tsx";
import variantCode from "./examples/VariantParticleBurst.tsx?raw";
import { VariantsParticleBurst } from "./examples/VariantsParticleBurst.tsx";
import variantsCode from "./examples/VariantsParticleBurst.tsx?raw";
import "./ParticleBurstPage.scss";

type StoryId =
  | "base"
  | "variants"
  | "image"
  | "hold"
  | "colors"
  | "spread"
  | "count"
  | "duration"
  | "intensity"
  | "asChild"
  | "state"
  | "callbacks";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode; stack?: boolean };

const importCode = `import "@gem-org/gemffects/particles.css";
import "@gem-org/gemffects/particle-burst.css";
import { ParticleBurst } from "@gem-org/gemffects/particle-burst";`;

const story = { returnObjects: true } as const;

export function ParticleBurstPage() {
  const { t } = useTranslation("particleBurst");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseParticleBurst.tsx",
      code: baseCode,
      preview: <BaseParticleBurst {...t("stories.base.texts", story)} />,
    },
    {
      id: "variants",
      file: "VariantsParticleBurst.tsx",
      code: variantsCode,
      preview: <VariantsParticleBurst />,
    },
    {
      id: "image",
      file: "ImageParticleBurst.tsx",
      code: imageCode,
      preview: <ImageParticleBurst {...t("stories.image.texts", story)} />,
    },
    {
      id: "hold",
      file: "HoldParticleBurst.tsx",
      code: holdCode,
      preview: <HoldParticleBurst {...t("stories.hold.texts", story)} />,
    },
    {
      id: "colors",
      file: "ColorsParticleBurst.tsx",
      code: colorsCode,
      preview: <ColorsParticleBurst />,
    },
    {
      id: "spread",
      file: "SpreadParticleBurst.tsx",
      code: spreadCode,
      preview: <SpreadParticleBurst />,
    },
    {
      id: "count",
      file: "CountParticleBurst.tsx",
      code: countCode,
      preview: <CountParticleBurst />,
    },
    {
      id: "duration",
      file: "DurationParticleBurst.tsx",
      code: durationCode,
      preview: <DurationParticleBurst />,
    },
    {
      id: "intensity",
      file: "IntensityParticleBurst.tsx",
      code: intensityCode,
      preview: <IntensityParticleBurst />,
    },
    {
      id: "asChild",
      file: "AsChildParticleBurst.tsx",
      code: asChildCode,
      preview: <AsChildParticleBurst {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "state",
      file: "StateParticleBurst.tsx",
      code: stateCode,
      preview: <StateParticleBurst {...t("stories.state.texts", story)} />,
      stack: true,
    },
    {
      id: "callbacks",
      file: "CallbacksParticleBurst.tsx",
      code: callbacksCode,
      preview: <CallbacksParticleBurst {...t("stories.callbacks.texts", story)} />,
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

      <ParticleBurstPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindParticleBurst.tsx">
            <TailwindParticleBurst {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantParticleBurst.tsx">
            <VariantParticleBurst />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="particle-burst-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledParticleBurst.tsx">
              <StyledParticleBurst {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="ParticleBurst"
        to="/effects/particles/particle-burst/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
