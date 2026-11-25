import { Avatar } from "@gem-org/gem-system";
import "./avatar-demo.css";

const names = ["Noah Berg", "Sofia Rahman", "María José López", "Cher"];

export function InitialsAvatar() {
  return (
    <div className="avatar-row">
      {names.map((name) => (
        <div key={name} className="avatar-cell">
          <Avatar name={name} />
          <p className="avatar-caption">{name}</p>
        </div>
      ))}
    </div>
  );
}
