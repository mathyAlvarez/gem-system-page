import { List } from "@gem-org/gem-system";
import { File, Lock, Mail } from "@gem-org/gem-system/icons";
import type { MailLabels } from "./demo.ts";
import "./list-demo.css";

type DisabledListProps = { mail: MailLabels; archive: string };

export function DisabledList({ mail, archive }: DisabledListProps) {
  const items = [
    { id: "inbox", label: mail.inbox, icon: <Mail size="sm" /> },
    { id: "drafts", label: mail.drafts, icon: <File size="sm" /> },
    { id: "archive", label: archive, icon: <Lock size="sm" />, disabled: true },
  ];

  return (
    <div className="list-demo">
      <p className="list-caption">disabled</p>
      <List bordered items={items} />
      <p className="list-caption">isDisabled</p>
      <List bordered isDisabled items={items} />
    </div>
  );
}
