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
import { ScaleTransitionPlayground } from "./ScaleTransitionPlayground.tsx";
import { AsChildScaleTransition } from "./examples/AsChildScaleTransition.tsx";
import asChildCode from "./examples/AsChildScaleTransition.tsx?raw";
import { BaseScaleTransition } from "./examples/BaseScaleTransition.tsx";
import baseCode from "./examples/BaseScaleTransition.tsx?raw";
import { CallbacksScaleTransition } from "./examples/CallbacksScaleTransition.tsx";
import callbacksCode from "./examples/CallbacksScaleTransition.tsx?raw";
import { DisabledScaleTransition } from "./examples/DisabledScaleTransition.tsx";
import disabledCode from "./examples/DisabledScaleTransition.tsx?raw";
import { FromTopScaleTransition } from "./examples/FromTopScaleTransition.tsx";
import fromTopCode from "./examples/FromTopScaleTransition.tsx?raw";
import { InitialScaleTransition } from "./examples/InitialScaleTransition.tsx";
import initialCode from "./examples/InitialScaleTransition.tsx?raw";
import { KeepMountedScaleTransition } from "./examples/KeepMountedScaleTransition.tsx";
import keepMountedCode from "./examples/KeepMountedScaleTransition.tsx?raw";
import { ModalPopScaleTransition } from "./examples/ModalPopScaleTransition.tsx";
import modalPopCode from "./examples/ModalPopScaleTransition.tsx?raw";
import { PreserveSpaceScaleTransition } from "./examples/PreserveSpaceScaleTransition.tsx";
import preserveSpaceCode from "./examples/PreserveSpaceScaleTransition.tsx?raw";
import { StyledScaleTransition } from "./examples/StyledScaleTransition.tsx";
import styledCode from "./examples/StyledScaleTransition.tsx?raw";
import overridesCss from "./examples/scale-transition-overrides.css?raw";
import { TailwindScaleTransition } from "./examples/TailwindScaleTransition.tsx";
import tailwindCode from "./examples/TailwindScaleTransition.tsx?raw";
import { TimingScaleTransition } from "./examples/TimingScaleTransition.tsx";
import timingCode from "./examples/TimingScaleTransition.tsx?raw";
import { TooltipScaleTransition } from "./examples/TooltipScaleTransition.tsx";
import tooltipCode from "./examples/TooltipScaleTransition.tsx?raw";
import { UtilitiesScaleTransition } from "./examples/UtilitiesScaleTransition.tsx";
import utilitiesCode from "./examples/UtilitiesScaleTransition.tsx?raw";
import { VariantScaleTransition } from "./examples/VariantScaleTransition.tsx";
import variantCode from "./examples/VariantScaleTransition.tsx?raw";
import "./ScaleTransitionPage.scss";

type StoryId =
  | "base"
  | "fromTop"
  | "modalPop"
  | "tooltip"
  | "timing"
  | "preserveSpace"
  | "keepMounted"
  | "initial"
  | "callbacks"
  | "disabled"
  | "asChild"
  | "utilities";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

const importCode = `import "@gem-org/gemsitions/scale-transition.css";
import { ScaleTransition } from "@gem-org/gemsitions/scale-transition";`;

const story = { returnObjects: true } as const;

export function ScaleTransitionPage() {
  const { t } = useTranslation("scaleTransition");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseScaleTransition.tsx",
      code: baseCode,
      preview: <BaseScaleTransition {...t("stories.base.texts", story)} />,
    },
    {
      id: "fromTop",
      file: "FromTopScaleTransition.tsx",
      code: fromTopCode,
      preview: <FromTopScaleTransition {...t("stories.fromTop.texts", story)} />,
    },
    {
      id: "modalPop",
      file: "ModalPopScaleTransition.tsx",
      code: modalPopCode,
      preview: <ModalPopScaleTransition {...t("stories.modalPop.texts", story)} />,
    },
    {
      id: "tooltip",
      file: "TooltipScaleTransition.tsx",
      code: tooltipCode,
      preview: <TooltipScaleTransition {...t("stories.tooltip.texts", story)} />,
    },
    {
      id: "timing",
      file: "TimingScaleTransition.tsx",
      code: timingCode,
      preview: <TimingScaleTransition {...t("stories.timing.texts", story)} />,
    },
    {
      id: "preserveSpace",
      file: "PreserveSpaceScaleTransition.tsx",
      code: preserveSpaceCode,
      preview: <PreserveSpaceScaleTransition {...t("stories.preserveSpace.texts", story)} />,
    },
    {
      id: "keepMounted",
      file: "KeepMountedScaleTransition.tsx",
      code: keepMountedCode,
      preview: <KeepMountedScaleTransition {...t("stories.keepMounted.texts", story)} />,
    },
    {
      id: "initial",
      file: "InitialScaleTransition.tsx",
      code: initialCode,
      preview: <InitialScaleTransition {...t("stories.initial.texts", story)} />,
    },
    {
      id: "callbacks",
      file: "CallbacksScaleTransition.tsx",
      code: callbacksCode,
      preview: <CallbacksScaleTransition {...t("stories.callbacks.texts", story)} />,
    },
    {
      id: "disabled",
      file: "DisabledScaleTransition.tsx",
      code: disabledCode,
      preview: <DisabledScaleTransition {...t("stories.disabled.texts", story)} />,
    },
    {
      id: "asChild",
      file: "AsChildScaleTransition.tsx",
      code: asChildCode,
      preview: <AsChildScaleTransition {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "utilities",
      file: "UtilitiesScaleTransition.tsx",
      code: utilitiesCode,
      preview: <UtilitiesScaleTransition {...t("stories.utilities.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath={importCode}
      />

      <ScaleTransitionPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindScaleTransition.tsx" stack>
            <TailwindScaleTransition {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantScaleTransition.tsx" stack>
            <VariantScaleTransition {...t("styles.variant", story)} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="scale-transition-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledScaleTransition.tsx" stack>
              <StyledScaleTransition {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="ScaleTransition"
        to="/transitions/mount-unmount/scale-transition/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
