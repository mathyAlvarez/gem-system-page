import { useState } from "react";
import { Select, Shine, Typography, type SelectValue } from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { SHINE_EFFECTS, SHINE_INTENSITIES, SHINE_RADII, SHINE_TONES, SHINE_TRIGGERS } from "./examples/demo.ts";
import "./examples/shine-demo.css";

const booleanOptions = ["true", "false"] as const;
const surfaceOptions = ["brand", "dark"] as const;
const durationOptions = ["800", "1200", "2400", "4000"] as const;
const intervalOptions = ["0", "2000", "4000", "8000"] as const;
const angleOptions = ["90", "125", "180", "225"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

export function ShinePlayground() {
  const { t } = useTranslation("shine");
  const [surface, setSurface] = useState<string>("brand");
  const [tone, setTone] = useState<string>("light");
  const [intensity, setIntensity] = useState<string>("md");
  const [radius, setRadius] = useState<string>("md");
  const [trigger, setTrigger] = useState<string>("always");
  const [effect, setEffect] = useState<string>("sweep");
  const [duration, setDuration] = useState<string>("2400");
  const [interval, setIntervalMs] = useState<string>("4000");
  const [angle, setAngle] = useState<string>("125");
  const [isPaused, setIsPaused] = useState<string>("false");

  const tileClass = surface === "dark" ? "shine-tile shine-tile--dark" : "shine-tile";

  const attrs = [
    tone !== "light" && `tone="${tone}"`,
    intensity !== "md" && `intensity="${intensity}"`,
    radius !== "md" && `radius="${radius}"`,
    trigger !== "always" && `trigger="${trigger}"`,
    effect !== "sweep" && `effect="${effect}"`,
    duration !== "2400" && `duration={${duration}}`,
    interval !== "4000" && `interval={${interval}}`,
    angle !== "125" && `angle={${angle}}`,
    isPaused === "true" && "isPaused",
  ].filter(Boolean);

  const code = `import { Shine } from "@gem-org/gem-system";

<Shine${attrs.length ? `\n  ${attrs.join("\n  ")}\n` : ""}>
  <span className="${tileClass}">${t("playground.label")}</span>
</Shine>`;

  const selects = [
    { id: "surface", value: surface, options: surfaceOptions, onChange: pick(setSurface) },
    { id: "tone", value: tone, options: SHINE_TONES, onChange: pick(setTone) },
    { id: "intensity", value: intensity, options: SHINE_INTENSITIES, onChange: pick(setIntensity) },
    { id: "radius", value: radius, options: SHINE_RADII, onChange: pick(setRadius) },
    { id: "trigger", value: trigger, options: SHINE_TRIGGERS, onChange: pick(setTrigger) },
    { id: "effect", value: effect, options: SHINE_EFFECTS, onChange: pick(setEffect) },
    { id: "duration", value: duration, options: durationOptions, onChange: pick(setDuration) },
    { id: "interval", value: interval, options: intervalOptions, onChange: pick(setIntervalMs) },
    { id: "angle", value: angle, options: angleOptions, onChange: pick(setAngle) },
    { id: "isPaused", value: isPaused, options: booleanOptions, onChange: pick(setIsPaused) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="shine-playground">
        {selects.map((select) => (
          <div key={select.id} className="shine-playground__field">
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
        <Shine
          tone={tone as (typeof SHINE_TONES)[number]}
          intensity={intensity as (typeof SHINE_INTENSITIES)[number]}
          radius={radius as (typeof SHINE_RADII)[number]}
          trigger={trigger as (typeof SHINE_TRIGGERS)[number]}
          effect={effect as (typeof SHINE_EFFECTS)[number]}
          duration={Number(duration)}
          interval={Number(interval)}
          angle={Number(angle)}
          isPaused={isPaused === "true"}
        >
          <span className={tileClass}>{t("playground.label")}</span>
        </Shine>
      </DemoBlock>
    </DocsSection>
  );
}
