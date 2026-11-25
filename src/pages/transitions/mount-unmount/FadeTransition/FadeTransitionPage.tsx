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
import { FadeTransitionPlayground } from "./FadeTransitionPlayground.tsx";
import { AsChildFadeTransition } from "./examples/AsChildFadeTransition.tsx";
import asChildCode from "./examples/AsChildFadeTransition.tsx?raw";
import { BaseFadeTransition } from "./examples/BaseFadeTransition.tsx";
import baseCode from "./examples/BaseFadeTransition.tsx?raw";
import { CallbacksFadeTransition } from "./examples/CallbacksFadeTransition.tsx";
import callbacksCode from "./examples/CallbacksFadeTransition.tsx?raw";
import { DisabledFadeTransition } from "./examples/DisabledFadeTransition.tsx";
import disabledCode from "./examples/DisabledFadeTransition.tsx?raw";
import { EnterFadeTransition } from "./examples/EnterFadeTransition.tsx";
import enterCode from "./examples/EnterFadeTransition.tsx?raw";
import { ExitFadeTransition } from "./examples/ExitFadeTransition.tsx";
import exitCode from "./examples/ExitFadeTransition.tsx?raw";
import { InitialFadeTransition } from "./examples/InitialFadeTransition.tsx";
import initialCode from "./examples/InitialFadeTransition.tsx?raw";
import { KeepMountedFadeTransition } from "./examples/KeepMountedFadeTransition.tsx";
import keepMountedCode from "./examples/KeepMountedFadeTransition.tsx?raw";
import { SlowFadeTransition } from "./examples/SlowFadeTransition.tsx";
import slowCode from "./examples/SlowFadeTransition.tsx?raw";
import { StyledFadeTransition } from "./examples/StyledFadeTransition.tsx";
import styledCode from "./examples/StyledFadeTransition.tsx?raw";
import overridesCss from "./examples/fade-transition-overrides.css?raw";
import { TailwindFadeTransition } from "./examples/TailwindFadeTransition.tsx";
import tailwindCode from "./examples/TailwindFadeTransition.tsx?raw";
import { TimingFadeTransition } from "./examples/TimingFadeTransition.tsx";
import timingCode from "./examples/TimingFadeTransition.tsx?raw";
import { UtilitiesFadeTransition } from "./examples/UtilitiesFadeTransition.tsx";
import utilitiesCode from "./examples/UtilitiesFadeTransition.tsx?raw";
import { VariantFadeTransition } from "./examples/VariantFadeTransition.tsx";
import variantCode from "./examples/VariantFadeTransition.tsx?raw";
import "./FadeTransitionPage.scss";

type StoryId =
  | "base"
  | "enter"
  | "exit"
  | "timing"
  | "slow"
  | "keepMounted"
  | "initial"
  | "callbacks"
  | "disabled"
  | "asChild"
  | "utilities";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

const importCode = `import "@gem-org/gemsitions/fade-transition.css";
import { FadeTransition } from "@gem-org/gemsitions/fade-transition";`;

const story = { returnObjects: true } as const;

export function FadeTransitionPage() {
  const { t } = useTranslation("fadeTransition");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseFadeTransition.tsx",
      code: baseCode,
      preview: <BaseFadeTransition {...t("stories.base.texts", story)} />,
    },
    {
      id: "enter",
      file: "EnterFadeTransition.tsx",
      code: enterCode,
      preview: <EnterFadeTransition {...t("stories.enter.texts", story)} />,
    },
    {
      id: "exit",
      file: "ExitFadeTransition.tsx",
      code: exitCode,
      preview: <ExitFadeTransition {...t("stories.exit.texts", story)} />,
    },
    {
      id: "timing",
      file: "TimingFadeTransition.tsx",
      code: timingCode,
      preview: <TimingFadeTransition {...t("stories.timing.texts", story)} />,
    },
    {
      id: "slow",
      file: "SlowFadeTransition.tsx",
      code: slowCode,
      preview: <SlowFadeTransition {...t("stories.slow.texts", story)} />,
    },
    {
      id: "keepMounted",
      file: "KeepMountedFadeTransition.tsx",
      code: keepMountedCode,
      preview: <KeepMountedFadeTransition {...t("stories.keepMounted.texts", story)} />,
    },
    {
      id: "initial",
      file: "InitialFadeTransition.tsx",
      code: initialCode,
      preview: <InitialFadeTransition {...t("stories.initial.texts", story)} />,
    },
    {
      id: "callbacks",
      file: "CallbacksFadeTransition.tsx",
      code: callbacksCode,
      preview: <CallbacksFadeTransition {...t("stories.callbacks.texts", story)} />,
    },
    {
      id: "disabled",
      file: "DisabledFadeTransition.tsx",
      code: disabledCode,
      preview: <DisabledFadeTransition {...t("stories.disabled.texts", story)} />,
    },
    {
      id: "asChild",
      file: "AsChildFadeTransition.tsx",
      code: asChildCode,
      preview: <AsChildFadeTransition {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "utilities",
      file: "UtilitiesFadeTransition.tsx",
      code: utilitiesCode,
      preview: <UtilitiesFadeTransition {...t("stories.utilities.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath={importCode}
      />

      <FadeTransitionPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindFadeTransition.tsx" stack>
            <TailwindFadeTransition {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantFadeTransition.tsx" stack>
            <VariantFadeTransition {...t("styles.variant", story)} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="fade-transition-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledFadeTransition.tsx" stack>
              <StyledFadeTransition {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="FadeTransition"
        to="/transitions/mount-unmount/fade-transition/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
