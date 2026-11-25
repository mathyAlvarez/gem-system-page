import { useMemo, type ReactNode } from "react";
import { Link } from "@gem-org/gem-system";
import { Trans, useTranslation } from "react-i18next";
import { ApiLinkSection } from "../../../../components/ApiLinkSection.tsx";
import {
  CodeBlock,
  DemoBlock,
  DocsPageHeader,
  DocsSection,
} from "../../../../components/DocsPrimitives.tsx";
import { StyleChangesSection } from "../../../../components/StyleChangesSection.tsx";
import { TablePlayground } from "./TablePlayground.tsx";
import overridesCss from "./examples/table-overrides.css?raw";
import { ActionsTable } from "./examples/ActionsTable.tsx";
import actionsCode from "./examples/ActionsTable.tsx?raw";
import { BaseTable } from "./examples/BaseTable.tsx";
import baseCode from "./examples/BaseTable.tsx?raw";
import { CaptionTable } from "./examples/CaptionTable.tsx";
import captionCode from "./examples/CaptionTable.tsx?raw";
import { EmptyTable } from "./examples/EmptyTable.tsx";
import emptyCode from "./examples/EmptyTable.tsx?raw";
import { ExpandTable } from "./examples/ExpandTable.tsx";
import expandCode from "./examples/ExpandTable.tsx?raw";
import { GroupsTable } from "./examples/GroupsTable.tsx";
import groupsCode from "./examples/GroupsTable.tsx?raw";
import { PaginationTable } from "./examples/PaginationTable.tsx";
import paginationCode from "./examples/PaginationTable.tsx?raw";
import { RowClickTable } from "./examples/RowClickTable.tsx";
import rowClickCode from "./examples/RowClickTable.tsx?raw";
import { ScrollTable } from "./examples/ScrollTable.tsx";
import scrollCode from "./examples/ScrollTable.tsx?raw";
import { SelectionTable } from "./examples/SelectionTable.tsx";
import selectionCode from "./examples/SelectionTable.tsx?raw";
import { SizesTable } from "./examples/SizesTable.tsx";
import sizesCode from "./examples/SizesTable.tsx?raw";
import { SortingTable } from "./examples/SortingTable.tsx";
import sortingCode from "./examples/SortingTable.tsx?raw";
import { StickyHeaderTable } from "./examples/StickyHeaderTable.tsx";
import stickyHeaderCode from "./examples/StickyHeaderTable.tsx?raw";
import { StyledTable } from "./examples/StyledTable.tsx";
import styledCode from "./examples/StyledTable.tsx?raw";
import { TailwindTable } from "./examples/TailwindTable.tsx";
import tailwindCode from "./examples/TailwindTable.tsx?raw";
import { VariantTable } from "./examples/VariantTable.tsx";
import variantCode from "./examples/VariantTable.tsx?raw";
import { VirtualizedTable } from "./examples/VirtualizedTable.tsx";
import virtualizedCode from "./examples/VirtualizedTable.tsx?raw";
import type { InvoiceCopy, TableLabels } from "./examples/demo.ts";
import "./TablePage.scss";

type StoryId =
  | "base"
  | "caption"
  | "sorting"
  | "selection"
  | "rowClick"
  | "actions"
  | "scroll"
  | "groups"
  | "expand"
  | "stickyHeader"
  | "virtualized"
  | "empty"
  | "pagination"
  | "sizes";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

export function TablePage() {
  const { t, i18n } = useTranslation("table");
  const locale = i18n.language;
  const story = { returnObjects: true } as const;
  const copy = useMemo(() => t("common.invoice", { returnObjects: true }) as InvoiceCopy, [t]);
  const labels = useMemo(() => t("common.labels", { returnObjects: true }) as TableLabels, [t]);
  const groupsCopy = useMemo(() => t("stories.groups.texts", { returnObjects: true }), [t]);
  const expandCopy = useMemo(() => t("stories.expand.texts", { returnObjects: true }), [t]);
  const virtualizedCopy = useMemo(
    () => t("stories.virtualized.texts", { returnObjects: true }),
    [t],
  );
  const shared = { copy, labels, locale };

  const stories: Story[] = [
    { id: "base", file: "BaseTable.tsx", code: baseCode, preview: <BaseTable {...shared} /> },
    {
      id: "caption",
      file: "CaptionTable.tsx",
      code: captionCode,
      preview: <CaptionTable {...shared} {...t("stories.caption.texts", story)} />,
    },
    {
      id: "sorting",
      file: "SortingTable.tsx",
      code: sortingCode,
      preview: <SortingTable {...shared} {...t("stories.sorting.texts", story)} />,
    },
    {
      id: "selection",
      file: "SelectionTable.tsx",
      code: selectionCode,
      preview: <SelectionTable {...shared} {...t("stories.selection.texts", story)} />,
    },
    {
      id: "rowClick",
      file: "RowClickTable.tsx",
      code: rowClickCode,
      preview: <RowClickTable {...shared} current={t("stories.rowClick.texts.current")} />,
    },
    {
      id: "actions",
      file: "ActionsTable.tsx",
      code: actionsCode,
      preview: <ActionsTable {...shared} {...t("stories.actions.texts", story)} />,
    },
    {
      id: "scroll",
      file: "ScrollTable.tsx",
      code: scrollCode,
      preview: <ScrollTable {...shared} />,
    },
    {
      id: "groups",
      file: "GroupsTable.tsx",
      code: groupsCode,
      preview: <GroupsTable copy={groupsCopy} labels={labels} locale={locale} />,
    },
    {
      id: "expand",
      file: "ExpandTable.tsx",
      code: expandCode,
      preview: <ExpandTable copy={expandCopy} labels={labels} locale={locale} />,
    },
    {
      id: "stickyHeader",
      file: "StickyHeaderTable.tsx",
      code: stickyHeaderCode,
      preview: <StickyHeaderTable {...shared} />,
    },
    {
      id: "virtualized",
      file: "VirtualizedTable.tsx",
      code: virtualizedCode,
      preview: <VirtualizedTable copy={virtualizedCopy} labels={labels} />,
    },
    {
      id: "empty",
      file: "EmptyTable.tsx",
      code: emptyCode,
      preview: <EmptyTable {...shared} {...t("stories.empty.texts", story)} />,
    },
    {
      id: "pagination",
      file: "PaginationTable.tsx",
      code: paginationCode,
      preview: <PaginationTable {...shared} {...t("stories.pagination.texts", story)} />,
    },
    { id: "sizes", file: "SizesTable.tsx", code: sizesCode, preview: <SizesTable {...shared} /> },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={
          <Trans
            t={t}
            i18nKey="header.description"
            components={{
              link: (
                <Link
                  href="https://tanstack.com/table/latest"
                  externalLabel={t("header.externalLabel")}
                />
              ),
              code: <strong className="docs-prop" />,
            }}
          />
        }
        importPath='import { Table, createTableColumnHelper } from "@gem-org/gem-system"'
      />

      <TablePlayground {...shared} />

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
          <DemoBlock code={tailwindCode} label="TailwindTable.tsx">
            <TailwindTable {...shared} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantTable.tsx">
            <VariantTable {...shared} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="table-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledTable.tsx">
              <StyledTable {...shared} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="Table"
        to="/system/data-display/table/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
