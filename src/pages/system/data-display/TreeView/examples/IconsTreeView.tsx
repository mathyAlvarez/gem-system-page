import { Badge, TreeView, type TreeNode } from "@gem-org/gem-system";
import { File, Heart, Home, Settings, Star } from "@gem-org/gem-system/icons";
import "./tree-view-demo.css";

type IconsTreeViewProps = {
  listLabel: string;
  count: string;
  labels: {
    home: string;
    starred: string;
    brief: string;
    prefs: string;
    favorites: string;
    logo: string;
    palette: string;
  };
};

export function IconsTreeView({ listLabel, count, labels }: IconsTreeViewProps) {
  const withCount = (label: string, total: number) =>
    count.replace("{label}", label).replace("{count}", String(total));

  const items: TreeNode[] = [
    {
      id: "home",
      label: labels.home,
      icon: <Home size="sm" />,
      defaultOpen: true,
      children: [
        {
          id: "starred",
          label: labels.starred,
          ariaLabel: withCount(labels.starred, 2),
          icon: <Star size="sm" />,
          defaultOpen: true,
          end: (
            <Badge size="sm" tone="primary" variant="soft">
              2
            </Badge>
          ),
          children: [
            { id: "brief", label: labels.brief, icon: <File size="sm" /> },
            { id: "prefs", label: labels.prefs, icon: <Settings size="sm" /> },
          ],
        },
        {
          id: "favorites",
          label: labels.favorites,
          ariaLabel: withCount(labels.favorites, 2),
          icon: <Heart size="sm" />,
          end: (
            <Badge size="sm" tone="neutral" variant="outline">
              2
            </Badge>
          ),
          children: [
            { id: "logo", label: labels.logo, icon: <File size="sm" /> },
            { id: "palette", label: labels.palette, icon: <File size="sm" /> },
          ],
        },
      ],
    },
  ];

  return (
    <div className="tree-view-demo">
      <TreeView listLabel={listLabel} items={items} bordered defaultSelectedIds={["brief"]} />
    </div>
  );
}
