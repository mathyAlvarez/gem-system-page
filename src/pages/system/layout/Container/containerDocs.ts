import type { ContainerAs, ContainerSize } from "@gem-org/gem-system";

export const containerSizes: ContainerSize[] = ["sm", "md", "lg", "xl", "2xl"];

export const containerAsOptions: ContainerAs[] = [
  "div",
  "main",
  "section",
  "article",
  "header",
  "footer",
  "aside",
];

const union = (values: readonly string[]) => values.map((value) => `"${value}"`).join(" | ");

export const containerProps = [
  { name: "as", type: union(containerAsOptions), defaultValue: '"div"' },
  { name: "size", type: union(containerSizes), defaultValue: '"lg"' },
  { name: "maxWidth", type: "number | string", defaultValue: "—" },
  { name: "fluid", type: "boolean", defaultValue: "false" },
  { name: "padded", type: "boolean", defaultValue: "true" },
  { name: "centered", type: "boolean", defaultValue: "true" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "{ root?: string }", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
  { name: "children", type: "ReactNode", defaultValue: "—" },
] as const;

export const containerCssClasses = [
  { name: ".gem-container", rule: "root" as const },
  ...containerSizes.map((value) => ({
    name: `.gem-container--${value}`,
    rule: "size" as const,
    value,
  })),
  { name: ".gem-container--custom", rule: "custom" as const },
  { name: ".gem-container--fluid", rule: "fluid" as const },
  { name: ".gem-container--flush", rule: "flush" as const },
  { name: ".gem-container--start", rule: "start" as const },
];

export const containerCssVariables = ["--gem-container-max", "--gem-container-pad"] as const;

export const containerTokens = [
  "--gem-container-sm",
  "--gem-container-md",
  "--gem-container-lg",
  "--gem-container-xl",
  "--gem-container-2xl",
  "--gem-grid-margin",
  "--gem-space-5",
  "--gem-grid-gutter-lg",
  "--gem-grid-margin-lg",
] as const;

export const containerBreakpoints = [
  { id: "base", minWidth: "0", token: "--gem-grid-margin", value: "1rem" },
  { id: "sm", minWidth: "640px", token: "--gem-space-5", value: "1.25rem" },
  { id: "md", minWidth: "768px", token: "--gem-grid-gutter-lg", value: "1.5rem" },
  { id: "lg", minWidth: "1024px", token: "--gem-grid-margin-lg", value: "2rem" },
] as const;
