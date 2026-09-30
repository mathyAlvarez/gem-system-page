import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { ApiLinkSection } from "../../../components/ApiLinkSection.tsx";
import { CodeBlock, DemoBlock, DocsPageHeader, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { StyleChangesSection } from "../../../components/StyleChangesSection.tsx";
import { SpinnerPlayground } from "./SpinnerPlayground.tsx";
import { AliasSpinner } from "./examples/AliasSpinner.tsx";
import aliasCode from "./examples/AliasSpinner.tsx?raw";
import { BaseSpinner } from "./examples/BaseSpinner.tsx";
import baseCode from "./examples/BaseSpinner.tsx?raw";
import { CustomSizeSpinner } from "./examples/CustomSizeSpinner.tsx";
import customSizeCode from "./examples/CustomSizeSpinner.tsx?raw";
import { DisabledSpinner } from "./examples/DisabledSpinner.tsx";
import disabledCode from "./examples/DisabledSpinner.tsx?raw";
import { InlineSpinner } from "./examples/InlineSpinner.tsx";
import inlineCode from "./examples/InlineSpinner.tsx?raw";
import { LabelSpinner } from "./examples/LabelSpinner.tsx";
import labelCode from "./examples/LabelSpinner.tsx?raw";
import { OverlaySpinner } from "./examples/OverlaySpinner.tsx";
import overlayCode from "./examples/OverlaySpinner.tsx?raw";
import { PlacementSpinner } from "./examples/PlacementSpinner.tsx";
import placementCode from "./examples/PlacementSpinner.tsx?raw";
import { SizesSpinner } from "./examples/SizesSpinner.tsx";
import sizesCode from "./examples/SizesSpinner.tsx?raw";
import overridesCss from "./examples/spinner-overrides.css?raw";
import { StyledSpinner } from "./examples/StyledSpinner.tsx";
import styledCode from "./examples/StyledSpinner.tsx?raw";
import { TailwindSpinner } from "./examples/TailwindSpinner.tsx";
import tailwindCode from "./examples/TailwindSpinner.tsx?raw";
import { TonesSpinner } from "./examples/TonesSpinner.tsx";
import tonesCode from "./examples/TonesSpinner.tsx?raw";
import { VariantSpinner } from "./examples/VariantSpinner.tsx";
import variantCode from "./examples/VariantSpinner.tsx?raw";
import { VariantsSpinner } from "./examples/VariantsSpinner.tsx";
import variantsCode from "./examples/VariantsSpinner.tsx?raw";
import "./SpinnerPage.scss";

type StoryId =
  | "base"
  | "label"
  | "placement"
  | "sizes"
  | "customSize"
  | "tones"
  | "variants"
  | "disabled"
  | "inline"
  | "overlay"
  | "alias";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

export function SpinnerPage() {
  const { t } = useTranslation("spinner");
  const ariaLabel = t("common.ariaLabel");
  const story = { returnObjects: true } as const;

  const stories: Story[] = [
    { id: "base", file: "BaseSpinner.tsx", code: baseCode, preview: <BaseSpinner ariaLabel={ariaLabel} /> },
    {
      id: "label",
      file: "LabelSpinner.tsx",
      code: labelCode,
      preview: <LabelSpinner {...t("stories.label.texts", story)} />,
    },
    {
      id: "placement",
      file: "PlacementSpinner.tsx",
      code: placementCode,
      preview: <PlacementSpinner {...t("stories.placement.texts", story)} />,
    },
    { id: "sizes", file: "SizesSpinner.tsx", code: sizesCode, preview: <SizesSpinner ariaLabel={ariaLabel} /> },
    {
      id: "customSize",
      file: "CustomSizeSpinner.tsx",
      code: customSizeCode,
      preview: <CustomSizeSpinner ariaLabel={ariaLabel} />,
    },
    {
      id: "tones",
      file: "TonesSpinner.tsx",
      code: tonesCode,
      preview: <TonesSpinner ariaLabel={ariaLabel} {...t("stories.tones.texts", story)} />,
    },
    {
      id: "variants",
      file: "VariantsSpinner.tsx",
      code: variantsCode,
      preview: <VariantsSpinner ariaLabel={ariaLabel} />,
    },
    {
      id: "disabled",
      file: "DisabledSpinner.tsx",
      code: disabledCode,
      preview: <DisabledSpinner {...t("stories.disabled.texts", story)} />,
    },
    {
      id: "inline",
      file: "InlineSpinner.tsx",
      code: inlineCode,
      preview: <InlineSpinner {...t("stories.inline.texts", story)} />,
    },
    {
      id: "overlay",
      file: "OverlaySpinner.tsx",
      code: overlayCode,
      preview: <OverlaySpinner {...t("stories.overlay.texts", story)} />,
    },
    {
      id: "alias",
      file: "AliasSpinner.tsx",
      code: aliasCode,
      preview: <AliasSpinner {...t("stories.alias.texts", story)} />,
    },
  ];

  const styleLabel = t("styles.label");

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Spinner } from "@gem-org/gem-system"'
      />

      <SpinnerPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindSpinner.tsx">
            <TailwindSpinner label={styleLabel} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantSpinner.tsx">
            <VariantSpinner label={styleLabel} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="spinner-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledSpinner.tsx">
              <StyledSpinner label={styleLabel} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="Spinner" to="/feedback/spinner/api" linkLabel={t("apiLink")} />
    </div>
  );
}
