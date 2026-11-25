import { useTilt3D } from "@gem-org/gemffects/tilt-3d";
import { cx } from "@gem-org/gemffects/utils";
import { TiltTile } from "./TiltTile.tsx";
import "./tilt-3d-demo.css";

type HookTilt3DProps = {
  /** Uses `{rx}` and `{ry}` as placeholders. */
  pose: string;
};

export function HookTilt3D({ pose: poseLabel }: HookTilt3DProps) {
  const { ref, style, pointerProps, pose, glare, isTracking, tiltOff, isPaused, motionClassName } =
    useTilt3D({
      intensity: "lg",
    });

  return (
    <TiltTile>
      <div
        ref={ref}
        style={style}
        {...pointerProps}
        className={cx(
          "gemfx-tilt3d",
          isTracking && "gemfx-tilt3d--tracking",
          isPaused && "gemfx-tilt3d--paused",
          tiltOff && "gemfx-tilt3d--inactive",
          motionClassName,
          "tilt-demo__host",
        )}
      >
        <div className="gemfx-tilt3d__surface">
          <span className="tilt-demo__target">
            {poseLabel.replace("{rx}", pose.rx.toFixed(1)).replace("{ry}", pose.ry.toFixed(1))}
          </span>
        </div>
        {glare ? <span className="gemfx-tilt3d__glare" aria-hidden /> : null}
      </div>
    </TiltTile>
  );
}
