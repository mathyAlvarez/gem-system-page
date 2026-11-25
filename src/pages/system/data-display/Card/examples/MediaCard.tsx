import { Button, Card } from "@gem-org/gem-system";
import "./card-demo.css";

type MediaCardProps = { title: string; subtitle: string; text: string; alt: string; view: string };

export function MediaCard({ title, subtitle, text, alt, view }: MediaCardProps) {
  return (
    <div className="card-grid">
      <Card
        media={<img className="card-cover" src="/gem-org-banner.jpeg" alt={alt} />}
        title={title}
        subtitle={subtitle}
        footer={
          <Button variant="secondary" size="sm">
            {view}
          </Button>
        }
      >
        {text}
      </Card>
      <Card media={<div className="card-gradient" aria-hidden />} title={title} subtitle={subtitle}>
        {text}
      </Card>
    </div>
  );
}
