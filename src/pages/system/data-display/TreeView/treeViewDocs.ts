export const treeViewContentProps = [
  { name: "items", type: "TreeNode[]", defaultValue: "—" },
  { name: "listLabel", type: "string", defaultValue: '"Tree"' },
  { name: "aria-label", type: "string", defaultValue: "—" },
  { name: "size", type: '"sm" | "md" | "lg"', defaultValue: '"md"' },
  { name: "showLines", type: "boolean", defaultValue: "false" },
  { name: "hideIcons", type: "boolean", defaultValue: "false" },
  { name: "bordered", type: "boolean", defaultValue: "false" },
  { name: "radius", type: '"sm" | "md" | "lg"', defaultValue: '"md"' },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
] as const;

export const treeViewSelectionProps = [
  { name: "selectionMode", type: '"none" | "single" | "multiple"', defaultValue: '"single"' },
  { name: "selectedIds", type: "string[]", defaultValue: "—" },
  { name: "defaultSelectedIds", type: "string[]", defaultValue: "—" },
  { name: "onSelect", type: "(ids: string[], node: TreeNode | null) => void", defaultValue: "—" },
] as const;

export const treeViewExpansionProps = [
  { name: "expandedIds", type: "string[]", defaultValue: "—" },
  { name: "defaultExpandedIds", type: "string[]", defaultValue: "—" },
  { name: "defaultExpandAll", type: "boolean", defaultValue: "false" },
  { name: "onExpandedChange", type: "(ids: string[], node: TreeNode) => void", defaultValue: "—" },
] as const;

export const treeViewCheckProps = [
  { name: "checkable", type: "boolean", defaultValue: "false" },
  { name: "checkedIds", type: "string[]", defaultValue: "—" },
  { name: "defaultCheckedIds", type: "string[]", defaultValue: "—" },
  { name: "cascadeCheck", type: "boolean", defaultValue: "true" },
  {
    name: "onCheckedChange",
    type: "(ids: string[], node: TreeNode, checked: boolean) => void",
    defaultValue: "—",
  },
] as const;

export const treeViewStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "TreeViewClassNames", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLUListElement>", defaultValue: "—" },
] as const;

export const treeNodeProps = [
  { name: "id", type: "string", defaultValue: "—" },
  { name: "label", type: "ReactNode", defaultValue: "—" },
  { name: "icon", type: "ReactNode", defaultValue: "Folder / File" },
  { name: "children", type: "TreeNode[]", defaultValue: "—" },
  { name: "defaultOpen", type: "boolean", defaultValue: "false" },
  { name: "disabled", type: "boolean", defaultValue: "false" },
  { name: "end", type: "ReactNode", defaultValue: "—" },
  { name: "ariaLabel", type: "string", defaultValue: "—" },
] as const;

export const treeViewHelpers = [
  { name: "findTreeNode", type: "(nodes, id) => TreeNode | undefined", defaultValue: "—" },
  { name: "findTreePath", type: "(nodes, id) => TreeNode[] | null", defaultValue: "—" },
  { name: "collectTreeIds", type: "(nodes) => string[]", defaultValue: "—" },
  { name: "collectBranchIds", type: "(nodes) => string[]", defaultValue: "—" },
  { name: "collectDescendantIds", type: "(node) => string[]", defaultValue: "—" },
  { name: "collectDefaultExpandedIds", type: "(nodes, expandAll?) => string[]", defaultValue: "—" },
  {
    name: "flattenVisibleTree",
    type: "(nodes, expanded: ReadonlySet<string>) => FlatTreeNode[]",
    defaultValue: "—",
  },
  { name: "isTreeBranch", type: "(node) => boolean", defaultValue: "—" },
  { name: "hasTreeNode", type: "(value: ReactNode) => boolean", defaultValue: "—" },
  { name: "treeCheckState", type: "(node, checked, cascade) => TreeCheckState", defaultValue: "—" },
  {
    name: "applyTreeCheck",
    type: "(items, checked, id, cascade) => { ids: Set<string>; checked: boolean }",
    defaultValue: "—",
  },
  { name: "nodeName", type: "(node) => string | undefined", defaultValue: "—" },
] as const;

export const treeViewCssClasses = [
  { name: ".gem-tree", rule: "root" },
  { name: ".gem-tree--md", rule: "size" },
  { name: ".gem-tree--radius-md", rule: "radius" },
  { name: ".gem-tree--bordered", rule: "bordered" },
  { name: ".gem-tree--lines", rule: "lines" },
  { name: ".gem-tree--checkable", rule: "checkable" },
  { name: ".gem-tree--disabled", rule: "disabled" },
  { name: ".gem-tree__node", rule: "node" },
  { name: ".gem-tree__node--branch", rule: "branch" },
  { name: ".gem-tree__node--open", rule: "open" },
  { name: ".gem-tree__node--selected", rule: "selected" },
  { name: ".gem-tree__node--disabled", rule: "nodeDisabled" },
  { name: ".gem-tree__row", rule: "row" },
  { name: ".gem-tree__toggle", rule: "toggle" },
  { name: ".gem-tree__toggle--spacer", rule: "spacer" },
  { name: ".gem-tree__check", rule: "check" },
  { name: ".gem-tree__icon", rule: "icon" },
  { name: ".gem-tree__label", rule: "label" },
  { name: ".gem-tree__end", rule: "end" },
  { name: ".gem-tree__group", rule: "group" },
] as const;

export const treeViewCssVariables = [
  "--gem-tree-fg",
  "--gem-tree-muted",
  "--gem-tree-border",
  "--gem-tree-bg",
  "--gem-tree-hover",
  "--gem-tree-selected",
  "--gem-tree-selected-fg",
  "--gem-tree-line",
  "--gem-tree-radius",
  "--gem-tree-indent",
  "--gem-tree-row-y",
  "--gem-tree-row-x",
  "--gem-tree-gap",
  "--gem-tree-icon",
  "--gem-tree-toggle",
  "--gem-tree-level",
] as const;

export const treeViewTokens = [
  "--gem-color-fg",
  "--gem-color-fg-muted",
  "--gem-color-border",
  "--gem-color-bg",
  "--gem-color-bg-subtle",
  "--gem-color-primary-{500|600|700}",
  "--gem-color-ring",
  "--gem-radius-{sm|md|lg}",
  "--gem-space-1",
  "--gem-font-sans",
  "--gem-palette-neutral-{50|300|600|700}",
  "--gem-palette-primary-{200|400}",
] as const;
