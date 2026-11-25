import { useState } from "react";
import { Button, Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { TextMorph } from "@gem-org/gemsitions/text-morph";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import {
  TEXT_MORPH_DELAYS,
  TEXT_MORPH_DURATIONS,
  TEXT_MORPH_EASINGS,
  TEXT_MORPH_EFFECTS,
  TEXT_MORPH_SPLIT_BY,
  TEXT_MORPH_STAGGERS,
  TEXT_MORPH_TITLES,
} from "./examples/demo.ts";
import { MorphPanel } from "./examples/MorphPanel.tsx";

const BOOLEAN_OPTIONS = ["true", "false"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function TextMorphPlayground() {
  const { t } = useTranslation("textMorph");
  const [title, setTitle] = useState<(typeof TEXT_MORPH_TITLES)[number]>(TEXT_MORPH_TITLES[0]);
  const [effect, setEffect] = useState<(typeof TEXT_MORPH_EFFECTS)[number]>("up");
  const [splitBy, setSplitBy] = useState<(typeof TEXT_MORPH_SPLIT_BY)[number]>("words");
  const [duration, setDuration] = useState<(typeof TEXT_MORPH_DURATIONS)[number]>("300");
  const [delay, setDelay] = useState<(typeof TEXT_MORPH_DELAYS)[number]>("0");
  const [easing, setEasing] = useState<(typeof TEXT_MORPH_EASINGS)[number]>("default");
  const [staggerDelay, setStaggerDelay] = useState<(typeof TEXT_MORPH_STAGGERS)[number]>("0");
  const [isDisabled, setIsDisabled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [unmountOnExit, setUnmountOnExit] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const attrs = [
    `value="${title}"`,
    effect !== "up" && `effect="${effect}"`,
    splitBy !== "words" && `splitBy="${splitBy}"`,
    duration !== "300" && `duration={${duration}}`,
    delay !== "0" && `delay={${delay}}`,
    easing !== "default" && `easing="${easing}"`,
    staggerDelay !== "0" && `staggerDelay={${staggerDelay}}`,
    isDisabled === "true" && "isDisabled",
    unmountOnExit === "true" && "unmountOnExit",
  ].filter(Boolean);

  const code = `import { TextMorph } from "@gem-org/gemsitions/text-morph";

<TextMorph
  ${attrs.join("\n  ")}
/>`;

  const selects = [
    {
      id: "effect",
      value: effect,
      options: TEXT_MORPH_EFFECTS,
      onChange: pick(TEXT_MORPH_EFFECTS, setEffect),
    },
    {
      id: "splitBy",
      value: splitBy,
      options: TEXT_MORPH_SPLIT_BY,
      onChange: pick(TEXT_MORPH_SPLIT_BY, setSplitBy),
    },
    {
      id: "duration",
      value: duration,
      options: TEXT_MORPH_DURATIONS,
      onChange: pick(TEXT_MORPH_DURATIONS, setDuration),
    },
    {
      id: "delay",
      value: delay,
      options: TEXT_MORPH_DELAYS,
      onChange: pick(TEXT_MORPH_DELAYS, setDelay),
    },
    {
      id: "easing",
      value: easing,
      options: TEXT_MORPH_EASINGS,
      onChange: pick(TEXT_MORPH_EASINGS, setEasing),
    },
    {
      id: "staggerDelay",
      value: staggerDelay,
      options: TEXT_MORPH_STAGGERS,
      onChange: pick(TEXT_MORPH_STAGGERS, setStaggerDelay),
    },
    {
      id: "isDisabled",
      value: isDisabled,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setIsDisabled),
    },
    {
      id: "unmountOnExit",
      value: unmountOnExit,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setUnmountOnExit),
    },
  ];

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="text-morph-playground">
        {selects.map((select) => (
          <div key={select.id} className="text-morph-playground__field">
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
        <div className="text-morph-demo">
          <div
            className="text-morph-demo__controls"
            role="group"
            aria-label={t("playground.label")}
          >
            {TEXT_MORPH_TITLES.map((item) => (
              <Button
                key={item}
                size="sm"
                variant={title === item ? "primary" : "secondary"}
                aria-pressed={title === item}
                onClick={() => setTitle(item)}
              >
                {item}
              </Button>
            ))}
          </div>
          <MorphPanel label={t("playground.label")}>
            <TextMorph
              value={title}
              effect={effect}
              splitBy={splitBy}
              duration={Number(duration)}
              delay={Number(delay)}
              easing={easing === "default" ? undefined : easing}
              staggerDelay={Number(staggerDelay)}
              isDisabled={isDisabled === "true"}
              unmountOnExit={unmountOnExit === "true"}
            />
          </MorphPanel>
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
