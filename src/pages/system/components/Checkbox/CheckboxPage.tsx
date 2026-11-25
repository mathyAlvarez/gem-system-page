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
import { CheckboxPlayground } from "./CheckboxPlayground.tsx";
import { BaseCheckbox } from "./examples/BaseCheckbox.tsx";
import baseCode from "./examples/BaseCheckbox.tsx?raw";
import { CheckboxSizes } from "./examples/CheckboxSizes.tsx";
import sizesCode from "./examples/CheckboxSizes.tsx?raw";
import { CheckboxTones } from "./examples/CheckboxTones.tsx";
import tonesCode from "./examples/CheckboxTones.tsx?raw";
import { CheckboxWithoutLabel } from "./examples/CheckboxWithoutLabel.tsx";
import withoutLabelCode from "./examples/CheckboxWithoutLabel.tsx?raw";
import { CheckboxWithTooltip } from "./examples/CheckboxWithTooltip.tsx";
import withTooltipCode from "./examples/CheckboxWithTooltip.tsx?raw";
import { CheckedCheckbox } from "./examples/CheckedCheckbox.tsx";
import checkedCode from "./examples/CheckedCheckbox.tsx?raw";
import overridesCss from "./examples/checkbox-overrides.css?raw";
import { DisabledCheckboxes } from "./examples/DisabledCheckboxes.tsx";
import disabledCode from "./examples/DisabledCheckboxes.tsx?raw";
import { ErrorCheckbox } from "./examples/ErrorCheckbox.tsx";
import errorCode from "./examples/ErrorCheckbox.tsx?raw";
import { IndeterminateCheckbox } from "./examples/IndeterminateCheckbox.tsx";
import indeterminateCode from "./examples/IndeterminateCheckbox.tsx?raw";
import { NestedCheckboxGroup } from "./examples/NestedCheckboxGroup.tsx";
import nestedCode from "./examples/NestedCheckboxGroup.tsx?raw";
import { RequiredCheckbox } from "./examples/RequiredCheckbox.tsx";
import requiredCode from "./examples/RequiredCheckbox.tsx?raw";
import { RoundedCheckbox } from "./examples/RoundedCheckbox.tsx";
import roundedCode from "./examples/RoundedCheckbox.tsx?raw";
import { StyledCheckboxes } from "./examples/StyledCheckboxes.tsx";
import styledCode from "./examples/StyledCheckboxes.tsx?raw";
import { TailwindCheckbox } from "./examples/TailwindCheckbox.tsx";
import tailwindCode from "./examples/TailwindCheckbox.tsx?raw";
import { VariantCheckboxes } from "./examples/VariantCheckbox.tsx";
import variantCode from "./examples/VariantCheckbox.tsx?raw";
import withTooltipCss from "./examples/with-tooltip.css?raw";
import "./CheckboxPage.scss";

type StoryId =
  | "base"
  | "checked"
  | "indeterminate"
  | "disabled"
  | "error"
  | "required"
  | "tones"
  | "rounded"
  | "roundedTones"
  | "sizes"
  | "withoutLabel"
  | "withTooltip"
  | "nestedGroup";

type Story = {
  id: StoryId;
  file: string;
  code: string;
  preview: ReactNode;
  css?: { file: string; code: string };
};

