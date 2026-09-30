import { Avatar } from "@gem-org/gem-system";
import { AVATAR_TONES } from "./demo.ts";
import "./avatar-demo.css";

export function TonesAvatar() {
  return (
    <div className="avatar-row">
      {AVATAR_TONES.map((tone) => (
        <div key={tone} className="avatar-cell">
          <Avatar name="Amina Costa" tone={tone} />
          <p className="avatar-caption">{tone}</p>
        </div>
      ))}
    </div>
  );
}
