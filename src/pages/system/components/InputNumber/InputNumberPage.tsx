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
import { InputNumberPlayground } from "./InputNumberPlayground.tsx";
import { AdditionInputNumber } from "./examples/AdditionInputNumber.tsx";
import additionCode from "./examples/AdditionInputNumber.tsx?raw";
import arithmeticCss from "./examples/arithmetic-icons.css?raw";
import { ArithmeticIcons } from "./examples/ArithmeticIcons.tsx";
import arithmeticCode from "./examples/ArithmeticIcons.tsx?raw";
import { BaseInputNumber } from "./examples/BaseInputNumber.tsx";
import baseCode from "./examples/BaseInputNumber.tsx?raw";
import { DisabledInputNumber } from "./examples/DisabledInputNumber.tsx";
import disabledCode from "./examples/DisabledInputNumber.tsx?raw";
import { ErrorInputNumber } from "./examples/ErrorInputNumber.tsx";
import errorCode from "./examples/ErrorInputNumber.tsx?raw";
import { FormattedInputNumber } from "./examples/FormattedInputNumber.tsx";
import formattedCode from "./examples/FormattedInputNumber.tsx?raw";
import { IconsAdditionInputNumber } from "./examples/IconsAdditionInputNumber.tsx";
import iconsAdditionCode from "./examples/IconsAdditionInputNumber.tsx?raw";
import { IconsInputNumber } from "./examples/IconsInputNumber.tsx";
import iconsCode from "./examples/IconsInputNumber.tsx?raw";
import { IconsSteppersInputNumber } from "./examples/IconsSteppersInputNumber.tsx";
import iconsSteppersCode from "./examples/IconsSteppersInputNumber.tsx?raw";
import { InfoInputNumber } from "./examples/InfoInputNumber.tsx";
import infoCode from "./examples/InfoInputNumber.tsx?raw";
import overridesCss from "./examples/input-number-overrides.css?raw";
import { InputNumberSizes } from "./examples/InputNumberSizes.tsx";
import sizesCode from "./examples/InputNumberSizes.tsx?raw";
import { MinMaxStepInputNumber } from "./examples/MinMaxStepInputNumber.tsx";
import minMaxStepCode from "./examples/MinMaxStepInputNumber.tsx?raw";
import { NoSteppersInputNumber } from "./examples/NoSteppersInputNumber.tsx";
import noSteppersCode from "./examples/NoSteppersInputNumber.tsx?raw";
import { OutlineLabelInputNumber } from "./examples/OutlineLabelInputNumber.tsx";
import outlineLabelCode from "./examples/OutlineLabelInputNumber.tsx?raw";
import { StyledInputNumber } from "./examples/StyledInputNumber.tsx";
import styledCode from "./examples/StyledInputNumber.tsx?raw";
import { TailwindInputNumber } from "./examples/TailwindInputNumber.tsx";
import tailwindCode from "./examples/TailwindInputNumber.tsx?raw";
import { VariantInputNumbers } from "./examples/VariantInputNumber.tsx";
import variantCode from "./examples/VariantInputNumber.tsx?raw";
import { ClearableInputNumber } from "./examples/ClearableInputNumber.tsx";
import clearableCode from "./examples/ClearableInputNumber.tsx?raw";
import "./InputNumberPage.scss";

type StoryId =
  | "base"
  | "withInfoIcon"
  | "withoutSteppers"
  | "additionButtons"
  | "minMaxStep"
  | "formatted"
  | "withIcons"
  | "withIconsAndSteppers"
  | "withIconsAndAddition"
  | "outlineLabel"
  | "clearable"
  | "error"
  | "disabled"
  | "sizes"
  | "arithmeticIcons";

type Story = {
  id: StoryId;
  file: string;
  code: string;
  preview: ReactNode;
  css?: { file: string; code: string };
};

