import { Avatar } from "@gem-org/gem-system";
import { AVATAR_SIZES, PHOTO } from "./demo.ts";
import "./avatar-demo.css";

type SizesAvatarProps = { unknown: string };

export function SizesAvatar({ unknown }: SizesAvatarProps) {
  return (
    <div className="avatar-demo">
      <div className="avatar-row">
        {AVATAR_SIZES.map((size) => (
          <Avatar key={size} size={size} src={PHOTO} name="Amina Costa" />
        ))}
      </div>
      <div className="avatar-row">
        {AVATAR_SIZES.map((size) => (
          <Avatar key={size} size={size} name="Noah Berg" />
        ))}
      </div>
      <div className="avatar-row">
        {AVATAR_SIZES.map((size) => (
          <Avatar key={size} size={size} aria-label={unknown} />
        ))}
      </div>
    </div>
  );
}
