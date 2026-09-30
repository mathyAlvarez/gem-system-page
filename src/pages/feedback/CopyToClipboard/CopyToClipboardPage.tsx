import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { ApiLinkSection } from "../../../components/ApiLinkSection.tsx";
import { CodeBlock, DemoBlock, DocsPageHeader, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { StyleChangesSection } from "../../../components/StyleChangesSection.tsx";
import { CopyToClipboardPlayground } from "./CopyToClipboardPlayground.tsx";
import { BaseCopy } from "./examples/BaseCopy.tsx";
import baseCode from "./examples/BaseCopy.tsx?raw";
import { CallbacksCopy } from "./examples/CallbacksCopy.tsx";
import callbacksCode from "./examples/CallbacksCopy.tsx?raw";
import { CodeBlockCopy } from "./examples/CodeBlockCopy.tsx";
import codeBlockCode from "./examples/CodeBlockCopy.tsx?raw";
import overridesCss from "./examples/copy-overrides.css?raw";
import { CustomTriggerCopy } from "./examples/CustomTriggerCopy.tsx";
import customTriggerCode from "./examples/CustomTriggerCopy.tsx?raw";
import { DisabledCopy } from "./examples/DisabledCopy.tsx";
import disabledCode from "./examples/DisabledCopy.tsx?raw";
import { DynamicValueCopy } from "./examples/DynamicValueCopy.tsx";
import dynamicValueCode from "./examples/DynamicValueCopy.tsx?raw";
import { InputCopy } from "./examples/InputCopy.tsx";
import inputCode from "./examples/InputCopy.tsx?raw";
import { LabelCopy } from "./examples/LabelCopy.tsx";
import labelCode from "./examples/LabelCopy.tsx?raw";
import { SizesCopy } from "./examples/SizesCopy.tsx";
import sizesCode from "./examples/SizesCopy.tsx?raw";
import { StyledCopy } from "./examples/StyledCopy.tsx";
import styledCode from "./examples/StyledCopy.tsx?raw";
import { TailwindCopy } from "./examples/TailwindCopy.tsx";
import tailwindCode from "./examples/TailwindCopy.tsx?raw";
import { TimeoutCopy } from "./examples/TimeoutCopy.tsx";
import timeoutCode from "./examples/TimeoutCopy.tsx?raw";
import { TooltipCopy } from "./examples/TooltipCopy.tsx";
import tooltipCode from "./examples/TooltipCopy.tsx?raw";
import { VariantCopy } from "./examples/VariantCopy.tsx";
import variantCode from "./examples/VariantCopy.tsx?raw";
import { VariantsCopy } from "./examples/VariantsCopy.tsx";
import variantsCode from "./examples/VariantsCopy.tsx?raw";
import "./CopyToClipboardPage.scss";

type StoryId =
  | "base"
  | "label"
  | "sizes"
  | "variants"
  | "tooltip"
  | "customTrigger"
  | "input"
  | "codeBlock"
  | "dynamicValue"
  | "callbacks"
  | "timeout"
  | "disabled";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

export function CopyToClipboardPage() {
  const { t } = useTranslation("copyToClipboard");
  const labels = t("common.labels", { returnObjects: true });
  const story = { returnObjects: true } as const;

  const stories: Story[] = [
    { id: "base", file: "BaseCopy.tsx", code: baseCode, preview: <BaseCopy labels={labels} /> },
    {
      id: "label",
      file: "LabelCopy.tsx",
      code: labelCode,
      preview: <LabelCopy labels={labels} {...t("stories.label.texts", story)} />,
    },
    { id: "sizes", file: "SizesCopy.tsx", code: sizesCode, preview: <SizesCopy labels={labels} /> },
    { id: "variants", file: "VariantsCopy.tsx", code: variantsCode, preview: <VariantsCopy labels={labels} /> },
    { id: "tooltip", file: "TooltipCopy.tsx", code: tooltipCode, preview: <TooltipCopy labels={labels} /> },
    {
      id: "customTrigger",
      file: "CustomTriggerCopy.tsx",
      code: customTriggerCode,
      preview: <CustomTriggerCopy labels={labels} {...t("stories.customTrigger.texts", story)} />,
    },
    {
      id: "input",
      file: "InputCopy.tsx",
      code: inputCode,
      preview: <InputCopy labels={labels} {...t("stories.input.texts", story)} />,
    },
    {
      id: "codeBlock",
      file: "CodeBlockCopy.tsx",
      code: codeBlockCode,
      preview: <CodeBlockCopy labels={labels} {...t("stories.codeBlock.texts", story)} />,
    },
    {
      id: "dynamicValue",
      file: "DynamicValueCopy.tsx",
      code: dynamicValueCode,
      preview: <DynamicValueCopy labels={labels} {...t("stories.dynamicValue.texts", story)} />,
    },
    {
      id: "callbacks",
      file: "CallbacksCopy.tsx",
      code: callbacksCode,
      preview: <CallbacksCopy labels={labels} {...t("stories.callbacks.texts", story)} />,
    },
    { id: "timeout", file: "TimeoutCopy.tsx", code: timeoutCode, preview: <TimeoutCopy labels={labels} /> },
    { id: "disabled", file: "DisabledCopy.tsx", code: disabledCode, preview: <DisabledCopy labels={labels} /> },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { CopyToClipboard } from "@gem-org/gem-system"'
      />

      <CopyToClipboardPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindCopy.tsx">
            <TailwindCopy labels={labels} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantCopy.tsx">
            <VariantCopy labels={labels} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="copy-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledCopy.tsx">
              <StyledCopy labels={labels} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="CopyToClipboard"
        to="/feedback/copy-to-clipboard/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
