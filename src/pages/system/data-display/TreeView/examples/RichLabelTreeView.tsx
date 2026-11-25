import { Badge, TreeView, Typography, type TreeNode } from "@gem-org/gem-system";
import { Lock, Users } from "@gem-org/gem-system/icons";
import "./tree-view-demo.css";

type RichLabelTreeViewProps = {
  listLabel: string;
  workspace: string;
  channels: { general: string; design: string; finance: string };
  privateLabel: string;
};

export function RichLabelTreeView({
  listLabel,
  workspace,
  channels,
  privateLabel,
}: RichLabelTreeViewProps) {
  const items: TreeNode[] = [
    {
      id: "workspace",
      label: workspace,
      icon: <Users size="sm" />,
      defaultOpen: true,
      children: [
        { id: "general", label: `# ${channels.general}`, ariaLabel: channels.general },
        { id: "design", label: `# ${channels.design}`, ariaLabel: channels.design },
        {
          id: "finance",
          icon: <Lock size="sm" />,
          ariaLabel: `${channels.finance}, ${privateLabel}`,
          label: (
            <span className="tree-view-demo__row">
              <Typography variant="caption" as="span" className="tree-view-demo__text">
                {channels.finance}
              </Typography>
              <Badge size="sm" tone="warning" variant="soft">
                {privateLabel}
              </Badge>
            </span>
          ),
        },
      ],
    },
  ];

  return (
    <div className="tree-view-demo">
      <TreeView listLabel={listLabel} items={items} bordered defaultSelectedIds={["general"]} />
    </div>
  );
}
