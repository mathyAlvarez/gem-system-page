import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { ApiLinkSection } from "../../../components/ApiLinkSection.tsx";
import { CodeBlock, DemoBlock, DocsPageHeader, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { StyleChangesSection } from "../../../components/StyleChangesSection.tsx";
import { ComboboxPlayground } from "./ComboboxPlayground.tsx";
import { AsyncCombobox } from "./examples/AsyncCombobox.tsx";
import asyncCode from "./examples/AsyncCombobox.tsx?raw";
import { BaseCombobox } from "./examples/BaseCombobox.tsx";
import baseCode from "./examples/BaseCombobox.tsx?raw";
import { ChevronCombobox } from "./examples/ChevronCombobox.tsx";
import chevronCode from "./examples/ChevronCombobox.tsx?raw";
import { ClearableCombobox } from "./examples/ClearableCombobox.tsx";
import clearableCode from "./examples/ClearableCombobox.tsx?raw";
import { ComboboxBorders } from "./examples/ComboboxBorders.tsx";
import bordersCode from "./examples/ComboboxBorders.tsx?raw";
import { ComboboxSizes } from "./examples/ComboboxSizes.tsx";
import sizesCode from "./examples/ComboboxSizes.tsx?raw";
import overridesCss from "./examples/combobox-overrides.css?raw";
import { ControlledCombobox } from "./examples/ControlledCombobox.tsx";
import controlledCode from "./examples/ControlledCombobox.tsx?raw";
import { ControlledMultipleCombobox } from "./examples/ControlledMultipleCombobox.tsx";
import controlledMultipleCode from "./examples/ControlledMultipleCombobox.tsx?raw";
import customOptionCss from "./examples/custom-option.css?raw";
import { CustomOptionCombobox } from "./examples/CustomOptionCombobox.tsx";
import customOptionCode from "./examples/CustomOptionCombobox.tsx?raw";
import { CustomSuffixIconCombobox } from "./examples/CustomSuffixIconCombobox.tsx";
import customSuffixIconCode from "./examples/CustomSuffixIconCombobox.tsx?raw";
import { CustomValueCombobox } from "./examples/CustomValueCombobox.tsx";
import customValueCode from "./examples/CustomValueCombobox.tsx?raw";
import dataCode from "./examples/data.ts?raw";
import { DescriptionsCombobox } from "./examples/DescriptionsCombobox.tsx";
import descriptionsCode from "./examples/DescriptionsCombobox.tsx?raw";
import { DisabledCombobox } from "./examples/DisabledCombobox.tsx";
import disabledCode from "./examples/DisabledCombobox.tsx?raw";
import { ErrorCombobox } from "./examples/ErrorCombobox.tsx";
import errorCode from "./examples/ErrorCombobox.tsx?raw";
import { FieldMappingCombobox } from "./examples/FieldMappingCombobox.tsx";
import fieldMappingCode from "./examples/FieldMappingCombobox.tsx?raw";
import { LoadingCombobox } from "./examples/LoadingCombobox.tsx";
import loadingCode from "./examples/LoadingCombobox.tsx?raw";
import { MaxResultsCombobox } from "./examples/MaxResultsCombobox.tsx";
import maxResultsCode from "./examples/MaxResultsCombobox.tsx?raw";
import { MultipleCombobox } from "./examples/MultipleCombobox.tsx";
import multipleCode from "./examples/MultipleCombobox.tsx?raw";
import { NoSuffixIconCombobox } from "./examples/NoSuffixIconCombobox.tsx";
import noSuffixIconCode from "./examples/NoSuffixIconCombobox.tsx?raw";
import { StyledComboboxes } from "./examples/StyledComboboxes.tsx";
import styledCode from "./examples/StyledComboboxes.tsx?raw";
import { TailwindCombobox } from "./examples/TailwindCombobox.tsx";
import tailwindCode from "./examples/TailwindCombobox.tsx?raw";
import { TooltipCombobox } from "./examples/TooltipCombobox.tsx";
import tooltipCode from "./examples/TooltipCombobox.tsx?raw";
import { VariantComboboxes } from "./examples/VariantCombobox.tsx";
import variantCode from "./examples/VariantCombobox.tsx?raw";
import "./ComboboxPage.scss";

type StoryId =
  | "base"
  | "multiple"
  | "withDescriptions"
  | "customOption"
  | "customValue"
  | "maxResults"
  | "clearable"
  | "disabled"
  | "error"
  | "withChevron"
  | "loading"
  | "withoutSuffixIcon"
  | "customSuffixIcon"
  | "sizes"
  | "borders"
  | "withTooltip"
  | "controlled"
  | "controlledMultiple"
  | "fieldMapping"
  | "asyncFilter";

type Story = {
  id: StoryId;
  file: string;
  code: string;
  preview: ReactNode;
  css?: { file: string; code: string };
};

export function ComboboxPage() {
  const { t } = useTranslation("combobox");
  const stories: Story[] = [
    {
      id: "base",
      file: "BaseCombobox.tsx",
      code: baseCode,
      preview: <BaseCombobox {...t("stories.base.texts", { returnObjects: true })} />,
    },
    {
      id: "multiple",
      file: "MultipleCombobox.tsx",
      code: multipleCode,
      preview: <MultipleCombobox {...t("stories.multiple.texts", { returnObjects: true })} />,
    },
    {
      id: "withDescriptions",
      file: "DescriptionsCombobox.tsx",
      code: descriptionsCode,
      preview: <DescriptionsCombobox {...t("stories.withDescriptions.texts", { returnObjects: true })} />,
    },
    {
      id: "customOption",
      file: "CustomOptionCombobox.tsx",
      code: customOptionCode,
      css: { file: "custom-option.css", code: customOptionCss },
      preview: <CustomOptionCombobox {...t("stories.customOption.texts", { returnObjects: true })} />,
    },
    {
      id: "customValue",
      file: "CustomValueCombobox.tsx",
      code: customValueCode,
      preview: <CustomValueCombobox {...t("stories.customValue.texts", { returnObjects: true })} />,
    },
    {
      id: "maxResults",
      file: "MaxResultsCombobox.tsx",
      code: maxResultsCode,
      preview: <MaxResultsCombobox {...t("stories.maxResults.texts", { returnObjects: true })} />,
    },
    {
      id: "clearable",
      file: "ClearableCombobox.tsx",
      code: clearableCode,
      preview: <ClearableCombobox {...t("stories.clearable.texts", { returnObjects: true })} />,
    },
    {
      id: "disabled",
      file: "DisabledCombobox.tsx",
      code: disabledCode,
      preview: <DisabledCombobox {...t("stories.disabled.texts", { returnObjects: true })} />,
    },
    {
      id: "error",
      file: "ErrorCombobox.tsx",
      code: errorCode,
      preview: <ErrorCombobox {...t("stories.error.texts", { returnObjects: true })} />,
    },
    {
      id: "withChevron",
      file: "ChevronCombobox.tsx",
      code: chevronCode,
      preview: <ChevronCombobox {...t("stories.withChevron.texts", { returnObjects: true })} />,
    },
    {
      id: "loading",
      file: "LoadingCombobox.tsx",
      code: loadingCode,
      preview: <LoadingCombobox {...t("stories.loading.texts", { returnObjects: true })} />,
    },
    {
      id: "withoutSuffixIcon",
      file: "NoSuffixIconCombobox.tsx",
      code: noSuffixIconCode,
      preview: <NoSuffixIconCombobox {...t("stories.withoutSuffixIcon.texts", { returnObjects: true })} />,
    },
    {
      id: "customSuffixIcon",
      file: "CustomSuffixIconCombobox.tsx",
      code: customSuffixIconCode,
      preview: <CustomSuffixIconCombobox {...t("stories.customSuffixIcon.texts", { returnObjects: true })} />,
    },
    {
      id: "sizes",
      file: "ComboboxSizes.tsx",
      code: sizesCode,
      preview: <ComboboxSizes labels={t("stories.sizes.labels", { returnObjects: true })} />,
    },
    { id: "borders", file: "ComboboxBorders.tsx", code: bordersCode, preview: <ComboboxBorders /> },
    {
      id: "withTooltip",
      file: "TooltipCombobox.tsx",
      code: tooltipCode,
      preview: <TooltipCombobox {...t("stories.withTooltip.texts", { returnObjects: true })} />,
    },
    {
      id: "controlled",
      file: "ControlledCombobox.tsx",
      code: controlledCode,
      preview: <ControlledCombobox {...t("stories.controlled.texts", { returnObjects: true })} />,
    },
    {
      id: "controlledMultiple",
      file: "ControlledMultipleCombobox.tsx",
      code: controlledMultipleCode,
      preview: <ControlledMultipleCombobox {...t("stories.controlledMultiple.texts", { returnObjects: true })} />,
    },
    {
      id: "fieldMapping",
      file: "FieldMappingCombobox.tsx",
      code: fieldMappingCode,
      preview: <FieldMappingCombobox {...t("stories.fieldMapping.texts", { returnObjects: true })} />,
    },
    {
      id: "asyncFilter",
      file: "AsyncCombobox.tsx",
      code: asyncCode,
      preview: <AsyncCombobox {...t("stories.asyncFilter.texts", { returnObjects: true })} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Combobox } from "@gem-org/gem-system"'
      />

      <ComboboxPlayground />

      <DocsSection title={t("data.title")} description={t("data.description")}>
        <CodeBlock code={dataCode} label="data.ts" />
      </DocsSection>

      {stories.map((story) => (
        <DocsSection
          key={story.id}
          title={t(`stories.${story.id}.title`)}
          description={t(`stories.${story.id}.description`)}
        >
          {story.css ? <CodeBlock code={story.css.code} label={story.css.file} language="css" /> : null}
          <DemoBlock code={story.code} label={story.file} overflow>
            <div className="combobox-demo">{story.preview}</div>
          </DemoBlock>
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindCombobox.tsx" overflow>
            <div className="combobox-demo combobox-demo--wide">
              <TailwindCombobox texts={t("styleChanges.tailwind", { returnObjects: true })} />
            </div>
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantCombobox.tsx" overflow>
            <div className="combobox-demo">
              <VariantComboboxes />
            </div>
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="combobox-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledComboboxes.tsx" overflow>
              <div className="combobox-demo">
                <StyledComboboxes texts={t("styleChanges.css", { returnObjects: true })} />
              </div>
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="Combobox" to="/components/combobox/api" linkLabel={t("apiLink")} />
    </div>
  );
}
