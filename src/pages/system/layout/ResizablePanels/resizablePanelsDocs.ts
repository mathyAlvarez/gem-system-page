import type {
  ResizableAs,
  ResizableOrientation,
  ResizableRadius,
  ResizableSize,
} from "@gem-org/gem-system";

export const resizableOrientations: ResizableOrientation[] = ["horizontal", "vertical"];

export const resizableSizes: ResizableSize[] = ["sm", "md", "lg"];

export const resizableRadii: ResizableRadius[] = [
  "none",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "full",
];

export const resizableAsOptions: ResizableAs[] = ["div", "section", "article", "aside", "main"];

const union = (values: readonly string[]) => values.map((value) => `"${value}"`).join(" | ");

export const groupProps = [
  { name: "as", type: union(resizableAsOptions), defaultValue: '"div"' },
  { name: "orientation", type: union(resizableOrientations), defaultValue: '"horizontal"' },
  { name: "size", type: union(resizableSizes), defaultValue: '"md"' },
  { name: "radius", type: union(resizableRadii), defaultValue: '"md"' },
  { name: "layout", type: "number[]", defaultValue: "—" },
  { name: "defaultLayout", type: "number[]", defaultValue: "—" },
  { name: "keyboardStep", type: "number", defaultValue: "2" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "height", type: "number | string", defaultValue: "—" },
  { name: "minHeight", type: "number | string", defaultValue: "—" },
  { name: "width", type: "number | string", defaultValue: "—" },
  { name: "minWidth", type: "number | string", defaultValue: "—" },
  { name: "padding", type: "SpaceToken | number | string", defaultValue: "0" },
  { name: "icon", type: "ReactNode", defaultValue: "—" },
  { name: "horizontalIcon", type: "ReactNode", defaultValue: "—" },
  { name: "verticalIcon", type: "ReactNode", defaultValue: "—" },
  { name: "handleColor", type: "string", defaultValue: "—" },
  { name: "handleHoverColor", type: "string", defaultValue: "—" },
  { name: "handleThickness", type: "number | string", defaultValue: "—" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "{ root?; panel?; handle?; grip? }", defaultValue: "—" },
  { name: "styles", type: "{ root?; panel?; handle?; grip? }", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "onLayoutChange", type: "(layout: number[]) => void", defaultValue: "—" },
] as const;

export const panelProps = [
  { name: "as", type: union(resizableAsOptions), defaultValue: '"div"' },
  { name: "defaultSize", type: "number", defaultValue: "—" },
  { name: "minSize", type: "number", defaultValue: "10" },
  { name: "maxSize", type: "number", defaultValue: "100" },
  { name: "collapsible", type: "boolean", defaultValue: "false" },
  { name: "collapsedSize", type: "number", defaultValue: "0" },
  { name: "id", type: "string", defaultValue: "—" },
  { name: "padding", type: "SpaceToken | number | string", defaultValue: "—" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "{ root?: string }", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
  { name: "children", type: "ReactNode", defaultValue: "—" },
] as const;

export const handleProps = [
  { name: "label", type: "string", defaultValue: '"Resize panels"' },
  { name: "withHandle", type: "boolean", defaultValue: "true" },
  { name: "icon", type: "ReactNode", defaultValue: "—" },
  { name: "color", type: "string", defaultValue: "—" },
  { name: "hoverColor", type: "string", defaultValue: "—" },
  { name: "thickness", type: "number | string", defaultValue: "—" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "{ root?: string; grip?: string }", defaultValue: "—" },
  { name: "gripStyle", type: "CSSProperties", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLDivElement>", defaultValue: "—" },
  { name: "children", type: "ReactNode", defaultValue: "—" },
] as const;

export const resizableKeyActions = ["arrows", "page", "edges", "enter", "doubleClick"] as const;

export const resizableCssClasses = [
  { name: ".gem-resizable", rule: "root" },
  { name: ".gem-resizable--{orientation}", rule: "orientation" },
  { name: ".gem-resizable--size-{size}", rule: "size" },
  { name: ".gem-resizable--radius-{token}", rule: "radius" },
  { name: ".gem-resizable--disabled", rule: "disabled" },
  { name: ".gem-resizable--resizing", rule: "resizing" },
  { name: ".gem-resizable__panel", rule: "panel" },
  { name: ".gem-resizable__handle", rule: "handle" },
  { name: ".gem-resizable__handle--{orientation}", rule: "handleOrientation" },
  { name: ".gem-resizable__handle--with-grip", rule: "withGrip" },
  { name: ".gem-resizable__handle--active", rule: "active" },
  { name: ".gem-resizable__handle--disabled", rule: "handleDisabled" },
  { name: ".gem-resizable__grip", rule: "grip" },
] as const;

export const resizableCssVariables = [
  "--gem-resizable-fg",
  "--gem-resizable-bg",
  "--gem-resizable-border",
  "--gem-resizable-radius",
  "--gem-resizable-panel-padding",
  "--gem-resizable-handle",
  "--gem-resizable-handle-bg",
  "--gem-resizable-handle-hover",
  "--gem-resizable-panel-size",
] as const;

export const resizableTokens = [
  "--gem-color-fg",
  "--gem-color-bg",
  "--gem-color-border",
  "--gem-color-fg-muted",
  "--gem-color-primary-500",
  "--gem-color-primary-700",
  "--gem-radius-{token}",
  "--gem-space-{n}",
  "--gem-shadow-focus",
] as const;

export const resizableUtils = [
  { name: "DEFAULT_MIN_SIZE", signature: "10" },
  { name: "DEFAULT_MAX_SIZE", signature: "100" },
  { name: "DEFAULT_KEYBOARD_STEP", signature: "2" },
  { name: "DEFAULT_COLLAPSED_SIZE", signature: "0" },
  { name: "resolveConstraints", signature: "(input) => PanelConstraints" },
  { name: "resolveInitialLayout", signature: "(count, constraints, layout?) => number[]" },
  { name: "normalizeLayout", signature: "(sizes, constraints) => number[]" },
  { name: "resizePair", signature: "(layout, handleIndex, deltaPercent, constraints) => number[]" },
  { name: "toCssLength", signature: "(value?: number | string) => string | undefined" },
] as const;
