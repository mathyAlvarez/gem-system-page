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
import { FileUploaderPlayground } from "./FileUploaderPlayground.tsx";
import { BaseFileUploader } from "./examples/BaseFileUploader.tsx";
import baseCode from "./examples/BaseFileUploader.tsx?raw";
import { ButtonOnlyFileUploader } from "./examples/ButtonOnlyFileUploader.tsx";
import buttonOnlyCode from "./examples/ButtonOnlyFileUploader.tsx?raw";
import { ButtonOnlyMultipleFileUploader } from "./examples/ButtonOnlyMultipleFileUploader.tsx";
import buttonOnlyMultipleCode from "./examples/ButtonOnlyMultipleFileUploader.tsx?raw";
import { ControlledFileUploader } from "./examples/ControlledFileUploader.tsx";
import controlledCode from "./examples/ControlledFileUploader.tsx?raw";
import { CustomUploadFileUploader } from "./examples/CustomUploadFileUploader.tsx";
import customUploadCode from "./examples/CustomUploadFileUploader.tsx?raw";
import { DisabledFileUploader } from "./examples/DisabledFileUploader.tsx";
import disabledCode from "./examples/DisabledFileUploader.tsx?raw";
import { ErrorFileUploader } from "./examples/ErrorFileUploader.tsx";
import errorCode from "./examples/ErrorFileUploader.tsx?raw";
import { FileEventsFileUploader } from "./examples/FileEventsFileUploader.tsx";
import fileEventsCode from "./examples/FileEventsFileUploader.tsx?raw";
import { FileTypesFileUploader } from "./examples/FileTypesFileUploader.tsx";
import fileTypesCode from "./examples/FileTypesFileUploader.tsx?raw";
import overridesCss from "./examples/file-uploader-overrides.css?raw";
import { FileUploaderBorders } from "./examples/FileUploaderBorders.tsx";
import bordersCode from "./examples/FileUploaderBorders.tsx?raw";
import { FileUploaderSizes } from "./examples/FileUploaderSizes.tsx";
import sizesCode from "./examples/FileUploaderSizes.tsx?raw";
import { ImagesFileUploader } from "./examples/ImagesFileUploader.tsx";
import imagesCode from "./examples/ImagesFileUploader.tsx?raw";
import { MaxSizeFileUploader } from "./examples/MaxSizeFileUploader.tsx";
import maxSizeCode from "./examples/MaxSizeFileUploader.tsx?raw";
import { MinMaxFileUploader } from "./examples/MinMaxFileUploader.tsx";
import minMaxCode from "./examples/MinMaxFileUploader.tsx?raw";
import { MultipleFileUploader } from "./examples/MultipleFileUploader.tsx";
import multipleCode from "./examples/MultipleFileUploader.tsx?raw";
import { StyledFileUploader } from "./examples/StyledFileUploader.tsx";
import styledCode from "./examples/StyledFileUploader.tsx?raw";
import { TailwindFileUploader } from "./examples/TailwindFileUploader.tsx";
import tailwindCode from "./examples/TailwindFileUploader.tsx?raw";
import { TooltipFileUploader } from "./examples/TooltipFileUploader.tsx";
import tooltipCode from "./examples/TooltipFileUploader.tsx?raw";
import { VariantFileUploaders } from "./examples/VariantFileUploader.tsx";
import variantCode from "./examples/VariantFileUploader.tsx?raw";
import "./FileUploaderPage.scss";

type StoryId =
  | "base"
  | "multiple"
  | "buttonOnly"
  | "buttonOnlyMultiple"
  | "imagesOnly"
  | "fileTypes"
  | "minMaxFiles"
  | "maxSize"
  | "disabled"
  | "error"
  | "sizes"
  | "borders"
  | "withTooltip"
  | "customUpload"
  | "controlled"
  | "fileEvents";

type Story = {
  id: StoryId;
  file: string;
  code: string;
  preview: ReactNode;
};

