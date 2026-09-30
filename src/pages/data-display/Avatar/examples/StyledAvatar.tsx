import { Avatar } from "@gem-org/gem-system";
import { PHOTO, type AvatarCommon } from "./demo.ts";
import "./avatar-demo.css";
import "./avatar-overrides.css";

type StyledAvatarProps = { common: AvatarCommon };

export function StyledAvatar({ common }: StyledAvatarProps) {
  return (
    <div className="avatar-row">
      <Avatar
        className="avatar-branded"
        bordered
        src={PHOTO}
        name="Amina Costa"
        status="online"
        role="img"
        aria-label={`Amina Costa, ${common.statuses.online}`}
      />
      <Avatar className="avatar-branded" radius="lg" name="Noah Berg" />
    </div>
  );
}
