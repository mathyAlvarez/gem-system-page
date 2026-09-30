import { Avatar, AvatarGroup, Tooltip } from "@gem-org/gem-system";
import { PEOPLE, type AvatarCommon } from "./demo.ts";
import "./avatar-demo.css";

type TooltipAvatarProps = { common: AvatarCommon; team: string };

export function TooltipAvatar({ common, team }: TooltipAvatarProps) {
  return (
    <AvatarGroup aria-label={team} max={4}>
      {PEOPLE.map((person) => {
        const label = `${person.name}, ${common.statuses[person.status]}`;
        return (
          <Tooltip key={person.name} content={label}>
            <Avatar
              src={person.src}
              name={person.name}
              status={person.status}
              role="img"
              aria-label={label}
              tabIndex={0}
            />
          </Tooltip>
        );
      })}
    </AvatarGroup>
  );
}
