import type {
  CommandPaletteRadius,
  CommandPaletteShadow,
  CommandPaletteSize,
} from "@gem-org/gem-system";

export const commandPaletteSizes: CommandPaletteSize[] = ["sm", "md", "lg"];
export const commandPaletteShadows: CommandPaletteShadow[] = ["none", "xs", "sm", "md", "lg", "xl"];
export const commandPaletteRadii: CommandPaletteRadius[] = ["sm", "md", "lg"];

const union = (values: readonly string[]) => values.map((value) => `"${value}"`).join(" | ");

export const commandPaletteProps = [
  { name: "items", type: "CommandPaletteItem[]", defaultValue: "—" },
  { name: "open", type: "boolean", defaultValue: "—" },
  { name: "defaultOpen", type: "boolean", defaultValue: "false" },
  { name: "query", type: "string", defaultValue: "—" },
  { name: "defaultQuery", type: "string", defaultValue: '""' },
  { name: "placeholder", type: "string", defaultValue: '"Search commands…"' },
  { name: "label", type: "string", defaultValue: '"Command palette"' },
  { name: "emptyText", type: "ReactNode", defaultValue: '"No results found."' },
  { name: "loading", type: "boolean", defaultValue: "false" },
  { name: "loadingText", type: "ReactNode", defaultValue: '"Loading…"' },
  { name: "shortcut", type: "boolean | string", defaultValue: "true" },
  { name: "shouldFilter", type: "boolean", defaultValue: "true" },
  { name: "filter", type: "CommandPaletteFilterFn", defaultValue: "defaultCommandFilter" },
  { name: "closeOnSelect", type: "boolean", defaultValue: "true" },
  { name: "closeOnBackdrop", type: "boolean", defaultValue: "true" },
  { name: "closeOnEscape", type: "boolean", defaultValue: "true" },
  { name: "resetOnOpen", type: "boolean", defaultValue: "true" },
  { name: "loop", type: "boolean", defaultValue: "true" },
  { name: "footer", type: "ReactNode | null", defaultValue: "—" },
  { name: "size", type: union(commandPaletteSizes), defaultValue: '"md"' },
  { name: "shadow", type: union(commandPaletteShadows), defaultValue: '"xl"' },
  { name: "radius", type: union(commandPaletteRadii), defaultValue: '"md"' },
  { name: "container", type: "HTMLElement | null", defaultValue: "document.body" },
  { name: "inputProps", type: "InputHTMLAttributes<HTMLInputElement>", defaultValue: "—" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "CommandPaletteClassNames", defaultValue: "—" },
  { name: "onOpenChange", type: "(open: boolean) => void", defaultValue: "—" },
  { name: "onQueryChange", type: "(query: string) => void", defaultValue: "—" },
  {
    name: "onSelect",
    type: "(id: string, item: CommandPaletteCommand) => void",
    defaultValue: "—",
  },
] as const;

export const commandPaletteCommandProps = [
  { name: "id", type: "string", defaultValue: "—" },
  { name: "label", type: "ReactNode", defaultValue: "—" },
  { name: "description", type: "ReactNode", defaultValue: "—" },
  { name: "icon", type: "ReactNode", defaultValue: "—" },
  { name: "shortcut", type: "string | string[]", defaultValue: "—" },
  { name: "href", type: "string", defaultValue: "—" },
  { name: "target", type: "string", defaultValue: '"_self"' },
  { name: "rel", type: "string", defaultValue: "—" },
  { name: "disabled", type: "boolean", defaultValue: "false" },
  { name: "danger", type: "boolean", defaultValue: "false" },
  { name: "keywords", type: "string[]", defaultValue: "—" },
  { name: "searchText", type: "string", defaultValue: "—" },
  { name: "closeOnSelect", type: "boolean", defaultValue: "—" },
  { name: "ariaLabel", type: "string", defaultValue: "—" },
  { name: "onSelect", type: "() => void", defaultValue: "—" },
] as const;

export const commandPaletteGroupProps = [
  { name: "type", type: '"group"', defaultValue: "—" },
  { name: "id", type: "string", defaultValue: "—" },
  { name: "label", type: "ReactNode", defaultValue: "—" },
  { name: "items", type: "CommandPaletteCommand[]", defaultValue: "—" },
] as const;

export const commandPaletteCssClasses = [
  { name: ".gem-command-palette", rule: "root" },
  { name: ".gem-command-palette--{size}", rule: "size" },
  { name: ".gem-command-palette--shadow-{shadow}", rule: "shadow" },
  { name: ".gem-command-palette--radius-{radius}", rule: "radius" },
  { name: ".gem-command-palette::backdrop", rule: "backdrop" },
  { name: ".gem-command-palette__panel", rule: "panel" },
  { name: ".gem-command-palette__search", rule: "search" },
  { name: ".gem-command-palette__search-icon", rule: "searchIcon" },
  { name: ".gem-command-palette__input", rule: "input" },
  { name: ".gem-command-palette__list", rule: "list" },
  { name: ".gem-command-palette__group", rule: "group" },
  { name: ".gem-command-palette__item", rule: "item" },
  { name: ".gem-command-palette__item--active", rule: "active" },
  { name: ".gem-command-palette__item--disabled", rule: "disabled" },
  { name: ".gem-command-palette__item--danger", rule: "danger" },
  { name: ".gem-command-palette__icon", rule: "icon" },
  { name: ".gem-command-palette__body", rule: "body" },
  { name: ".gem-command-palette__label", rule: "label" },
  { name: ".gem-command-palette__description", rule: "description" },
  { name: ".gem-command-palette__shortcut", rule: "shortcut" },
  { name: ".gem-command-palette__kbd", rule: "kbd" },
  { name: ".gem-command-palette__mark", rule: "mark" },
  { name: ".gem-command-palette__status", rule: "status" },
  { name: ".gem-command-palette__footer", rule: "footer" },
  { name: ".gem-command-palette__hints", rule: "hints" },
  { name: ".gem-command-palette__hint", rule: "hint" },
] as const;

export const commandPaletteCssVariables = ["--gem-command-palette-width"] as const;

export const commandPaletteTokens = [
  "--gem-color-bg",
  "--gem-color-bg-subtle",
  "--gem-color-fg",
  "--gem-color-fg-muted",
  "--gem-color-border",
  "--gem-color-error-600",
  "--gem-color-primary-500",
  "--gem-radius-{radius}",
  "--gem-shadow-{shadow}",
  "--gem-shadow-focus",
  "--gem-font-sans",
  "--gem-font-mono",
  "--gem-palette-neutral-{n}",
  "--gem-palette-error-400",
] as const;
