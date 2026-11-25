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
import { RadioPlayground } from "./RadioPlayground.tsx";
import { BaseRadio } from "./examples/BaseRadio.tsx";
import baseCode from "./examples/BaseRadio.tsx?raw";
import { CheckedRadio } from "./examples/CheckedRadio.tsx";
import checkedCode from "./examples/CheckedRadio.tsx?raw";
import { DisabledRadio } from "./examples/DisabledRadio.tsx";
import disabledCode from "./examples/DisabledRadio.tsx?raw";
import overridesCss from "./examples/radio-overrides.css?raw";
import { RadioSizes } from "./examples/RadioSizes.tsx";
import sizesCode from "./examples/RadioSizes.tsx?raw";
import { RadioTones } from "./examples/RadioTones.tsx";
import tonesCode from "./examples/RadioTones.tsx?raw";
import { RadioWithoutLabel } from "./examples/RadioWithoutLabel.tsx";
import withoutLabelCode from "./examples/RadioWithoutLabel.tsx?raw";
import { SharedNameRadios } from "./examples/SharedNameRadios.tsx";
import sharedNameCode from "./examples/SharedNameRadios.tsx?raw";
import { StyledRadios } from "./examples/StyledRadios.tsx";
import styledCode from "./examples/StyledRadios.tsx?raw";
import { TailwindRadio } from "./examples/TailwindRadio.tsx";
import tailwindCode from "./examples/TailwindRadio.tsx?raw";
import { VariantRadios } from "./examples/VariantRadio.tsx";
import variantCode from "./examples/VariantRadio.tsx?raw";
import "./RadioPage.scss";

type StoryId = "base" | "checked" | "disabled" | "tones" | "sizes" | "withoutLabel" | "sharedName";

type Story = {
  id: StoryId;
  file: string;
  code: string;
  preview: ReactNode;
};

export function RadioPage() {
  const { t } = useTranslation("radio");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseRadio.tsx",
      code: baseCode,
      preview: (
        <BaseRadio label={t("stories.base.label")} helperText={t("stories.base.helperText")} />
      ),
    },
    {
      id: "checked",
      file: "CheckedRadio.tsx",
      code: checkedCode,
      preview: <CheckedRadio label={t("stories.checked.label")} />,
    },
    {
      id: "disabled",
      file: "DisabledRadio.tsx",
      code: disabledCode,
      preview: (
        <DisabledRadio
          label={t("stories.disabled.label")}
          helperText={t("stories.disabled.helperText")}
        />
      ),
    },
    {
      id: "tones",
      file: "RadioTones.tsx",
      code: tonesCode,
      preview: <RadioTones />,
    },
    {
      id: "sizes",
      file: "RadioSizes.tsx",
      code: sizesCode,
      preview: <RadioSizes labels={t("stories.sizes.labels", { returnObjects: true })} />,
    },
    {
      id: "withoutLabel",
      file: "RadioWithoutLabel.tsx",
      code: withoutLabelCode,
      preview: <RadioWithoutLabel ariaLabel={t("stories.withoutLabel.ariaLabel")} />,
    },
    {
      id: "sharedName",
      file: "SharedNameRadios.tsx",
      code: sharedNameCode,
      preview: (
        <SharedNameRadios labels={t("stories.sharedName.labels", { returnObjects: true })} />
      ),
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Radio } from "@gem-org/gem-system"'
      />

      <RadioPlayground />

      {stories.map((story) => (
        <DocsSection
          key={story.id}
          title={t(`stories.${story.id}.title`)}
          description={t(`stories.${story.id}.description`)}
        >
          <DemoBlock code={story.code} label={story.file} stack>
            {story.preview}
          </DemoBlock>
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindRadio.tsx" stack>
            <TailwindRadio texts={t("styleChanges.tailwind", { returnObjects: true })} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantRadio.tsx" stack>
            <VariantRadios texts={t("styleChanges.cva", { returnObjects: true })} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="radio-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledRadios.tsx" stack>
              <StyledRadios texts={t("styleChanges.css", { returnObjects: true })} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="Radio"
        to="/system/components/radio/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
