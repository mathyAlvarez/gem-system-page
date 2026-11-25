import { useState } from "react";
import { Button, Select, Transition, Typography, type SelectValue } from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { DemoPanel } from "./examples/DemoPanel.tsx";
import {
  TRANSITION_DELAYS,
  TRANSITION_DURATIONS,
  TRANSITION_EASINGS,
  TRANSITION_EFFECTS,
  type PanelCopy,
  type ToggleCopy,
} from "./examples/demo.ts";
import "./examples/transition-demo.css";

const booleanOptions = ["true", "false"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

type TransitionPlaygroundProps = { toggle: ToggleCopy; panel: PanelCopy };

export function TransitionPlayground({ toggle, panel }: TransitionPlaygroundProps) {
  const { t } = useTranslation("transition");
  const [open, setOpen] = useState(true);
  const [effect, setEffect] = useState<string>("fade");
  const [duration, setDuration] = useState<string>("220");
  const [delay, setDelay] = useState<string>("0");
  const [easing, setEasing] = useState<string>("ease");
  const [unmountOnExit, setUnmountOnExit] = useState<string>("true");
  const [block, setBlock] = useState<string>("false");

  const attrs = [
    `in={${open}}`,
    effect !== "fade" && `effect="${effect}"`,
    duration !== "220" && `duration={${duration}}`,
    delay !== "0" && `delay={${delay}}`,
    easing !== "ease" && `easing="${easing}"`,
    unmountOnExit === "false" && "unmountOnExit={false}",
    block === "true" && "block",
  ].filter(Boolean);

  const code = `import { Transition } from "@gem-org/gem-system";

<Transition
  ${attrs.join("\n  ")}
>
  <Panel />
</Transition>`;

  const selects = [
    { id: "effect", value: effect, options: TRANSITION_EFFECTS, onChange: pick(setEffect) },
    { id: "duration", value: duration, options: TRANSITION_DURATIONS, onChange: pick(setDuration) },
    { id: "delay", value: delay, options: TRANSITION_DELAYS, onChange: pick(setDelay) },
    { id: "easing", value: easing, options: TRANSITION_EASINGS, onChange: pick(setEasing) },
    {
      id: "unmountOnExit",
      value: unmountOnExit,
      options: booleanOptions,
      onChange: pick(setUnmountOnExit),
    },
    { id: "block", value: block, options: booleanOptions, onChange: pick(setBlock) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="transition-playground">
        {selects.map((select) => (
          <div key={select.id} className="transition-playground__field">
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

      <DemoBlock code={code} label="Example.tsx">
        <div className="transition-demo">
          <Button size="sm" variant={open ? "secondary" : "primary"} onClick={() => setOpen(!open)}>
            {open ? toggle.hide : toggle.show}
          </Button>
          <div className="transition-demo__stage">
            <Transition
              in={open}
              effect={effect as (typeof TRANSITION_EFFECTS)[number]}
              duration={Number(duration)}
              delay={Number(delay)}
              easing={easing}
              unmountOnExit={unmountOnExit === "true"}
              block={block === "true"}
            >
              <DemoPanel block={block === "true" || effect === "collapse"} title={panel.title}>
                {panel.body}
              </DemoPanel>
            </Transition>
          </div>
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
