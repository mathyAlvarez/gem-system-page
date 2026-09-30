import { Avatar } from "@gem-org/gem-system";
import { PEOPLE, type AvatarCommon } from "./demo.ts";
import "./avatar-demo.css";

type PersonAvatarProps = { common: AvatarCommon };

export function PersonAvatar({ common }: PersonAvatarProps) {
  return (
    <ul className="avatar-people">
      {PEOPLE.slice(0, 3).map((person) => (
        <li key={person.name} className="avatar-person">
          <Avatar src={person.src} name={person.name} alt="" status={person.status} />
          <div className="avatar-person__meta">
            <span className="avatar-person__name">{person.name}</span>
            <span className="avatar-person__role">{common.statuses[person.status]}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
