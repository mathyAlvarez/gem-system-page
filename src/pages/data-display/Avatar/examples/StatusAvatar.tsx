import { Avatar } from "@gem-org/gem-system";
import { AVATAR_STATUS_POSITIONS, AVATAR_STATUSES, PHOTO, type AvatarCommon } from "./demo.ts";
import "./avatar-demo.css";

type StatusAvatarProps = { common: AvatarCommon };

export function StatusAvatar({ common }: StatusAvatarProps) {
  return (
    <div className="avatar-demo">
      {AVATAR_STATUS_POSITIONS.map((position) => (
        <div key={position}>
          <p className="avatar-caption">{position}</p>
          <div className="avatar-row">
            {AVATAR_STATUSES.map((status) => (
              <div key={status} className="avatar-cell">
                <Avatar
                  src={PHOTO}
                  name="Amina Costa"
                  status={status}
                  statusPosition={position}
                  role="img"
                  aria-label={`Amina Costa, ${common.statuses[status]}`}
                />
                <p className="avatar-caption">{common.statuses[status]}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
