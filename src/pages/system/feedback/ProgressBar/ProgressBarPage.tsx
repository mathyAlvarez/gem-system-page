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
import { ProgressBarPlayground } from "./ProgressBarPlayground.tsx";
import { AliasProgress } from "./examples/AliasProgress.tsx";
import aliasCode from "./examples/AliasProgress.tsx?raw";
import { BaseProgress } from "./examples/BaseProgress.tsx";
import baseCode from "./examples/BaseProgress.tsx?raw";
import { CustomValueProgress } from "./examples/CustomValueProgress.tsx";
import customValueCode from "./examples/CustomValueProgress.tsx?raw";
import { DeterminateProgress } from "./examples/DeterminateProgress.tsx";
import determinateCode from "./examples/DeterminateProgress.tsx?raw";
import { DisabledProgress } from "./examples/DisabledProgress.tsx";
import disabledCode from "./examples/DisabledProgress.tsx?raw";
import { IndeterminateProgress } from "./examples/IndeterminateProgress.tsx";
import indeterminateCode from "./examples/IndeterminateProgress.tsx?raw";
import { LiveProgress } from "./examples/LiveProgress.tsx";
import liveCode from "./examples/LiveProgress.tsx?raw";
import { LoadPositionProgress } from "./examples/LoadPositionProgress.tsx";
import loadPositionCode from "./examples/LoadPositionProgress.tsx?raw";
import overridesCss from "./examples/progress-overrides.css?raw";
import { RadiusProgress } from "./examples/RadiusProgress.tsx";
import radiusCode from "./examples/RadiusProgress.tsx?raw";
import { SizesProgress } from "./examples/SizesProgress.tsx";
import sizesCode from "./examples/SizesProgress.tsx?raw";
import { StyledProgress } from "./examples/StyledProgress.tsx";
import styledCode from "./examples/StyledProgress.tsx?raw";
import { TailwindProgress } from "./examples/TailwindProgress.tsx";
import tailwindCode from "./examples/TailwindProgress.tsx?raw";
import { ThresholdProgress } from "./examples/ThresholdProgress.tsx";
import thresholdCode from "./examples/ThresholdProgress.tsx?raw";
import { ThumbProgress } from "./examples/ThumbProgress.tsx";
import thumbCode from "./examples/ThumbProgress.tsx?raw";
import { TonesProgress } from "./examples/TonesProgress.tsx";
import tonesCode from "./examples/TonesProgress.tsx?raw";
import { UploadProgress } from "./examples/UploadProgress.tsx";
import uploadCode from "./examples/UploadProgress.tsx?raw";
import { VariantProgress } from "./examples/VariantProgress.tsx";
import variantCode from "./examples/VariantProgress.tsx?raw";
import "./ProgressBarPage.scss";

type StoryId =
  | "base"
  | "determinate"
  | "indeterminate"
  | "sizes"
  | "radius"
  | "tones"
  | "loadPosition"
  | "thumb"
  | "disabled"
  | "customValue"
  | "live"
  | "upload"
  | "threshold"
  | "alias";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

export function ProgressBarPage() {
  const { t } = useTranslation("progressBar");
  const story = { returnObjects: true } as const;

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseProgress.tsx",
      code: baseCode,
      preview: <BaseProgress {...t("stories.base.texts", story)} />,
    },
    {
      id: "determinate",
      file: "DeterminateProgress.tsx",
      code: determinateCode,
      preview: <DeterminateProgress {...t("stories.determinate.texts", story)} />,
    },
    {
      id: "indeterminate",
      file: "IndeterminateProgress.tsx",
      code: indeterminateCode,
      preview: <IndeterminateProgress {...t("stories.indeterminate.texts", story)} />,
    },
    {
      id: "sizes",
      file: "SizesProgress.tsx",
      code: sizesCode,
      preview: <SizesProgress {...t("stories.sizes.texts", story)} />,
    },
    {
      id: "radius",
      file: "RadiusProgress.tsx",
      code: radiusCode,
      preview: <RadiusProgress {...t("stories.radius.texts", story)} />,
    },
    {
      id: "tones",
      file: "TonesProgress.tsx",
      code: tonesCode,
      preview: <TonesProgress {...t("stories.tones.texts", story)} />,
    },
    {
      id: "loadPosition",
      file: "LoadPositionProgress.tsx",
      code: loadPositionCode,
      preview: <LoadPositionProgress {...t("stories.loadPosition.texts", story)} />,
    },
    {
      id: "thumb",
      file: "ThumbProgress.tsx",
      code: thumbCode,
      preview: <ThumbProgress {...t("stories.thumb.texts", story)} />,
    },
    {
      id: "disabled",
      file: "DisabledProgress.tsx",
      code: disabledCode,
      preview: <DisabledProgress {...t("stories.disabled.texts", story)} />,
    },
    {
      id: "customValue",
      file: "CustomValueProgress.tsx",
      code: customValueCode,
      preview: <CustomValueProgress {...t("stories.customValue.texts", story)} />,
    },
    {
      id: "live",
      file: "LiveProgress.tsx",
      code: liveCode,
      preview: <LiveProgress {...t("stories.live.texts", story)} />,
    },
    {
      id: "upload",
      file: "UploadProgress.tsx",
      code: uploadCode,
      preview: <UploadProgress {...t("stories.upload.texts", story)} />,
    },
    {
      id: "threshold",
      file: "ThresholdProgress.tsx",
      code: thresholdCode,
      preview: <ThresholdProgress {...t("stories.threshold.texts", story)} />,
    },
    {
      id: "alias",
      file: "AliasProgress.tsx",
      code: aliasCode,
      preview: <AliasProgress {...t("stories.alias.texts", story)} />,
    },
  ];

  const styleLabel = t("styles.label");

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { ProgressBar } from "@gem-org/gem-system"'
      />

      <ProgressBarPlayground />

      {stories.map((item) => (
        <DocsSection
          key={item.id}
          title={t(`stories.${item.id}.title`)}
          description={t(`stories.${item.id}.description`)}
        >
          <DemoBlock code={item.code} label={item.file}>
            {item.preview}
          </DemoBlock>
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindProgress.tsx">
            <TailwindProgress label={styleLabel} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantProgress.tsx">
            <VariantProgress label={styleLabel} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="progress-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledProgress.tsx">
              <StyledProgress label={styleLabel} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="ProgressBar"
        to="/system/feedback/progress-bar/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
