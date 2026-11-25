import { Avatar, AvatarGroup } from "@gem-org/gem-system";
import { PEOPLE, type AvatarCommon } from "./demo.ts";
import "./avatar-demo.css";

type GroupAvatarProps = { common: AvatarCommon; team: string; more: string; custom: string };

export function GroupAvatar({ common, team, more, custom }: GroupAvatarProps) {
  const visible = PEOPLE.slice(0, 3);
  const hidden = PEOPLE.length - visible.length;
  const overflowLabel = `${hidden} ${more}`;

  return (
    <div className="avatar-demo">
      <div>
        <p className="avatar-caption">statusPosition = centered</p>
        <AvatarGroup aria-label={team}>
          {PEOPLE.map((person) => (
            <Avatar
              key={person.name}
              src={person.src}
              name={person.name}
              status={person.status}
              role="img"
              aria-label={`${person.name}, ${common.statuses[person.status]}`}
            />
          ))}
        </AvatarGroup>
      </div>
      <div>
        <p className="avatar-caption">max = 3</p>
        <AvatarGroup aria-label={team} max={3}>
          {PEOPLE.map((person) => (
            <Avatar key={person.name} src={person.src} name={person.name} />
          ))}
        </AvatarGroup>
      </div>
      <div>
        <p className="avatar-caption">max = 4, total = 12</p>
        <AvatarGroup aria-label={team} size="sm" max={4} total={12}>
          {PEOPLE.map((person) => (
            <Avatar key={person.name} name={person.name} />
          ))}
        </AvatarGroup>
      </div>
      <div>
        <p className="avatar-caption">{custom}</p>
        <AvatarGroup aria-label={team}>
          {visible.map((person) => (
            <Avatar key={person.name} src={person.src} name={person.name} />
          ))}
          <Avatar tone="neutral" aria-label={overflowLabel}>
            <span className="gem-avatar__initials">+{hidden}</span>
          </Avatar>
        </AvatarGroup>
      </div>
    </div>
  );
}
