import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { ApiLinkSection } from "../../../components/ApiLinkSection.tsx";
import { CodeBlock, DemoBlock, DocsPageHeader, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { StyleChangesSection } from "../../../components/StyleChangesSection.tsx";
import { TransitionPlayground } from "./TransitionPlayground.tsx";
import overridesCss from "./examples/transition-overrides.css?raw";
import { AppearTransition } from "./examples/AppearTransition.tsx";
import appearCode from "./examples/AppearTransition.tsx?raw";
import { BaseTransition } from "./examples/BaseTransition.tsx";
import baseCode from "./examples/BaseTransition.tsx?raw";
import { CallbacksTransition } from "./examples/CallbacksTransition.tsx";
import callbacksCode from "./examples/CallbacksTransition.tsx?raw";
import { CollapseTransition } from "./examples/CollapseTransition.tsx";
import collapseCode from "./examples/CollapseTransition.tsx?raw";
import { EffectsTransition } from "./examples/EffectsTransition.tsx";
import effectsCode from "./examples/EffectsTransition.tsx?raw";
import { KeepMountedTransition } from "./examples/KeepMountedTransition.tsx";
import keepMountedCode from "./examples/KeepMountedTransition.tsx?raw";
import { RenderPropTransition } from "./examples/RenderPropTransition.tsx";
import renderPropCode from "./examples/RenderPropTransition.tsx?raw";
import { StaggerTransition } from "./examples/StaggerTransition.tsx";
import staggerCode from "./examples/StaggerTransition.tsx?raw";
import { StyledTransition } from "./examples/StyledTransition.tsx";
import styledCode from "./examples/StyledTransition.tsx?raw";
import { TailwindTransition } from "./examples/TailwindTransition.tsx";
import tailwindCode from "./examples/TailwindTransition.tsx?raw";
import { TimingTransition } from "./examples/TimingTransition.tsx";
import timingCode from "./examples/TimingTransition.tsx?raw";
import { VariantTransition } from "./examples/VariantTransition.tsx";
import variantCode from "./examples/VariantTransition.tsx?raw";
import type { PanelCopy, ToggleCopy } from "./examples/demo.ts";
import "./TransitionPage.scss";

type StoryId =
  | "base"
  | "effects"
  | "collapse"
  | "timing"
  | "stagger"
  | "appear"
  | "keepMounted"
  | "renderProp"
  | "callbacks";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

export function TransitionPage() {
  const { t } = useTranslation("transition");
  const story = { returnObjects: true } as const;
  const toggle = t("common.toggle", story) as ToggleCopy;
  const panel = t("common.panel", story) as PanelCopy;

  const stories: Story[] = [
    { id: "base", file: "BaseTransition.tsx", code: baseCode, preview: <BaseTransition {...toggle} {...panel} /> },
    { id: "effects", file: "EffectsTransition.tsx", code: effectsCode, preview: <EffectsTransition {...toggle} /> },
    {
      id: "collapse",
      file: "CollapseTransition.tsx",
      code: collapseCode,
      preview: <CollapseTransition {...t("stories.collapse.texts", story)} />,
    },
    { id: "timing", file: "TimingTransition.tsx", code: timingCode, preview: <TimingTransition {...toggle} /> },
    {
      id: "stagger",
      file: "StaggerTransition.tsx",
      code: staggerCode,
      preview: <StaggerTransition {...toggle} {...t("stories.stagger.texts", story)} />,
    },
    {
      id: "appear",
      file: "AppearTransition.tsx",
      code: appearCode,
      preview: <AppearTransition {...panel} replay={t("stories.appear.texts.replay")} />,
    },
    {
      id: "keepMounted",
      file: "KeepMountedTransition.tsx",
      code: keepMountedCode,
      preview: <KeepMountedTransition {...toggle} {...t("stories.keepMounted.texts", story)} />,
    },
    {
      id: "renderProp",
      file: "RenderPropTransition.tsx",
      code: renderPropCode,
      preview: <RenderPropTransition {...toggle} {...panel} {...t("stories.renderProp.texts", story)} />,
    },
    {
      id: "callbacks",
      file: "CallbacksTransition.tsx",
      code: callbacksCode,
      preview: <CallbacksTransition {...toggle} {...panel} {...t("stories.callbacks.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Transition } from "@gem-org/gem-system"'
      />

      <TransitionPlayground toggle={toggle} panel={panel} />

      {stories.map((item) => (
        <DocsSection
          key={item.id}
          title={t(`stories.${item.id}.title`)}
          description={t(`stories.${item.id}.description`)}
        >
          <DemoBlock code={item.code} label={item.file}>
            {item.preview}
          </DemoBlock>
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindTransition.tsx">
            <TailwindTransition {...toggle} {...panel} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantTransition.tsx">
            <VariantTransition {...toggle} {...panel} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="transition-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledTransition.tsx">
              <StyledTransition {...toggle} {...panel} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="Transition" to="/data-display/transition/api" linkLabel={t("apiLink")} />
    </div>
  );
}
