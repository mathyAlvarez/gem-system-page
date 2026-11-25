import { useState } from "react";
import { Avatar, List } from "@gem-org/gem-system";
import { PEOPLE } from "./demo.ts";
import "./list-demo.css";

type SecondaryCheckboxListProps = { roles: string[] };

export function SecondaryCheckboxList({ roles }: SecondaryCheckboxListProps) {
  const [checked, setChecked] = useState<Record<string, boolean>>({
    [PEOPLE[0]]: true,
    [PEOPLE[2]]: true,
  });

  return (
    <div className="list-demo">
      <List
        bordered
        items={PEOPLE.map((name, index) => ({
          id: name,
          type: "checkbox" as const,
          controlPlacement: "end" as const,
          label: name,
          description: roles[index],
          avatar: <Avatar name={name} size="sm" alt="" />,
          checked: Boolean(checked[name]),
        }))}
        onCheckedChange={(id, next) => setChecked((current) => ({ ...current, [id]: next }))}
      />
    </div>
  );
}
