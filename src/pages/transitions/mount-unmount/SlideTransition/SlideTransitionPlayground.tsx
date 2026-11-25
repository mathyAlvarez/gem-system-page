import { useState } from "react";
import { Button, Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { SlideTransition } from "@gem-org/gemsitions/slide-transition";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import {
  SLIDE_DELAYS,
  SLIDE_DURATIONS,
  SLIDE_EASINGS,
  SLIDE_EDGES,
  SLIDE_OFFSETS,
} from "./examples/demo.ts";
import "./examples/slide-transition-demo.css";

const BOOLEAN_OPTIONS = ["true", "false"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function SlideTransitionPlayground() {
  const { t } = useTranslation("slideTransition");
  const [isIn, setIsIn] = useState(true);
  const [from, setFrom] = useState<(typeof SLIDE_EDGES)[number]>("bottom");
  const [fade, setFade] = useState<(typeof BOOLEAN_OPTIONS)[number]>("true");
  const [offset, setOffset] = useState<(typeof SLIDE_OFFSETS)[number]>("1.25rem");
  const [duration, setDuration] = useState<(typeof SLIDE_DURATIONS)[number]>("300");
  const [delay, setDelay] = useState<(typeof SLIDE_DELAYS)[number]>("0");
  const [easing, setEasing] = useState<(typeof SLIDE_EASINGS)[number]>("standard");
  const [keepMounted, setKeepMounted] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [isDisabled, setIsDisabled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const attrs = [
    `isIn={${isIn}}`,
    from !== "bottom" && `from="${from}"`,
    fade === "false" && "fade={false}",
    offset !== "1rem" && `offset="${offset}"`,
    duration !== "300" && `duration={${duration}}`,
    delay !== "0" && `delay={${delay}}`,
    easing !== "standard" && `easing="${easing}"`,
    keepMounted === "true" && "keepMounted",
    isDisabled === "true" && "isDisabled",
  ].filter(Boolean);

  const code = `import { SlideTransition } from "@gem-org/gemsitions/slide-transition";

<SlideTransition
  ${attrs.join("\n  ")}
>
  …
</SlideTransition>`;

  const selects = [
    { id: "from", value: from, options: SLIDE_EDGES, onChange: pick(SLIDE_EDGES, setFrom) },
    { id: "fade", value: fade, options: BOOLEAN_OPTIONS, onChange: pick(BOOLEAN_OPTIONS, setFade) },
    {
      id: "offset",
      value: offset,
      options: SLIDE_OFFSETS,
      onChange: pick(SLIDE_OFFSETS, setOffset),
    },
    {
      id: "duration",
      value: duration,
      options: SLIDE_DURATIONS,
      onChange: pick(SLIDE_DURATIONS, setDuration),
    },
    { id: "delay", value: delay, options: SLIDE_DELAYS, onChange: pick(SLIDE_DELAYS, setDelay) },
    {
      id: "easing",
      value: easing,
      options: SLIDE_EASINGS,
      onChange: pick(SLIDE_EASINGS, setEasing),
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
      <div className="slide-transition-playground">
        {selects.map((select) => (
          <div key={select.id} className="slide-transition-playground__field">
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
        <div className="slide-demo slide-demo--wide">
          <div className="slide-demo__controls">
            <Button
              size="sm"
              variant="secondary"
              aria-pressed={isIn}
              onClick={() => setIsIn((value) => !value)}
            >
              {isIn ? t("playground.slideOut") : t("playground.slideIn")}
            </Button>
          </div>
          <div className="slide-demo__stage slide-demo__stage--roomy" data-from={from}>
            <SlideTransition
              isIn={isIn}
              from={from}
              fade={fade === "true"}
              offset={offset}
              duration={Number(duration)}
              delay={Number(delay)}
              easing={easing}
              keepMounted={keepMounted === "true"}
              isDisabled={isDisabled === "true"}
            >
              <div className="slide-demo__panel slide-demo__panel--large">
                {t("playground.label")}
              </div>
            </SlideTransition>
          </div>
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
