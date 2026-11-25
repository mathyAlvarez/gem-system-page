import { useState } from "react";
import { Button, Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { AnimatedNumber } from "@gem-org/gemsitions/animated-number";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import {
  NUMBER_DELAYS,
  NUMBER_DURATIONS,
  NUMBER_EASINGS,
  NUMBER_EFFECTS,
  NUMBER_FORMATS,
  NUMBER_ROUNDS,
  shiftBy,
} from "./examples/demo.ts";
import { NumberPanel } from "./examples/NumberPanel.tsx";

const BOOLEAN_OPTIONS = ["true", "false"] as const;
const TREND_OPTIONS = ["none", "colors"] as const;
const FORMAT_OPTIONS = Object.keys(NUMBER_FORMATS) as (keyof typeof NUMBER_FORMATS)[];
const INITIAL = 1280;
const STEP = 240;

const trendClasses = {
  up: "animated-number-demo__trend-up",
  down: "animated-number-demo__trend-down",
};

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

const formatCode = (options: Intl.NumberFormatOptions) =>
  `{ ${Object.entries(options)
    .map(([key, value]) => `${key}: ${typeof value === "string" ? `"${value}"` : value}`)
    .join(", ")} }`;

export function AnimatedNumberPlayground() {
  const { t } = useTranslation("animatedNumber");
  const [value, setValue] = useState(INITIAL);
  const [effect, setEffect] = useState<(typeof NUMBER_EFFECTS)[number]>("count");
  const [duration, setDuration] = useState<(typeof NUMBER_DURATIONS)[number]>("500");
  const [delay, setDelay] = useState<(typeof NUMBER_DELAYS)[number]>("0");
  const [easing, setEasing] = useState<(typeof NUMBER_EASINGS)[number]>("default");
  const [format, setFormat] = useState<(typeof FORMAT_OPTIONS)[number]>("plain");
  const [round, setRound] = useState<(typeof NUMBER_ROUNDS)[number]>("auto");
  const [trend, setTrend] = useState<(typeof TREND_OPTIONS)[number]>("none");
  const [isDisabled, setIsDisabled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const formatOptions = NUMBER_FORMATS[format];

  const attrs = [
    `value={${value}}`,
    effect !== "count" && `effect="${effect}"`,
    duration !== "500" && `duration={${duration}}`,
    delay !== "0" && `delay={${delay}}`,
    easing !== "default" && `easing="${easing}"`,
    formatOptions != null && `locales="en-US"`,
    formatOptions != null && `formatOptions={${formatCode(formatOptions)}}`,
    round !== "auto" && `round={${round}}`,
    trend === "colors" && `trendClassName={{ up: "trend-up", down: "trend-down" }}`,
    isDisabled === "true" && "isDisabled",
  ].filter(Boolean);

  const code = `import { AnimatedNumber } from "@gem-org/gemsitions/animated-number";

<AnimatedNumber
  ${attrs.join("\n  ")}
/>`;

  const selects = [
    {
      id: "effect",
      value: effect,
      options: NUMBER_EFFECTS,
      onChange: pick(NUMBER_EFFECTS, setEffect),
    },
    {
      id: "duration",
      value: duration,
      options: NUMBER_DURATIONS,
      onChange: pick(NUMBER_DURATIONS, setDuration),
    },
    { id: "delay", value: delay, options: NUMBER_DELAYS, onChange: pick(NUMBER_DELAYS, setDelay) },
    {
      id: "easing",
      value: easing,
      options: NUMBER_EASINGS,
      onChange: pick(NUMBER_EASINGS, setEasing),
    },
    {
      id: "formatOptions",
      value: format,
      options: FORMAT_OPTIONS,
      onChange: pick(FORMAT_OPTIONS, setFormat),
    },
    { id: "round", value: round, options: NUMBER_ROUNDS, onChange: pick(NUMBER_ROUNDS, setRound) },
    {
      id: "trendClassName",
      value: trend,
      options: TREND_OPTIONS,
      onChange: pick(TREND_OPTIONS, setTrend),
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
      <div className="animated-number-playground">
        {selects.map((select) => (
          <div key={select.id} className="animated-number-playground__field">
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
        <div className="animated-number-demo">
          <div className="animated-number-demo__controls">
            <Button
              size="sm"
              variant="secondary"
              onClick={() => setValue((current) => shiftBy(current, STEP))}
            >
              {t("playground.increase")}
            </Button>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => setValue((current) => shiftBy(current, -STEP))}
            >
              {t("playground.decrease")}
            </Button>
            <Button size="sm" variant="transparent" onClick={() => setValue(INITIAL)}>
              {t("playground.reset")}
            </Button>
          </div>
          <NumberPanel label={t("playground.label")}>
            <AnimatedNumber
              value={value}
              effect={effect}
              duration={Number(duration)}
              delay={Number(delay)}
              easing={easing === "default" ? undefined : easing}
              locales={formatOptions != null ? "en-US" : undefined}
              formatOptions={formatOptions}
              round={round === "auto" ? undefined : Number(round)}
              trendClassName={trend === "colors" ? trendClasses : undefined}
              isDisabled={isDisabled === "true"}
            />
          </NumberPanel>
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
