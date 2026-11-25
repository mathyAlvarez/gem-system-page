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
import { AutoAnimateContainerPlayground } from "./AutoAnimateContainerPlayground.tsx";
import { AsChildAutoAnimateContainer } from "./examples/AsChildAutoAnimateContainer.tsx";
import asChildCode from "./examples/AsChildAutoAnimateContainer.tsx?raw";
import { BaseAutoAnimateContainer } from "./examples/BaseAutoAnimateContainer.tsx";
import baseCode from "./examples/BaseAutoAnimateContainer.tsx?raw";
import { BothAutoAnimateContainer } from "./examples/BothAutoAnimateContainer.tsx";
import bothCode from "./examples/BothAutoAnimateContainer.tsx?raw";
import { CallbacksAutoAnimateContainer } from "./examples/CallbacksAutoAnimateContainer.tsx";
import callbacksCode from "./examples/CallbacksAutoAnimateContainer.tsx?raw";
import { DisabledAutoAnimateContainer } from "./examples/DisabledAutoAnimateContainer.tsx";
import disabledCode from "./examples/DisabledAutoAnimateContainer.tsx?raw";
import { OpacityAutoAnimateContainer } from "./examples/OpacityAutoAnimateContainer.tsx";
import opacityCode from "./examples/OpacityAutoAnimateContainer.tsx?raw";
import { OverflowAutoAnimateContainer } from "./examples/OverflowAutoAnimateContainer.tsx";
import overflowCode from "./examples/OverflowAutoAnimateContainer.tsx?raw";
import { PanelsAutoAnimateContainer } from "./examples/PanelsAutoAnimateContainer.tsx";
import panelsCode from "./examples/PanelsAutoAnimateContainer.tsx?raw";
import { StyledAutoAnimateContainer } from "./examples/StyledAutoAnimateContainer.tsx";
import styledCode from "./examples/StyledAutoAnimateContainer.tsx?raw";
import overridesCss from "./examples/auto-animate-container-overrides.css?raw";
import { TailwindAutoAnimateContainer } from "./examples/TailwindAutoAnimateContainer.tsx";
import tailwindCode from "./examples/TailwindAutoAnimateContainer.tsx?raw";
import { TimingAutoAnimateContainer } from "./examples/TimingAutoAnimateContainer.tsx";
import timingCode from "./examples/TimingAutoAnimateContainer.tsx?raw";
import { UtilitiesAutoAnimateContainer } from "./examples/UtilitiesAutoAnimateContainer.tsx";
import utilitiesCode from "./examples/UtilitiesAutoAnimateContainer.tsx?raw";
import { VariantAutoAnimateContainer } from "./examples/VariantAutoAnimateContainer.tsx";
import variantCode from "./examples/VariantAutoAnimateContainer.tsx?raw";
import { WidthAutoAnimateContainer } from "./examples/WidthAutoAnimateContainer.tsx";
import widthCode from "./examples/WidthAutoAnimateContainer.tsx?raw";
import "./AutoAnimateContainerPage.scss";

type StoryId =
  | "base"
  | "panels"
  | "timing"
  | "width"
  | "both"
  | "overflow"
  | "opacity"
  | "callbacks"
  | "disabled"
  | "asChild"
  | "utilities";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

const importCode = `import "@gem-org/gemsitions/auto-animate-container.css";
import { AutoAnimateContainer } from "@gem-org/gemsitions/auto-animate-container";`;

const story = { returnObjects: true } as const;

export function AutoAnimateContainerPage() {
  const { t } = useTranslation("autoAnimateContainer");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseAutoAnimateContainer.tsx",
      code: baseCode,
      preview: <BaseAutoAnimateContainer {...t("stories.base.texts", story)} />,
    },
    {
      id: "panels",
      file: "PanelsAutoAnimateContainer.tsx",
      code: panelsCode,
      preview: <PanelsAutoAnimateContainer {...t("stories.panels.texts", story)} />,
    },
    {
      id: "timing",
      file: "TimingAutoAnimateContainer.tsx",
      code: timingCode,
      preview: <TimingAutoAnimateContainer {...t("stories.timing.texts", story)} />,
    },
    {
      id: "width",
      file: "WidthAutoAnimateContainer.tsx",
      code: widthCode,
      preview: <WidthAutoAnimateContainer {...t("stories.width.texts", story)} />,
    },
    {
      id: "both",
      file: "BothAutoAnimateContainer.tsx",
      code: bothCode,
      preview: <BothAutoAnimateContainer {...t("stories.both.texts", story)} />,
    },
    {
      id: "overflow",
      file: "OverflowAutoAnimateContainer.tsx",
      code: overflowCode,
      preview: <OverflowAutoAnimateContainer {...t("stories.overflow.texts", story)} />,
    },
    {
      id: "opacity",
      file: "OpacityAutoAnimateContainer.tsx",
      code: opacityCode,
      preview: <OpacityAutoAnimateContainer {...t("stories.opacity.texts", story)} />,
    },
    {
      id: "callbacks",
      file: "CallbacksAutoAnimateContainer.tsx",
      code: callbacksCode,
      preview: <CallbacksAutoAnimateContainer {...t("stories.callbacks.texts", story)} />,
    },
    {
      id: "disabled",
      file: "DisabledAutoAnimateContainer.tsx",
      code: disabledCode,
      preview: <DisabledAutoAnimateContainer {...t("stories.disabled.texts", story)} />,
    },
    {
      id: "asChild",
      file: "AsChildAutoAnimateContainer.tsx",
      code: asChildCode,
      preview: <AsChildAutoAnimateContainer {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "utilities",
      file: "UtilitiesAutoAnimateContainer.tsx",
      code: utilitiesCode,
      preview: <UtilitiesAutoAnimateContainer {...t("stories.utilities.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath={importCode}
      />

      <AutoAnimateContainerPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindAutoAnimateContainer.tsx" stack>
            <TailwindAutoAnimateContainer {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantAutoAnimateContainer.tsx" stack>
            <VariantAutoAnimateContainer {...t("styles.variant", story)} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock
              code={overridesCss}
              label="auto-animate-container-overrides.css"
              language="css"
            />
            <DemoBlock code={styledCode} label="StyledAutoAnimateContainer.tsx" stack>
              <StyledAutoAnimateContainer {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="AutoAnimateContainer"
        to="/transitions/morphing-layout/auto-animate-container/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
