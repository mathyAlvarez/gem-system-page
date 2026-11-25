import { Button, Divider } from "@gem-org/gem-system";
import "./divider-demo.css";

type InContentDividerProps = {
  first: string;
  second: string;
  today: string;
  third: string;
  toolbar: string;
  cut: string;
  copy: string;
  paste: string;
};

export function InContentDivider({
  first,
  second,
  today,
  third,
  toolbar,
  cut,
  copy,
  paste,
}: InContentDividerProps) {
  return (
    <div className="divider-demo">
      <div className="divider-panel">
        <p className="divider-copy">{first}</p>
        <Divider />
        <p className="divider-copy">{second}</p>
        <Divider tone="primary">{today}</Divider>
        <p className="divider-copy">{third}</p>
      </div>
      <div className="divider-row" role="toolbar" aria-label={toolbar}>
        <Button variant="secondary" size="sm">
          {cut}
        </Button>
        <Button variant="secondary" size="sm">
          {copy}
        </Button>
        <Divider orientation="vertical" />
        <Button variant="secondary" size="sm">
          {paste}
        </Button>
      </div>
    </div>
  );
}
