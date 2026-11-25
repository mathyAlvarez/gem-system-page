import { useState } from "react";
import { List } from "@gem-org/gem-system";
import { File, Mail, Trash } from "@gem-org/gem-system/icons";
import type { MailLabels } from "./demo.ts";
import "./list-demo.css";

type SelectedListProps = { mail: MailLabels };

export function SelectedList({ mail }: SelectedListProps) {
  const [value, setValue] = useState("inbox");

  return (
    <div className="list-demo">
      <List
        bordered
        value={value}
        onChange={(id) => setValue(id)}
        items={[
          { id: "inbox", label: mail.inbox, icon: <Mail size="sm" /> },
          { id: "drafts", label: mail.drafts, icon: <File size="sm" /> },
          { type: "separator" },
          { id: "trash", label: mail.trash, icon: <Trash size="sm" /> },
        ]}
      />
      <p className="list-caption">value: {value}</p>
    </div>
  );
}
