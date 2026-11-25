import { useState } from "react";
import { Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { PulseScale } from "@gem-org/gemffects/pulse-scale";
import { isIntensityToken } from "@gem-org/gemffects/tokens";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { PulseTile } from "./examples/PulseTile.tsx";
import { PULSE_TRIGGERS, PULSE_VARIANTS } from "./examples/demo.ts";

const BOOLEAN_OPTIONS = ["true", "false"] as const;
const RING_OPTIONS = ["auto", "true", "false"] as const;
const INTENSITY_OPTIONS = ["sm", "md", "lg", "0.2", "0.62", "0.95"] as const;
const SCALE_OPTIONS = ["auto", "1.02", "1.2", "1.4"] as const;
const DURATION_OPTIONS = ["900", "1400", "2200"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function PulseScalePlayground() {
  const { t } = useTranslation("pulseScale");
  const [variant, setVariant] = useState<(typeof PULSE_VARIANTS)[number]>("heartbeat");
  const [trigger, setTrigger] = useState<(typeof PULSE_TRIGGERS)[number]>("always");
  const [intensity, setIntensity] = useState<(typeof INTENSITY_OPTIONS)[number]>("md");
  const [scale, setScale] = useState<(typeof SCALE_OPTIONS)[number]>("auto");
  const [duration, setDuration] = useState<(typeof DURATION_OPTIONS)[number]>("1400");
  const [ring, setRing] = useState<(typeof RING_OPTIONS)[number]>("auto");
  const [isPaused, setIsPaused] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [isDisabled, setIsDisabled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const intensityValue = isIntensityToken(intensity) ? intensity : Number(intensity);
  const scaleValue = scale === "auto" ? undefined : Number(scale);
  const ringValue = ring === "auto" ? undefined : ring === "true";

  const attrs = [
    variant !== "heartbeat" && `variant="${variant}"`,
    trigger !== "always" && `trigger="${trigger}"`,
    intensity !== "md" &&
      (isIntensityToken(intensity) ? `intensity="${intensity}"` : `intensity={${intensity}}`),
    scaleValue !== undefined && `scale={${scaleValue}}`,
    duration !== "1400" && `duration={${duration}}`,
    ringValue === true && "ring",
    ringValue === false && "ring={false}",
    isPaused === "true" && "isPaused",
    isDisabled === "true" && "isDisabled",
  ].filter(Boolean);

  const opening = attrs.length > 0 ? `<PulseScale\n  ${attrs.join("\n  ")}\n>` : "<PulseScale>";
  const code = `import { PulseScale } from "@gem-org/gemffects/pulse-scale";

${opening}
  <span>${t("playground.target")}</span>
</PulseScale>`;

  const selects = [
    {
      id: "variant",
      value: variant,
      options: PULSE_VARIANTS,
      onChange: pick(PULSE_VARIANTS, setVariant),
    },
    {
      id: "trigger",
      value: trigger,
      options: PULSE_TRIGGERS,
      onChange: pick(PULSE_TRIGGERS, setTrigger),
    },
    {
      id: "intensity",
      value: intensity,
      options: INTENSITY_OPTIONS,
      onChange: pick(INTENSITY_OPTIONS, setIntensity),
    },
    { id: "scale", value: scale, options: SCALE_OPTIONS, onChange: pick(SCALE_OPTIONS, setScale) },
    {
      id: "duration",
      value: duration,
      options: DURATION_OPTIONS,
      onChange: pick(DURATION_OPTIONS, setDuration),
    },
    { id: "ring", value: ring, options: RING_OPTIONS, onChange: pick(RING_OPTIONS, setRing) },
    {
      id: "isPaused",
      value: isPaused,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setIsPaused),
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
      <div className="pulse-scale-playground">
        {selects.map((select) => (
          <div key={select.id} className="pulse-scale-playground__field">
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
        <PulseTile>
          <PulseScale
            variant={variant}
            trigger={trigger}
            intensity={intensityValue}
            scale={scaleValue}
            duration={Number(duration)}
            ring={ringValue}
            isPaused={isPaused === "true"}
            isDisabled={isDisabled === "true"}
            className="pulse-demo__host"
          >
            <span className="pulse-demo__cta">{t("playground.target")}</span>
          </PulseScale>
        </PulseTile>
      </DemoBlock>
    </DocsSection>
  );
}
