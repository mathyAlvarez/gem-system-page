import { useState } from "react";
import { Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { SwipeToDismiss } from "@gem-org/gemsitions/swipe-to-dismiss";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import {
  SWIPE_DELAYS,
  SWIPE_DIRECTIONS,
  SWIPE_DISMISS_DIRECTIONS,
  SWIPE_DURATIONS,
  SWIPE_EASINGS,
  SWIPE_THRESHOLDS,
  SWIPE_VELOCITY_THRESHOLDS,
} from "./examples/demo.ts";
import { SwipeControls } from "./examples/SwipeControls.tsx";
import "./examples/swipe-to-dismiss-demo.css";

const BOOLEAN_OPTIONS = ["true", "false"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function SwipeToDismissPlayground() {
  const { t } = useTranslation("swipeToDismiss");
  const [isIn, setIsIn] = useState(true);
  const [direction, setDirection] = useState<(typeof SWIPE_DIRECTIONS)[number]>("horizontal");
  const [dismissDirection, setDismissDirection] =
    useState<(typeof SWIPE_DISMISS_DIRECTIONS)[number]>("both");
  const [threshold, setThreshold] = useState<(typeof SWIPE_THRESHOLDS)[number]>("0.35");
  const [velocityThreshold, setVelocityThreshold] =
    useState<(typeof SWIPE_VELOCITY_THRESHOLDS)[number]>("0.5");
  const [duration, setDuration] = useState<(typeof SWIPE_DURATIONS)[number]>("300");
  const [delay, setDelay] = useState<(typeof SWIPE_DELAYS)[number]>("0");
  const [easing, setEasing] = useState<(typeof SWIPE_EASINGS)[number]>("exit");
  const [rubberband, setRubberband] = useState<(typeof BOOLEAN_OPTIONS)[number]>("true");
  const [markSelected, setMarkSelected] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [isDisabled, setIsDisabled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const attrs = [
    `isIn={${isIn}}`,
    direction !== "horizontal" && `direction="${direction}"`,
    dismissDirection !== "both" && `dismissDirection="${dismissDirection}"`,
    threshold !== "0.35" && `threshold={${threshold}}`,
    velocityThreshold !== "0.5" && `velocityThreshold={${velocityThreshold}}`,
    duration !== "300" && `duration={${duration}}`,
    delay !== "0" && `delay={${delay}}`,
    easing !== "exit" && `easing="${easing}"`,
    rubberband === "false" && "rubberband={false}",
    markSelected === "true" && "markSelected",
    isDisabled === "true" && "isDisabled",
  ].filter(Boolean);

  const code = `import { SwipeToDismiss } from "@gem-org/gemsitions/swipe-to-dismiss";

<SwipeToDismiss
  ${attrs.join("\n  ")}
  onDismiss={() => setIsIn(false)}
>
  …
</SwipeToDismiss>`;

  const selects = [
    {
      id: "direction",
      value: direction,
      options: SWIPE_DIRECTIONS,
      onChange: pick(SWIPE_DIRECTIONS, setDirection),
    },
    {
      id: "dismissDirection",
      value: dismissDirection,
      options: SWIPE_DISMISS_DIRECTIONS,
      onChange: pick(SWIPE_DISMISS_DIRECTIONS, setDismissDirection),
    },
    {
      id: "threshold",
      value: threshold,
      options: SWIPE_THRESHOLDS,
      onChange: pick(SWIPE_THRESHOLDS, setThreshold),
    },
    {
      id: "velocityThreshold",
      value: velocityThreshold,
      options: SWIPE_VELOCITY_THRESHOLDS,
      onChange: pick(SWIPE_VELOCITY_THRESHOLDS, setVelocityThreshold),
    },
    {
      id: "duration",
      value: duration,
      options: SWIPE_DURATIONS,
      onChange: pick(SWIPE_DURATIONS, setDuration),
    },
    { id: "delay", value: delay, options: SWIPE_DELAYS, onChange: pick(SWIPE_DELAYS, setDelay) },
    {
      id: "easing",
      value: easing,
      options: SWIPE_EASINGS,
      onChange: pick(SWIPE_EASINGS, setEasing),
    },
    {
      id: "rubberband",
      value: rubberband,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setRubberband),
    },
    {
      id: "markSelected",
      value: markSelected,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setMarkSelected),
    },
    {
      id: "isDisabled",
      value: isDisabled,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setIsDisabled),
    },
  ];

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="swipe-to-dismiss-playground">
        {selects.map((select) => (
          <div key={select.id} className="swipe-to-dismiss-playground__field">
            <Typography variant="label">{select.id}</Typography>
            <Select
              aria-label={select.id}
              options={toOptions(select.options)}
              value={select.value}
              onChange={select.onChange}
              searchable={false}
            />
          </div>
        ))}
      </div>

      <DemoBlock code={code} label="Example.tsx" stack>
        <div className="swipe-to-dismiss-demo">
          <SwipeControls
            restore={t("playground.restore")}
            dismiss={t("playground.dismiss")}
            isIn={isIn}
            onRestore={() => setIsIn(true)}
            onDismiss={() => setIsIn(false)}
          />
          <div className="swipe-to-dismiss-demo__stage">
            <SwipeToDismiss
              isIn={isIn}
              direction={direction}
              dismissDirection={dismissDirection}
              threshold={Number(threshold)}
              velocityThreshold={Number(velocityThreshold)}
              duration={Number(duration)}
              delay={Number(delay)}
              easing={easing}
              rubberband={rubberband === "true"}
              markSelected={markSelected === "true"}
              isDisabled={isDisabled === "true"}
              onDismiss={() => setIsIn(false)}
            >
              <div className="swipe-to-dismiss-demo__panel">
                {t("playground.panelTitle")}
                <span className="swipe-to-dismiss-demo__copy">{t("playground.panelCopy")}</span>
              </div>
            </SwipeToDismiss>
          </div>
          <p className="swipe-to-dismiss-demo__sibling">{t("playground.sibling")}</p>
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
