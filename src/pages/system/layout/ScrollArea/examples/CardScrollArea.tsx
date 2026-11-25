import { Card, CardBody, ScrollArea, Typography } from "@gem-org/gem-system";
import "./scroll-demo.css";

type CardScrollAreaProps = { title: string; label: string; events: string[] };

export function CardScrollArea({ title, label, events }: CardScrollAreaProps) {
  return (
    <div className="w-full max-w-105">
      <Card title={title}>
        <CardBody>
          <ScrollArea maxHeight={200} radius="sm" label={label}>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {events.map((event, index) => (
                <li key={index}>
                  <Typography variant="bodySm" as="p" className="m-0">
                    {event}
                  </Typography>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </CardBody>
      </Card>
    </div>
  );
}
