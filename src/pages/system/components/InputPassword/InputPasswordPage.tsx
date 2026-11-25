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
import { InputPasswordPlayground } from "./InputPasswordPlayground.tsx";
import { AsteriskInputPassword } from "./examples/AsteriskInputPassword.tsx";
import asteriskCode from "./examples/AsteriskInputPassword.tsx?raw";
import { BaseInputPassword } from "./examples/BaseInputPassword.tsx";
import baseCode from "./examples/BaseInputPassword.tsx?raw";
import { DefaultVisibleInputPassword } from "./examples/DefaultVisibleInputPassword.tsx";
import defaultVisibleCode from "./examples/DefaultVisibleInputPassword.tsx?raw";
import { DisabledInputPassword } from "./examples/DisabledInputPassword.tsx";
import disabledCode from "./examples/DisabledInputPassword.tsx?raw";
import { ErrorInputPassword } from "./examples/ErrorInputPassword.tsx";
import errorCode from "./examples/ErrorInputPassword.tsx?raw";
import { InfoInputPassword } from "./examples/InfoInputPassword.tsx";
import infoCode from "./examples/InfoInputPassword.tsx?raw";
import overridesCss from "./examples/input-password-overrides.css?raw";
import { InputPasswordSizes } from "./examples/InputPasswordSizes.tsx";
import sizesCode from "./examples/InputPasswordSizes.tsx?raw";
import { MaskCharacterInputPassword } from "./examples/MaskCharacterInputPassword.tsx";
import maskCharacterCode from "./examples/MaskCharacterInputPassword.tsx?raw";
import { NoToggleInputPassword } from "./examples/NoToggleInputPassword.tsx";
import noToggleCode from "./examples/NoToggleInputPassword.tsx?raw";
import { OutlineLabelInputPassword } from "./examples/OutlineLabelInputPassword.tsx";
import outlineLabelCode from "./examples/OutlineLabelInputPassword.tsx?raw";
import { PrefixInputPassword } from "./examples/PrefixInputPassword.tsx";
import prefixCode from "./examples/PrefixInputPassword.tsx?raw";
import { StyledInputPassword } from "./examples/StyledInputPassword.tsx";
import styledCode from "./examples/StyledInputPassword.tsx?raw";
import { SuffixToggleInputPassword } from "./examples/SuffixToggleInputPassword.tsx";
import suffixToggleCode from "./examples/SuffixToggleInputPassword.tsx?raw";
import { TailwindInputPassword } from "./examples/TailwindInputPassword.tsx";
import tailwindCode from "./examples/TailwindInputPassword.tsx?raw";
import { ToggleIconsInputPassword } from "./examples/ToggleIconsInputPassword.tsx";
import toggleIconsCode from "./examples/ToggleIconsInputPassword.tsx?raw";
import { ValidRegexInputPassword } from "./examples/ValidRegexInputPassword.tsx";
import validRegexCode from "./examples/ValidRegexInputPassword.tsx?raw";
import { VariantInputPasswords } from "./examples/VariantInputPassword.tsx";
import variantCode from "./examples/VariantInputPassword.tsx?raw";
import { ClearableInputPassword } from "./examples/ClearableInputPassword.tsx";
import clearableCode from "./examples/ClearableInputPassword.tsx?raw";
import "./InputPasswordPage.scss";

type StoryId =
  | "base"
  | "withInfoIcon"
  | "outlineLabel"
  | "withPrefix"
  | "customToggleIcons"
  | "customMaskCharacter"
  | "asteriskMask"
  | "defaultVisible"
  | "withoutToggle"
  | "clearable"
  | "error"
  | "validRegex"
  | "disabled"
  | "withSuffixAndToggle"
  | "sizes";

type Story = {
  id: StoryId;
  file: string;
  code: string;
  preview: ReactNode;
};

