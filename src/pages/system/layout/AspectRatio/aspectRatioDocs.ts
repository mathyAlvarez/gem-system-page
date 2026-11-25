import type {
  AspectRatioAs,
  AspectRatioObjectFit,
  AspectRatioPreset,
  AspectRatioRadius,
} from "@gem-org/gem-system";

export const BANNER_SRC = "/gem-org-banner.jpeg";
export const MARK_SRC = "/gem-org-favicon.png";

export const aspectPresets: AspectRatioPreset[] = [
  "1:1",
  "16:9",
  "4:3",
  "3:2",
  "21:9",
  "9:16",
  "3:4",
  "2.5:3.5",
];

export const aspectNamedPresets = [
  { name: "square", ratio: "1 / 1" },
  { name: "video", ratio: "16 / 9" },
  { name: "photo", ratio: "3 / 2" },
  { name: "ultrawide", ratio: "21 / 9" },
  { name: "portrait", ratio: "9 / 16" },
  { name: "tcg", ratio: "2.5 / 3.5" },
] as const;

export const aspectObjectFits: AspectRatioObjectFit[] = [
  "cover",
  "contain",
  "fill",
  "none",
  "scale-down",
];

export const aspectRadii: AspectRatioRadius[] = [
  "none",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "full",
];

export const aspectAsOptions: AspectRatioAs[] = [
  "div",
  "section",
  "article",
  "figure",
  "aside",
  "main",
  "header",
  "footer",
];

const union = (values: readonly string[]) => values.map((value) => `"${value}"`).join(" | ");

export const aspectRatioProps = [
  { name: "as", type: union(aspectAsOptions), defaultValue: '"div"' },
  {
    name: "ratio",
    type: "AspectRatioPreset | string | number | { width, height }",
    defaultValue: '"16:9"',
  },
  { name: "objectFit", type: union(aspectObjectFits), defaultValue: '"cover"' },
  { name: "objectPosition", type: "string", defaultValue: '"center"' },
  { name: "radius", type: union(aspectRadii), defaultValue: '"md"' },
  { name: "maxWidth", type: "number | string", defaultValue: "—" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "{ root?: string; inner?: string }", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
  { name: "children", type: "ReactNode", defaultValue: "—" },
] as const;

export const aspectRatioCssClasses = [
  { name: ".gem-aspect-ratio", rule: "root" as const },
  { name: ".gem-aspect-ratio--radius-{token}", rule: "radius" as const },
  { name: ".gem-aspect-ratio__inner", rule: "inner" as const },
  {
    name: ".gem-aspect-ratio__inner > img | video | iframe | canvas | svg",
    rule: "media" as const,
  },
];

export const aspectRatioCssVariables = [
  "--gem-aspect-ratio",
  "--gem-aspect-ratio-fit",
  "--gem-aspect-ratio-position",
  "--gem-aspect-ratio-max",
  "--gem-aspect-ratio-radius",
] as const;

export const aspectRatioTokens = ["--gem-radius-{token}", "--gem-color-bg-subtle"] as const;

export const aspectRatioUtils = [
  { name: "resolveAspectRatio", signature: "(value?: AspectRatioValue) => string", entry: "main" },
  { name: "DEFAULT_ASPECT_RATIO", signature: '"16 / 9"', entry: "main" },
  {
    name: "toCssLength",
    signature: "(value?: number | string) => string | undefined",
    entry: "subpath",
  },
] as const;
