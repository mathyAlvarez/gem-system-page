import type { FlexDirection, LayoutAlign, LayoutJustify } from "@gem-org/gem-system";
import { gridAsOptions } from "../Grid/gridDocs.ts";

export const flexDirections: FlexDirection[] = ["row", "column", "row-reverse", "column-reverse"];

export const flexAlignOptions: LayoutAlign[] = ["start", "center", "end", "stretch", "baseline"];

export const flexJustifyOptions: LayoutJustify[] = [
  "start",
  "center",
  "end",
  "between",
  "around",
  "evenly",
  "stretch",
];

export const flexAlignContentOptions = [
  "start",
  "center",
  "end",
  "stretch",
  "between",
  "around",
  "evenly",
] as const;

const union = (values: readonly string[]) => values.map((value) => `"${value}"`).join(" | ");

export const flexProps = [
  { name: "as", type: union(gridAsOptions), defaultValue: '"div"' },
  { name: "direction", type: union(flexDirections), defaultValue: '"row"' },
  { name: "wrap", type: 'boolean | "wrap" | "nowrap" | "wrap-reverse"', defaultValue: "false" },
  { name: "gap", type: "SpaceToken | number | string", defaultValue: "0" },
  { name: "rowGap", type: "SpaceToken | number | string", defaultValue: "—" },
  { name: "columnGap", type: "SpaceToken | number | string", defaultValue: "—" },
  { name: "align", type: union(flexAlignOptions), defaultValue: "—" },
  { name: "justify", type: union(flexJustifyOptions), defaultValue: "—" },
  { name: "alignContent", type: union(flexAlignContentOptions), defaultValue: "—" },
  { name: "inline", type: "boolean", defaultValue: "false" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "{ root?: string }", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
  { name: "children", type: "ReactNode", defaultValue: "—" },
] as const;

export const flexCssClasses = [
  { name: ".gem-flex", rule: "root" as const },
  { name: ".gem-flex--{direction}", rule: "direction" as const },
  { name: ".gem-flex--nowrap", rule: "nowrap" as const },
  { name: ".gem-flex--wrap", rule: "wrap" as const },
  { name: ".gem-flex--wrap-reverse", rule: "wrapReverse" as const },
  { name: ".gem-flex--inline", rule: "inline" as const },
  { name: ".gem-flex--split-gap", rule: "splitGap" as const },
  { name: ".gem-flex--align-{value}", rule: "align" as const },
  { name: ".gem-flex--justify-{value}", rule: "justify" as const },
  { name: ".gem-flex--content-{value}", rule: "content" as const },
];

export const flexCssVariables = [
  "--gem-flex-gap",
  "--gem-flex-row-gap",
  "--gem-flex-column-gap",
] as const;

export const flexTokens = ["--gem-space-{n}"] as const;
