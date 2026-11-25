import { List } from "@gem-org/gem-system";
import { Bell, File, Mail, Star } from "@gem-org/gem-system/icons";
import type { MailLabels } from "./demo.ts";
import "./list-demo.css";

type NestedListProps = { mail: MailLabels };

export function NestedList({ mail }: NestedListProps) {
  return (
    <div className="list-demo">
      <List
        bordered
        items={[
          { id: "sent", label: mail.sent, icon: <Mail size="sm" /> },
          { id: "drafts", label: mail.drafts, icon: <File size="sm" /> },
          {
            id: "inbox",
            label: mail.inbox,
            icon: <Mail size="sm" />,
            defaultOpen: true,
            items: [
              { id: "starred", label: mail.starred, icon: <Star size="sm" /> },
              { id: "important", label: mail.important, icon: <Bell size="sm" /> },
            ],
          },
        ]}
      />
    </div>
  );
}
