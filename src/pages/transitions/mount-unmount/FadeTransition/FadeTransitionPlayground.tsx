import { useState } from "react";
import { Button, Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { FadeTransition } from "@gem-org/gemsitions/fade-transition";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { FADE_DELAYS, FADE_DURATIONS, FADE_EASINGS } from "./examples/demo.ts";
import "./examples/fade-transition-demo.css";

const BOOLEAN_OPTIONS = ["true", "false"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function FadeTransitionPlayground() {
  const { t } = useTranslation("fadeTransition");
  const [isIn, setIsIn] = useState(true);
  const [duration, setDuration] = useState<(typeof FADE_DURATIONS)[number]>("300");
  const [delay, setDelay] = useState<(typeof FADE_DELAYS)[number]>("0");
  const [easing, setEasing] = useState<(typeof FADE_EASINGS)[number]>("standard");
  const [keepMounted, setKeepMounted] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [isDisabled, setIsDisabled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const attrs = [
    `isIn={${isIn}}`,
    duration !== "300" && `duration={${duration}}`,
    delay !== "0" && `delay={${delay}}`,
    easing !== "standard" && `easing="${easing}"`,
    keepMounted === "true" && "keepMounted",
    isDisabled === "true" && "isDisabled",
  ].filter(Boolean);

  const code = `import { FadeTransition } from "@gem-org/gemsitions/fade-transition";

<FadeTransition
  ${attrs.join("\n  ")}
>
  …
</FadeTransition>`;

  const selects = [
    {
      id: "duration",
      value: duration,
      options: FADE_DURATIONS,
      onChange: pick(FADE_DURATIONS, setDuration),
    },
    { id: "delay", value: delay, options: FADE_DELAYS, onChange: pick(FADE_DELAYS, setDelay) },
    { id: "easing", value: easing, options: FADE_EASINGS, onChange: pick(FADE_EASINGS, setEasing) },
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
      <div className="fade-transition-playground">
        {selects.map((select) => (
          <div key={select.id} className="fade-transition-playground__field">
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
        <div className="fade-demo">
          <div className="fade-demo__controls">
            <Button
              size="sm"
              variant="secondary"
              aria-pressed={isIn}
              onClick={() => setIsIn((value) => !value)}
            >
              {isIn ? t("playground.fadeOut") : t("playground.fadeIn")}
            </Button>
          </div>
          <div className="fade-demo__stage">
            <FadeTransition
              isIn={isIn}
              duration={Number(duration)}
              delay={Number(delay)}
              easing={easing}
              keepMounted={keepMounted === "true"}
              isDisabled={isDisabled === "true"}
            >
              <div className="fade-demo__panel">{t("playground.label")}</div>
            </FadeTransition>
          </div>
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