export function InputPasswordPage() {
  const { t } = useTranslation("inputPassword");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseInputPassword.tsx",
      code: baseCode,
      preview: <BaseInputPassword {...t("stories.base.texts", { returnObjects: true })} />,
    },
    {
      id: "withInfoIcon",
      file: "InfoInputPassword.tsx",
      code: infoCode,
      preview: <InfoInputPassword {...t("stories.withInfoIcon.texts", { returnObjects: true })} />,
    },
    {
      id: "outlineLabel",
      file: "OutlineLabelInputPassword.tsx",
      code: outlineLabelCode,
      preview: (
        <OutlineLabelInputPassword {...t("stories.outlineLabel.texts", { returnObjects: true })} />
      ),
    },
    {
      id: "withPrefix",
      file: "PrefixInputPassword.tsx",
      code: prefixCode,
      preview: <PrefixInputPassword {...t("stories.withPrefix.texts", { returnObjects: true })} />,
    },
    {
      id: "customToggleIcons",
      file: "ToggleIconsInputPassword.tsx",
      code: toggleIconsCode,
      preview: (
        <ToggleIconsInputPassword
          {...t("stories.customToggleIcons.texts", { returnObjects: true })}
        />
      ),
    },
    {
      id: "customMaskCharacter",
      file: "MaskCharacterInputPassword.tsx",
      code: maskCharacterCode,
      preview: (
        <MaskCharacterInputPassword
          {...t("stories.customMaskCharacter.texts", { returnObjects: true })}
        />
      ),
    },
    {
      id: "asteriskMask",
      file: "AsteriskInputPassword.tsx",
      code: asteriskCode,
      preview: (
        <AsteriskInputPassword {...t("stories.asteriskMask.texts", { returnObjects: true })} />
      ),
    },
    {
      id: "defaultVisible",
      file: "DefaultVisibleInputPassword.tsx",
      code: defaultVisibleCode,
      preview: (
        <DefaultVisibleInputPassword
          {...t("stories.defaultVisible.texts", { returnObjects: true })}
        />
      ),
    },
    {
      id: "withoutToggle",
      file: "NoToggleInputPassword.tsx",
      code: noToggleCode,
      preview: (
        <NoToggleInputPassword {...t("stories.withoutToggle.texts", { returnObjects: true })} />
      ),
    },
    {
      id: "clearable",
      file: "ClearableInputPassword.tsx",
      code: clearableCode,
      preview: (
        <ClearableInputPassword {...t("stories.clearable.texts", { returnObjects: true })} />
      ),
    },
    {
      id: "error",
      file: "ErrorInputPassword.tsx",
      code: errorCode,
      preview: <ErrorInputPassword {...t("stories.error.texts", { returnObjects: true })} />,
    },
    {
      id: "validRegex",
      file: "ValidRegexInputPassword.tsx",
      code: validRegexCode,
      preview: (
        <ValidRegexInputPassword {...t("stories.validRegex.texts", { returnObjects: true })} />
      ),
    },
    {
      id: "disabled",
      file: "DisabledInputPassword.tsx",
      code: disabledCode,
      preview: <DisabledInputPassword {...t("stories.disabled.texts", { returnObjects: true })} />,
    },
    {
      id: "withSuffixAndToggle",
      file: "SuffixToggleInputPassword.tsx",
      code: suffixToggleCode,
      preview: (
        <SuffixToggleInputPassword
          {...t("stories.withSuffixAndToggle.texts", { returnObjects: true })}
        />
      ),
    },
    {
      id: "sizes",
      file: "InputPasswordSizes.tsx",
      code: sizesCode,
      preview: <InputPasswordSizes labels={t("stories.sizes.labels", { returnObjects: true })} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { InputPassword } from "@gem-org/gem-system"'
      />

      <InputPasswordPlayground />

      {stories.map((story) => (
        <DocsSection
          key={story.id}
          title={t(`stories.${story.id}.title`)}
          description={t(`stories.${story.id}.description`)}
        >
          <DemoBlock code={story.code} label={story.file} overflow>
            <div className="inputpassword-demo">{story.preview}</div>
          </DemoBlock>
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindInputPassword.tsx">
            <div className="inputpassword-demo">
              <TailwindInputPassword texts={t("styleChanges.tailwind", { returnObjects: true })} />
            </div>
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantInputPassword.tsx">
            <div className="inputpassword-demo">
              <VariantInputPasswords />
            </div>
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="input-password-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledInputPassword.tsx">
              <div className="inputpassword-demo">
                <StyledInputPassword {...t("styleChanges.css", { returnObjects: true })} />
              </div>
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="InputPassword"
        to="/system/components/input-password/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
