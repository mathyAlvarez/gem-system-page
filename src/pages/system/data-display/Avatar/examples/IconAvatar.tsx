import { Avatar } from "@gem-org/gem-system";
import { Bell, Users } from "@gem-org/gem-system/icons";
import "./avatar-demo.css";

type IconAvatarProps = { unknown: string; team: string; bot: string };

export function IconAvatar({ unknown, team, bot }: IconAvatarProps) {
  return (
    <div className="avatar-row">
      <Avatar aria-label={unknown} />
      <Avatar tone="secondary" aria-label={team} icon={<Users size="md" strokeWidth={1.85} />} />
      <Avatar tone="tertiary" radius="md" aria-label={bot}>
        <Bell size="md" strokeWidth={1.85} aria-hidden />
      </Avatar>
    </div>
  );
}
