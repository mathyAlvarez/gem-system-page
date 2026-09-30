import { Avatar } from "@gem-org/gem-system";
import { AVATAR_RADII, PHOTO } from "./demo.ts";
import "./avatar-demo.css";

export function RadiusAvatar() {
  return (
    <div className="avatar-row">
      {AVATAR_RADII.map((radius) => (
        <div key={radius} className="avatar-cell">
          <Avatar src={PHOTO} name="Amina Costa" radius={radius} size="lg" />
          <p className="avatar-caption">{radius}</p>
        </div>
      ))}
    </div>
  );
}
