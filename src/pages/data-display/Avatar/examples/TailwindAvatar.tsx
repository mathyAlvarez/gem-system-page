import { Avatar } from "@gem-org/gem-system";
import { PHOTO } from "./demo.ts";
import "./avatar-demo.css";

export function TailwindAvatar() {
  return (
    <div className="avatar-row">
      <Avatar
        src={PHOTO}
        name="Amina Costa"
        size="lg"
        status="online"
        className="shadow-[0_0_0_3px_var(--gem-palette-tertiary-400)] [--gem-avatar-status:1.125rem]"
        classNames={{ image: "grayscale hover:grayscale-0 transition-[filter]" }}
      />
      <Avatar
        name="Noah Berg"
        size="lg"
        radius="md"
        className="bg-linear-to-br from-(--gem-color-primary-500) to-(--gem-palette-secondary-500) [--gem-avatar-font:1rem]"
        classNames={{ initials: "tracking-widest" }}
      />
    </div>
  );
}
