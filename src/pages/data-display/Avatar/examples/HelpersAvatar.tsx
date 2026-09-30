import { Avatar, getAvatarInitials, getAvatarTone } from "@gem-org/gem-system";
import "./avatar-demo.css";

const names = ["Amina Costa", "Noah Berg", "María José López", "Cher"];

type HelpersAvatarProps = { name: string; initials: string; tone: string };

export function HelpersAvatar({ name, initials, tone }: HelpersAvatarProps) {
  return (
    <table className="avatar-table">
      <thead>
        <tr>
          <th scope="col">{name}</th>
          <th scope="col">{initials}</th>
          <th scope="col">{tone}</th>
          <th scope="col">Avatar</th>
        </tr>
      </thead>
      <tbody>
        {names.map((entry) => (
          <tr key={entry}>
            <td>{entry}</td>
            <td>
              <code>{getAvatarInitials(entry)}</code>
            </td>
            <td>
              <code>{getAvatarTone(entry)}</code>
            </td>
            <td>
              <Avatar name={entry} size="sm" alt="" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
