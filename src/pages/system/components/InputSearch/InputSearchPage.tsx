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
import { InputSearchPlayground } from "./InputSearchPlayground.tsx";
import { BaseInputSearch } from "./examples/BaseInputSearch.tsx";
import baseCode from "./examples/BaseInputSearch.tsx?raw";
import { ControlledInputSearch } from "./examples/ControlledInputSearch.tsx";
import controlledCode from "./examples/ControlledInputSearch.tsx?raw";
import { CustomIconInputSearch } from "./examples/CustomIconInputSearch.tsx";
import customIconCode from "./examples/CustomIconInputSearch.tsx?raw";
import { DisabledInputSearch } from "./examples/DisabledInputSearch.tsx";
import disabledCode from "./examples/DisabledInputSearch.tsx?raw";
import { ErrorInputSearch } from "./examples/ErrorInputSearch.tsx";
import errorCode from "./examples/ErrorInputSearch.tsx?raw";
import overridesCss from "./examples/input-search-overrides.css?raw";
import { InputSearchSizes } from "./examples/InputSearchSizes.tsx";
import sizesCode from "./examples/InputSearchSizes.tsx?raw";
import { NoIconInputSearch } from "./examples/NoIconInputSearch.tsx";
import noIconCode from "./examples/NoIconInputSearch.tsx?raw";
import { StyledInputSearch } from "./examples/StyledInputSearch.tsx";
import styledCode from "./examples/StyledInputSearch.tsx?raw";
import { SuffixInputSearch } from "./examples/SuffixInputSearch.tsx";
import suffixCode from "./examples/SuffixInputSearch.tsx?raw";
import { TailwindInputSearch } from "./examples/TailwindInputSearch.tsx";
import tailwindCode from "./examples/TailwindInputSearch.tsx?raw";
import { ValueInputSearch } from "./examples/ValueInputSearch.tsx";
import valueCode from "./examples/ValueInputSearch.tsx?raw";
import { VariantInputSearches } from "./examples/VariantInputSearch.tsx";
import variantCode from "./examples/VariantInputSearch.tsx?raw";
import "./InputSearchPage.scss";

type StoryId =
  | "base"
  | "withValue"
  | "withoutIcon"
  | "customIcon"
  | "withSuffix"
  | "disabled"
  | "error"
  | "sizes"
  | "controlled";

type Story = {
  id: StoryId;
  file: string;
  code: string;
  preview: ReactNode;
};

export function InputSearchPage() {
  const { t, i18n } = useTranslation("inputSearch");
  const lang = i18n.resolvedLanguage;

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseInputSearch.tsx",
      code: baseCode,
      preview: <BaseInputSearch {...t("stories.base.texts", { returnObjects: true })} />,
    },
    {
      id: "withValue",
      file: "ValueInputSearch.tsx",
      code: valueCode,
      preview: <ValueInputSearch {...t("stories.withValue.texts", { returnObjects: true })} />,
    },
    {
      id: "withoutIcon",
      file: "NoIconInputSearch.tsx",
      code: noIconCode,
      preview: <NoIconInputSearch {...t("stories.withoutIcon.texts", { returnObjects: true })} />,
    },
    {
      id: "customIcon",
      file: "CustomIconInputSearch.tsx",
      code: customIconCode,
      preview: (
        <CustomIconInputSearch {...t("stories.customIcon.texts", { returnObjects: true })} />
      ),
    },
    {
      id: "withSuffix",
      file: "SuffixInputSearch.tsx",
      code: suffixCode,
      preview: <SuffixInputSearch {...t("stories.withSuffix.texts", { returnObjects: true })} />,
    },
    {
      id: "disabled",
      file: "DisabledInputSearch.tsx",
      code: disabledCode,
      preview: <DisabledInputSearch {...t("stories.disabled.texts", { returnObjects: true })} />,
    },
    {
      id: "error",
      file: "ErrorInputSearch.tsx",
      code: errorCode,
      preview: <ErrorInputSearch {...t("stories.error.texts", { returnObjects: true })} />,
    },
    {
      id: "sizes",
      file: "InputSearchSizes.tsx",
      code: sizesCode,
      preview: <InputSearchSizes labels={t("stories.sizes.labels", { returnObjects: true })} />,
    },
    {
      id: "controlled",
      file: "ControlledInputSearch.tsx",
      code: controlledCode,
      preview: (
        <ControlledInputSearch {...t("stories.controlled.texts", { returnObjects: true })} />
      ),
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { InputSearch } from "@gem-org/gem-system"'
      />

      <InputSearchPlayground />

      {stories.map((story) => (
        <DocsSection
          key={story.id}
          title={t(`stories.${story.id}.title`)}
          description={t(`stories.${story.id}.description`)}
        >
          <DemoBlock code={story.code} label={story.file} overflow>
            <div key={lang} className="inputsearch-demo">
              {story.preview}
            </div>
          </DemoBlock>
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindInputSearch.tsx">
            <div key={lang} className="inputsearch-demo">
              <TailwindInputSearch texts={t("styleChanges.tailwind", { returnObjects: true })} />
            </div>
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantInputSearch.tsx">
            <div className="inputsearch-demo">
              <VariantInputSearches />
            </div>
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="input-search-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledInputSearch.tsx">
              <div className="inputsearch-demo">
                <StyledInputSearch {...t("styleChanges.css", { returnObjects: true })} />
              </div>
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="InputSearch"
        to="/system/components/input-search/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
