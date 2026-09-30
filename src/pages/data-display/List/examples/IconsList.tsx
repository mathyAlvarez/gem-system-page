import { List } from "@gem-org/gem-system";
import { File, Mail, Trash } from "@gem-org/gem-system/icons";
import type { MailLabels } from "./demo.ts";
import "./list-demo.css";

type IconsListProps = { mail: MailLabels };

export function IconsList({ mail }: IconsListProps) {
  return (
    <div className="list-demo">
      <List
        bordered
        items={[
          { id: "inbox", label: mail.inbox, icon: <Mail size="sm" /> },
          { id: "drafts", label: mail.drafts, icon: <File size="sm" /> },
          { type: "separator" },
          { id: "trash", label: mail.trash, icon: <Trash size="sm" /> },
        ]}
      />
    </div>
  );
}
