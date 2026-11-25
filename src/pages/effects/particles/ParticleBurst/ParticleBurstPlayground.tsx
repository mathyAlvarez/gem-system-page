import { useState } from "react";
import { Button, Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { ParticleBurst } from "@gem-org/gemffects/particle-burst";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { BURST_TRIGGERS, BURST_VARIANTS } from "./examples/demo.ts";
import "./examples/particle-burst-demo.css";

const INTENSITY_OPTIONS = ["sm", "md", "lg"] as const;
const DURATION_OPTIONS = ["500", "900", "1400"] as const;
const DELAY_OPTIONS = ["0", "150", "400"] as const;
const INTERVAL_OPTIONS = ["80", "150", "300"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function ParticleBurstPlayground() {
  const { t } = useTranslation("particleBurst");
  const [variant, setVariant] = useState<(typeof BURST_VARIANTS)[number]>("confetti");
  const [trigger, setTrigger] = useState<(typeof BURST_TRIGGERS)[number]>("click");
  const [intensity, setIntensity] = useState<(typeof INTENSITY_OPTIONS)[number]>("md");
  const [duration, setDuration] = useState<(typeof DURATION_OPTIONS)[number]>("900");
  const [delay, setDelay] = useState<(typeof DELAY_OPTIONS)[number]>("0");
  const [holdInterval, setHoldInterval] = useState<(typeof INTERVAL_OPTIONS)[number]>("150");

  const label = t("playground.label");

  const attrs = [
    variant !== "confetti" && `variant="${variant}"`,
    trigger !== "click" && `trigger="${trigger}"`,
    intensity !== "md" && `intensity="${intensity}"`,
    duration !== "900" && `duration={${duration}}`,
    delay !== "0" && `delay={${delay}}`,
    trigger === "hold" && holdInterval !== "150" && `interval={${holdInterval}}`,
  ].filter(Boolean);

  const opening =
    attrs.length > 0 ? `<ParticleBurst\n  ${attrs.join("\n  ")}\n>` : "<ParticleBurst>";
  const code = `import { Button } from "@gem-org/gem-system";
import { ParticleBurst } from "@gem-org/gemffects/particle-burst";

${opening}
  <Button variant="primary">${label}</Button>
</ParticleBurst>`;

  const selects = [
    {
      id: "variant",
      value: variant,
      options: BURST_VARIANTS,
      onChange: pick(BURST_VARIANTS, setVariant),
    },
    {
      id: "trigger",
      value: trigger,
      options: BURST_TRIGGERS,
      onChange: pick(BURST_TRIGGERS, setTrigger),
    },
    {
      id: "intensity",
      value: intensity,
      options: INTENSITY_OPTIONS,
      onChange: pick(INTENSITY_OPTIONS, setIntensity),
    },
    {
      id: "duration",
      value: duration,
      options: DURATION_OPTIONS,
      onChange: pick(DURATION_OPTIONS, setDuration),
    },
    { id: "delay", value: delay, options: DELAY_OPTIONS, onChange: pick(DELAY_OPTIONS, setDelay) },
    {
      id: "interval",
      value: holdInterval,
      options: INTERVAL_OPTIONS,
      onChange: pick(INTERVAL_OPTIONS, setHoldInterval),
    },
  ];

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="particle-burst-playground">
        {selects.map((select) => (
          <div key={select.id} className="particle-burst-playground__field">
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
        <div className="pb-demo__stage">
          <ParticleBurst
            variant={variant}
            trigger={trigger}
            intensity={intensity}
            duration={Number(duration)}
            delay={Number(delay)}
            interval={Number(holdInterval)}
          >
            <Button variant="primary" className="pb-demo__button">
              {label}
            </Button>
          </ParticleBurst>
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
