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
import { MarqueePlayground } from "./MarqueePlayground.tsx";
import { AsChildMarquee } from "./examples/AsChildMarquee.tsx";
import asChildCode from "./examples/AsChildMarquee.tsx?raw";
import { BaseMarquee } from "./examples/BaseMarquee.tsx";
import baseCode from "./examples/BaseMarquee.tsx?raw";
import { CallbacksMarquee } from "./examples/CallbacksMarquee.tsx";
import callbacksCode from "./examples/CallbacksMarquee.tsx?raw";
import { DirectionsMarquee } from "./examples/DirectionsMarquee.tsx";
import directionsCode from "./examples/DirectionsMarquee.tsx?raw";
import { DurationMarquee } from "./examples/DurationMarquee.tsx";
import durationCode from "./examples/DurationMarquee.tsx?raw";
import { FadeMarquee } from "./examples/FadeMarquee.tsx";
import fadeCode from "./examples/FadeMarquee.tsx?raw";
import { GapSizeMarquee } from "./examples/GapSizeMarquee.tsx";
import gapSizeCode from "./examples/GapSizeMarquee.tsx?raw";
import { IntensityMarquee } from "./examples/IntensityMarquee.tsx";
import intensityCode from "./examples/IntensityMarquee.tsx?raw";
import overridesCss from "./examples/marquee-overrides.css?raw";
import { PauseOnHoverMarquee } from "./examples/PauseOnHoverMarquee.tsx";
import pauseOnHoverCode from "./examples/PauseOnHoverMarquee.tsx?raw";
import { StateMarquee } from "./examples/StateMarquee.tsx";
import stateCode from "./examples/StateMarquee.tsx?raw";
import { StyledMarquee } from "./examples/StyledMarquee.tsx";
import styledCode from "./examples/StyledMarquee.tsx?raw";
import { TailwindMarquee } from "./examples/TailwindMarquee.tsx";
import tailwindCode from "./examples/TailwindMarquee.tsx?raw";
import { TriggerMarquee } from "./examples/TriggerMarquee.tsx";
import triggerCode from "./examples/TriggerMarquee.tsx?raw";
import { VariantMarquee } from "./examples/VariantMarquee.tsx";
import variantCode from "./examples/VariantMarquee.tsx?raw";
import { VerticalMarquee } from "./examples/VerticalMarquee.tsx";
import verticalCode from "./examples/VerticalMarquee.tsx?raw";
import "./MarqueePage.scss";

type StoryId =
  | "base"
  | "directions"
  | "vertical"
  | "triggers"
  | "pauseOnHover"
  | "gapSize"
  | "fade"
  | "intensity"
  | "duration"
  | "asChild"
  | "state"
  | "callbacks";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode; stack?: boolean };

const importCode = `import "@gem-org/gemffects/marquee.css";
import { Marquee } from "@gem-org/gemffects/marquee";`;

const story = { returnObjects: true } as const;

export function MarqueePage() {
  const { t } = useTranslation("marquee");

  const stories: Story[] = [
    { id: "base", file: "BaseMarquee.tsx", code: baseCode, preview: <BaseMarquee /> },
    {
      id: "directions",
      file: "DirectionsMarquee.tsx",
      code: directionsCode,
      preview: <DirectionsMarquee />,
    },
    {
      id: "vertical",
      file: "VerticalMarquee.tsx",
      code: verticalCode,
      preview: <VerticalMarquee />,
    },
    {
      id: "triggers",
      file: "TriggerMarquee.tsx",
      code: triggerCode,
      preview: <TriggerMarquee {...t("stories.triggers.texts", story)} />,
    },
    {
      id: "pauseOnHover",
      file: "PauseOnHoverMarquee.tsx",
      code: pauseOnHoverCode,
      preview: <PauseOnHoverMarquee />,
    },
    { id: "gapSize", file: "GapSizeMarquee.tsx", code: gapSizeCode, preview: <GapSizeMarquee /> },
    { id: "fade", file: "FadeMarquee.tsx", code: fadeCode, preview: <FadeMarquee /> },
    {
      id: "intensity",
      file: "IntensityMarquee.tsx",
      code: intensityCode,
      preview: <IntensityMarquee />,
    },
    {
      id: "duration",
      file: "DurationMarquee.tsx",
      code: durationCode,
      preview: <DurationMarquee />,
    },
    {
      id: "asChild",
      file: "AsChildMarquee.tsx",
      code: asChildCode,
      preview: <AsChildMarquee {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "state",
      file: "StateMarquee.tsx",
      code: stateCode,
      preview: <StateMarquee {...t("stories.state.texts", story)} />,
      stack: true,
    },
    {
      id: "callbacks",
      file: "CallbacksMarquee.tsx",
      code: callbacksCode,
      preview: <CallbacksMarquee {...t("stories.callbacks.texts", story)} />,
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

      <MarqueePlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindMarquee.tsx">
            <TailwindMarquee />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantMarquee.tsx">
            <VariantMarquee />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="marquee-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledMarquee.tsx">
              <StyledMarquee />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="Marquee"
        to="/effects/style/marquee/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
