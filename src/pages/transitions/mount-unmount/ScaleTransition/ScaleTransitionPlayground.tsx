import { useState } from "react";
import { Button, Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { ScaleTransition } from "@gem-org/gemsitions/scale-transition";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import {
  SCALE_DELAYS,
  SCALE_DURATIONS,
  SCALE_EASINGS,
  SCALE_FACTORS,
  SCALE_ORIGINS,
} from "./examples/demo.ts";
import "./examples/scale-transition-demo.css";

const BOOLEAN_OPTIONS = ["true", "false"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function ScaleTransitionPlayground() {
  const { t } = useTranslation("scaleTransition");
  const [isIn, setIsIn] = useState(true);
  const [scale, setScale] = useState<(typeof SCALE_FACTORS)[number]>("0.92");
  const [origin, setOrigin] = useState<(typeof SCALE_ORIGINS)[number]>("center");
  const [duration, setDuration] = useState<(typeof SCALE_DURATIONS)[number]>("300");
  const [delay, setDelay] = useState<(typeof SCALE_DELAYS)[number]>("0");
  const [easing, setEasing] = useState<(typeof SCALE_EASINGS)[number]>("standard");
  const [preserveSpace, setPreserveSpace] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [keepMounted, setKeepMounted] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [isDisabled, setIsDisabled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const attrs = [
    `isIn={${isIn}}`,
    scale !== "0.92" && `scale={${scale}}`,
    origin !== "center" && `origin="${origin}"`,
    duration !== "300" && `duration={${duration}}`,
    delay !== "0" && `delay={${delay}}`,
    easing !== "standard" && `easing="${easing}"`,
    preserveSpace === "true" && "preserveSpace",
    keepMounted === "true" && "keepMounted",
    isDisabled === "true" && "isDisabled",
  ].filter(Boolean);

  const code = `import { ScaleTransition } from "@gem-org/gemsitions/scale-transition";

<ScaleTransition
  ${attrs.join("\n  ")}
>
  …
</ScaleTransition>`;

  const selects = [
    { id: "scale", value: scale, options: SCALE_FACTORS, onChange: pick(SCALE_FACTORS, setScale) },
    {
      id: "origin",
      value: origin,
      options: SCALE_ORIGINS,
      onChange: pick(SCALE_ORIGINS, setOrigin),
    },
    {
      id: "duration",
      value: duration,
      options: SCALE_DURATIONS,
      onChange: pick(SCALE_DURATIONS, setDuration),
    },
    { id: "delay", value: delay, options: SCALE_DELAYS, onChange: pick(SCALE_DELAYS, setDelay) },
    {
      id: "easing",
      value: easing,
      options: SCALE_EASINGS,
      onChange: pick(SCALE_EASINGS, setEasing),
    },
    {
      id: "preserveSpace",
      value: preserveSpace,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setPreserveSpace),
    },
    {
      id: "keepMounted",
      value: keepMounted,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setKeepMounted),
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
      <div className="scale-transition-playground">
        {selects.map((select) => (
          <div key={select.id} className="scale-transition-playground__field">
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
        <div className="scale-demo scale-demo--wide">
          <div className="scale-demo__controls">
            <Button
              size="sm"
              variant="secondary"
              aria-pressed={isIn}
              onClick={() => setIsIn((value) => !value)}
            >
              {isIn ? t("playground.scaleOut") : t("playground.scaleIn")}
            </Button>
          </div>
          <div className="scale-demo__stage scale-demo__stage--roomy" data-origin={origin}>
            <ScaleTransition
              isIn={isIn}
              scale={Number(scale)}
              origin={origin}
              duration={Number(duration)}
              delay={Number(delay)}
              easing={easing}
              preserveSpace={preserveSpace === "true"}
              keepMounted={keepMounted === "true"}
              isDisabled={isDisabled === "true"}
            >
              <div className="scale-demo__panel scale-demo__panel--large">
                {t("playground.label")}
              </div>
            </ScaleTransition>
          </div>
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
