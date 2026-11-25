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
import { FlickerPlayground } from "./FlickerPlayground.tsx";
import { AsChildFlicker } from "./examples/AsChildFlicker.tsx";
import asChildCode from "./examples/AsChildFlicker.tsx?raw";
import { CallbacksFlicker } from "./examples/CallbacksFlicker.tsx";
import callbacksCode from "./examples/CallbacksFlicker.tsx?raw";
import { ColorFlicker } from "./examples/ColorFlicker.tsx";
import colorCode from "./examples/ColorFlicker.tsx?raw";
import { DurationFlicker } from "./examples/DurationFlicker.tsx";
import durationCode from "./examples/DurationFlicker.tsx?raw";
import { EdgeFlicker } from "./examples/EdgeFlicker.tsx";
import edgeCode from "./examples/EdgeFlicker.tsx?raw";
import overridesCss from "./examples/flicker-overrides.css?raw";
import { IntensityFlicker } from "./examples/IntensityFlicker.tsx";
import intensityCode from "./examples/IntensityFlicker.tsx?raw";
import { SignFlicker } from "./examples/SignFlicker.tsx";
import signCode from "./examples/SignFlicker.tsx?raw";
import { SpreadFlicker } from "./examples/SpreadFlicker.tsx";
import spreadCode from "./examples/SpreadFlicker.tsx?raw";
import { StateFlicker } from "./examples/StateFlicker.tsx";
import stateCode from "./examples/StateFlicker.tsx?raw";
import { StyledFlicker } from "./examples/StyledFlicker.tsx";
import styledCode from "./examples/StyledFlicker.tsx?raw";
import { TailwindFlicker } from "./examples/TailwindFlicker.tsx";
import tailwindCode from "./examples/TailwindFlicker.tsx?raw";
import { TextFlicker } from "./examples/TextFlicker.tsx";
import textCode from "./examples/TextFlicker.tsx?raw";
import { TriggerFlicker } from "./examples/TriggerFlicker.tsx";
import triggerCode from "./examples/TriggerFlicker.tsx?raw";
import { VariantFlicker } from "./examples/VariantFlicker.tsx";
import variantCode from "./examples/VariantFlicker.tsx?raw";
import { VariantsFlicker } from "./examples/VariantsFlicker.tsx";
import variantsCode from "./examples/VariantsFlicker.tsx?raw";
import "./FlickerPage.scss";

type StoryId =
  | "sign"
  | "variants"
  | "edge"
  | "text"
  | "triggers"
  | "spread"
  | "duration"
  | "intensity"
  | "color"
  | "asChild"
  | "state"
  | "callbacks";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode; stack?: boolean };

const importCode = `import "@gem-org/gemffects/flicker.css";
import { Flicker } from "@gem-org/gemffects/flicker";`;

const story = { returnObjects: true } as const;

export function FlickerPage() {
  const { t } = useTranslation("flicker");

  const stories: Story[] = [
    {
      id: "sign",
      file: "SignFlicker.tsx",
      code: signCode,
      preview: <SignFlicker {...t("stories.sign.texts", story)} />,
    },
    {
      id: "variants",
      file: "VariantsFlicker.tsx",
      code: variantsCode,
      preview: <VariantsFlicker />,
    },
    { id: "edge", file: "EdgeFlicker.tsx", code: edgeCode, preview: <EdgeFlicker /> },
    {
      id: "text",
      file: "TextFlicker.tsx",
      code: textCode,
      preview: <TextFlicker {...t("stories.text.texts", story)} />,
    },
    {
      id: "triggers",
      file: "TriggerFlicker.tsx",
      code: triggerCode,
      preview: <TriggerFlicker {...t("stories.triggers.texts", story)} />,
    },
    { id: "spread", file: "SpreadFlicker.tsx", code: spreadCode, preview: <SpreadFlicker /> },
    {
      id: "duration",
      file: "DurationFlicker.tsx",
      code: durationCode,
      preview: <DurationFlicker />,
    },
    {
      id: "intensity",
      file: "IntensityFlicker.tsx",
      code: intensityCode,
      preview: <IntensityFlicker />,
    },
    { id: "color", file: "ColorFlicker.tsx", code: colorCode, preview: <ColorFlicker /> },
    {
      id: "asChild",
      file: "AsChildFlicker.tsx",
      code: asChildCode,
      preview: <AsChildFlicker {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "state",
      file: "StateFlicker.tsx",
      code: stateCode,
      preview: <StateFlicker {...t("stories.state.texts", story)} />,
      stack: true,
    },
    {
      id: "callbacks",
      file: "CallbacksFlicker.tsx",
      code: callbacksCode,
      preview: <CallbacksFlicker {...t("stories.callbacks.texts", story)} />,
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

      <FlickerPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindFlicker.tsx">
            <TailwindFlicker {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantFlicker.tsx">
            <VariantFlicker />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="flicker-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledFlicker.tsx">
              <StyledFlicker {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="Flicker"
        to="/effects/style/flicker/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
