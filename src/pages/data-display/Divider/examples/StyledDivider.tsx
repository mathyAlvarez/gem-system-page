import { Divider } from "@gem-org/gem-system";
import "./divider-demo.css";
import "./divider-overrides.css";

type StyledDividerProps = { label: string };

export function StyledDivider({ label }: StyledDividerProps) {
  return (
    <div className="divider-demo">
      <div className="divider-stack">
        <p className="divider-caption">className</p>
        <Divider className="divider-branded" />
      </div>
      <div className="divider-stack">
        <p className="divider-caption">classNames.label</p>
        <Divider className="divider-branded" classNames={{ label: "divider-branded__label" }}>
          {label}
        </Divider>
      </div>
    </div>
  );
}
