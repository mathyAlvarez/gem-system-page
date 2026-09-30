import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { ApiLinkSection } from "../../../components/ApiLinkSection.tsx";
import { CodeBlock, DemoBlock, DocsPageHeader, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { StyleChangesSection } from "../../../components/StyleChangesSection.tsx";
import { PropertyListPlayground } from "./PropertyListPlayground.tsx";
import overridesCss from "./examples/property-list-overrides.css?raw";
import { AlignPropertyList } from "./examples/AlignPropertyList.tsx";
import alignCode from "./examples/AlignPropertyList.tsx?raw";
import { BasePropertyList } from "./examples/BasePropertyList.tsx";
import baseCode from "./examples/BasePropertyList.tsx?raw";
import { BorderedPropertyList } from "./examples/BorderedPropertyList.tsx";
import borderedCode from "./examples/BorderedPropertyList.tsx?raw";
import { ColumnsPropertyList } from "./examples/ColumnsPropertyList.tsx";
import columnsCode from "./examples/ColumnsPropertyList.tsx?raw";
import { CompoundPropertyList } from "./examples/CompoundPropertyList.tsx";
import compoundCode from "./examples/CompoundPropertyList.tsx?raw";
import { CopyPropertyList } from "./examples/CopyPropertyList.tsx";
import copyCode from "./examples/CopyPropertyList.tsx?raw";
import { EmptyPropertyList } from "./examples/EmptyPropertyList.tsx";
import emptyCode from "./examples/EmptyPropertyList.tsx?raw";
import { HiddenPropertyList } from "./examples/HiddenPropertyList.tsx";
import hiddenCode from "./examples/HiddenPropertyList.tsx?raw";
import { SizesPropertyList } from "./examples/SizesPropertyList.tsx";
import sizesCode from "./examples/SizesPropertyList.tsx?raw";
import { StripedPropertyList } from "./examples/StripedPropertyList.tsx";
import stripedCode from "./examples/StripedPropertyList.tsx?raw";
import { StyledPropertyList } from "./examples/StyledPropertyList.tsx";
import styledCode from "./examples/StyledPropertyList.tsx?raw";
import { TailwindPropertyList } from "./examples/TailwindPropertyList.tsx";
import tailwindCode from "./examples/TailwindPropertyList.tsx?raw";
import { VariantPropertyList } from "./examples/VariantPropertyList.tsx";
import variantCode from "./examples/VariantPropertyList.tsx?raw";
import { VerticalPropertyList } from "./examples/VerticalPropertyList.tsx";
import verticalCode from "./examples/VerticalPropertyList.tsx?raw";
import type { Row, RowsCopy } from "./examples/demo.ts";
import "./PropertyListPage.scss";

type StoryId =
  | "base"
  | "columns"
  | "bordered"
  | "vertical"
  | "striped"
  | "sizes"
  | "compound"
  | "copy"
  | "align"
  | "hidden"
  | "empty";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

export function PropertyListPage() {
  const { t } = useTranslation("propertyList");
  const story = { returnObjects: true } as const;
  const texts = (id: "base" | "columns" | "bordered" | "vertical" | "striped" | "align") =>
    t(`stories.${id}.texts`, story) as RowsCopy;
  const base = texts("base");
  const shortRows = t("common.shortRows", story) as Row[];

  const stories: Story[] = [
    { id: "base", file: "BasePropertyList.tsx", code: baseCode, preview: <BasePropertyList {...base} /> },
    {
      id: "columns",
      file: "ColumnsPropertyList.tsx",
      code: columnsCode,
      preview: <ColumnsPropertyList {...texts("columns")} />,
    },
    {
      id: "bordered",
      file: "BorderedPropertyList.tsx",
      code: borderedCode,
      preview: <BorderedPropertyList {...texts("bordered")} />,
    },
    {
      id: "vertical",
      file: "VerticalPropertyList.tsx",
      code: verticalCode,
      preview: <VerticalPropertyList {...texts("vertical")} />,
    },
    {
      id: "striped",
      file: "StripedPropertyList.tsx",
      code: stripedCode,
      preview: <StripedPropertyList {...texts("striped")} />,
    },
    { id: "sizes", file: "SizesPropertyList.tsx", code: sizesCode, preview: <SizesPropertyList items={shortRows} /> },
    {
      id: "compound",
      file: "CompoundPropertyList.tsx",
      code: compoundCode,
      preview: <CompoundPropertyList {...t("stories.compound.texts", story)} />,
    },
    {
      id: "copy",
      file: "CopyPropertyList.tsx",
      code: copyCode,
      preview: <CopyPropertyList {...t("stories.copy.texts", story)} />,
    },
    { id: "align", file: "AlignPropertyList.tsx", code: alignCode, preview: <AlignPropertyList {...texts("align")} /> },
    {
      id: "hidden",
      file: "HiddenPropertyList.tsx",
      code: hiddenCode,
      preview: <HiddenPropertyList {...t("stories.hidden.texts", story)} />,
    },
    {
      id: "empty",
      file: "EmptyPropertyList.tsx",
      code: emptyCode,
      preview: <EmptyPropertyList {...t("stories.empty.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { PropertyList } from "@gem-org/gem-system"'
      />

      <PropertyListPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindPropertyList.tsx">
            <TailwindPropertyList {...base} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantPropertyList.tsx">
            <VariantPropertyList {...base} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="property-list-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledPropertyList.tsx">
              <StyledPropertyList title={base.title} items={shortRows} edit={t("common.edit")} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="PropertyList" to="/data-display/property-list/api" linkLabel={t("apiLink")} />
    </div>
  );
}
