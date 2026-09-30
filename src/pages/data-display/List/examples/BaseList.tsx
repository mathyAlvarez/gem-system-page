import { List } from "@gem-org/gem-system";
import type { MailLabels } from "./demo.ts";
import "./list-demo.css";

type BaseListProps = { mail: MailLabels };

export function BaseList({ mail }: BaseListProps) {
  return (
    <div className="list-demo">
      <List
        items={[
          { id: "inbox", label: mail.inbox },
          { id: "drafts", label: mail.drafts },
          { type: "separator" },
          { id: "trash", label: mail.trash },
          { id: "spam", label: mail.spam },
        ]}
      />
    </div>
  );
}
