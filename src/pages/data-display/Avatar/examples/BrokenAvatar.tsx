import { Avatar } from "@gem-org/gem-system";
import "./avatar-demo.css";

type BrokenAvatarProps = { unknown: string };

export function BrokenAvatar({ unknown }: BrokenAvatarProps) {
  return (
    <div className="avatar-row">
      <Avatar src="https://invalid.example/missing.jpg" name="Sofia Rahman" />
      <Avatar src="https://invalid.example/missing.jpg" aria-label={unknown} />
    </div>
  );
}
