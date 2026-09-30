import type { PaginationSize, PaginationVariant } from "@gem-org/gem-system";

export const paginationVariants: PaginationVariant[] = ["outlined", "ghost"];
export const paginationSizes: PaginationSize[] = ["sm", "md", "lg"];

const union = (values: readonly string[]) => values.map((value) => `"${value}"`).join(" | ");

export const paginationProps = [
  { name: "total", type: "number", defaultValue: "—" },
  { name: "page", type: "number", defaultValue: "—" },
  { name: "defaultPage", type: "number", defaultValue: "1" },
  { name: "pageSize", type: "number", defaultValue: "—" },
  { name: "defaultPageSize", type: "number", defaultValue: "10" },
  { name: "pageSizeOptions", type: "readonly number[]", defaultValue: "[10, 25, 50, 100]" },
  { name: "showPageSize", type: "boolean", defaultValue: "true" },
  { name: "showSummary", type: "boolean | ((range: PaginationRange) => ReactNode)", defaultValue: "true" },
  { name: "siblingCount", type: "number", defaultValue: "1" },
  { name: "boundaryCount", type: "number", defaultValue: "1" },
  { name: "showFirstLast", type: "boolean", defaultValue: "true" },
  { name: "variant", type: union(paginationVariants), defaultValue: '"outlined"' },
  { name: "size", type: union(paginationSizes), defaultValue: '"md"' },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "PaginationClassNames", defaultValue: "—" },
  { name: "onPageChange", type: "PaginationPageChangeHandler", defaultValue: "—" },
  { name: "onPageSizeChange", type: "PaginationPageSizeChangeHandler", defaultValue: "—" },
] as const;

export const paginationLabelProps = [
  { name: "navLabel", type: "string", defaultValue: '"Pagination"' },
  { name: "pageSizeLabel", type: "string", defaultValue: '"Rows per page"' },
  { name: "firstLabel", type: "string", defaultValue: '"First page"' },
  { name: "previousLabel", type: "string", defaultValue: '"Previous page"' },
  { name: "nextLabel", type: "string", defaultValue: '"Next page"' },
  { name: "lastLabel", type: "string", defaultValue: '"Last page"' },
  { name: "pageLabel", type: "(page: number) => string", defaultValue: "(page) => `Page ${page}`" },
] as const;

export const paginationRangeProps = [
  { name: "start", type: "number", defaultValue: "—" },
  { name: "end", type: "number", defaultValue: "—" },
  { name: "total", type: "number", defaultValue: "—" },
  { name: "page", type: "number", defaultValue: "—" },
  { name: "pageSize", type: "number", defaultValue: "—" },
  { name: "pageCount", type: "number", defaultValue: "—" },
] as const;

export const paginationCssClasses = [
  { name: ".gem-pagination", rule: "root" },
  { name: ".gem-pagination--{size}", rule: "size" },
  { name: ".gem-pagination--{variant}", rule: "variant" },
  { name: ".gem-pagination--compact", rule: "compact" },
  { name: ".gem-pagination--tight", rule: "tight" },
  { name: ".gem-pagination--disabled", rule: "disabled" },
  { name: ".gem-pagination__summary", rule: "summary" },
  { name: ".gem-pagination__bar", rule: "bar" },
  { name: ".gem-pagination__item", rule: "item" },
  { name: ".gem-pagination__item--{first|prev|next|last}", rule: "edges" },
  { name: ".gem-pagination__item--current", rule: "current" },
  { name: ".gem-pagination__control", rule: "control" },
  { name: ".gem-pagination__page", rule: "page" },
  { name: ".gem-pagination__page--active", rule: "active" },
  { name: ".gem-pagination__ellipsis", rule: "ellipsis" },
  { name: ".gem-pagination__page-size", rule: "pageSize" },
  { name: ".gem-pagination__page-size-label", rule: "pageSizeLabel" },
  { name: ".gem-pagination__select", rule: "select" },
] as const;

export const paginationCssVariables = [
  "--gem-pagination-fg",
  "--gem-pagination-muted",
  "--gem-pagination-bg",
  "--gem-pagination-border",
  "--gem-pagination-accent",
  "--gem-pagination-accent-hover",
  "--gem-pagination-hover",
] as const;

export const paginationTokens = [
  "--gem-color-fg",
  "--gem-color-fg-muted",
  "--gem-color-bg",
  "--gem-color-border",
  "--gem-color-primary-50",
  "--gem-color-primary-600",
  "--gem-color-primary-700",
  "--gem-space-2",
  "--gem-space-3",
  "--gem-space-4",
  "--gem-radius-md",
  "--gem-shadow-focus",
  "--gem-font-sans",
] as const;