export function InputNumberPage() {
  const { t } = useTranslation("inputNumber");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseInputNumber.tsx",
      code: baseCode,
      preview: <BaseInputNumber {...t("stories.base.texts", { returnObjects: true })} />,
    },
    {
      id: "withInfoIcon",
      file: "InfoInputNumber.tsx",
      code: infoCode,
      preview: <InfoInputNumber {...t("stories.withInfoIcon.texts", { returnObjects: true })} />,
    },
    {
      id: "withoutSteppers",
      file: "NoSteppersInputNumber.tsx",
      code: noSteppersCode,
      preview: (
        <NoSteppersInputNumber {...t("stories.withoutSteppers.texts", { returnObjects: true })} />
      ),
    },
    {
      id: "additionButtons",
      file: "AdditionInputNumber.tsx",
      code: additionCode,
      preview: (
        <AdditionInputNumber {...t("stories.additionButtons.texts", { returnObjects: true })} />
      ),
    },
    {
      id: "minMaxStep",
      file: "MinMaxStepInputNumber.tsx",
      code: minMaxStepCode,
      preview: (
        <MinMaxStepInputNumber {...t("stories.minMaxStep.texts", { returnObjects: true })} />
      ),
    },
    {
      id: "formatted",
      file: "FormattedInputNumber.tsx",
      code: formattedCode,
      preview: <FormattedInputNumber {...t("stories.formatted.texts", { returnObjects: true })} />,
    },
    {
      id: "withIcons",
      file: "IconsInputNumber.tsx",
      code: iconsCode,
      preview: <IconsInputNumber {...t("stories.withIcons.texts", { returnObjects: true })} />,
    },
    {
      id: "withIconsAndSteppers",
      file: "IconsSteppersInputNumber.tsx",
      code: iconsSteppersCode,
      preview: (
        <IconsSteppersInputNumber
          {...t("stories.withIconsAndSteppers.texts", { returnObjects: true })}
        />
      ),
    },
    {
      id: "withIconsAndAddition",
      file: "IconsAdditionInputNumber.tsx",
      code: iconsAdditionCode,
      preview: (
        <IconsAdditionInputNumber
          {...t("stories.withIconsAndAddition.texts", { returnObjects: true })}
        />
      ),
    },
    {
      id: "outlineLabel",
      file: "OutlineLabelInputNumber.tsx",
      code: outlineLabelCode,
      preview: (
        <OutlineLabelInputNumber {...t("stories.outlineLabel.texts", { returnObjects: true })} />
      ),
    },
    {
      id: "clearable",
      file: "ClearableInputNumber.tsx",
      code: clearableCode,
      preview: <ClearableInputNumber {...t("stories.clearable.texts", { returnObjects: true })} />,
    },
    {
      id: "error",
      file: "ErrorInputNumber.tsx",
      code: errorCode,
      preview: <ErrorInputNumber {...t("stories.error.texts", { returnObjects: true })} />,
    },
    {
      id: "disabled",
      file: "DisabledInputNumber.tsx",
      code: disabledCode,
      preview: <DisabledInputNumber {...t("stories.disabled.texts", { returnObjects: true })} />,
    },
    {
      id: "sizes",
      file: "InputNumberSizes.tsx",
      code: sizesCode,
      preview: <InputNumberSizes labels={t("stories.sizes.labels", { returnObjects: true })} />,
    },
    {
      id: "arithmeticIcons",
      file: "ArithmeticIcons.tsx",
      code: arithmeticCode,
      css: { file: "arithmetic-icons.css", code: arithmeticCss },
      preview: (
        <ArithmeticIcons titles={t("stories.arithmeticIcons.titles", { returnObjects: true })} />
      ),
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { InputNumber } from "@gem-org/gem-system"'
      />

      <InputNumberPlayground />

      {stories.map((story) => (
        <DocsSection
          key={story.id}
          title={t(`stories.${story.id}.title`)}
          description={t(`stories.${story.id}.description`)}
        >
          {story.css ? (
            <CodeBlock code={story.css.code} label={story.css.file} language="css" />
          ) : null}
          <DemoBlock code={story.code} label={story.file} overflow>
            <div className="inputnumber-demo">{story.preview}</div>
          </DemoBlock>
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindInputNumber.tsx">
            <div className="inputnumber-demo">
              <TailwindInputNumber texts={t("styleChanges.tailwind", { returnObjects: true })} />
            </div>
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantInputNumber.tsx">
            <div className="inputnumber-demo">
              <VariantInputNumbers />
            </div>
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="input-number-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledInputNumber.tsx">
              <div className="inputnumber-demo">
                <StyledInputNumber {...t("styleChanges.css", { returnObjects: true })} />
              </div>
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="InputNumber"
        to="/system/components/input-number/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
