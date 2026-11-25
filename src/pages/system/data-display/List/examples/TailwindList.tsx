import { List } from "@gem-org/gem-system";
import { File, Mail, Trash } from "@gem-org/gem-system/icons";
import type { MailLabels } from "./demo.ts";
import "./list-demo.css";

type TailwindListProps = { mail: MailLabels };

export function TailwindList({ mail }: TailwindListProps) {
  return (
    <div className="list-demo">
      <List
        defaultValue="inbox"
        className="gap-1 p-2 [--gem-list-selected:var(--gem-color-tertiary-100)] [--gem-list-selected-fg:var(--gem-color-tertiary-800)]"
        classNames={{
          item: "rounded-(--gem-radius-md) overflow-hidden",
          label: "font-bold",
          icon: "text-(--gem-color-tertiary-600)",
        }}
        items={[
          { id: "inbox", label: mail.inbox, icon: <Mail size="sm" /> },
          { id: "drafts", label: mail.drafts, icon: <File size="sm" /> },
          { id: "trash", label: mail.trash, icon: <Trash size="sm" /> },
        ]}
      />
    </div>
  );
}
