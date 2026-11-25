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
import { ScrambleTextPlayground } from "./ScrambleTextPlayground.tsx";
import { AsChildScrambleText } from "./examples/AsChildScrambleText.tsx";
import asChildCode from "./examples/AsChildScrambleText.tsx?raw";
import { BaseScrambleText } from "./examples/BaseScrambleText.tsx";
import baseCode from "./examples/BaseScrambleText.tsx?raw";
import { CallbacksScrambleText } from "./examples/CallbacksScrambleText.tsx";
import callbacksCode from "./examples/CallbacksScrambleText.tsx?raw";
import { CharsetScrambleText } from "./examples/CharsetScrambleText.tsx";
import charsetCode from "./examples/CharsetScrambleText.tsx?raw";
import { DurationScrambleText } from "./examples/DurationScrambleText.tsx";
import durationCode from "./examples/DurationScrambleText.tsx?raw";
import { HeadingScrambleText } from "./examples/HeadingScrambleText.tsx";
import headingCode from "./examples/HeadingScrambleText.tsx?raw";
import { IntensityScrambleText } from "./examples/IntensityScrambleText.tsx";
import intensityCode from "./examples/IntensityScrambleText.tsx?raw";
import { LoopScrambleText } from "./examples/LoopScrambleText.tsx";
import loopCode from "./examples/LoopScrambleText.tsx?raw";
import { MetricsScrambleText } from "./examples/MetricsScrambleText.tsx";
import metricsCode from "./examples/MetricsScrambleText.tsx?raw";
import overridesCss from "./examples/scramble-text-overrides.css?raw";
import { StateScrambleText } from "./examples/StateScrambleText.tsx";
import stateCode from "./examples/StateScrambleText.tsx?raw";
import { StyledScrambleText } from "./examples/StyledScrambleText.tsx";
import styledCode from "./examples/StyledScrambleText.tsx?raw";
import { TailwindScrambleText } from "./examples/TailwindScrambleText.tsx";
import tailwindCode from "./examples/TailwindScrambleText.tsx?raw";
import { TriggerScrambleText } from "./examples/TriggerScrambleText.tsx";
import triggerCode from "./examples/TriggerScrambleText.tsx?raw";
import { VariantScrambleText } from "./examples/VariantScrambleText.tsx";
import variantCode from "./examples/VariantScrambleText.tsx?raw";
import "./ScrambleTextPage.scss";

type StoryId =
  | "base"
  | "heading"
  | "loop"
  | "triggers"
  | "charset"
  | "metrics"
  | "intensity"
  | "duration"
  | "asChild"
  | "state"
  | "callbacks";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode; stack?: boolean };

const importCode = `import "@gem-org/gemffects/scramble-text.css";
import { ScrambleText } from "@gem-org/gemffects/scramble-text";`;

const story = { returnObjects: true } as const;

export function ScrambleTextPage() {
  const { t } = useTranslation("scrambleText");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseScrambleText.tsx",
      code: baseCode,
      preview: <BaseScrambleText {...t("stories.base.texts", story)} />,
      stack: true,
    },
    {
      id: "heading",
      file: "HeadingScrambleText.tsx",
      code: headingCode,
      preview: <HeadingScrambleText {...t("stories.heading.texts", story)} />,
      stack: true,
    },
    { id: "loop", file: "LoopScrambleText.tsx", code: loopCode, preview: <LoopScrambleText /> },
    {
      id: "triggers",
      file: "TriggerScrambleText.tsx",
      code: triggerCode,
      preview: <TriggerScrambleText {...t("stories.triggers.texts", story)} />,
    },
    {
      id: "charset",
      file: "CharsetScrambleText.tsx",
      code: charsetCode,
      preview: <CharsetScrambleText />,
    },
    {
      id: "metrics",
      file: "MetricsScrambleText.tsx",
      code: metricsCode,
      preview: <MetricsScrambleText {...t("stories.metrics.texts", story)} />,
    },
    {
      id: "intensity",
      file: "IntensityScrambleText.tsx",
      code: intensityCode,
      preview: <IntensityScrambleText />,
    },
    {
      id: "duration",
      file: "DurationScrambleText.tsx",
      code: durationCode,
      preview: <DurationScrambleText />,
    },
    {
      id: "asChild",
      file: "AsChildScrambleText.tsx",
      code: asChildCode,
      preview: <AsChildScrambleText {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "state",
      file: "StateScrambleText.tsx",
      code: stateCode,
      preview: <StateScrambleText {...t("stories.state.texts", story)} />,
      stack: true,
    },
    {
      id: "callbacks",
      file: "CallbacksScrambleText.tsx",
      code: callbacksCode,
      preview: <CallbacksScrambleText {...t("stories.callbacks.texts", story)} />,
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

      <ScrambleTextPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindScrambleText.tsx">
            <TailwindScrambleText {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantScrambleText.tsx">
            <VariantScrambleText />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="scramble-text-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledScrambleText.tsx">
              <StyledScrambleText {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="ScrambleText"
        to="/effects/style/scramble-text/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
