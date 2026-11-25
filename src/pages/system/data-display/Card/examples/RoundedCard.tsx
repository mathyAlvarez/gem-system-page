import { Card } from "@gem-org/gem-system";
import "./card-demo.css";

type RoundedCardProps = { preset: string; percent: string; css: string; text: string };

export function RoundedCard({ preset, percent, css, text }: RoundedCardProps) {
  return (
    <div className="card-grid">
      <Card rounded title={preset} subtitle="rounded">
        {text}
      </Card>
      <Card
        rounded={12}
        media={<div className="card-gradient" aria-hidden />}
        title={percent}
        subtitle="rounded={12}"
      >
        {text}
      </Card>
      <Card rounded="1.25rem" shadow="sm" title={css} subtitle='rounded="1.25rem"'>
        {text}
      </Card>
    </div>
  );
}
