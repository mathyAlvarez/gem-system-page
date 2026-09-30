import { List } from "@gem-org/gem-system";
import { File, Mail, Trash } from "@gem-org/gem-system/icons";
import type { MailLabels } from "./demo.ts";
import "./list-demo.css";
import "./list-overrides.css";

type StyledListProps = { mail: MailLabels };

export function StyledList({ mail }: StyledListProps) {
  return (
    <div className="list-demo">
      <List
        className="list-branded"
        bordered
        defaultValue="inbox"
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
