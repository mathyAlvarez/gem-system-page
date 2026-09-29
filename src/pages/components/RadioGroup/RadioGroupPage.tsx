import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { ApiLinkSection } from "../../../components/ApiLinkSection.tsx";
import { CodeBlock, DemoBlock, DocsPageHeader, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { StyleChangesSection } from "../../../components/StyleChangesSection.tsx";
import { RadioGroupPlayground } from "./RadioGroupPlayground.tsx";
import { BaseRadioGroup } from "./examples/BaseRadioGroup.tsx";
import baseCode from "./examples/BaseRadioGroup.tsx?raw";
import { ControlledRadioGroup } from "./examples/ControlledRadioGroup.tsx";
import controlledCode from "./examples/ControlledRadioGroup.tsx?raw";
import { DisabledOptionRadioGroup } from "./examples/DisabledOptionRadioGroup.tsx";
import disabledOptionCode from "./examples/DisabledOptionRadioGroup.tsx?raw";
import { DisabledRadioGroup } from "./examples/DisabledRadioGroup.tsx";
import disabledCode from "./examples/DisabledRadioGroup.tsx?raw";
import { ErrorRadioGroup } from "./examples/ErrorRadioGroup.tsx";
import errorCode from "./examples/ErrorRadioGroup.tsx?raw";
import { HorizontalRadioGroup } from "./examples/HorizontalRadioGroup.tsx";
import horizontalCode from "./examples/HorizontalRadioGroup.tsx?raw";
import { KeyboardRadioGroup } from "./examples/KeyboardRadioGroup.tsx";
import keyboardCode from "./examples/KeyboardRadioGroup.tsx?raw";
import overridesCss from "./examples/radio-group-overrides.css?raw";
import { RadioGroupSizes } from "./examples/RadioGroupSizes.tsx";
import sizesCode from "./examples/RadioGroupSizes.tsx?raw";
import { RadioGroupTones } from "./examples/RadioGroupTones.tsx";
import tonesCode from "./examples/RadioGroupTones.tsx?raw";
import { RadioGroupWithTooltip } from "./examples/RadioGroupWithTooltip.tsx";
import withTooltipCode from "./examples/RadioGroupWithTooltip.tsx?raw";
import { RequiredRadioGroup } from "./examples/RequiredRadioGroup.tsx";
import requiredCode from "./examples/RequiredRadioGroup.tsx?raw";
import { StyledRadioGroup } from "./examples/StyledRadioGroup.tsx";
import styledCode from "./examples/StyledRadioGroup.tsx?raw";
import { TailwindRadioGroup } from "./examples/TailwindRadioGroup.tsx";
import tailwindCode from "./examples/TailwindRadioGroup.tsx?raw";
import { VariantRadioGroups } from "./examples/VariantRadioGroup.tsx";
import variantCode from "./examples/VariantRadioGroup.tsx?raw";
import withTooltipCss from "./examples/with-tooltip.css?raw";
import "./RadioGroupPage.scss";

type StoryId =
  | "base"
  | "horizontal"
  | "disabled"
  | "disabledOption"
  | "error"
  | "required"
  | "tones"
  | "sizes"
  | "keyboard"
  | "controlled"
  | "withTooltip";

type Story = {
  id: StoryId;
  file: string;
  code: string;
  preview: ReactNode;
  css?: { file: string; code: string };
};

export function RadioGroupPage() {
  const { t } = useTranslation("radioGroup");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseRadioGroup.tsx",
      code: baseCode,
      preview: <BaseRadioGroup {...t("stories.base.texts", { returnObjects: true })} />,
    },
    {
      id: "horizontal",
      file: "HorizontalRadioGroup.tsx",
      code: horizontalCode,
      preview: <HorizontalRadioGroup {...t("stories.horizontal.texts", { returnObjects: true })} />,
    },
    {
      id: "disabled",
      file: "DisabledRadioGroup.tsx",
      code: disabledCode,
      preview: <DisabledRadioGroup {...t("stories.disabled.texts", { returnObjects: true })} />,
    },
    {
      id: "disabledOption",
      file: "DisabledOptionRadioGroup.tsx",
      code: disabledOptionCode,
      preview: <DisabledOptionRadioGroup {...t("stories.disabledOption.texts", { returnObjects: true })} />,
    },
    {
      id: "error",
      file: "ErrorRadioGroup.tsx",
      code: errorCode,
      preview: <ErrorRadioGroup {...t("stories.error.texts", { returnObjects: true })} />,
    },
    {
      id: "required",
      file: "RequiredRadioGroup.tsx",
      code: requiredCode,
      preview: <RequiredRadioGroup {...t("stories.required.texts", { returnObjects: true })} />,
    },
    {
      id: "tones",
      file: "RadioGroupTones.tsx",
      code: tonesCode,
      preview: <RadioGroupTones labels={t("stories.tones.labels", { returnObjects: true })} />,
    },
    {
      id: "sizes",
      file: "RadioGroupSizes.tsx",
      code: sizesCode,
      preview: <RadioGroupSizes labels={t("stories.sizes.labels", { returnObjects: true })} />,
    },
    {
      id: "keyboard",
      file: "KeyboardRadioGroup.tsx",
      code: keyboardCode,
      preview: <KeyboardRadioGroup {...t("stories.keyboard.texts", { returnObjects: true })} />,
    },
    {
      id: "controlled",
      file: "ControlledRadioGroup.tsx",
      code: controlledCode,
      preview: <ControlledRadioGroup {...t("stories.controlled.texts", { returnObjects: true })} />,
    },
    {
      id: "withTooltip",
      file: "RadioGroupWithTooltip.tsx",
      code: withTooltipCode,
      css: { file: "with-tooltip.css", code: withTooltipCss },
      preview: <RadioGroupWithTooltip texts={t("stories.withTooltip.texts", { returnObjects: true })} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Radio, RadioGroup } from "@gem-org/gem-system"'
      />

      <RadioGroupPlayground />

      {stories.map((story) => (
        <DocsSection
          key={story.id}
          title={t(`stories.${story.id}.title`)}
          description={t(`stories.${story.id}.description`)}
        >
          {story.css ? <CodeBlock code={story.css.code} label={story.css.file} language="css" /> : null}
          <DemoBlock code={story.code} label={story.file} stack>
            {story.preview}
          </DemoBlock>
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindRadioGroup.tsx" stack>
            <TailwindRadioGroup texts={t("styleChanges.tailwind", { returnObjects: true })} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantRadioGroup.tsx" stack>
            <VariantRadioGroups texts={t("styleChanges.cva", { returnObjects: true })} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="radio-group-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledRadioGroup.tsx" stack>
              <StyledRadioGroup texts={t("styleChanges.css", { returnObjects: true })} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="RadioGroup" to="/components/radio-group/api" linkLabel={t("apiLink")} />
    </div>
  );
}
