import type { GridAutoMode, LayoutAlign, LayoutAs, LayoutJustify } from "@gem-org/gem-system";

export const gridAsOptions: LayoutAs[] = [
  "div",
  "section",
  "article",
  "main",
  "header",
  "footer",
  "aside",
  "nav",
  "form",
  "ul",
  "ol",
  "li",
];

export const gridAlignOptions: LayoutAlign[] = ["start", "center", "end", "stretch", "baseline"];

export const gridJustifyOptions: LayoutJustify[] = [
  "start",
  "center",
  "end",
  "between",
  "around",
  "evenly",
  "stretch",
];

export const gridAutoModes: GridAutoMode[] = ["fit", "fill"];

const union = (values: readonly string[]) => values.map((value) => `"${value}"`).join(" | ");

const shared = [
  { name: "as", type: union(gridAsOptions), defaultValue: '"div"' },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "{ root?: string }", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
  { name: "children", type: "ReactNode", defaultValue: "—" },
] as const;

const gap = [
  { name: "gap", type: "SpaceToken | number | string", defaultValue: "--gem-grid-gutter" },
  { name: "rowGap", type: "SpaceToken | number | string", defaultValue: "—" },
  { name: "columnGap", type: "SpaceToken | number | string", defaultValue: "—" },
  { name: "align", type: union(gridAlignOptions), defaultValue: "—" },
  { name: "justify", type: union(gridJustifyOptions), defaultValue: "—" },
] as const;

export const gridProps = [
  { name: "columns", type: "1 | 2 | … | 12", defaultValue: "12" },
  { name: "template", type: "string", defaultValue: "—" },
  { name: "auto", type: union(gridAutoModes), defaultValue: "—" },
  { name: "minItemWidth", type: "number | string", defaultValue: '"16rem"' },
  { name: "stack", type: 'false | "sm" | "md"', defaultValue: "auto" },
  ...gap,
  ...shared,
] as const;

export const rowProps = [
  { name: "stack", type: 'false | "sm" | "md"', defaultValue: "false" },
  ...gap,
  ...shared,
] as const;

export const colProps = [
  { name: "span", type: "1 | 2 | … | 12", defaultValue: "12" },
  { name: "sm", type: "1 | 2 | … | 12", defaultValue: "—" },
  { name: "md", type: "1 | 2 | … | 12", defaultValue: "—" },
  { name: "lg", type: "1 | 2 | … | 12", defaultValue: "—" },
  { name: "xl", type: "1 | 2 | … | 12", defaultValue: "—" },
  { name: "xxl", type: "1 | 2 | … | 12", defaultValue: "—" },
  { name: "offset", type: "0 | 1 | … | 12", defaultValue: "—" },
  { name: "offsetSm", type: "0 | 1 | … | 12", defaultValue: "—" },
  { name: "offsetMd", type: "0 | 1 | … | 12", defaultValue: "—" },
  { name: "offsetLg", type: "0 | 1 | … | 12", defaultValue: "—" },
  { name: "offsetXl", type: "0 | 1 | … | 12", defaultValue: "—" },
  { name: "offsetXxl", type: "0 | 1 | … | 12", defaultValue: "—" },
  { name: "align", type: union(gridAlignOptions), defaultValue: "—" },
  ...shared,
] as const;

export const gridBreakpoints = [
  { id: "base", prop: "span", minWidth: "0" },
  { id: "sm", prop: "sm", minWidth: "640px" },
  { id: "md", prop: "md", minWidth: "768px" },
  { id: "lg", prop: "lg", minWidth: "1024px" },
  { id: "xl", prop: "xl", minWidth: "1280px" },
  { id: "xxl", prop: "xxl", minWidth: "1536px" },
] as const;

export const gridCssClasses = [
  { name: ".gem-grid", rule: "root" as const },
  { name: ".gem-grid--cols-{n}", rule: "cols" as const },
  { name: ".gem-grid--template", rule: "template" as const },
  { name: ".gem-grid--auto-fit", rule: "autoFit" as const },
  { name: ".gem-grid--auto-fill", rule: "autoFill" as const },
  { name: ".gem-grid--split-gap", rule: "splitGap" as const },
  { name: ".gem-grid--stack-sm", rule: "stackSm" as const },
  { name: ".gem-grid--stack-md", rule: "stackMd" as const },
  { name: ".gem-grid--align-{value}", rule: "align" as const },
  { name: ".gem-grid--justify-{value}", rule: "justify" as const },
  { name: ".gem-row", rule: "row" as const },
  { name: ".gem-col", rule: "col" as const },
  { name: ".gem-grid__col-{n}", rule: "colSpan" as const },
  { name: ".gem-col--align-{value}", rule: "colAlign" as const },
];

export const gridCssVariables = [
  "--gem-grid-cols",
  "--gem-grid-gap",
  "--gem-grid-row-gap",
  "--gem-grid-column-gap",
  "--gem-grid-template",
  "--gem-grid-min",
  "--gem-col-span",
  "--gem-col-{bp}",
  "--gem-col-start",
  "--gem-col-{bp}-start",
] as const;

export const gridTokens = ["--gem-grid-gutter", "--gem-grid-gutter-lg", "--gem-space-{n}"] as const;
