export const timelineProps = [
  { name: "items", type: "TimelineItem[]", defaultValue: "—" },
  { name: "size", type: '"sm" | "md" | "lg"', defaultValue: '"md"' },
  { name: "align", type: '"start" | "end" | "alternate"', defaultValue: '"start"' },
  { name: "reverse", type: "boolean", defaultValue: "false" },
  { name: "pending", type: "boolean | ReactNode", defaultValue: "—" },
  { name: "pendingDot", type: "ReactNode", defaultValue: "—" },
  { name: "listLabel", type: "string", defaultValue: '"Timeline"' },
  { name: "aria-label", type: "string", defaultValue: "—" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "TimelineClassNames", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLOListElement>", defaultValue: "—" },
] as const;

export const timelineItemProps = [
  { name: "id", type: "string", defaultValue: "—" },
  { name: "title", type: "ReactNode", defaultValue: "—" },
  { name: "description", type: "ReactNode", defaultValue: "—" },
  { name: "time", type: "ReactNode", defaultValue: "—" },
  { name: "icon", type: "ReactNode", defaultValue: "—" },
  {
    name: "tone",
    type: '"neutral" | "primary" | "secondary" | "success" | "warning" | "error" | "info"',
    defaultValue: '"neutral"',
  },
  { name: "content", type: "ReactNode", defaultValue: "—" },
  { name: "loading", type: "boolean", defaultValue: "false" },
  { name: "ariaLabel", type: "string", defaultValue: "—" },
] as const;

export const timelineHelpers = [
  { name: "PENDING_TIMELINE_ID", type: '"__gem-timeline-pending"', defaultValue: "—" },
  { name: "hasTimelineNode", type: "(value: ReactNode) => boolean", defaultValue: "—" },
  { name: "itemSide", type: '(align, index) => "start" | "end"', defaultValue: "—" },
  {
    name: "resolveTimelineItems",
    type: "(items, reverse, pending, pendingDot?) => TimelineItem[]",
    defaultValue: "—",
  },
] as const;

export const timelineCssClasses = [
  { name: ".gem-timeline", rule: "root" },
  { name: ".gem-timeline--md", rule: "size" },
  { name: ".gem-timeline--start", rule: "align" },
  { name: ".gem-timeline--reverse", rule: "reverse" },
  { name: ".gem-timeline__item", rule: "item" },
  { name: ".gem-timeline__item--primary", rule: "tone" },
  { name: ".gem-timeline__item--side-start", rule: "side" },
  { name: ".gem-timeline__item--last", rule: "last" },
  { name: ".gem-timeline__item--loading", rule: "loading" },
  { name: ".gem-timeline__item--has-icon", rule: "hasIcon" },
  { name: ".gem-timeline__rail", rule: "rail" },
  { name: ".gem-timeline__marker", rule: "marker" },
  { name: ".gem-timeline__connector", rule: "connector" },
  { name: ".gem-timeline__body", rule: "body" },
  { name: ".gem-timeline__header", rule: "header" },
  { name: ".gem-timeline__title", rule: "title" },
  { name: ".gem-timeline__time", rule: "time" },
  { name: ".gem-timeline__description", rule: "description" },
  { name: ".gem-timeline__content", rule: "content" },
] as const;

export const timelineCssVariables = [
  "--gem-timeline-gap",
  "--gem-timeline-col-gap",
  "--gem-timeline-body-pad",
  "--gem-timeline-dot",
  "--gem-timeline-icon-well",
  "--gem-timeline-line",
  "--gem-timeline-marker-bg",
  "--gem-timeline-marker-fg",
  "--gem-timeline-marker-border",
  "--gem-timeline-fg",
  "--gem-timeline-muted",
] as const;

export const timelineTokens = [
  "--gem-color-bg",
  "--gem-color-fg",
  "--gem-color-fg-muted",
  "--gem-color-border",
  "--gem-color-{primary|secondary}-600",
  "--gem-color-{success|warning|error|info}-solid",
  "--gem-color-neutral-{400|500}",
  "--gem-palette-neutral-{50|300|600}",
  "--gem-radius-full",
  "--gem-space-{1|2|3|4|5|6}",
  "--gem-font-sans",
] as const;
