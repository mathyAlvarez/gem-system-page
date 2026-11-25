import { useState } from "react";
import { Button, Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { AutoAnimateContainer } from "@gem-org/gemsitions/auto-animate-container";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import {
  AUTO_ANIMATE_AXES,
  AUTO_ANIMATE_DELAYS,
  AUTO_ANIMATE_DURATIONS,
  AUTO_ANIMATE_EASINGS,
  AUTO_ANIMATE_OVERFLOWS,
} from "./examples/demo.ts";

const BOOLEAN_OPTIONS = ["true", "false"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function AutoAnimateContainerPlayground() {
  const { t } = useTranslation("autoAnimateContainer");
  const [expanded, setExpanded] = useState(false);
  const [axis, setAxis] = useState<(typeof AUTO_ANIMATE_AXES)[number]>("height");
  const [overflow, setOverflow] = useState<(typeof AUTO_ANIMATE_OVERFLOWS)[number]>("hidden");
  const [duration, setDuration] = useState<(typeof AUTO_ANIMATE_DURATIONS)[number]>("300");
  const [delay, setDelay] = useState<(typeof AUTO_ANIMATE_DELAYS)[number]>("0");
  const [easing, setEasing] = useState<(typeof AUTO_ANIMATE_EASINGS)[number]>("standard");
  const [animateOpacity, setAnimateOpacity] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [isDisabled, setIsDisabled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const attrs = [
    axis !== "height" && `axis="${axis}"`,
    overflow !== "hidden" && `overflow="${overflow}"`,
    duration !== "300" && `duration={${duration}}`,
    delay !== "0" && `delay={${delay}}`,
    easing !== "standard" && `easing="${easing}"`,
    animateOpacity === "true" && "animateOpacity",
    isDisabled === "true" && "isDisabled",
  ].filter(Boolean);

  const code = `import { AutoAnimateContainer } from "@gem-org/gemsitions/auto-animate-container";

<AutoAnimateContainer
  ${attrs.length > 0 ? `${attrs.join("\n  ")}\n` : ""}>
  …
</AutoAnimateContainer>`;

  const selects = [
    {
      id: "axis",
      value: axis,
      options: AUTO_ANIMATE_AXES,
      onChange: pick(AUTO_ANIMATE_AXES, setAxis),
    },
    {
      id: "overflow",
      value: overflow,
      options: AUTO_ANIMATE_OVERFLOWS,
      onChange: pick(AUTO_ANIMATE_OVERFLOWS, setOverflow),
    },
    {
      id: "duration",
      value: duration,
      options: AUTO_ANIMATE_DURATIONS,
      onChange: pick(AUTO_ANIMATE_DURATIONS, setDuration),
    },
    {
      id: "delay",
      value: delay,
      options: AUTO_ANIMATE_DELAYS,
      onChange: pick(AUTO_ANIMATE_DELAYS, setDelay),
    },
    {
      id: "easing",
      value: easing,
      options: AUTO_ANIMATE_EASINGS,
      onChange: pick(AUTO_ANIMATE_EASINGS, setEasing),
    },
    {
      id: "animateOpacity",
      value: animateOpacity,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setAnimateOpacity),
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
      <div className="auto-animate-container-playground">
        {selects.map((select) => (
          <div key={select.id} className="auto-animate-container-playground__field">
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
        <div className="auto-animate-demo">
          <div className="auto-animate-demo__controls">
            <Button
              size="sm"
              variant="secondary"
              aria-pressed={expanded}
              onClick={() => setExpanded((value) => !value)}
            >
              {expanded ? t("playground.showLess") : t("playground.showMore")}
            </Button>
          </div>
          <div className="auto-animate-demo__stage">
            <AutoAnimateContainer
              axis={axis}
              overflow={overflow}
              duration={Number(duration)}
              delay={Number(delay)}
              easing={easing}
              animateOpacity={animateOpacity === "true"}
              isDisabled={isDisabled === "true"}
            >
              <div className="auto-animate-demo__panel">
                {expanded ? (
                  <>
                    <p>{t("playground.longFirst")}</p>
                    <p>{t("playground.longSecond")}</p>
                  </>
                ) : (
                  <p>{t("playground.short")}</p>
                )}
              </div>
            </AutoAnimateContainer>
          </div>
          <p className="auto-animate-demo__sibling">{t("playground.sibling")}</p>
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
