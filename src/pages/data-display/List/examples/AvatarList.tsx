import { Avatar, List } from "@gem-org/gem-system";
import { PEOPLE } from "./demo.ts";
import "./list-demo.css";

type AvatarListProps = { roles: string[] };

export function AvatarList({ roles }: AvatarListProps) {
  return (
    <div className="list-demo">
      <List
        bordered
        items={PEOPLE.map((name, index) => ({
          id: name,
          label: name,
          description: roles[index],
          avatar: <Avatar name={name} size="sm" alt="" />,
        }))}
      />
    </div>
  );
}
