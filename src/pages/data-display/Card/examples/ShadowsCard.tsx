import { Card } from "@gem-org/gem-system";
import { CARD_SHADOWS } from "./demo.ts";
import "./card-demo.css";

type ShadowsCardProps = { token: string };

export function ShadowsCard({ token }: ShadowsCardProps) {
  return (
    <div className="card-grid">
      {CARD_SHADOWS.map((shadow) => (
        <Card key={shadow} bordered={shadow === "none"} shadow={shadow} title={shadow} subtitle={`shadow="${shadow}"`}>
          {token} --gem-shadow-{shadow}
        </Card>
      ))}
    </div>
  );
}
