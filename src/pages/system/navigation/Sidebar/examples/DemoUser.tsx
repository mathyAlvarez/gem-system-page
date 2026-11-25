import { User } from "@gem-org/gem-system/icons";
import "./sidebar-demo.css";

type DemoUserProps = { name: string };

export function DemoUser({ name }: DemoUserProps) {
  return (
    <div className="sidebar-user">
      <User size="sm" />
      <span className="sidebar-user__name">{name}</span>
    </div>
  );
}
