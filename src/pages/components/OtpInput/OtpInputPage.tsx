import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { ApiLinkSection } from "../../../components/ApiLinkSection.tsx";
import { CodeBlock, DemoBlock, DocsPageHeader, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { StyleChangesSection } from "../../../components/StyleChangesSection.tsx";
import { OtpInputPlayground } from "./OtpInputPlayground.tsx";
import { AllStatesOtpInput } from "./examples/AllStatesOtpInput.tsx";
import allStatesCode from "./examples/AllStatesOtpInput.tsx?raw";
import { AlphanumericOtpInput } from "./examples/AlphanumericOtpInput.tsx";
import alphanumericCode from "./examples/AlphanumericOtpInput.tsx?raw";
import { BaseOtpInput } from "./examples/BaseOtpInput.tsx";
import baseCode from "./examples/BaseOtpInput.tsx?raw";
import { CaseSensitiveOtpInput } from "./examples/CaseSensitiveOtpInput.tsx";
import caseSensitiveCode from "./examples/CaseSensitiveOtpInput.tsx?raw";
import { ControlledOtpInput } from "./examples/ControlledOtpInput.tsx";
import controlledCode from "./examples/ControlledOtpInput.tsx?raw";
import { DisabledOtpInput } from "./examples/DisabledOtpInput.tsx";
import disabledCode from "./examples/DisabledOtpInput.tsx?raw";
import { ErrorOtpInput } from "./examples/ErrorOtpInput.tsx";
import errorCode from "./examples/ErrorOtpInput.tsx?raw";
import { FiveDigitsOtpInput } from "./examples/FiveDigitsOtpInput.tsx";
import fiveDigitsCode from "./examples/FiveDigitsOtpInput.tsx?raw";
import { FourDigitsOtpInput } from "./examples/FourDigitsOtpInput.tsx";
import fourDigitsCode from "./examples/FourDigitsOtpInput.tsx?raw";
import { InfoOtpInput } from "./examples/InfoOtpInput.tsx";
import infoCode from "./examples/InfoOtpInput.tsx?raw";
import { MaskCharacterOtpInput } from "./examples/MaskCharacterOtpInput.tsx";
import maskCharacterCode from "./examples/MaskCharacterOtpInput.tsx?raw";
import { MaskedOtpInput } from "./examples/MaskedOtpInput.tsx";
import maskedCode from "./examples/MaskedOtpInput.tsx?raw";
import { MaskIconOtpInput } from "./examples/MaskIconOtpInput.tsx";
import maskIconCode from "./examples/MaskIconOtpInput.tsx?raw";
import overridesCss from "./examples/otp-input-overrides.css?raw";
import { OtpInputBorders } from "./examples/OtpInputBorders.tsx";
import bordersCode from "./examples/OtpInputBorders.tsx?raw";
import { OtpInputLengths } from "./examples/OtpInputLengths.tsx";
import lengthsCode from "./examples/OtpInputLengths.tsx?raw";
import { OtpInputSizes } from "./examples/OtpInputSizes.tsx";
import sizesCode from "./examples/OtpInputSizes.tsx?raw";
import { OutlineLabelOtpInput } from "./examples/OutlineLabelOtpInput.tsx";
import outlineLabelCode from "./examples/OutlineLabelOtpInput.tsx?raw";
import { RequiredOtpInput } from "./examples/RequiredOtpInput.tsx";
import requiredCode from "./examples/RequiredOtpInput.tsx?raw";
import { SeparatorOtpInput } from "./examples/SeparatorOtpInput.tsx";
import separatorCode from "./examples/SeparatorOtpInput.tsx?raw";
import { StyledOtpInput } from "./examples/StyledOtpInput.tsx";
import styledCode from "./examples/StyledOtpInput.tsx?raw";
import { TailwindOtpInput } from "./examples/TailwindOtpInput.tsx";
import tailwindCode from "./examples/TailwindOtpInput.tsx?raw";
import { VariantOtpInputs } from "./examples/VariantOtpInput.tsx";
import variantCode from "./examples/VariantOtpInput.tsx?raw";
import { ClearableOtpInput } from "./examples/ClearableOtpInput.tsx";
import clearableCode from "./examples/ClearableOtpInput.tsx?raw";
import "./OtpInputPage.scss";

type StoryId =
  | "base"
  | "fourDigits"
  | "fiveDigits"
  | "withSeparator"
  | "alphanumeric"
  | "caseSensitive"
  | "masked"
  | "maskCharacter"
  | "maskIcon"
  | "outlineLabel"
  | "withInfoIcon"
  | "clearable"
  | "error"
  | "disabled"
  | "required"
  | "borders"
  | "sizes"
  | "lengths"
  | "controlled"
  | "allStates";

type Story = {
  id: StoryId;
  file: string;
  code: string;
  preview: ReactNode;
};

export function OtpInputPage() {
  const { t } = useTranslation("otpInput");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseOtpInput.tsx",
      code: baseCode,
      preview: <BaseOtpInput {...t("stories.base.texts", { returnObjects: true })} />,
    },
    {
      id: "fourDigits",
      file: "FourDigitsOtpInput.tsx",
      code: fourDigitsCode,
      preview: <FourDigitsOtpInput {...t("stories.fourDigits.texts", { returnObjects: true })} />,
    },
    {
      id: "fiveDigits",
      file: "FiveDigitsOtpInput.tsx",
      code: fiveDigitsCode,
      preview: <FiveDigitsOtpInput {...t("stories.fiveDigits.texts", { returnObjects: true })} />,
    },
    {
      id: "withSeparator",
      file: "SeparatorOtpInput.tsx",
      code: separatorCode,
      preview: <SeparatorOtpInput {...t("stories.withSeparator.texts", { returnObjects: true })} />,
    },
    {
      id: "alphanumeric",
      file: "AlphanumericOtpInput.tsx",
      code: alphanumericCode,
      preview: <AlphanumericOtpInput {...t("stories.alphanumeric.texts", { returnObjects: true })} />,
    },
    {
      id: "caseSensitive",
      file: "CaseSensitiveOtpInput.tsx",
      code: caseSensitiveCode,
      preview: <CaseSensitiveOtpInput {...t("stories.caseSensitive.texts", { returnObjects: true })} />,
    },
    {
      id: "masked",
      file: "MaskedOtpInput.tsx",
      code: maskedCode,
      preview: <MaskedOtpInput {...t("stories.masked.texts", { returnObjects: true })} />,
    },
    {
      id: "maskCharacter",
      file: "MaskCharacterOtpInput.tsx",
      code: maskCharacterCode,
      preview: <MaskCharacterOtpInput {...t("stories.maskCharacter.texts", { returnObjects: true })} />,
    },
    {
      id: "maskIcon",
      file: "MaskIconOtpInput.tsx",
      code: maskIconCode,
      preview: <MaskIconOtpInput {...t("stories.maskIcon.texts", { returnObjects: true })} />,
    },
    {
      id: "outlineLabel",
      file: "OutlineLabelOtpInput.tsx",
      code: outlineLabelCode,
      preview: <OutlineLabelOtpInput {...t("stories.outlineLabel.texts", { returnObjects: true })} />,
    },
    {
      id: "withInfoIcon",
      file: "InfoOtpInput.tsx",
      code: infoCode,
      preview: <InfoOtpInput {...t("stories.withInfoIcon.texts", { returnObjects: true })} />,
    },
    {
      id: "clearable",
      file: "ClearableOtpInput.tsx",
      code: clearableCode,
      preview: <ClearableOtpInput {...t("stories.clearable.texts", { returnObjects: true })} />,
    },
    {
      id: "error",
      file: "ErrorOtpInput.tsx",
      code: errorCode,
      preview: <ErrorOtpInput {...t("stories.error.texts", { returnObjects: true })} />,
    },
    {
      id: "disabled",
      file: "DisabledOtpInput.tsx",
      code: disabledCode,
      preview: <DisabledOtpInput {...t("stories.disabled.texts", { returnObjects: true })} />,
    },
    {
      id: "required",
      file: "RequiredOtpInput.tsx",
      code: requiredCode,
      preview: <RequiredOtpInput {...t("stories.required.texts", { returnObjects: true })} />,
    },
    {
      id: "borders",
      file: "OtpInputBorders.tsx",
      code: bordersCode,
      preview: <OtpInputBorders helperTexts={t("stories.borders.helperTexts", { returnObjects: true })} />,
    },
    {
      id: "sizes",
      file: "OtpInputSizes.tsx",
      code: sizesCode,
      preview: <OtpInputSizes labels={t("stories.sizes.labels", { returnObjects: true })} />,
    },
    {
      id: "lengths",
      file: "OtpInputLengths.tsx",
      code: lengthsCode,
      preview: <OtpInputLengths labels={t("stories.lengths.labels", { returnObjects: true })} />,
    },
    {
      id: "controlled",
      file: "ControlledOtpInput.tsx",
      code: controlledCode,
      preview: <ControlledOtpInput {...t("stories.controlled.texts", { returnObjects: true })} />,
    },
    {
      id: "allStates",
      file: "AllStatesOtpInput.tsx",
      code: allStatesCode,
      preview: <AllStatesOtpInput texts={t("stories.allStates.texts", { returnObjects: true })} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { OtpInput } from "@gem-org/gem-system"'
      />

      <OtpInputPlayground />

      {stories.map((story) => (
        <DocsSection
          key={story.id}
          title={t(`stories.${story.id}.title`)}
          description={t(`stories.${story.id}.description`)}
        >
          <DemoBlock code={story.code} label={story.file} overflow>
            <div className="otpinput-demo">{story.preview}</div>
          </DemoBlock>
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindOtpInput.tsx">
            <div className="otpinput-demo">
              <TailwindOtpInput texts={t("styleChanges.tailwind", { returnObjects: true })} />
            </div>
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantOtpInput.tsx">
            <div className="otpinput-demo">
              <VariantOtpInputs />
            </div>
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="otp-input-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledOtpInput.tsx">
              <div className="otpinput-demo">
                <StyledOtpInput {...t("styleChanges.css", { returnObjects: true })} />
              </div>
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="OtpInput" to="/components/otp-input/api" linkLabel={t("apiLink")} />
    </div>
  );
}
