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
import { TreeViewPlayground } from "./TreeViewPlayground.tsx";
import overridesCss from "./examples/tree-view-overrides.css?raw";
import { BaseTreeView } from "./examples/BaseTreeView.tsx";
import baseCode from "./examples/BaseTreeView.tsx?raw";
import { CheckableTreeView } from "./examples/CheckableTreeView.tsx";
import checkableCode from "./examples/CheckableTreeView.tsx?raw";
import { DisabledTreeView } from "./examples/DisabledTreeView.tsx";
import disabledCode from "./examples/DisabledTreeView.tsx?raw";
import { ExpandTreeView } from "./examples/ExpandTreeView.tsx";
import expandCode from "./examples/ExpandTreeView.tsx?raw";
import { FilterTreeView } from "./examples/FilterTreeView.tsx";
import filterCode from "./examples/FilterTreeView.tsx?raw";
import { IconsTreeView } from "./examples/IconsTreeView.tsx";
import iconsCode from "./examples/IconsTreeView.tsx?raw";
import { LinesTreeView } from "./examples/LinesTreeView.tsx";
import linesCode from "./examples/LinesTreeView.tsx?raw";
import { MultipleTreeView } from "./examples/MultipleTreeView.tsx";
import multipleCode from "./examples/MultipleTreeView.tsx?raw";
import { RichLabelTreeView } from "./examples/RichLabelTreeView.tsx";
import richLabelCode from "./examples/RichLabelTreeView.tsx?raw";
import { SizesTreeView } from "./examples/SizesTreeView.tsx";
import sizesCode from "./examples/SizesTreeView.tsx?raw";
import { StyledTreeView } from "./examples/StyledTreeView.tsx";
import styledCode from "./examples/StyledTreeView.tsx?raw";
import { TailwindTreeView } from "./examples/TailwindTreeView.tsx";
import tailwindCode from "./examples/TailwindTreeView.tsx?raw";
import { VariantTreeView } from "./examples/VariantTreeView.tsx";
import variantCode from "./examples/VariantTreeView.tsx?raw";
import "./TreeViewPage.scss";

type StoryId =
  | "base"
  | "lines"
  | "multiple"
  | "checkable"
  | "expand"
  | "filter"
  | "icons"
  | "disabled"
  | "sizes"
  | "richLabel";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

export function TreeViewPage() {
  const { t } = useTranslation("treeView");
  const story = { returnObjects: true } as const;
  const listLabel = t("common.listLabel");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseTreeView.tsx",
      code: baseCode,
      preview: <BaseTreeView listLabel={listLabel} selected={t("stories.base.texts.selected")} />,
    },
    {
      id: "lines",
      file: "LinesTreeView.tsx",
      code: linesCode,
      preview: <LinesTreeView listLabel={listLabel} />,
    },
    {
      id: "multiple",
      file: "MultipleTreeView.tsx",
      code: multipleCode,
      preview: <MultipleTreeView listLabel={listLabel} count={t("stories.multiple.texts.count")} />,
    },
    {
      id: "checkable",
      file: "CheckableTreeView.tsx",
      code: checkableCode,
      preview: <CheckableTreeView listLabel={listLabel} {...t("stories.checkable.texts", story)} />,
    },
    {
      id: "expand",
      file: "ExpandTreeView.tsx",
      code: expandCode,
      preview: <ExpandTreeView listLabel={listLabel} {...t("stories.expand.texts", story)} />,
    },
    {
      id: "filter",
      file: "FilterTreeView.tsx",
      code: filterCode,
      preview: <FilterTreeView listLabel={listLabel} {...t("stories.filter.texts", story)} />,
    },
    {
      id: "icons",
      file: "IconsTreeView.tsx",
      code: iconsCode,
      preview: <IconsTreeView {...t("stories.icons.texts", story)} />,
    },
    {
      id: "disabled",
      file: "DisabledTreeView.tsx",
      code: disabledCode,
      preview: <DisabledTreeView {...t("stories.disabled.texts", story)} />,
    },
    {
      id: "sizes",
      file: "SizesTreeView.tsx",
      code: sizesCode,
      preview: <SizesTreeView label={t("stories.sizes.texts.label")} />,
    },
    {
      id: "richLabel",
      file: "RichLabelTreeView.tsx",
      code: richLabelCode,
      preview: <RichLabelTreeView {...t("stories.richLabel.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { TreeView } from "@gem-org/gem-system"'
      />

      <TreeViewPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindTreeView.tsx">
            <TailwindTreeView listLabel={listLabel} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantTreeView.tsx">
            <VariantTreeView listLabel={listLabel} {...t("styles.variant", story)} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="tree-view-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledTreeView.tsx">
              <StyledTreeView listLabel={listLabel} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="TreeView"
        to="/system/data-display/tree-view/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
