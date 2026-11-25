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
import { CollapseTransitionPlayground } from "./CollapseTransitionPlayground.tsx";
import { AsChildCollapseTransition } from "./examples/AsChildCollapseTransition.tsx";
import asChildCode from "./examples/AsChildCollapseTransition.tsx?raw";
import { BaseCollapseTransition } from "./examples/BaseCollapseTransition.tsx";
import baseCode from "./examples/BaseCollapseTransition.tsx?raw";
import { CallbacksCollapseTransition } from "./examples/CallbacksCollapseTransition.tsx";
import callbacksCode from "./examples/CallbacksCollapseTransition.tsx?raw";
import { CollapsedSizeCollapseTransition } from "./examples/CollapsedSizeCollapseTransition.tsx";
import collapsedSizeCode from "./examples/CollapsedSizeCollapseTransition.tsx?raw";
import { DisabledCollapseTransition } from "./examples/DisabledCollapseTransition.tsx";
import disabledCode from "./examples/DisabledCollapseTransition.tsx?raw";
import { InitialCollapseTransition } from "./examples/InitialCollapseTransition.tsx";
import initialCode from "./examples/InitialCollapseTransition.tsx?raw";
import { KeepMountedCollapseTransition } from "./examples/KeepMountedCollapseTransition.tsx";
import keepMountedCode from "./examples/KeepMountedCollapseTransition.tsx?raw";
import { LongContentCollapseTransition } from "./examples/LongContentCollapseTransition.tsx";
import longContentCode from "./examples/LongContentCollapseTransition.tsx?raw";
import { PreserveSpaceCollapseTransition } from "./examples/PreserveSpaceCollapseTransition.tsx";
import preserveSpaceCode from "./examples/PreserveSpaceCollapseTransition.tsx?raw";
import { StartCollapsedCollapseTransition } from "./examples/StartCollapsedCollapseTransition.tsx";
import startCollapsedCode from "./examples/StartCollapsedCollapseTransition.tsx?raw";
import { StyledCollapseTransition } from "./examples/StyledCollapseTransition.tsx";
import styledCode from "./examples/StyledCollapseTransition.tsx?raw";
import overridesCss from "./examples/collapse-transition-overrides.css?raw";
import { TailwindCollapseTransition } from "./examples/TailwindCollapseTransition.tsx";
import tailwindCode from "./examples/TailwindCollapseTransition.tsx?raw";
import { TimingCollapseTransition } from "./examples/TimingCollapseTransition.tsx";
import timingCode from "./examples/TimingCollapseTransition.tsx?raw";
import { UtilitiesCollapseTransition } from "./examples/UtilitiesCollapseTransition.tsx";
import utilitiesCode from "./examples/UtilitiesCollapseTransition.tsx?raw";
import { VariantCollapseTransition } from "./examples/VariantCollapseTransition.tsx";
import variantCode from "./examples/VariantCollapseTransition.tsx?raw";
import { WidthCollapseTransition } from "./examples/WidthCollapseTransition.tsx";
import widthCode from "./examples/WidthCollapseTransition.tsx?raw";
import "./CollapseTransitionPage.scss";

type StoryId =
  | "base"
  | "startCollapsed"
  | "timing"
  | "longContent"
  | "collapsedSize"
  | "width"
  | "preserveSpace"
  | "keepMounted"
  | "initial"
  | "callbacks"
  | "disabled"
  | "asChild"
  | "utilities";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

const importCode = `import "@gem-org/gemsitions/collapse-transition.css";
import { CollapseTransition } from "@gem-org/gemsitions/collapse-transition";`;

const story = { returnObjects: true } as const;

export function CollapseTransitionPage() {
  const { t } = useTranslation("collapseTransition");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseCollapseTransition.tsx",
      code: baseCode,
      preview: <BaseCollapseTransition {...t("stories.base.texts", story)} />,
    },
    {
      id: "startCollapsed",
      file: "StartCollapsedCollapseTransition.tsx",
      code: startCollapsedCode,
      preview: <StartCollapsedCollapseTransition {...t("stories.startCollapsed.texts", story)} />,
    },
    {
      id: "timing",
      file: "TimingCollapseTransition.tsx",
      code: timingCode,
      preview: <TimingCollapseTransition {...t("stories.timing.texts", story)} />,
    },
    {
      id: "longContent",
      file: "LongContentCollapseTransition.tsx",
      code: longContentCode,
      preview: <LongContentCollapseTransition {...t("stories.longContent.texts", story)} />,
    },
    {
      id: "collapsedSize",
      file: "CollapsedSizeCollapseTransition.tsx",
      code: collapsedSizeCode,
      preview: <CollapsedSizeCollapseTransition {...t("stories.collapsedSize.texts", story)} />,
    },
    {
      id: "width",
      file: "WidthCollapseTransition.tsx",
      code: widthCode,
      preview: <WidthCollapseTransition {...t("stories.width.texts", story)} />,
    },
    {
      id: "preserveSpace",
      file: "PreserveSpaceCollapseTransition.tsx",
      code: preserveSpaceCode,
      preview: <PreserveSpaceCollapseTransition {...t("stories.preserveSpace.texts", story)} />,
    },
    {
      id: "keepMounted",
      file: "KeepMountedCollapseTransition.tsx",
      code: keepMountedCode,
      preview: <KeepMountedCollapseTransition {...t("stories.keepMounted.texts", story)} />,
    },
    {
      id: "initial",
      file: "InitialCollapseTransition.tsx",
      code: initialCode,
      preview: <InitialCollapseTransition {...t("stories.initial.texts", story)} />,
    },
    {
      id: "callbacks",
      file: "CallbacksCollapseTransition.tsx",
      code: callbacksCode,
      preview: <CallbacksCollapseTransition {...t("stories.callbacks.texts", story)} />,
    },
    {
      id: "disabled",
      file: "DisabledCollapseTransition.tsx",
      code: disabledCode,
      preview: <DisabledCollapseTransition {...t("stories.disabled.texts", story)} />,
    },
    {
      id: "asChild",
      file: "AsChildCollapseTransition.tsx",
      code: asChildCode,
      preview: <AsChildCollapseTransition {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "utilities",
      file: "UtilitiesCollapseTransition.tsx",
      code: utilitiesCode,
      preview: <UtilitiesCollapseTransition {...t("stories.utilities.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath={importCode}
      />

      <CollapseTransitionPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindCollapseTransition.tsx" stack>
            <TailwindCollapseTransition {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantCollapseTransition.tsx" stack>
            <VariantCollapseTransition {...t("styles.variant", story)} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock
              code={overridesCss}
              label="collapse-transition-overrides.css"
              language="css"
            />
            <DemoBlock code={styledCode} label="StyledCollapseTransition.tsx" stack>
              <StyledCollapseTransition {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="CollapseTransition"
        to="/transitions/mount-unmount/collapse-transition/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
