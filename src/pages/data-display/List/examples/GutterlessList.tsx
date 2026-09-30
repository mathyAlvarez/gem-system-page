import { Button, List } from "@gem-org/gem-system";
import { Chat } from "@gem-org/gem-system/icons";
import "./list-demo.css";

type GutterlessListProps = { lines: string[]; comment: string };

export function GutterlessList({ lines, comment }: GutterlessListProps) {
  return (
    <div className="list-demo">
      <List
        disableGutters
        divided
        items={lines.map((line) => ({
          id: line,
          label: line,
          secondaryAction: (
            <Button variant="transparent" size="sm" iconOnly aria-label={`${comment}: ${line}`}>
              <Chat size="sm" />
            </Button>
          ),
        }))}
      />
    </div>
  );
}
