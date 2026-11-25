import { Button } from "@gem-org/gem-system";

export type StaggerControlsProps = {
  toggle: string;
  enter?: string;
  exit?: string;
  isIn: boolean;
  onToggle: () => void;
  onEnter?: () => void;
  onExit?: () => void;
};

export function StaggerControls({
  toggle,
  enter,
  exit,
  isIn,
  onToggle,
  onEnter,
  onExit,
}: StaggerControlsProps) {
  return (
    <div className="stagger-group-demo__controls">
      <Button size="sm" variant="secondary" onClick={onToggle}>
        {toggle}
      </Button>
      {onEnter && enter ? (
        <Button size="sm" variant="secondary" disabled={isIn} onClick={onEnter}>
          {enter}
        </Button>
      ) : null}
      {onExit && exit ? (
        <Button size="sm" variant="secondary" disabled={!isIn} onClick={onExit}>
          {exit}
        </Button>
      ) : null}
    </div>
  );
}