export function CheckboxPage() {
  const { t } = useTranslation("checkbox");
  const stories: Story[] = [
    {
      id: "base",
      file: "BaseCheckbox.tsx",
      code: baseCode,
      preview: (
        <BaseCheckbox label={t("stories.base.label")} helperText={t("stories.base.helperText")} />
      ),
    },
    {
      id: "checked",
      file: "CheckedCheckbox.tsx",
      code: checkedCode,
      preview: <CheckedCheckbox label={t("stories.checked.label")} />,
    },
    {
      id: "indeterminate",
      file: "IndeterminateCheckbox.tsx",
      code: indeterminateCode,
      preview: (
        <IndeterminateCheckbox
          label={t("stories.indeterminate.label")}
          helperText={t("stories.indeterminate.helperText")}
        />
      ),
    },
    {
      id: "disabled",
      file: "DisabledCheckboxes.tsx",
      code: disabledCode,
      preview: (
        <DisabledCheckboxes
          checkedLabel={t("stories.disabled.checkedLabel")}
          uncheckedLabel={t("stories.disabled.uncheckedLabel")}
          helperText={t("stories.disabled.helperText")}
        />
      ),
    },
    {
      id: "error",
      file: "ErrorCheckbox.tsx",
      code: errorCode,
      preview: (
        <ErrorCheckbox
          label={t("stories.error.label")}
          errorMessage={t("stories.error.errorMessage")}
        />
      ),
    },
    {
      id: "required",
      file: "RequiredCheckbox.tsx",
      code: requiredCode,
      preview: (
        <RequiredCheckbox
          label={t("stories.required.label")}
          helperText={t("stories.required.helperText")}
        />
      ),
    },
    {
      id: "tones",
      file: "CheckboxTones.tsx",
      code: tonesCode,
      preview: <CheckboxTones />,
    },
    {
      id: "rounded",
      file: "RoundedCheckbox.tsx",
      code: roundedCode,
      preview: (
        <RoundedCheckbox
          label={t("stories.rounded.label")}
          helperText={t("stories.rounded.helperText")}
        />
      ),
    },
    {
      id: "roundedTones",
      file: "RoundedTones.tsx",
      code: `import { CheckboxTones } from "./CheckboxTones";

export function RoundedTones() {
  return <CheckboxTones rounded />;
}
`,
      preview: <CheckboxTones rounded />,
    },
    {
      id: "sizes",
      file: "CheckboxSizes.tsx",
      code: sizesCode,
      preview: (
        <CheckboxSizes
          labels={{
            sm: t("stories.sizes.sm"),
            md: t("stories.sizes.md"),
            lg: t("stories.sizes.lg"),
            rounded: t("stories.sizes.rounded"),
          }}
        />
      ),
    },
    {
      id: "withoutLabel",
      file: "CheckboxWithoutLabel.tsx",
      code: withoutLabelCode,
      preview: <CheckboxWithoutLabel ariaLabel={t("stories.withoutLabel.ariaLabel")} />,
    },
    {
      id: "withTooltip",
      file: "CheckboxWithTooltip.tsx",
      code: withTooltipCode,
      css: { file: "with-tooltip.css", code: withTooltipCss },
      preview: (
        <CheckboxWithTooltip
          texts={{
            marketing: t("stories.withTooltip.marketing"),
            marketingHelper: t("stories.withTooltip.marketingHelper"),
            marketingInfo: t("stories.withTooltip.marketingInfo"),
            priority: t("stories.withTooltip.priority"),
            priorityInfo: t("stories.withTooltip.priorityInfo"),
            analytics: t("stories.withTooltip.analytics"),
            analyticsAria: t("stories.withTooltip.analyticsAria"),
            analyticsTitle: t("stories.withTooltip.analyticsTitle"),
            analyticsBody: t("stories.withTooltip.analyticsBody"),
          }}
        />
      ),
    },
    {
      id: "nestedGroup",
      file: "NestedCheckboxGroup.tsx",
      code: nestedCode,
      preview: (
        <NestedCheckboxGroup
          labels={{
            all: t("stories.nestedGroup.all"),
            email: t("stories.nestedGroup.email"),
            sms: t("stories.nestedGroup.sms"),
            push: t("stories.nestedGroup.push"),
          }}
        />
      ),
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Checkbox } from "@gem-org/gem-system"'
      />

      <CheckboxPlayground />

      {stories.map((story) => (
        <DocsSection
          key={story.id}
          title={t(`stories.${story.id}.title`)}
          description={t(`stories.${story.id}.description`)}
        >
          {story.css ? (
            <CodeBlock code={story.css.code} label={story.css.file} language="css" />
          ) : null}
          <DemoBlock code={story.code} label={story.file} stack>
            {story.preview}
          </DemoBlock>
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindCheckbox.tsx" stack>
            <TailwindCheckbox
              texts={{
                card: t("stories.styleOverrides.tailwind.card"),
                cardHelper: t("stories.styleOverrides.tailwind.cardHelper"),
                merged: t("stories.styleOverrides.tailwind.merged"),
                mergedHelper: t("stories.styleOverrides.tailwind.mergedHelper"),
              }}
            />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantCheckbox.tsx" stack>
            <VariantCheckboxes
              texts={{
                plain: t("stories.styleOverrides.cva.plain"),
                card: t("stories.styleOverrides.cva.card"),
                brand: t("stories.styleOverrides.cva.brand"),
              }}
            />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="checkbox-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledCheckboxes.tsx" stack>
              <StyledCheckboxes
                texts={{
                  branded: t("stories.styleOverrides.branded"),
                  brandedHelper: t("stories.styleOverrides.brandedHelper"),
                  pill: t("stories.styleOverrides.pill"),
                  pillHelper: t("stories.styleOverrides.pillHelper"),
                  combined: t("stories.styleOverrides.combined"),
                  combinedHelper: t("stories.styleOverrides.combinedHelper"),
                }}
              />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="Checkbox"
        to="/system/components/checkbox/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
