import { Badge, type TreeNode } from "@gem-org/gem-system";

export const TREE_SIZES = ["sm", "md", "lg"] as const;
export const TREE_RADII = ["sm", "md", "lg"] as const;
export const TREE_SELECTION_MODES = ["single", "multiple", "none"] as const;

export const PROJECT_ITEMS: TreeNode[] = [
  {
    id: "src",
    label: "src",
    defaultOpen: true,
    children: [
      {
        id: "components",
        label: "components",
        defaultOpen: true,
        children: [
          { id: "button-tsx", label: "Button.tsx" },
          { id: "tree-view-tsx", label: "TreeView.tsx" },
        ],
      },
      {
        id: "tokens",
        label: "tokens",
        children: [
          { id: "colors-ts", label: "colors.ts" },
          { id: "spacing-ts", label: "spacing.ts" },
        ],
      },
      { id: "index-ts", label: "index.ts" },
    ],
  },
  {
    id: "public",
    label: "public",
    children: [{ id: "favicon-svg", label: "favicon.svg" }],
  },
  { id: "package-json", label: "package.json" },
  { id: "readme-md", label: "README.md" },
];

export type TeamCopy = {
  company: string;
  design: string;
  engineering: string;
  partners: string;
};

export function teamItems(copy: TeamCopy): TreeNode[] {
  return [
    {
      id: "acme",
      label: copy.company,
      defaultOpen: true,
      end: (
        <Badge size="sm" tone="neutral" variant="soft">
          5
        </Badge>
      ),
      children: [
        {
          id: "design",
          label: copy.design,
          defaultOpen: true,
          children: [
            { id: "maya", label: "Maya Chen" },
            { id: "luis", label: "Luis Ortega", disabled: true },
          ],
        },
        {
          id: "engineering",
          label: copy.engineering,
          children: [
            { id: "noor", label: "Noor Ali" },
            { id: "kenji", label: "Kenji Sato" },
          ],
        },
      ],
    },
    {
      id: "partners",
      label: copy.partners,
      children: [{ id: "northwind", label: "Northwind" }],
    },
  ];
}

export function filterTree(nodes: TreeNode[], query: string): TreeNode[] {
  const needle = query.trim().toLowerCase();
  if (!needle) return nodes;
  return nodes.flatMap((node) => {
    const matches = typeof node.label === "string" && node.label.toLowerCase().includes(needle);
    if (matches) return [node];
    const children = filterTree(node.children ?? [], needle);
    return children.length ? [{ ...node, children }] : [];
  });
}
