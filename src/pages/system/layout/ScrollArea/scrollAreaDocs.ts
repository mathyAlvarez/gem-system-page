import type {
  ScrollAreaAs,
  ScrollAreaOrientation,
  ScrollAreaRadius,
  ScrollAreaSize,
  ScrollAreaType,
} from "@gem-org/gem-system";

export const scrollOrientations: ScrollAreaOrientation[] = ["vertical", "horizontal", "both"];

export const scrollTypes: ScrollAreaType[] = ["auto", "always", "hover", "hidden"];

export const scrollSizes: ScrollAreaSize[] = ["sm", "md", "lg"];

export const scrollRadii: ScrollAreaRadius[] = [
  "none",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "full",
];

export const scrollAsOptions: ScrollAreaAs[] = [
  "div",
  "section",
  "article",
  "aside",
  "main",
  "nav",
];

const union = (values: readonly string[]) => values.map((value) => `"${value}"`).join(" | ");

export const scrollAreaProps = [
  { name: "as", type: union(scrollAsOptions), defaultValue: '"div"' },
  { name: "orientation", type: union(scrollOrientations), defaultValue: '"vertical"' },
  { name: "type", type: union(scrollTypes), defaultValue: '"auto"' },
  { name: "size", type: union(scrollSizes), defaultValue: '"md"' },
  { name: "radius", type: union(scrollRadii), defaultValue: '"md"' },
  { name: "height", type: "number | string", defaultValue: "—" },
  { name: "maxHeight", type: "number | string", defaultValue: "—" },
  { name: "width", type: "number | string", defaultValue: "—" },
  { name: "maxWidth", type: "number | string", defaultValue: "—" },
  { name: "label", type: "string", defaultValue: "—" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "{ root?: string }", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
  { name: "children", type: "ReactNode", defaultValue: "—" },
] as const;

export const scrollAreaCssClasses = [
  { name: ".gem-scroll-area", rule: "root" },
  { name: ".gem-scroll-area--{orientation}", rule: "orientation" },
  { name: ".gem-scroll-area--type-{type}", rule: "type" },
  { name: ".gem-scroll-area--size-{size}", rule: "size" },
  { name: ".gem-scroll-area--radius-{token}", rule: "radius" },
  { name: ".gem-scroll-area::-webkit-scrollbar-thumb", rule: "thumb" },
] as const;

export const scrollAreaCssVariables = [
  "--gem-scroll-area-fg",
  "--gem-scroll-area-bg",
  "--gem-scroll-area-size",
  "--gem-scroll-area-radius",
  "--gem-scroll-area-thumb",
  "--gem-scroll-area-thumb-hover",
  "--gem-scroll-area-track",
] as const;

export const scrollAreaTokens = [
  "--gem-color-fg",
  "--gem-color-bg",
  "--gem-radius-{token}",
  "--gem-radius-full",
  "--gem-space-1",
] as const;
