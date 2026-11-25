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
import { BlurUnveilPlayground } from "./BlurUnveilPlayground.tsx";
import overridesCss from "./examples/blur-unveil-overrides.css?raw";
import { AsChildBlurUnveil } from "./examples/AsChildBlurUnveil.tsx";
import asChildCode from "./examples/AsChildBlurUnveil.tsx?raw";
import { BlurBlurUnveil } from "./examples/BlurBlurUnveil.tsx";
import blurCode from "./examples/BlurBlurUnveil.tsx?raw";
import { CallbacksBlurUnveil } from "./examples/CallbacksBlurUnveil.tsx";
import callbacksCode from "./examples/CallbacksBlurUnveil.tsx?raw";
import { DurationBlurUnveil } from "./examples/DurationBlurUnveil.tsx";
import durationCode from "./examples/DurationBlurUnveil.tsx?raw";
import { ImageBlurUnveil } from "./examples/ImageBlurUnveil.tsx";
import imageCode from "./examples/ImageBlurUnveil.tsx?raw";
import { IntensityBlurUnveil } from "./examples/IntensityBlurUnveil.tsx";
import intensityCode from "./examples/IntensityBlurUnveil.tsx?raw";
import { ScaleBlurUnveil } from "./examples/ScaleBlurUnveil.tsx";
import scaleCode from "./examples/ScaleBlurUnveil.tsx?raw";
import { SpoilerBlurUnveil } from "./examples/SpoilerBlurUnveil.tsx";
import spoilerCode from "./examples/SpoilerBlurUnveil.tsx?raw";
import { StateBlurUnveil } from "./examples/StateBlurUnveil.tsx";
import stateCode from "./examples/StateBlurUnveil.tsx?raw";
import { StyledBlurUnveil } from "./examples/StyledBlurUnveil.tsx";
import styledCode from "./examples/StyledBlurUnveil.tsx?raw";
import { TailwindBlurUnveil } from "./examples/TailwindBlurUnveil.tsx";
import tailwindCode from "./examples/TailwindBlurUnveil.tsx?raw";
import { TriggerBlurUnveil } from "./examples/TriggerBlurUnveil.tsx";
import triggerCode from "./examples/TriggerBlurUnveil.tsx?raw";
import { VariantBlurUnveil } from "./examples/VariantBlurUnveil.tsx";
import variantCode from "./examples/VariantBlurUnveil.tsx?raw";
import { VariantsBlurUnveil } from "./examples/VariantsBlurUnveil.tsx";
import variantsCode from "./examples/VariantsBlurUnveil.tsx?raw";
import "./BlurUnveilPage.scss";

type StoryId =
  | "image"
  | "variants"
  | "triggers"
  | "spoiler"
  | "blur"
  | "scale"
  | "duration"
  | "intensity"
  | "asChild"
  | "state"
  | "callbacks";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode; stack?: boolean };

const importCode = `import "@gem-org/gemffects/blur-unveil.css";
import { BlurUnveil } from "@gem-org/gemffects/blur-unveil";`;

const story = { returnObjects: true } as const;

export function BlurUnveilPage() {
  const { t } = useTranslation("blurUnveil");
  const replay = t("replay");

  const stories: Story[] = [
    {
      id: "image",
      file: "ImageBlurUnveil.tsx",
      code: imageCode,
      preview: <ImageBlurUnveil {...t("stories.image.texts", story)} replay={replay} />,
    },
    {
      id: "variants",
      file: "VariantsBlurUnveil.tsx",
      code: variantsCode,
      preview: <VariantsBlurUnveil replay={replay} />,
    },
    {
      id: "triggers",
      file: "TriggerBlurUnveil.tsx",
      code: triggerCode,
      preview: <TriggerBlurUnveil />,
    },
    {
      id: "spoiler",
      file: "SpoilerBlurUnveil.tsx",
      code: spoilerCode,
      preview: <SpoilerBlurUnveil {...t("stories.spoiler.texts", story)} />,
    },
    { id: "blur", file: "BlurBlurUnveil.tsx", code: blurCode, preview: <BlurBlurUnveil /> },
    { id: "scale", file: "ScaleBlurUnveil.tsx", code: scaleCode, preview: <ScaleBlurUnveil /> },
    {
      id: "duration",
      file: "DurationBlurUnveil.tsx",
      code: durationCode,
      preview: <DurationBlurUnveil replay={replay} />,
    },
    {
      id: "intensity",
      file: "IntensityBlurUnveil.tsx",
      code: intensityCode,
      preview: <IntensityBlurUnveil />,
    },
    {
      id: "asChild",
      file: "AsChildBlurUnveil.tsx",
      code: asChildCode,
      preview: <AsChildBlurUnveil {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "state",
      file: "StateBlurUnveil.tsx",
      code: stateCode,
      preview: <StateBlurUnveil {...t("stories.state.texts", story)} />,
      stack: true,
    },
    {
      id: "callbacks",
      file: "CallbacksBlurUnveil.tsx",
      code: callbacksCode,
      preview: <CallbacksBlurUnveil {...t("stories.callbacks.texts", story)} />,
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

      <BlurUnveilPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindBlurUnveil.tsx">
            <TailwindBlurUnveil {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantBlurUnveil.tsx">
            <VariantBlurUnveil />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="blur-unveil-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledBlurUnveil.tsx">
              <StyledBlurUnveil {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="BlurUnveil"
        to="/effects/style/blur-unveil/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
