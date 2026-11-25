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
import { DividerPlayground } from "./DividerPlayground.tsx";
import overridesCss from "./examples/divider-overrides.css?raw";
import { AccessibleDivider } from "./examples/AccessibleDivider.tsx";
import accessibleCode from "./examples/AccessibleDivider.tsx?raw";
import { BaseDivider } from "./examples/BaseDivider.tsx";
import baseCode from "./examples/BaseDivider.tsx?raw";
import { InContentDivider } from "./examples/InContentDivider.tsx";
import inContentCode from "./examples/InContentDivider.tsx?raw";
import { LabelDivider } from "./examples/LabelDivider.tsx";
import labelCode from "./examples/LabelDivider.tsx?raw";
import { SizesDivider } from "./examples/SizesDivider.tsx";
import sizesCode from "./examples/SizesDivider.tsx?raw";
import { StyledDivider } from "./examples/StyledDivider.tsx";
import styledCode from "./examples/StyledDivider.tsx?raw";
import { TailwindDivider } from "./examples/TailwindDivider.tsx";
import tailwindCode from "./examples/TailwindDivider.tsx?raw";
import { TonesDivider } from "./examples/TonesDivider.tsx";
import tonesCode from "./examples/TonesDivider.tsx?raw";
import { VariantDivider } from "./examples/VariantDivider.tsx";
import variantCode from "./examples/VariantDivider.tsx?raw";
import { VariantsDivider } from "./examples/VariantsDivider.tsx";
import variantsCode from "./examples/VariantsDivider.tsx?raw";
import { VerticalDivider } from "./examples/VerticalDivider.tsx";
import verticalCode from "./examples/VerticalDivider.tsx?raw";
import { VerticalLabelDivider } from "./examples/VerticalLabelDivider.tsx";
import verticalLabelCode from "./examples/VerticalLabelDivider.tsx?raw";
import "./DividerPage.scss";

type StoryId =
  | "base"
  | "vertical"
  | "variants"
  | "sizes"
  | "tones"
  | "label"
  | "verticalLabel"
  | "inContent"
  | "accessibility";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

export function DividerPage() {
  const { t } = useTranslation("divider");
  const story = { returnObjects: true } as const;
  const styleLabel = t("styles.label");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseDivider.tsx",
      code: baseCode,
      preview: <BaseDivider {...t("stories.base.texts", story)} />,
    },
    {
      id: "vertical",
      file: "VerticalDivider.tsx",
      code: verticalCode,
      preview: <VerticalDivider {...t("stories.vertical.texts", story)} />,
    },
    {
      id: "variants",
      file: "VariantsDivider.tsx",
      code: variantsCode,
      preview: <VariantsDivider />,
    },
    { id: "sizes", file: "SizesDivider.tsx", code: sizesCode, preview: <SizesDivider /> },
    { id: "tones", file: "TonesDivider.tsx", code: tonesCode, preview: <TonesDivider /> },
    {
      id: "label",
      file: "LabelDivider.tsx",
      code: labelCode,
      preview: <LabelDivider label={t("stories.label.texts.label")} />,
    },
    {
      id: "verticalLabel",
      file: "VerticalLabelDivider.tsx",
      code: verticalLabelCode,
      preview: <VerticalLabelDivider {...t("stories.verticalLabel.texts", story)} />,
    },
    {
      id: "inContent",
      file: "InContentDivider.tsx",
      code: inContentCode,
      preview: <InContentDivider {...t("stories.inContent.texts", story)} />,
    },
    {
      id: "accessibility",
      file: "AccessibleDivider.tsx",
      code: accessibleCode,
      preview: <AccessibleDivider {...t("stories.accessibility.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Divider } from "@gem-org/gem-system"'
      />

      <DividerPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindDivider.tsx">
            <TailwindDivider label={styleLabel} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantDivider.tsx">
            <VariantDivider label={styleLabel} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="divider-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledDivider.tsx">
              <StyledDivider label={styleLabel} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="Divider"
        to="/system/data-display/divider/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
