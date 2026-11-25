import { useSpotlight } from "@gem-org/gemffects/spotlight";
import { cx } from "@gem-org/gemffects/utils";
import { SpotlightTile } from "./SpotlightTile.tsx";
import "./spotlight-demo.css";

type HookSpotlightProps = {
  title: string;
  /** Uses `{x}` and `{y}` as placeholders. */
  position: string;
};

export function HookSpotlight({ title, position }: HookSpotlightProps) {
  const { ref, style, pointerProps, pose, variant, isTracking, spotlightOff, motionClassName } =
    useSpotlight({
      variant: "ring",
      intensity: "lg",
    });

  return (
    <SpotlightTile>
      <div
        ref={ref}
        style={style}
        {...pointerProps}
        className={cx(
          "gemfx-spotlight",
          `gemfx-spotlight--${variant}`,
          isTracking && "gemfx-spotlight--tracking",
          spotlightOff && "gemfx-spotlight--inactive",
          motionClassName,
          "spotlight-demo__host",
        )}
      >
        <div className="gemfx-spotlight__surface">
          <div className="spotlight-demo__tile">
            <p className="spotlight-demo__kicker">
              {position.replace("{x}", pose.x.toFixed(0)).replace("{y}", pose.y.toFixed(0))}
            </p>
            <p className="spotlight-demo__title">{title}</p>
          </div>
        </div>
        <span className="gemfx-spotlight__layer" aria-hidden>
          <span className="gemfx-spotlight__beam" />
        </span>
      </div>
    </SpotlightTile>
  );
}
