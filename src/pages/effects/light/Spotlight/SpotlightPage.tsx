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
import { SpotlightPlayground } from "./SpotlightPlayground.tsx";
import overridesCss from "./examples/spotlight-overrides.css?raw";
import { CallbacksSpotlight } from "./examples/CallbacksSpotlight.tsx";
import callbacksCode from "./examples/CallbacksSpotlight.tsx?raw";
import { ColorSpotlight } from "./examples/ColorSpotlight.tsx";
import colorCode from "./examples/ColorSpotlight.tsx?raw";
import { HookSpotlight } from "./examples/HookSpotlight.tsx";
import hookCode from "./examples/HookSpotlight.tsx?raw";
import { ImageSpotlight } from "./examples/ImageSpotlight.tsx";
import imageCode from "./examples/ImageSpotlight.tsx?raw";
import { IntensitySpotlight } from "./examples/IntensitySpotlight.tsx";
import intensityCode from "./examples/IntensitySpotlight.tsx?raw";
import { SizeSpotlight } from "./examples/SizeSpotlight.tsx";
import sizeCode from "./examples/SizeSpotlight.tsx?raw";
import { StateSpotlight } from "./examples/StateSpotlight.tsx";
import stateCode from "./examples/StateSpotlight.tsx?raw";
import { StyledSpotlight } from "./examples/StyledSpotlight.tsx";
import styledCode from "./examples/StyledSpotlight.tsx?raw";
import { TailwindSpotlight } from "./examples/TailwindSpotlight.tsx";
import tailwindCode from "./examples/TailwindSpotlight.tsx?raw";
import { TriggerSpotlight } from "./examples/TriggerSpotlight.tsx";
import triggerCode from "./examples/TriggerSpotlight.tsx?raw";
import { VariantSpotlight } from "./examples/VariantSpotlight.tsx";
import variantCode from "./examples/VariantSpotlight.tsx?raw";
import { VariantsSpotlight } from "./examples/VariantsSpotlight.tsx";
import variantsCode from "./examples/VariantsSpotlight.tsx?raw";
import "./SpotlightPage.scss";

type StoryId =
  | "variants"
  | "image"
  | "triggers"
  | "size"
  | "intensity"
  | "color"
  | "state"
  | "callbacks"
  | "hook";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode; stack?: boolean };

const importCode = `import "@gem-org/gemffects/spotlight.css";
import { Spotlight, useSpotlight } from "@gem-org/gemffects/spotlight";`;

const story = { returnObjects: true } as const;

export function SpotlightPage() {
  const { t } = useTranslation("spotlight");

  const stories: Story[] = [
    {
      id: "variants",
      file: "VariantsSpotlight.tsx",
      code: variantsCode,
      preview: <VariantsSpotlight {...t("stories.variants.texts", story)} />,
    },
    {
      id: "image",
      file: "ImageSpotlight.tsx",
      code: imageCode,
      preview: <ImageSpotlight {...t("stories.image.texts", story)} />,
    },
    {
      id: "triggers",
      file: "TriggerSpotlight.tsx",
      code: triggerCode,
      preview: <TriggerSpotlight {...t("stories.triggers.texts", story)} />,
    },
    { id: "size", file: "SizeSpotlight.tsx", code: sizeCode, preview: <SizeSpotlight /> },
    {
      id: "intensity",
      file: "IntensitySpotlight.tsx",
      code: intensityCode,
      preview: <IntensitySpotlight />,
    },
    {
      id: "color",
      file: "ColorSpotlight.tsx",
      code: colorCode,
      preview: <ColorSpotlight {...t("stories.color.texts", story)} />,
    },
    {
      id: "state",
      file: "StateSpotlight.tsx",
      code: stateCode,
      preview: <StateSpotlight {...t("stories.state.texts", story)} />,
      stack: true,
    },
    {
      id: "callbacks",
      file: "CallbacksSpotlight.tsx",
      code: callbacksCode,
      preview: <CallbacksSpotlight {...t("stories.callbacks.texts", story)} />,
      stack: true,
    },
    {
      id: "hook",
      file: "HookSpotlight.tsx",
      code: hookCode,
      preview: <HookSpotlight {...t("stories.hook.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath={importCode}
      />

      <SpotlightPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindSpotlight.tsx">
            <TailwindSpotlight {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantSpotlight.tsx">
            <VariantSpotlight />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="spotlight-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledSpotlight.tsx">
              <StyledSpotlight {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="Spotlight"
        to="/effects/light/spotlight/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
