import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { ApiLinkSection } from "../../../components/ApiLinkSection.tsx";
import { CodeBlock, DemoBlock, DocsPageHeader, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { StyleChangesSection } from "../../../components/StyleChangesSection.tsx";
import { InputTextPlayground } from "./InputTextPlayground.tsx";
import { AllStatesInputText } from "./examples/AllStatesInputText.tsx";
import allStatesCode from "./examples/AllStatesInputText.tsx?raw";
import { BaseInputText } from "./examples/BaseInputText.tsx";
import baseCode from "./examples/BaseInputText.tsx?raw";
import { DisabledInputText } from "./examples/DisabledInputText.tsx";
import disabledCode from "./examples/DisabledInputText.tsx?raw";
import { ErrorInputText } from "./examples/ErrorInputText.tsx";
import errorCode from "./examples/ErrorInputText.tsx?raw";
import { IconsInputText } from "./examples/IconsInputText.tsx";
import iconsCode from "./examples/IconsInputText.tsx?raw";
import { InfoInputText } from "./examples/InfoInputText.tsx";
import infoCode from "./examples/InfoInputText.tsx?raw";
import { InfoNodeInputText } from "./examples/InfoNodeInputText.tsx";
import infoNodeCode from "./examples/InfoNodeInputText.tsx?raw";
import overridesCss from "./examples/input-text-overrides.css?raw";
import { InputTextBorders } from "./examples/InputTextBorders.tsx";
import bordersCode from "./examples/InputTextBorders.tsx?raw";
import { InputTextSizes } from "./examples/InputTextSizes.tsx";
import sizesCode from "./examples/InputTextSizes.tsx?raw";
import { NoLabelInputText } from "./examples/NoLabelInputText.tsx";
import noLabelCode from "./examples/NoLabelInputText.tsx?raw";
import { OutlineBordersInputText } from "./examples/OutlineBordersInputText.tsx";
import outlineBordersCode from "./examples/OutlineBordersInputText.tsx?raw";
import { OutlineInfoInputText } from "./examples/OutlineInfoInputText.tsx";
import outlineInfoCode from "./examples/OutlineInfoInputText.tsx?raw";
import { OutlineLabelInputText } from "./examples/OutlineLabelInputText.tsx";
import outlineLabelCode from "./examples/OutlineLabelInputText.tsx?raw";
import { PrefixIconInputText } from "./examples/PrefixIconInputText.tsx";
import prefixIconCode from "./examples/PrefixIconInputText.tsx?raw";
import { PrefixSuffixInputText } from "./examples/PrefixSuffixInputText.tsx";
import prefixSuffixCode from "./examples/PrefixSuffixInputText.tsx?raw";
import { PrefixTextInputText } from "./examples/PrefixTextInputText.tsx";
import prefixTextCode from "./examples/PrefixTextInputText.tsx?raw";
import { RequiredInputText } from "./examples/RequiredInputText.tsx";
import requiredCode from "./examples/RequiredInputText.tsx?raw";
import styleOverridesCss from "./examples/style-overrides.css?raw";
import { StyledInputText } from "./examples/StyledInputText.tsx";
import styledCode from "./examples/StyledInputText.tsx?raw";
import { StyleOverridesInputText } from "./examples/StyleOverridesInputText.tsx";
import styleOverridesCode from "./examples/StyleOverridesInputText.tsx?raw";
import { SuffixIconInputText } from "./examples/SuffixIconInputText.tsx";
import suffixIconCode from "./examples/SuffixIconInputText.tsx?raw";
import { SuffixTextInputText } from "./examples/SuffixTextInputText.tsx";
import suffixTextCode from "./examples/SuffixTextInputText.tsx?raw";
import { TailwindInputText } from "./examples/TailwindInputText.tsx";
import tailwindCode from "./examples/TailwindInputText.tsx?raw";
import { UppercaseInputText } from "./examples/UppercaseInputText.tsx";
import uppercaseCode from "./examples/UppercaseInputText.tsx?raw";
import { ValidRegexInputText } from "./examples/ValidRegexInputText.tsx";
import validRegexCode from "./examples/ValidRegexInputText.tsx?raw";
import { VariantInputTexts } from "./examples/VariantInputText.tsx";
import variantCode from "./examples/VariantInputText.tsx?raw";
import "./InputTextPage.scss";

type StoryId =
  | "base"
  | "outlineLabel"
  | "withInfoIcon"
  | "withInfoReactNode"
  | "outlineWithInfoIcon"
  | "validRegex"
  | "outlineLabelBorders"
  | "withoutLabel"
  | "withPrefixIcon"
  | "withSuffixIcon"
  | "withPrefixText"
  | "withSuffixText"
  | "withPrefixAndSuffix"
  | "withIcons"
  | "error"
  | "disabled"
  | "required"
  | "uppercase"
  | "borders"
  | "sizes"
  | "styleOverrides"
  | "allStates";

type Story = {
  id: StoryId;
  file: string;
  code: string;
  css?: { file: string; code: string };
  preview: ReactNode;
};

export function InputTextPage() {
  const { t, i18n } = useTranslation("inputText");
  const lang = i18n.resolvedLanguage;

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseInputText.tsx",
      code: baseCode,
      preview: <BaseInputText {...t("stories.base.texts", { returnObjects: true })} />,
    },
    {
      id: "outlineLabel",
      file: "OutlineLabelInputText.tsx",
      code: outlineLabelCode,
      preview: <OutlineLabelInputText {...t("stories.outlineLabel.texts", { returnObjects: true })} />,
    },
    {
      id: "withInfoIcon",
      file: "InfoInputText.tsx",
      code: infoCode,
      preview: <InfoInputText {...t("stories.withInfoIcon.texts", { returnObjects: true })} />,
    },
    {
      id: "withInfoReactNode",
      file: "InfoNodeInputText.tsx",
      code: infoNodeCode,
      preview: <InfoNodeInputText {...t("stories.withInfoReactNode.texts", { returnObjects: true })} />,
    },
    {
      id: "outlineWithInfoIcon",
      file: "OutlineInfoInputText.tsx",
      code: outlineInfoCode,
      preview: <OutlineInfoInputText {...t("stories.outlineWithInfoIcon.texts", { returnObjects: true })} />,
    },
    {
      id: "validRegex",
      file: "ValidRegexInputText.tsx",
      code: validRegexCode,
      preview: <ValidRegexInputText {...t("stories.validRegex.texts", { returnObjects: true })} />,
    },
    {
      id: "outlineLabelBorders",
      file: "OutlineBordersInputText.tsx",
      code: outlineBordersCode,
      preview: <OutlineBordersInputText texts={t("stories.outlineLabelBorders.texts", { returnObjects: true })} />,
    },
    {
      id: "withoutLabel",
      file: "NoLabelInputText.tsx",
      code: noLabelCode,
      preview: <NoLabelInputText {...t("stories.withoutLabel.texts", { returnObjects: true })} />,
    },
    {
      id: "withPrefixIcon",
      file: "PrefixIconInputText.tsx",
      code: prefixIconCode,
      preview: <PrefixIconInputText {...t("stories.withPrefixIcon.texts", { returnObjects: true })} />,
    },
    {
      id: "withSuffixIcon",
      file: "SuffixIconInputText.tsx",
      code: suffixIconCode,
      preview: <SuffixIconInputText {...t("stories.withSuffixIcon.texts", { returnObjects: true })} />,
    },
    {
      id: "withPrefixText",
      file: "PrefixTextInputText.tsx",
      code: prefixTextCode,
      preview: <PrefixTextInputText {...t("stories.withPrefixText.texts", { returnObjects: true })} />,
    },
    {
      id: "withSuffixText",
      file: "SuffixTextInputText.tsx",
      code: suffixTextCode,
      preview: <SuffixTextInputText {...t("stories.withSuffixText.texts", { returnObjects: true })} />,
    },
    {
      id: "withPrefixAndSuffix",
      file: "PrefixSuffixInputText.tsx",
      code: prefixSuffixCode,
      preview: <PrefixSuffixInputText {...t("stories.withPrefixAndSuffix.texts", { returnObjects: true })} />,
    },
    {
      id: "withIcons",
      file: "IconsInputText.tsx",
      code: iconsCode,
      preview: <IconsInputText {...t("stories.withIcons.texts", { returnObjects: true })} />,
    },
    {
      id: "error",
      file: "ErrorInputText.tsx",
      code: errorCode,
      preview: <ErrorInputText {...t("stories.error.texts", { returnObjects: true })} />,
    },
    {
      id: "disabled",
      file: "DisabledInputText.tsx",
      code: disabledCode,
      preview: <DisabledInputText {...t("stories.disabled.texts", { returnObjects: true })} />,
    },
    {
      id: "required",
      file: "RequiredInputText.tsx",
      code: requiredCode,
      preview: <RequiredInputText {...t("stories.required.texts", { returnObjects: true })} />,
    },
    {
      id: "uppercase",
      file: "UppercaseInputText.tsx",
      code: uppercaseCode,
      preview: <UppercaseInputText {...t("stories.uppercase.texts", { returnObjects: true })} />,
    },
    {
      id: "borders",
      file: "InputTextBorders.tsx",
      code: bordersCode,
      preview: <InputTextBorders texts={t("stories.borders.texts", { returnObjects: true })} />,
    },
    {
      id: "sizes",
      file: "InputTextSizes.tsx",
      code: sizesCode,
      preview: <InputTextSizes labels={t("stories.sizes.labels", { returnObjects: true })} />,
    },
    {
      id: "styleOverrides",
      file: "StyleOverridesInputText.tsx",
      code: styleOverridesCode,
      css: { file: "style-overrides.css", code: styleOverridesCss },
      preview: <StyleOverridesInputText texts={t("stories.styleOverrides.texts", { returnObjects: true })} />,
    },
    {
      id: "allStates",
      file: "AllStatesInputText.tsx",
      code: allStatesCode,
      preview: <AllStatesInputText texts={t("stories.allStates.texts", { returnObjects: true })} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { InputText } from "@gem-org/gem-system"'
      />

      <InputTextPlayground />

      {stories.map((story) => (
        <DocsSection
          key={story.id}
          title={t(`stories.${story.id}.title`)}
          description={t(`stories.${story.id}.description`)}
        >
          {story.css ? <CodeBlock code={story.css.code} label={story.css.file} language="css" /> : null}
          <DemoBlock code={story.code} label={story.file} overflow>
            <div key={lang} className="inputtext-demo">
              {story.preview}
            </div>
          </DemoBlock>
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindInputText.tsx">
            <div className="inputtext-demo">
              <TailwindInputText texts={t("styleChanges.tailwind", { returnObjects: true })} />
            </div>
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantInputText.tsx">
            <div className="inputtext-demo">
              <VariantInputTexts />
            </div>
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="input-text-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledInputText.tsx">
              <div className="inputtext-demo">
                <StyledInputText {...t("styleChanges.css", { returnObjects: true })} />
              </div>
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="InputText" to="/components/input-text/api" linkLabel={t("apiLink")} />
    </div>
  );
}
