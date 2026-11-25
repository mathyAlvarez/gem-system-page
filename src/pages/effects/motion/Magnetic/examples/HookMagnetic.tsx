import { useMagnetic } from "@gem-org/gemffects/magnetic";
import { cx } from "@gem-org/gemffects/utils";
import { MagneticTile } from "./MagneticTile.tsx";
import "./magnetic-demo.css";

type HookMagneticProps = {
  /** Uses `{x}` and `{y}` as placeholders. */
  position: string;
};

export function HookMagnetic({ position }: HookMagneticProps) {
  const { ref, style, pointerProps, pose, isTracking, magneticOff, isPaused, motionClassName } =
    useMagnetic({
      intensity: "lg",
    });

  return (
    <MagneticTile>
      <div
        ref={ref}
        style={style}
        {...pointerProps}
        className={cx(
          "gemfx-magnetic",
          isTracking && "gemfx-magnetic--tracking",
          isPaused && "gemfx-magnetic--paused",
          magneticOff && "gemfx-magnetic--inactive",
          motionClassName,
          "magnetic-demo__host",
        )}
      >
        <div className="gemfx-magnetic__surface">
          <span className="magnetic-demo__target">
            {position.replace("{x}", pose.x.toFixed(0)).replace("{y}", pose.y.toFixed(0))}
          </span>
        </div>
      </div>
    </MagneticTile>
  );
}
