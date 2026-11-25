import { useState } from "react";
import { Button, Card } from "@gem-org/gem-system";
import { SharedLayout } from "@gem-org/gemsitions/shared-layout";
import "./shared-layout-demo.css";

type AsChildSharedLayoutProps = {
  expand: string;
  collapse: string;
  title: string;
  short: string;
  long: string;
};

export function AsChildSharedLayout({
  expand,
  collapse,
  title,
  short,
  long,
}: AsChildSharedLayoutProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="shared-layout-demo">
      <div className="shared-layout-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={isExpanded}
          onClick={() => setIsExpanded((value) => !value)}
        >
          {isExpanded ? collapse : expand}
        </Button>
      </div>
      <SharedLayout asChild isExpanded={isExpanded}>
        <Card title={title} bordered shadow="sm">
          <p style={{ margin: 0 }}>{isExpanded ? long : short}</p>
        </Card>
      </SharedLayout>
    </div>
  );
}
