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
import { ViewTransitionPlayground } from "./ViewTransitionPlayground.tsx";
import { AsChildViewTransition } from "./examples/AsChildViewTransition.tsx";
import asChildCode from "./examples/AsChildViewTransition.tsx?raw";
import { BaseViewTransition } from "./examples/BaseViewTransition.tsx";
import baseCode from "./examples/BaseViewTransition.tsx?raw";
import { CallbacksViewTransition } from "./examples/CallbacksViewTransition.tsx";
import callbacksCode from "./examples/CallbacksViewTransition.tsx?raw";
import { DisabledViewTransition } from "./examples/DisabledViewTransition.tsx";
import disabledCode from "./examples/DisabledViewTransition.tsx?raw";
import { EffectScaleViewTransition } from "./examples/EffectScaleViewTransition.tsx";
import effectScaleCode from "./examples/EffectScaleViewTransition.tsx?raw";
import { EffectSlideViewTransition } from "./examples/EffectSlideViewTransition.tsx";
import effectSlideCode from "./examples/EffectSlideViewTransition.tsx?raw";
import { FallbackNoneViewTransition } from "./examples/FallbackNoneViewTransition.tsx";
import fallbackNoneCode from "./examples/FallbackNoneViewTransition.tsx?raw";
import { PresenceViewTransition } from "./examples/PresenceViewTransition.tsx";
import presenceCode from "./examples/PresenceViewTransition.tsx?raw";
import { SharedNameViewTransition } from "./examples/SharedNameViewTransition.tsx";
import sharedNameCode from "./examples/SharedNameViewTransition.tsx?raw";
import { SkipInitialViewTransition } from "./examples/SkipInitialViewTransition.tsx";
import skipInitialCode from "./examples/SkipInitialViewTransition.tsx?raw";
import { StyledViewTransition } from "./examples/StyledViewTransition.tsx";
import styledCode from "./examples/StyledViewTransition.tsx?raw";
import overridesCss from "./examples/view-transition-overrides.css?raw";
import { TailwindViewTransition } from "./examples/TailwindViewTransition.tsx";
import tailwindCode from "./examples/TailwindViewTransition.tsx?raw";
import { TimingViewTransition } from "./examples/TimingViewTransition.tsx";
import timingCode from "./examples/TimingViewTransition.tsx?raw";
import { UtilitiesViewTransition } from "./examples/UtilitiesViewTransition.tsx";
import utilitiesCode from "./examples/UtilitiesViewTransition.tsx?raw";
import { VariantViewTransition } from "./examples/VariantViewTransition.tsx";
import variantCode from "./examples/VariantViewTransition.tsx?raw";
import "./ViewTransitionPage.scss";

type StoryId =
  | "base"
  | "effectSlide"
  | "effectScale"
  | "timing"
  | "presence"
  | "sharedName"
  | "fallbackNone"
  | "skipInitial"
  | "callbacks"
  | "disabled"
  | "asChild"
  | "utilities";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

const importCode = `import "@gem-org/gemsitions/view-transition.css";
import { ViewTransition } from "@gem-org/gemsitions/view-transition";`;

const story = { returnObjects: true } as const;

export function ViewTransitionPage() {
  const { t } = useTranslation("viewTransition");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseViewTransition.tsx",
      code: baseCode,
      preview: <BaseViewTransition {...t("stories.base.texts", story)} />,
    },
    {
      id: "effectSlide",
      file: "EffectSlideViewTransition.tsx",
      code: effectSlideCode,
      preview: <EffectSlideViewTransition {...t("stories.effectSlide.texts", story)} />,
    },
    {
      id: "effectScale",
      file: "EffectScaleViewTransition.tsx",
      code: effectScaleCode,
      preview: <EffectScaleViewTransition {...t("stories.effectScale.texts", story)} />,
    },
    {
      id: "timing",
      file: "TimingViewTransition.tsx",
      code: timingCode,
      preview: <TimingViewTransition {...t("stories.timing.texts", story)} />,
    },
    {
      id: "presence",
      file: "PresenceViewTransition.tsx",
      code: presenceCode,
      preview: <PresenceViewTransition {...t("stories.presence.texts", story)} />,
    },
    {
      id: "sharedName",
      file: "SharedNameViewTransition.tsx",
      code: sharedNameCode,
      preview: <SharedNameViewTransition {...t("stories.sharedName.texts", story)} />,
    },
    {
      id: "fallbackNone",
      file: "FallbackNoneViewTransition.tsx",
      code: fallbackNoneCode,
      preview: <FallbackNoneViewTransition {...t("stories.fallbackNone.texts", story)} />,
    },
    {
      id: "skipInitial",
      file: "SkipInitialViewTransition.tsx",
      code: skipInitialCode,
      preview: <SkipInitialViewTransition {...t("stories.skipInitial.texts", story)} />,
    },
    {
      id: "callbacks",
      file: "CallbacksViewTransition.tsx",
      code: callbacksCode,
      preview: <CallbacksViewTransition {...t("stories.callbacks.texts", story)} />,
    },
    {
      id: "disabled",
      file: "DisabledViewTransition.tsx",
      code: disabledCode,
      preview: <DisabledViewTransition {...t("stories.disabled.texts", story)} />,
    },
    {
      id: "asChild",
      file: "AsChildViewTransition.tsx",
      code: asChildCode,
      preview: <AsChildViewTransition {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "utilities",
      file: "UtilitiesViewTransition.tsx",
      code: utilitiesCode,
      preview: <UtilitiesViewTransition {...t("stories.utilities.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath={importCode}
      />

      <ViewTransitionPlayground />

      {stories.map((item) => (
        <DocsSection
          key={item.id}
          title={t(`stories.${item.id}.title`)}
          description={t(`stories.${item.id}.description`)}
        >
          <DemoBlock code={item.code} label={item.file} stack>
            {item.preview}
          </DemoBlock>
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindViewTransition.tsx" stack>
            <TailwindViewTransition {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantViewTransition.tsx" stack>
            <VariantViewTransition {...t("styles.variant", story)} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="view-transition-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledViewTransition.tsx" stack>
              <StyledViewTransition {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="ViewTransition"
        to="/transitions/views-layouts/view-transition/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
