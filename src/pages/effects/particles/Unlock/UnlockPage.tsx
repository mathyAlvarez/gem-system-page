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
import { UnlockPlayground } from "./UnlockPlayground.tsx";
import { AsChildUnlock } from "./examples/AsChildUnlock.tsx";
import asChildCode from "./examples/AsChildUnlock.tsx?raw";
import { BaseUnlock } from "./examples/BaseUnlock.tsx";
import baseCode from "./examples/BaseUnlock.tsx?raw";
import { CallbacksUnlock } from "./examples/CallbacksUnlock.tsx";
import callbacksCode from "./examples/CallbacksUnlock.tsx?raw";
import { ColorsUnlock } from "./examples/ColorsUnlock.tsx";
import colorsCode from "./examples/ColorsUnlock.tsx?raw";
import { CoverNodeUnlock } from "./examples/CoverNodeUnlock.tsx";
import coverNodeCode from "./examples/CoverNodeUnlock.tsx?raw";
import { CoverSrcUnlock } from "./examples/CoverSrcUnlock.tsx";
import coverSrcCode from "./examples/CoverSrcUnlock.tsx?raw";
import { DirectionsUnlock } from "./examples/DirectionsUnlock.tsx";
import directionsCode from "./examples/DirectionsUnlock.tsx?raw";
import { DurationUnlock } from "./examples/DurationUnlock.tsx";
import durationCode from "./examples/DurationUnlock.tsx?raw";
import { GapUnlock } from "./examples/GapUnlock.tsx";
import gapCode from "./examples/GapUnlock.tsx?raw";
import { IntensityUnlock } from "./examples/IntensityUnlock.tsx";
import intensityCode from "./examples/IntensityUnlock.tsx?raw";
import { StaggerUnlock } from "./examples/StaggerUnlock.tsx";
import staggerCode from "./examples/StaggerUnlock.tsx?raw";
import { StateUnlock } from "./examples/StateUnlock.tsx";
import stateCode from "./examples/StateUnlock.tsx?raw";
import { StyledUnlock } from "./examples/StyledUnlock.tsx";
import styledCode from "./examples/StyledUnlock.tsx?raw";
import { TailwindUnlock } from "./examples/TailwindUnlock.tsx";
import tailwindCode from "./examples/TailwindUnlock.tsx?raw";
import { TriggerUnlock } from "./examples/TriggerUnlock.tsx";
import triggerCode from "./examples/TriggerUnlock.tsx?raw";
import overridesCss from "./examples/unlock-overrides.css?raw";
import { VariantsUnlock } from "./examples/VariantsUnlock.tsx";
import variantsCode from "./examples/VariantsUnlock.tsx?raw";
import { VariantUnlock } from "./examples/VariantUnlock.tsx";
import variantCode from "./examples/VariantUnlock.tsx?raw";
import "./UnlockPage.scss";

type StoryId =
  | "base"
  | "directions"
  | "variants"
  | "triggers"
  | "gap"
  | "coverSrc"
  | "coverNode"
  | "colors"
  | "duration"
  | "stagger"
  | "intensity"
  | "asChild"
  | "state"
  | "callbacks";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode; stack?: boolean };

const importCode = `import "@gem-org/gemffects/unlock.css";
import { Unlock } from "@gem-org/gemffects/unlock";`;

const story = { returnObjects: true } as const;

export function UnlockPage() {
  const { t } = useTranslation("unlock");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseUnlock.tsx",
      code: baseCode,
      preview: <BaseUnlock {...t("stories.base.texts", story)} />,
    },
    {
      id: "directions",
      file: "DirectionsUnlock.tsx",
      code: directionsCode,
      preview: <DirectionsUnlock />,
    },
    { id: "variants", file: "VariantsUnlock.tsx", code: variantsCode, preview: <VariantsUnlock /> },
    {
      id: "triggers",
      file: "TriggerUnlock.tsx",
      code: triggerCode,
      preview: <TriggerUnlock {...t("stories.triggers.texts", story)} />,
      stack: true,
    },
    { id: "gap", file: "GapUnlock.tsx", code: gapCode, preview: <GapUnlock /> },
    {
      id: "coverSrc",
      file: "CoverSrcUnlock.tsx",
      code: coverSrcCode,
      preview: <CoverSrcUnlock {...t("stories.coverSrc.texts", story)} />,
    },
    {
      id: "coverNode",
      file: "CoverNodeUnlock.tsx",
      code: coverNodeCode,
      preview: <CoverNodeUnlock {...t("stories.coverNode.texts", story)} />,
    },
    { id: "colors", file: "ColorsUnlock.tsx", code: colorsCode, preview: <ColorsUnlock /> },
    { id: "duration", file: "DurationUnlock.tsx", code: durationCode, preview: <DurationUnlock /> },
    { id: "stagger", file: "StaggerUnlock.tsx", code: staggerCode, preview: <StaggerUnlock /> },
    {
      id: "intensity",
      file: "IntensityUnlock.tsx",
      code: intensityCode,
      preview: <IntensityUnlock />,
    },
    {
      id: "asChild",
      file: "AsChildUnlock.tsx",
      code: asChildCode,
      preview: <AsChildUnlock {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "state",
      file: "StateUnlock.tsx",
      code: stateCode,
      preview: <StateUnlock {...t("stories.state.texts", story)} />,
      stack: true,
    },
    {
      id: "callbacks",
      file: "CallbacksUnlock.tsx",
      code: callbacksCode,
      preview: <CallbacksUnlock {...t("stories.callbacks.texts", story)} />,
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

      <UnlockPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindUnlock.tsx">
            <TailwindUnlock {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantUnlock.tsx">
            <VariantUnlock />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="unlock-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledUnlock.tsx">
              <StyledUnlock {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="Unlock"
        to="/effects/particles/unlock/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
