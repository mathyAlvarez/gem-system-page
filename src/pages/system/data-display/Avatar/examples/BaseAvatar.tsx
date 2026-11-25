import { Avatar } from "@gem-org/gem-system";
import { PHOTO } from "./demo.ts";
import "./avatar-demo.css";

export function BaseAvatar() {
  return (
    <div className="avatar-row">
      <Avatar src={PHOTO} name="Amina Costa" />
      <Avatar src={PHOTO} name="Amina Costa" size="lg" />
    </div>
  );
}
