import { useState } from "react";
import { Button, Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { RipZone } from "@gem-org/gemffects/rip-zone";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { RIP_ZONE_TRIGGERS, RIP_ZONE_VARIANTS } from "./examples/demo.ts";
import "./examples/rip-zone-demo.css";

const INTENSITY_OPTIONS = ["sm", "md", "lg"] as const;
const THRESHOLD_OPTIONS = ["0.35", "0.62", "0.9"] as const;
const DURATION_OPTIONS = ["150", "480", "1400"] as const;
const BOOLEAN_OPTIONS = ["true", "false"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function RipZonePlayground() {
  const { t } = useTranslation("ripZone");
  const [variant, setVariant] = useState<(typeof RIP_ZONE_VARIANTS)[number]>("foil");
  const [trigger, setTrigger] = useState<(typeof RIP_ZONE_TRIGGERS)[number]>("drag");
  const [intensity, setIntensity] = useState<(typeof INTENSITY_OPTIONS)[number]>("md");
  const [threshold, setThreshold] = useState<(typeof THRESHOLD_OPTIONS)[number]>("0.62");
  const [duration, setDuration] = useState<(typeof DURATION_OPTIONS)[number]>("480");
  const [isPaused, setIsPaused] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [resetKey, setResetKey] = useState(0);

  const label = t("playground.label");

  const attrs = [
    variant !== "foil" && `variant="${variant}"`,
    trigger !== "drag" && `trigger="${trigger}"`,
    intensity !== "md" && `intensity="${intensity}"`,
    threshold !== "0.62" && `threshold={${threshold}}`,
    duration !== "480" && `duration={${duration}}`,
    isPaused === "true" && "isPaused",
  ].filter(Boolean);

  const opening = attrs.length > 0 ? `<RipZone\n  ${attrs.join("\n  ")}\n>` : "<RipZone>";
  const code = `import { RipZone } from "@gem-org/gemffects/rip-zone";

${opening}
  <div className="prize">${label}</div>
</RipZone>`;

  const selects = [
    {
      id: "variant",
      value: variant,
      options: RIP_ZONE_VARIANTS,
      onChange: pick(RIP_ZONE_VARIANTS, setVariant),
    },
    {
      id: "trigger",
      value: trigger,
      options: RIP_ZONE_TRIGGERS,
      onChange: pick(RIP_ZONE_TRIGGERS, setTrigger),
    },
    {
      id: "intensity",
      value: intensity,
      options: INTENSITY_OPTIONS,
      onChange: pick(INTENSITY_OPTIONS, setIntensity),
    },
    {
      id: "threshold",
      value: threshold,
      options: THRESHOLD_OPTIONS,
      onChange: pick(THRESHOLD_OPTIONS, setThreshold),
    },
    {
      id: "duration",
      value: duration,
      options: DURATION_OPTIONS,
      onChange: pick(DURATION_OPTIONS, setDuration),
    },
    {
      id: "isPaused",
      value: isPaused,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setIsPaused),
    },
  ];

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="rip-zone-playground">
        {selects.map((select) => (
          <div key={select.id} className="rip-zone-playground__field">
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

      <div>
        <Button size="sm" variant="neutral" onClick={() => setResetKey((current) => current + 1)}>
          {t("playground.reset")}
        </Button>
      </div>

      <DemoBlock code={code} label="Example.tsx">
        <RipZone
          variant={variant}
          trigger={trigger}
          intensity={intensity}
          threshold={Number(threshold)}
          duration={Number(duration)}
          isPaused={isPaused === "true"}
          resetKey={resetKey}
          className="rz-demo__host"
        >
          <div className="rz-demo__target">
            <p className="rz-demo__title">{label}</p>
          </div>
        </RipZone>
      </DemoBlock>
    </DocsSection>
  );
}
