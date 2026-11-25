import { Button } from "@gem-org/gem-system";

export type SwipeControlsProps = {
  restore: string;
  dismiss?: string;
  isIn: boolean;
  onRestore: () => void;
  onDismiss?: () => void;
};

export function SwipeControls({
  restore,
  dismiss,
  isIn,
  onRestore,
  onDismiss,
}: SwipeControlsProps) {
  return (
    <div className="swipe-to-dismiss-demo__controls">
      <Button size="sm" variant="secondary" disabled={isIn} onClick={onRestore}>
        {restore}
      </Button>
      {onDismiss && dismiss ? (
        <Button size="sm" variant="secondary" disabled={!isIn} onClick={onDismiss}>
          {dismiss}
        </Button>
      ) : null}
    </div>
  );
}
