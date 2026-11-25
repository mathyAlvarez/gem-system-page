import { useState } from "react";
import { Select, Typography, type SelectValue } from "@gem-org/gem-system";
import {
  PARTICLE_KINDS,
  type ParticleKind,
  type ParticleMotion,
} from "@gem-org/gemffects/particles";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { PARTICLE_EMITS, PARTICLE_MOTIONS, type ParticleEmit } from "./examples/demo.ts";
import { ParticleStage } from "./examples/ParticleStage.tsx";

const BOOLEAN_OPTIONS = ["true", "false"] as const;
const DURATION_OPTIONS = ["600", "900", "1400", "1800"] as const;
const COUNT_OPTIONS = ["8", "16", "24", "32"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function ParticlesPlayground() {
  const { t } = useTranslation("particles");
  const [kind, setKind] = useState<ParticleKind>("confetti");
  const [motion, setMotion] = useState<ParticleMotion>("burst");
  const [duration, setDuration] = useState<(typeof DURATION_OPTIONS)[number]>("900");
  const [count, setCount] = useState<(typeof COUNT_OPTIONS)[number]>("16");
  const [isPaused, setIsPaused] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [emit, setEmit] = useState<ParticleEmit>("click");

  const spawnCall =
    motion === "rain"
      ? `spawnRain(width, height, ${count}, "${kind}", nextId)`
      : `spawnBurst(x, y, ${count}, "${kind}", nextId)`;

  const layerAttrs = [
    "particles={particles}",
    `motion="${motion}"`,
    `durationMs={${duration}}`,
    isPaused === "true" && "isPaused",
  ].filter(Boolean);

  const code = `import { ParticleLayer, useParticleField } from "@gem-org/gemffects/particles";
import { ${motion === "rain" ? "spawnRain" : "spawnBurst"} } from "./demo.ts";

const { particles, spawn } = useParticleField({ maxLive: 80 });

// ${t(emit === "click" ? "playground.code.click" : "playground.code.always")}
spawn(${spawnCall}, ${duration} + 80);

<ParticleLayer
  ${layerAttrs.join("\n  ")}
/>`;

  const selects = [
    { id: "kind", value: kind, options: PARTICLE_KINDS, onChange: pick(PARTICLE_KINDS, setKind) },
    {
      id: "motion",
      value: motion,
      options: PARTICLE_MOTIONS,
      onChange: pick(PARTICLE_MOTIONS, setMotion),
    },
    {
      id: "durationMs",
      value: duration,
      options: DURATION_OPTIONS,
      onChange: pick(DURATION_OPTIONS, setDuration),
    },
    { id: "count", value: count, options: COUNT_OPTIONS, onChange: pick(COUNT_OPTIONS, setCount) },
    {
      id: "isPaused",
      value: isPaused,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setIsPaused),
    },
    { id: "emit", value: emit, options: PARTICLE_EMITS, onChange: pick(PARTICLE_EMITS, setEmit) },
  ];

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="particles-playground">
        {selects.map((select) => (
          <div key={select.id} className="particles-playground__field">
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
        <ParticleStage
          kind={kind}
          motion={motion}
          durationMs={Number(duration)}
          count={Number(count)}
          isPaused={isPaused === "true"}
          emit={emit}
          hint={emit === "click" ? t("playground.hint") : t("playground.hintAlways")}
          wide
        />
      </DemoBlock>
    </DocsSection>
  );
}
