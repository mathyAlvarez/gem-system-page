import { useState } from "react";
import { Button, Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { PushStack } from "@gem-org/gemsitions/push-stack";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import {
  PUSH_STACK_AXES,
  PUSH_STACK_DELAYS,
  PUSH_STACK_DURATIONS,
  PUSH_STACK_EASINGS,
  PUSH_STACK_MODES,
  PUSH_STACK_PAGINATION,
  PUSH_STACK_STEPS,
} from "./examples/demo.ts";
import "./examples/push-stack-demo.css";

const BOOLEAN_OPTIONS = ["true", "false"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function PushStackPlayground() {
  const { t } = useTranslation("pushStack");
  const [step, setStep] = useState(0);
  const [axis, setAxis] = useState<(typeof PUSH_STACK_AXES)[number]>("x");
  const [mode, setMode] = useState<(typeof PUSH_STACK_MODES)[number]>("sync");
  const [keepState, setKeepState] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [duration, setDuration] = useState<(typeof PUSH_STACK_DURATIONS)[number]>("320");
  const [delay, setDelay] = useState<(typeof PUSH_STACK_DELAYS)[number]>("0");
  const [easing, setEasing] = useState<(typeof PUSH_STACK_EASINGS)[number]>("enter");
  const [isDisabled, setIsDisabled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [pagination, setPagination] = useState<(typeof PUSH_STACK_PAGINATION)[number]>("3");
  const [swipe, setSwipe] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const last = PUSH_STACK_STEPS.length - 1;
  const label = PUSH_STACK_STEPS[Math.min(Math.max(step, 0), last)];
  const copies = t("playground.copies", { returnObjects: true }) as Record<
    (typeof PUSH_STACK_STEPS)[number],
    string
  >;

  const paginationProp =
    pagination === "none"
      ? undefined
      : pagination === "inside-end" || pagination === "inside-start"
        ? { count: 3, placement: pagination }
        : Number(pagination);

  const attrs = [
    `index={${step}}`,
    `viewKey="${label}"`,
    axis !== "x" && `axis="${axis}"`,
    mode !== "sync" && `mode="${mode}"`,
    keepState === "true" && "keepState",
    duration !== "300" && `duration={${duration}}`,
    delay !== "0" && `delay={${delay}}`,
    easing !== "standard" && `easing="${easing}"`,
    isDisabled === "true" && "isDisabled",
    pagination === "3" && "pagination={3}",
    pagination === "inside-end" && 'pagination={{ count: 3, placement: "inside-end" }}',
    pagination === "inside-start" && 'pagination={{ count: 3, placement: "inside-start" }}',
    swipe === "true" && "swipe",
  ].filter(Boolean);

  const code = `import { PushStack } from "@gem-org/gemsitions/push-stack";

<PushStack
  ${attrs.join("\n  ")}
  onPagination={(page) => setStep(page)}
>
  …
</PushStack>`;

  const selects = [
    { id: "axis", value: axis, options: PUSH_STACK_AXES, onChange: pick(PUSH_STACK_AXES, setAxis) },
    {
      id: "mode",
      value: mode,
      options: PUSH_STACK_MODES,
      onChange: pick(PUSH_STACK_MODES, setMode),
    },
    {
      id: "keepState",
      value: keepState,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setKeepState),
    },
    {
      id: "duration",
      value: duration,
      options: PUSH_STACK_DURATIONS,
      onChange: pick(PUSH_STACK_DURATIONS, setDuration),
    },
    {
      id: "delay",
      value: delay,
      options: PUSH_STACK_DELAYS,
      onChange: pick(PUSH_STACK_DELAYS, setDelay),
    },
    {
      id: "easing",
      value: easing,
      options: PUSH_STACK_EASINGS,
      onChange: pick(PUSH_STACK_EASINGS, setEasing),
    },
    {
      id: "pagination",
      value: pagination,
      options: PUSH_STACK_PAGINATION,
      onChange: (value: SelectValue) => {
        pick(PUSH_STACK_PAGINATION, setPagination)(value);
        setStep(0);
      },
    },
    {
      id: "swipe",
      value: swipe,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setSwipe),
    },
    {
      id: "isDisabled",
      value: isDisabled,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setIsDisabled),
    },
  ];

  const panelClass =
    pagination === "inside-end"
      ? "push-stack-demo__panel push-stack-demo__panel--overlay"
      : pagination === "inside-start"
        ? "push-stack-demo__panel push-stack-demo__panel--overlay-start"
        : "push-stack-demo__panel";

  const views =
    swipe === "true"
      ? PUSH_STACK_STEPS.map((item) => (
          <div key={item} className={panelClass}>
            {item}
            <span className="push-stack-demo__copy">{copies[item]}</span>
          </div>
        ))
      : undefined;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="push-stack-playground">
        {selects.map((select) => (
          <div key={select.id} className="push-stack-playground__field">
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
        <div className="push-stack-demo">
          <div className="push-stack-demo__controls">
            <Button
              size="sm"
              variant="secondary"
              disabled={step <= 0}
              onClick={() => setStep((v) => Math.max(0, v - 1))}
            >
              {t("playground.back")}
            </Button>
            <Button
              size="sm"
              variant="secondary"
              disabled={step >= last}
              onClick={() => setStep((v) => Math.min(last, v + 1))}
            >
              {t("playground.next")}
            </Button>
          </div>
          <PushStack
            index={step}
            viewKey={label}
            axis={axis}
            mode={mode}
            keepState={keepState === "true"}
            duration={Number(duration)}
            delay={Number(delay)}
            easing={easing}
            isDisabled={isDisabled === "true"}
            pagination={paginationProp}
            swipe={swipe === "true"}
            views={views}
            onPagination={setStep}
          >
            {views ? undefined : (
              <div className={panelClass}>
                {label}
                <span className="push-stack-demo__copy">{copies[label]}</span>
              </div>
            )}
          </PushStack>
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
