import { useState } from "react";
import { Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { Rip } from "@gem-org/gemffects/rip";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { RIP_PARTICLES, RIP_TRIGGERS, RIP_VARIANTS } from "./examples/demo.ts";
import "./examples/rip-demo.css";

const INTENSITY_OPTIONS = ["sm", "md", "lg"] as const;
const LINES_OPTIONS = ["auto", "1", "3", "5"] as const;
const DURATION_OPTIONS = ["400", "700", "1100"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function RipPlayground() {
  const { t } = useTranslation("rip");
  const [variant, setVariant] = useState<(typeof RIP_VARIANTS)[number]>("gouge");
  const [trigger, setTrigger] = useState<(typeof RIP_TRIGGERS)[number]>("drag");
  const [particle, setParticle] = useState<(typeof RIP_PARTICLES)[number]>("spark");
  const [intensity, setIntensity] = useState<(typeof INTENSITY_OPTIONS)[number]>("md");
  const [lines, setLines] = useState<(typeof LINES_OPTIONS)[number]>("auto");
  const [duration, setDuration] = useState<(typeof DURATION_OPTIONS)[number]>("700");

  const label = t("playground.label");

  const attrs = [
    variant !== "gouge" && `variant="${variant}"`,
    trigger !== "drag" && `trigger="${trigger}"`,
    particle !== "spark" && `particle="${particle}"`,
    intensity !== "md" && `intensity="${intensity}"`,
    lines !== "auto" && `lines={${lines}}`,
    duration !== "700" && `duration={${duration}}`,
  ].filter(Boolean);

  const opening = attrs.length > 0 ? `<Rip\n  ${attrs.join("\n  ")}\n>` : "<Rip>";
  const code = `import { Rip } from "@gem-org/gemffects/rip";

${opening}
  <div className="card">${label}</div>
</Rip>`;

  const selects = [
    {
      id: "variant",
      value: variant,
      options: RIP_VARIANTS,
      onChange: pick(RIP_VARIANTS, setVariant),
    },
    {
      id: "trigger",
      value: trigger,
      options: RIP_TRIGGERS,
      onChange: pick(RIP_TRIGGERS, setTrigger),
    },
    {
      id: "particle",
      value: particle,
      options: RIP_PARTICLES,
      onChange: pick(RIP_PARTICLES, setParticle),
    },
    {
      id: "intensity",
      value: intensity,
      options: INTENSITY_OPTIONS,
      onChange: pick(INTENSITY_OPTIONS, setIntensity),
    },
    { id: "lines", value: lines, options: LINES_OPTIONS, onChange: pick(LINES_OPTIONS, setLines) },
    {
      id: "duration",
      value: duration,
      options: DURATION_OPTIONS,
      onChange: pick(DURATION_OPTIONS, setDuration),
    },
  ];

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="rip-playground">
        {selects.map((select) => (
          <div key={select.id} className="rip-playground__field">
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
        <div className="rp-demo__stage">
          <Rip
            variant={variant}
            trigger={trigger}
            particle={particle}
            intensity={intensity}
            lines={lines === "auto" ? undefined : Number(lines)}
            duration={Number(duration)}
            className="rp-demo__host"
          >
            <div className="rp-demo__target">{label}</div>
          </Rip>
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