export function FileUploaderPage() {
  const { t } = useTranslation("fileUploader");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseFileUploader.tsx",
      code: baseCode,
      preview: <BaseFileUploader {...t("stories.base.texts", { returnObjects: true })} />,
    },
    {
      id: "multiple",
      file: "MultipleFileUploader.tsx",
      code: multipleCode,
      preview: <MultipleFileUploader {...t("stories.multiple.texts", { returnObjects: true })} />,
    },
    {
      id: "buttonOnly",
      file: "ButtonOnlyFileUploader.tsx",
      code: buttonOnlyCode,
      preview: (
        <ButtonOnlyFileUploader {...t("stories.buttonOnly.texts", { returnObjects: true })} />
      ),
    },
    {
      id: "buttonOnlyMultiple",
      file: "ButtonOnlyMultipleFileUploader.tsx",
      code: buttonOnlyMultipleCode,
      preview: (
        <ButtonOnlyMultipleFileUploader
          {...t("stories.buttonOnlyMultiple.texts", { returnObjects: true })}
        />
      ),
    },
    {
      id: "imagesOnly",
      file: "ImagesFileUploader.tsx",
      code: imagesCode,
      preview: <ImagesFileUploader {...t("stories.imagesOnly.texts", { returnObjects: true })} />,
    },
    {
      id: "fileTypes",
      file: "FileTypesFileUploader.tsx",
      code: fileTypesCode,
      preview: <FileTypesFileUploader {...t("stories.fileTypes.texts", { returnObjects: true })} />,
    },
    {
      id: "minMaxFiles",
      file: "MinMaxFileUploader.tsx",
      code: minMaxCode,
      preview: <MinMaxFileUploader {...t("stories.minMaxFiles.texts", { returnObjects: true })} />,
    },
    {
      id: "maxSize",
      file: "MaxSizeFileUploader.tsx",
      code: maxSizeCode,
      preview: <MaxSizeFileUploader {...t("stories.maxSize.texts", { returnObjects: true })} />,
    },
    {
      id: "disabled",
      file: "DisabledFileUploader.tsx",
      code: disabledCode,
      preview: <DisabledFileUploader {...t("stories.disabled.texts", { returnObjects: true })} />,
    },
    {
      id: "error",
      file: "ErrorFileUploader.tsx",
      code: errorCode,
      preview: <ErrorFileUploader {...t("stories.error.texts", { returnObjects: true })} />,
    },
    {
      id: "sizes",
      file: "FileUploaderSizes.tsx",
      code: sizesCode,
      preview: <FileUploaderSizes labels={t("stories.sizes.labels", { returnObjects: true })} />,
    },
    {
      id: "borders",
      file: "FileUploaderBorders.tsx",
      code: bordersCode,
      preview: <FileUploaderBorders />,
    },
    {
      id: "withTooltip",
      file: "TooltipFileUploader.tsx",
      code: tooltipCode,
      preview: <TooltipFileUploader {...t("stories.withTooltip.texts", { returnObjects: true })} />,
    },
    {
      id: "customUpload",
      file: "CustomUploadFileUploader.tsx",
      code: customUploadCode,
      preview: (
        <CustomUploadFileUploader {...t("stories.customUpload.texts", { returnObjects: true })} />
      ),
    },
    {
      id: "controlled",
      file: "ControlledFileUploader.tsx",
      code: controlledCode,
      preview: (
        <ControlledFileUploader {...t("stories.controlled.texts", { returnObjects: true })} />
      ),
    },
    {
      id: "fileEvents",
      file: "FileEventsFileUploader.tsx",
      code: fileEventsCode,
      preview: (
        <FileEventsFileUploader {...t("stories.fileEvents.texts", { returnObjects: true })} />
      ),
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { FileUploader } from "@gem-org/gem-system"'
      />

      <FileUploaderPlayground />

      {stories.map((story) => (
        <DocsSection
          key={story.id}
          title={t(`stories.${story.id}.title`)}
          description={t(`stories.${story.id}.description`)}
        >
          <DemoBlock code={story.code} label={story.file} overflow>
            <div className="fileuploader-demo">{story.preview}</div>
          </DemoBlock>
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindFileUploader.tsx" overflow>
            <div className="fileuploader-demo">
              <TailwindFileUploader texts={t("styleChanges.tailwind", { returnObjects: true })} />
            </div>
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantFileUploader.tsx" overflow>
            <div className="fileuploader-demo">
              <VariantFileUploaders />
            </div>
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="file-uploader-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledFileUploader.tsx" overflow>
              <div className="fileuploader-demo">
                <StyledFileUploader {...t("styleChanges.css", { returnObjects: true })} />
              </div>
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="FileUploader"
        to="/system/components/file-uploader/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
