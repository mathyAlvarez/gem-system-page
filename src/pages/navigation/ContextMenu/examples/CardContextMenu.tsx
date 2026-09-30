import { Card, ContextMenu, Typography } from "@gem-org/gem-system";
import { actionItems, type ContextMenuTexts } from "./demo.tsx";
import "./context-menu-demo.css";

type CardContextMenuProps = {
  texts: ContextMenuTexts;
  menuLabel: string;
  title: string;
  subtitle: string;
  body: string;
};

export function CardContextMenu({ texts, menuLabel, title, subtitle, body }: CardContextMenuProps) {
  return (
    <ContextMenu items={actionItems(texts)} menuLabel={menuLabel} className="w-full max-w-md">
      <Card bordered shadow="sm" title={title} subtitle={subtitle} classNames={{ root: "min-h-72" }}>
        <Typography variant="body">{body}</Typography>
      </Card>
    </ContextMenu>
  );
}
