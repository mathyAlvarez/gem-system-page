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
import { VortexPlayground } from "./VortexPlayground.tsx";
import overridesCss from "./examples/vortex-overrides.css?raw";
import { AsChildVortex } from "./examples/AsChildVortex.tsx";
import asChildCode from "./examples/AsChildVortex.tsx?raw";
import { CallbacksVortex } from "./examples/CallbacksVortex.tsx";
import callbacksCode from "./examples/CallbacksVortex.tsx?raw";
import { CardVortex } from "./examples/CardVortex.tsx";
import cardCode from "./examples/CardVortex.tsx?raw";
import { ColorVortex } from "./examples/ColorVortex.tsx";
import colorCode from "./examples/ColorVortex.tsx?raw";
import { DurationVortex } from "./examples/DurationVortex.tsx";
import durationCode from "./examples/DurationVortex.tsx?raw";
import { IntensityVortex } from "./examples/IntensityVortex.tsx";
import intensityCode from "./examples/IntensityVortex.tsx?raw";
import { StateVortex } from "./examples/StateVortex.tsx";
import stateCode from "./examples/StateVortex.tsx?raw";
import { StyledVortex } from "./examples/StyledVortex.tsx";
import styledCode from "./examples/StyledVortex.tsx?raw";
import { TailwindVortex } from "./examples/TailwindVortex.tsx";
import tailwindCode from "./examples/TailwindVortex.tsx?raw";
import { TriggerVortex } from "./examples/TriggerVortex.tsx";
import triggerCode from "./examples/TriggerVortex.tsx?raw";
import { VariantVortex } from "./examples/VariantVortex.tsx";
import variantCode from "./examples/VariantVortex.tsx?raw";
import { VariantsVortex } from "./examples/VariantsVortex.tsx";
import variantsCode from "./examples/VariantsVortex.tsx?raw";
import { WarpVortex } from "./examples/WarpVortex.tsx";
import warpCode from "./examples/WarpVortex.tsx?raw";
import "./VortexPage.scss";

type StoryId =
  | "card"
  | "variants"
  | "warp"
  | "triggers"
  | "intensity"
  | "duration"
  | "color"
  | "asChild"
  | "state"
  | "callbacks";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode; stack?: boolean };

const importCode = `import "@gem-org/gemffects/vortex.css";
import { Vortex } from "@gem-org/gemffects/vortex";`;

const story = { returnObjects: true } as const;

export function VortexPage() {
  const { t } = useTranslation("vortex");

  const stories: Story[] = [
    {
      id: "card",
      file: "CardVortex.tsx",
      code: cardCode,
      preview: <CardVortex {...t("stories.card.texts", story)} />,
    },
    { id: "variants", file: "VariantsVortex.tsx", code: variantsCode, preview: <VariantsVortex /> },
    { id: "warp", file: "WarpVortex.tsx", code: warpCode, preview: <WarpVortex /> },
    {
      id: "triggers",
      file: "TriggerVortex.tsx",
      code: triggerCode,
      preview: <TriggerVortex {...t("stories.triggers.texts", story)} />,
    },
    {
      id: "intensity",
      file: "IntensityVortex.tsx",
      code: intensityCode,
      preview: <IntensityVortex />,
    },
    { id: "duration", file: "DurationVortex.tsx", code: durationCode, preview: <DurationVortex /> },
    { id: "color", file: "ColorVortex.tsx", code: colorCode, preview: <ColorVortex /> },
    {
      id: "asChild",
      file: "AsChildVortex.tsx",
      code: asChildCode,
      preview: <AsChildVortex {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "state",
      file: "StateVortex.tsx",
      code: stateCode,
      preview: <StateVortex {...t("stories.state.texts", story)} />,
      stack: true,
    },
    {
      id: "callbacks",
      file: "CallbacksVortex.tsx",
      code: callbacksCode,
      preview: <CallbacksVortex {...t("stories.callbacks.texts", story)} />,
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

      <VortexPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindVortex.tsx">
            <TailwindVortex {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantVortex.tsx">
            <VariantVortex />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="vortex-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledVortex.tsx">
              <StyledVortex {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="Vortex" to="/effects/motion/vortex/api" linkLabel={t("apiLink")} />
    </div>
  );
}
