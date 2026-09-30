import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { ApiLinkSection } from "../../../components/ApiLinkSection.tsx";
import { CodeBlock, DemoBlock, DocsPageHeader, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { StyleChangesSection } from "../../../components/StyleChangesSection.tsx";
import { InputMaskPlayground } from "./InputMaskPlayground.tsx";
import { BaseInputMask } from "./examples/BaseInputMask.tsx";
import baseCode from "./examples/BaseInputMask.tsx?raw";
import { CardInputMask } from "./examples/CardInputMask.tsx";
import cardCode from "./examples/CardInputMask.tsx?raw";
import { CustomMaskInputMask } from "./examples/CustomMaskInputMask.tsx";
import customMaskCode from "./examples/CustomMaskInputMask.tsx?raw";
import { DateIsoInputMask } from "./examples/DateIsoInputMask.tsx";
import dateIsoCode from "./examples/DateIsoInputMask.tsx?raw";
import { DisabledInputMask } from "./examples/DisabledInputMask.tsx";
import disabledCode from "./examples/DisabledInputMask.tsx?raw";
import overridesCss from "./examples/input-mask-overrides.css?raw";
import { InvalidInputMask } from "./examples/InvalidInputMask.tsx";
import invalidCode from "./examples/InvalidInputMask.tsx?raw";
import { OutlineLabelInputMask } from "./examples/OutlineLabelInputMask.tsx";
import outlineLabelCode from "./examples/OutlineLabelInputMask.tsx?raw";
import { PhoneInputMask } from "./examples/PhoneInputMask.tsx";
import phoneCode from "./examples/PhoneInputMask.tsx?raw";
import { PrefixIconTextInputMask } from "./examples/PrefixIconTextInputMask.tsx";
import prefixIconTextCode from "./examples/PrefixIconTextInputMask.tsx?raw";
import { PrefixSuffixInputMask } from "./examples/PrefixSuffixInputMask.tsx";
import prefixSuffixCode from "./examples/PrefixSuffixInputMask.tsx?raw";
import { PrefixTextInputMask } from "./examples/PrefixTextInputMask.tsx";
import prefixTextCode from "./examples/PrefixTextInputMask.tsx?raw";
import { PresetsInputMask } from "./examples/PresetsInputMask.tsx";
import presetsCode from "./examples/PresetsInputMask.tsx?raw";
import { StyledInputMask } from "./examples/StyledInputMask.tsx";
import styledCode from "./examples/StyledInputMask.tsx?raw";
import { SuffixTextInputMask } from "./examples/SuffixTextInputMask.tsx";
import suffixTextCode from "./examples/SuffixTextInputMask.tsx?raw";
import { TailwindInputMask } from "./examples/TailwindInputMask.tsx";
import tailwindCode from "./examples/TailwindInputMask.tsx?raw";
import { TimeInputMask } from "./examples/TimeInputMask.tsx";
import timeCode from "./examples/TimeInputMask.tsx?raw";
import { ValuePayloadInputMask } from "./examples/ValuePayloadInputMask.tsx";
import valuePayloadCode from "./examples/ValuePayloadInputMask.tsx?raw";
import { VariantInputMasks } from "./examples/VariantInputMask.tsx";
import variantCode from "./examples/VariantInputMask.tsx?raw";
import { ClearableInputMask } from "./examples/ClearableInputMask.tsx";
import clearableCode from "./examples/ClearableInputMask.tsx?raw";
import "./InputMaskPage.scss";

type StoryId =
  | "base"
  | "prefixText"
  | "suffixText"
  | "prefixAndSuffix"
  | "prefixIconAndText"
  | "dateIso"
  | "time"
  | "phone"
  | "card"
  | "customMask"
  | "outlineLabel"
  | "clearable"
  | "invalid"
  | "disabled"
  | "valuePayload"
  | "presets";

type Story = {
  id: StoryId;
  file: string;
  code: string;
  preview: ReactNode;
};

export function InputMaskPage() {
  const { t } = useTranslation("inputMask");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseInputMask.tsx",
      code: baseCode,
      preview: <BaseInputMask {...t("stories.base.texts", { returnObjects: true })} />,
    },
    {
      id: "prefixText",
      file: "PrefixTextInputMask.tsx",
      code: prefixTextCode,
      preview: <PrefixTextInputMask {...t("stories.prefixText.texts", { returnObjects: true })} />,
    },
    {
      id: "suffixText",
      file: "SuffixTextInputMask.tsx",
      code: suffixTextCode,
      preview: <SuffixTextInputMask {...t("stories.suffixText.texts", { returnObjects: true })} />,
    },
    {
      id: "prefixAndSuffix",
      file: "PrefixSuffixInputMask.tsx",
      code: prefixSuffixCode,
      preview: <PrefixSuffixInputMask {...t("stories.prefixAndSuffix.texts", { returnObjects: true })} />,
    },
    {
      id: "prefixIconAndText",
      file: "PrefixIconTextInputMask.tsx",
      code: prefixIconTextCode,
      preview: <PrefixIconTextInputMask {...t("stories.prefixIconAndText.texts", { returnObjects: true })} />,
    },
    {
      id: "dateIso",
      file: "DateIsoInputMask.tsx",
      code: dateIsoCode,
      preview: <DateIsoInputMask {...t("stories.dateIso.texts", { returnObjects: true })} />,
    },
    {
      id: "time",
      file: "TimeInputMask.tsx",
      code: timeCode,
      preview: <TimeInputMask {...t("stories.time.texts", { returnObjects: true })} />,
    },
    {
      id: "phone",
      file: "PhoneInputMask.tsx",
      code: phoneCode,
      preview: <PhoneInputMask {...t("stories.phone.texts", { returnObjects: true })} />,
    },
    {
      id: "card",
      file: "CardInputMask.tsx",
      code: cardCode,
      preview: <CardInputMask {...t("stories.card.texts", { returnObjects: true })} />,
    },
    {
      id: "customMask",
      file: "CustomMaskInputMask.tsx",
      code: customMaskCode,
      preview: <CustomMaskInputMask {...t("stories.customMask.texts", { returnObjects: true })} />,
    },
    {
      id: "outlineLabel",
      file: "OutlineLabelInputMask.tsx",
      code: outlineLabelCode,
      preview: <OutlineLabelInputMask {...t("stories.outlineLabel.texts", { returnObjects: true })} />,
    },
    {
      id: "clearable",
      file: "ClearableInputMask.tsx",
      code: clearableCode,
      preview: <ClearableInputMask {...t("stories.clearable.texts", { returnObjects: true })} />,
    },
    {
      id: "invalid",
      file: "InvalidInputMask.tsx",
      code: invalidCode,
      preview: <InvalidInputMask {...t("stories.invalid.texts", { returnObjects: true })} />,
    },
    {
      id: "disabled",
      file: "DisabledInputMask.tsx",
      code: disabledCode,
      preview: <DisabledInputMask {...t("stories.disabled.texts", { returnObjects: true })} />,
    },
    {
      id: "valuePayload",
      file: "ValuePayloadInputMask.tsx",
      code: valuePayloadCode,
      preview: <ValuePayloadInputMask {...t("stories.valuePayload.texts", { returnObjects: true })} />,
    },
    {
      id: "presets",
      file: "PresetsInputMask.tsx",
      code: presetsCode,
      preview: <PresetsInputMask />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { InputMask } from "@gem-org/gem-system"'
      />

      <InputMaskPlayground />

      {stories.map((story) => (
        <DocsSection
          key={story.id}
          title={t(`stories.${story.id}.title`)}
          description={t(`stories.${story.id}.description`)}
        >
          <DemoBlock code={story.code} label={story.file}>
            <div className="inputmask-demo">{story.preview}</div>
          </DemoBlock>
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindInputMask.tsx">
            <div className="inputmask-demo">
              <TailwindInputMask texts={t("styleChanges.tailwind", { returnObjects: true })} />
            </div>
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantInputMask.tsx">
            <div className="inputmask-demo">
              <VariantInputMasks />
            </div>
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="input-mask-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledInputMask.tsx">
              <div className="inputmask-demo">
                <StyledInputMask {...t("styleChanges.css", { returnObjects: true })} />
              </div>
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="InputMask" to="/components/input-mask/api" linkLabel={t("apiLink")} />
    </div>
  );
}
