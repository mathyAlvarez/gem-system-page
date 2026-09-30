export const tableDataProps = [
  { name: "data", type: "readonly TData[]", defaultValue: "—" },
  { name: "columns", type: "readonly TableColumnDef<TData>[]", defaultValue: "—" },
  { name: "getRowId", type: "(row, index, parent?) => string", defaultValue: "index" },
  { name: "caption", type: "ReactNode", defaultValue: "—" },
  { name: "showCaption", type: "boolean", defaultValue: "false" },
  { name: "captionSide", type: '"top" | "bottom"', defaultValue: '"top"' },
  { name: "extra", type: "ReactNode", defaultValue: "—" },
  { name: "footer", type: "ReactNode", defaultValue: "—" },
  { name: "emptyMessage", type: "ReactNode", defaultValue: '"No results."' },
] as const;

export const tableSortingProps = [
  { name: "enableSorting", type: "boolean", defaultValue: "true" },
  { name: "enableMultiSort", type: "boolean", defaultValue: "true" },
  { name: "sorting", type: "SortingState", defaultValue: "—" },
  { name: "defaultSorting", type: "SortingState", defaultValue: "—" },
  { name: "onSortingChange", type: "(sorting: SortingState) => void", defaultValue: "—" },
] as const;

export const tableSelectionProps = [
  { name: "enableRowSelection", type: "boolean", defaultValue: "false" },
  { name: "isRowSelectable", type: "(row: TData) => boolean", defaultValue: "—" },
  { name: "enableMultiRowSelection", type: "boolean", defaultValue: "true" },
  { name: "rowSelection", type: "RowSelectionState", defaultValue: "—" },
  { name: "defaultRowSelection", type: "RowSelectionState", defaultValue: "—" },
  { name: "onRowSelectionChange", type: "(selection: RowSelectionState) => void", defaultValue: "—" },
  { name: "selectOnRowClick", type: "boolean", defaultValue: "false" },
  { name: "selectAllLabel", type: "string", defaultValue: '"Select all rows"' },
  { name: "selectRowLabel", type: "string", defaultValue: '"Select row"' },
] as const;

export const tableExpandProps = [
  { name: "renderExpanded", type: "(row: TData) => ReactNode", defaultValue: "—" },
  { name: "enableExpanding", type: "boolean", defaultValue: "renderExpanded != null" },
  { name: "isRowExpandable", type: "(row: TData) => boolean", defaultValue: "—" },
  { name: "expanded", type: "ExpandedState", defaultValue: "—" },
  { name: "defaultExpanded", type: "ExpandedState", defaultValue: "—" },
  { name: "onExpandedChange", type: "(expanded: ExpandedState) => void", defaultValue: "—" },
  { name: "expandRowLabel", type: "string", defaultValue: '"Expand row"' },
  { name: "collapseRowLabel", type: "string", defaultValue: '"Collapse row"' },
] as const;

export const tableLayoutProps = [
  { name: "size", type: '"sm" | "md" | "lg"', defaultValue: '"md"' },
  { name: "radius", type: '"sm" | "md" | "lg"', defaultValue: '"md"' },
  { name: "bordered", type: "boolean", defaultValue: "true" },
  { name: "stickyHeader", type: "boolean", defaultValue: "false" },
  { name: "maxHeight", type: "number | string", defaultValue: "—" },
  { name: "virtualized", type: "boolean", defaultValue: "false" },
  { name: "estimateRowHeight", type: "number", defaultValue: "37 | 45 | 53" },
  { name: "virtualOverscan", type: "number", defaultValue: "4" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "TableClassNames", defaultValue: "—" },
] as const;

export const tableColumnMeta = [
  { name: "align", type: '"start" | "center" | "end"', defaultValue: '"start"' },
  { name: "minWidth", type: "number | string", defaultValue: "—" },
  { name: "sticky", type: 'boolean | "start" | "end"', defaultValue: "false" },
] as const;

export const tableHelpers = [
  { name: "createTableColumnHelper", type: "<TData>() => ColumnHelper", defaultValue: "—" },
  { name: "gemTableFeatures", type: "TableFeatures", defaultValue: "—" },
  { name: "TABLE_SELECT_COLUMN_ID", type: '"select"', defaultValue: "—" },
  { name: "TABLE_EXPAND_COLUMN_ID", type: '"expand"', defaultValue: "—" },
] as const;

export const tableCssClasses = [
  { name: ".gem-table", rule: "root" },
  { name: ".gem-table--md", rule: "size" },
  { name: ".gem-table--radius-md", rule: "radius" },
  { name: ".gem-table--bordered", rule: "bordered" },
  { name: ".gem-table--sticky-header", rule: "stickyHeader" },
  { name: ".gem-table--sticky-cols", rule: "stickyCols" },
  { name: ".gem-table--virtualized", rule: "virtualized" },
  { name: ".gem-table__scroller", rule: "scroller" },
  { name: ".gem-table__table", rule: "table" },
  { name: ".gem-table__caption", rule: "caption" },
  { name: ".gem-table__extra", rule: "extra" },
  { name: ".gem-table__header", rule: "header" },
  { name: ".gem-table__th", rule: "th" },
  { name: ".gem-table__sort-button", rule: "sortButton" },
  { name: ".gem-table__sort", rule: "sort" },
  { name: ".gem-table__body", rule: "body" },
  { name: ".gem-table__row", rule: "row" },
  { name: ".gem-table__td", rule: "td" },
  { name: ".gem-table__select", rule: "select" },
  { name: ".gem-table__expand", rule: "expand" },
  { name: ".gem-table__detail", rule: "detail" },
  { name: ".gem-table__empty", rule: "empty" },
  { name: ".gem-table__footer", rule: "footer" },
] as const;

export const tableCssVariables = ["--gem-table-max-height"] as const;

export const tableTokens = [
  "--gem-color-bg",
  "--gem-color-bg-subtle",
  "--gem-color-fg",
  "--gem-color-fg-muted",
  "--gem-color-border",
  "--gem-color-primary-{500|600}",
  "--gem-shadow-focus",
  "--gem-radius-{sm|md|lg}",
  "--gem-space-{3|4}",
  "--gem-font-sans",
] as const;
