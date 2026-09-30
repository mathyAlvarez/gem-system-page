import { ScrollArea } from "@gem-org/gem-system";
import "./scroll-area-overrides.css";

const code = Array.from(
  { length: 24 },
  (_, index) => `const step${index + 1} = await runTask("task-${index + 1}", { retries: 3, timeout: 5000 });`,
).join("\n");

type StyledScrollAreasProps = { label: string };

export function StyledScrollAreas({ label }: StyledScrollAreasProps) {
  return (
    <ScrollArea orientation="both" type="always" maxHeight={240} label={label} tabIndex={0} className="code-panel">
      <pre>{code}</pre>
    </ScrollArea>
  );
}
