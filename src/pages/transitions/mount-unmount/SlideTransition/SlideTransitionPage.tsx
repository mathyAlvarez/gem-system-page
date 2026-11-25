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
import { SlideTransitionPlayground } from "./SlideTransitionPlayground.tsx";
import { AsChildSlideTransition } from "./examples/AsChildSlideTransition.tsx";
import asChildCode from "./examples/AsChildSlideTransition.tsx?raw";
import { AxisSlideTransition } from "./examples/AxisSlideTransition.tsx";
import axisCode from "./examples/AxisSlideTransition.tsx?raw";
import { BaseSlideTransition } from "./examples/BaseSlideTransition.tsx";
import baseCode from "./examples/BaseSlideTransition.tsx?raw";
import { CallbacksSlideTransition } from "./examples/CallbacksSlideTransition.tsx";
import callbacksCode from "./examples/CallbacksSlideTransition.tsx?raw";
import { DisabledSlideTransition } from "./examples/DisabledSlideTransition.tsx";
import disabledCode from "./examples/DisabledSlideTransition.tsx?raw";
import { FromBottomSlideTransition } from "./examples/FromBottomSlideTransition.tsx";
import fromBottomCode from "./examples/FromBottomSlideTransition.tsx?raw";
import { FromLeftSlideTransition } from "./examples/FromLeftSlideTransition.tsx";
import fromLeftCode from "./examples/FromLeftSlideTransition.tsx?raw";
import { FromRightSlideTransition } from "./examples/FromRightSlideTransition.tsx";
import fromRightCode from "./examples/FromRightSlideTransition.tsx?raw";
import { FromTopSlideTransition } from "./examples/FromTopSlideTransition.tsx";
import fromTopCode from "./examples/FromTopSlideTransition.tsx?raw";
import { InitialSlideTransition } from "./examples/InitialSlideTransition.tsx";
import initialCode from "./examples/InitialSlideTransition.tsx?raw";
import { KeepMountedSlideTransition } from "./examples/KeepMountedSlideTransition.tsx";
import keepMountedCode from "./examples/KeepMountedSlideTransition.tsx?raw";
import { NoFadeSlideTransition } from "./examples/NoFadeSlideTransition.tsx";
import noFadeCode from "./examples/NoFadeSlideTransition.tsx?raw";
import { StyledSlideTransition } from "./examples/StyledSlideTransition.tsx";
import styledCode from "./examples/StyledSlideTransition.tsx?raw";
import overridesCss from "./examples/slide-transition-overrides.css?raw";
import { TailwindSlideTransition } from "./examples/TailwindSlideTransition.tsx";
import tailwindCode from "./examples/TailwindSlideTransition.tsx?raw";
import { TimingSlideTransition } from "./examples/TimingSlideTransition.tsx";
import timingCode from "./examples/TimingSlideTransition.tsx?raw";
import { UtilitiesSlideTransition } from "./examples/UtilitiesSlideTransition.tsx";
import utilitiesCode from "./examples/UtilitiesSlideTransition.tsx?raw";
import { VariantSlideTransition } from "./examples/VariantSlideTransition.tsx";
import variantCode from "./examples/VariantSlideTransition.tsx?raw";
import "./SlideTransitionPage.scss";

type StoryId =
  | "base"
  | "fromTop"
  | "fromBottom"
  | "fromLeft"
  | "fromRight"
  | "timing"
  | "noFade"
  | "axis"
  | "keepMounted"
  | "initial"
  | "callbacks"
  | "disabled"
  | "asChild"
  | "utilities";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

const importCode = `import "@gem-org/gemsitions/slide-transition.css";
import { SlideTransition } from "@gem-org/gemsitions/slide-transition";`;

const story = { returnObjects: true } as const;

export function SlideTransitionPage() {
  const { t } = useTranslation("slideTransition");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseSlideTransition.tsx",
      code: baseCode,
      preview: <BaseSlideTransition {...t("stories.base.texts", story)} />,
    },
    {
      id: "fromTop",
      file: "FromTopSlideTransition.tsx",
      code: fromTopCode,
      preview: <FromTopSlideTransition {...t("stories.fromTop.texts", story)} />,
    },
    {
      id: "fromBottom",
      file: "FromBottomSlideTransition.tsx",
      code: fromBottomCode,
      preview: <FromBottomSlideTransition {...t("stories.fromBottom.texts", story)} />,
    },
    {
      id: "fromLeft",
      file: "FromLeftSlideTransition.tsx",
      code: fromLeftCode,
      preview: <FromLeftSlideTransition {...t("stories.fromLeft.texts", story)} />,
    },
    {
      id: "fromRight",
      file: "FromRightSlideTransition.tsx",
      code: fromRightCode,
      preview: <FromRightSlideTransition {...t("stories.fromRight.texts", story)} />,
    },
    {
      id: "timing",
      file: "TimingSlideTransition.tsx",
      code: timingCode,
      preview: <TimingSlideTransition {...t("stories.timing.texts", story)} />,
    },
    {
      id: "noFade",
      file: "NoFadeSlideTransition.tsx",
      code: noFadeCode,
      preview: <NoFadeSlideTransition {...t("stories.noFade.texts", story)} />,
    },
    {
      id: "axis",
      file: "AxisSlideTransition.tsx",
      code: axisCode,
      preview: <AxisSlideTransition {...t("stories.axis.texts", story)} />,
    },
    {
      id: "keepMounted",
      file: "KeepMountedSlideTransition.tsx",
      code: keepMountedCode,
      preview: <KeepMountedSlideTransition {...t("stories.keepMounted.texts", story)} />,
    },
    {
      id: "initial",
      file: "InitialSlideTransition.tsx",
      code: initialCode,
      preview: <InitialSlideTransition {...t("stories.initial.texts", story)} />,
    },
    {
      id: "callbacks",
      file: "CallbacksSlideTransition.tsx",
      code: callbacksCode,
      preview: <CallbacksSlideTransition {...t("stories.callbacks.texts", story)} />,
    },
    {
      id: "disabled",
      file: "DisabledSlideTransition.tsx",
      code: disabledCode,
      preview: <DisabledSlideTransition {...t("stories.disabled.texts", story)} />,
    },
    {
      id: "asChild",
      file: "AsChildSlideTransition.tsx",
      code: asChildCode,
      preview: <AsChildSlideTransition {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "utilities",
      file: "UtilitiesSlideTransition.tsx",
      code: utilitiesCode,
      preview: <UtilitiesSlideTransition {...t("stories.utilities.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath={importCode}
      />

      <SlideTransitionPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindSlideTransition.tsx" stack>
            <TailwindSlideTransition {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantSlideTransition.tsx" stack>
            <VariantSlideTransition {...t("styles.variant", story)} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="slide-transition-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledSlideTransition.tsx" stack>
              <StyledSlideTransition {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="SlideTransition"
        to="/transitions/mount-unmount/slide-transition/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
