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
import { TextareaPlayground } from "./TextareaPlayground.tsx";
import { AutosizeTextarea } from "./examples/AutosizeTextarea.tsx";
import autosizeCode from "./examples/AutosizeTextarea.tsx?raw";
import { BaseTextarea } from "./examples/BaseTextarea.tsx";
import baseCode from "./examples/BaseTextarea.tsx?raw";
import { CounterOnlyTextarea } from "./examples/CounterOnlyTextarea.tsx";
import counterOnlyCode from "./examples/CounterOnlyTextarea.tsx?raw";
import { CounterTextarea } from "./examples/CounterTextarea.tsx";
import counterCode from "./examples/CounterTextarea.tsx?raw";
import { DisabledTextarea } from "./examples/DisabledTextarea.tsx";
import disabledCode from "./examples/DisabledTextarea.tsx?raw";
import { ErrorTextarea } from "./examples/ErrorTextarea.tsx";
import errorCode from "./examples/ErrorTextarea.tsx?raw";
import { InfoTextarea } from "./examples/InfoTextarea.tsx";
import infoCode from "./examples/InfoTextarea.tsx?raw";
import { NoResizeTextarea } from "./examples/NoResizeTextarea.tsx";
import noResizeCode from "./examples/NoResizeTextarea.tsx?raw";
import { OutlineInfoTextarea } from "./examples/OutlineInfoTextarea.tsx";
import outlineInfoCode from "./examples/OutlineInfoTextarea.tsx?raw";
import { OutlineLabelTextarea } from "./examples/OutlineLabelTextarea.tsx";
import outlineLabelCode from "./examples/OutlineLabelTextarea.tsx?raw";
import { StyledTextareas } from "./examples/StyledTextareas.tsx";
import styledCode from "./examples/StyledTextareas.tsx?raw";
import { TailwindTextarea } from "./examples/TailwindTextarea.tsx";
import tailwindCode from "./examples/TailwindTextarea.tsx?raw";
import overridesCss from "./examples/textarea-overrides.css?raw";
import { TextareaBorders } from "./examples/TextareaBorders.tsx";
import bordersCode from "./examples/TextareaBorders.tsx?raw";
import { TextareaSizes } from "./examples/TextareaSizes.tsx";
import sizesCode from "./examples/TextareaSizes.tsx?raw";
import { VariantTextareas } from "./examples/VariantTextarea.tsx";
import variantCode from "./examples/VariantTextarea.tsx?raw";
import { ClearableTextarea } from "./examples/ClearableTextarea.tsx";
import clearableCode from "./examples/ClearableTextarea.tsx?raw";
import "./TextareaPage.scss";

type StoryId =
  | "base"
  | "withInfoIcon"
  | "outlineWithInfoIcon"
  | "outlineLabel"
  | "autosize"
  | "withCounter"
  | "counterOnly"
  | "noResize"
  | "clearable"
  | "error"
  | "disabled"
  | "sizes"
  | "borders";

type Story = {
  id: StoryId;
  file: string;
  code: string;
  preview: ReactNode;
};

export function TextareaPage() {
  const { t, i18n } = useTranslation("textarea");
  const lang = i18n.resolvedLanguage;

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseTextarea.tsx",
      code: baseCode,
      preview: <BaseTextarea {...t("stories.base.texts", { returnObjects: true })} />,
    },
    {
      id: "withInfoIcon",
      file: "InfoTextarea.tsx",
      code: infoCode,
      preview: <InfoTextarea {...t("stories.withInfoIcon.texts", { returnObjects: true })} />,
    },
    {
      id: "outlineWithInfoIcon",
      file: "OutlineInfoTextarea.tsx",
      code: outlineInfoCode,
      preview: (
        <OutlineInfoTextarea {...t("stories.outlineWithInfoIcon.texts", { returnObjects: true })} />
      ),
    },
    {
      id: "outlineLabel",
      file: "OutlineLabelTextarea.tsx",
      code: outlineLabelCode,
      preview: (
        <OutlineLabelTextarea {...t("stories.outlineLabel.texts", { returnObjects: true })} />
      ),
    },
    {
      id: "autosize",
      file: "AutosizeTextarea.tsx",
      code: autosizeCode,
      preview: <AutosizeTextarea {...t("stories.autosize.texts", { returnObjects: true })} />,
    },
    {
      id: "withCounter",
      file: "CounterTextarea.tsx",
      code: counterCode,
      preview: <CounterTextarea {...t("stories.withCounter.texts", { returnObjects: true })} />,
    },
    {
      id: "counterOnly",
      file: "CounterOnlyTextarea.tsx",
      code: counterOnlyCode,
      preview: <CounterOnlyTextarea {...t("stories.counterOnly.texts", { returnObjects: true })} />,
    },
    {
      id: "noResize",
      file: "NoResizeTextarea.tsx",
      code: noResizeCode,
      preview: <NoResizeTextarea {...t("stories.noResize.texts", { returnObjects: true })} />,
    },
    {
      id: "clearable",
      file: "ClearableTextarea.tsx",
      code: clearableCode,
      preview: <ClearableTextarea {...t("stories.clearable.texts", { returnObjects: true })} />,
    },
    {
      id: "error",
      file: "ErrorTextarea.tsx",
      code: errorCode,
      preview: <ErrorTextarea {...t("stories.error.texts", { returnObjects: true })} />,
    },
    {
      id: "disabled",
      file: "DisabledTextarea.tsx",
      code: disabledCode,
      preview: <DisabledTextarea {...t("stories.disabled.texts", { returnObjects: true })} />,
    },
    {
      id: "sizes",
      file: "TextareaSizes.tsx",
      code: sizesCode,
      preview: <TextareaSizes labels={t("stories.sizes.labels", { returnObjects: true })} />,
    },
    {
      id: "borders",
      file: "TextareaBorders.tsx",
      code: bordersCode,
      preview: (
        <TextareaBorders
          placeholders={t("stories.borders.placeholders", { returnObjects: true })}
        />
      ),
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Textarea } from "@gem-org/gem-system"'
      />

      <TextareaPlayground />

      {stories.map((story) => (
        <DocsSection
          key={story.id}
          title={t(`stories.${story.id}.title`)}
          description={t(`stories.${story.id}.description`)}
        >
          <DemoBlock code={story.code} label={story.file} overflow>
            <div key={lang} className="textarea-demo">
              {story.preview}
            </div>
          </DemoBlock>
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindTextarea.tsx">
            <div className="textarea-demo">
              <TailwindTextarea texts={t("styleChanges.tailwind", { returnObjects: true })} />
            </div>
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantTextarea.tsx">
            <div className="textarea-demo">
              <VariantTextareas placeholder={t("styleChanges.cva.placeholder")} />
            </div>
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="textarea-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledTextareas.tsx">
              <div key={lang} className="textarea-demo">
                <StyledTextareas texts={t("styleChanges.css", { returnObjects: true })} />
              </div>
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="Textarea"
        to="/system/components/textarea/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
