import { useState } from "react";
import { Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { GradientGlossy } from "@gem-org/gemffects/gradient-glossy";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { GLOSSY_DIRECTIONS, GLOSSY_TRIGGERS, GLOSSY_VARIANTS } from "./examples/demo.ts";
import { GlossyTile } from "./examples/GlossyTile.tsx";

const BOOLEAN_OPTIONS = ["true", "false"] as const;
const INTENSITY_OPTIONS = ["sm", "md", "lg"] as const;
const MID_OPTIONS = ["24", "48", "72"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function GradientGlossyPlayground() {
  const { t } = useTranslation("gradientGlossy");
  const [variant, setVariant] = useState<(typeof GLOSSY_VARIANTS)[number]>("lit");
  const [direction, setDirection] = useState<(typeof GLOSSY_DIRECTIONS)[number]>("to-bottom");
  const [trigger, setTrigger] = useState<(typeof GLOSSY_TRIGGERS)[number]>("always");
  const [intensity, setIntensity] = useState<(typeof INTENSITY_OPTIONS)[number]>("md");
  const [mid, setMid] = useState<(typeof MID_OPTIONS)[number]>("48");
  const [isDisabled, setIsDisabled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const label = t("playground.label");

  const attrs = [
    variant !== "lit" && `variant="${variant}"`,
    direction !== "to-bottom" && `direction="${direction}"`,
    trigger !== "always" && `trigger="${trigger}"`,
    intensity !== "md" && `intensity="${intensity}"`,
    mid !== "48" && `mid={${mid}}`,
    isDisabled === "true" && "isDisabled",
  ].filter(Boolean);

  const opening =
    attrs.length > 0 ? `<GradientGlossy\n  ${attrs.join("\n  ")}\n>` : "<GradientGlossy>";
  const code = `import { GradientGlossy } from "@gem-org/gemffects/gradient-glossy";

${opening}
  <span className="target">${label}</span>
</GradientGlossy>`;

  const selects = [
    {
      id: "variant",
      value: variant,
      options: GLOSSY_VARIANTS,
      onChange: pick(GLOSSY_VARIANTS, setVariant),
    },
    {
      id: "direction",
      value: direction,
      options: GLOSSY_DIRECTIONS,
      onChange: pick(GLOSSY_DIRECTIONS, setDirection),
    },
    {
      id: "trigger",
      value: trigger,
      options: GLOSSY_TRIGGERS,
      onChange: pick(GLOSSY_TRIGGERS, setTrigger),
    },
    {
      id: "intensity",
      value: intensity,
      options: INTENSITY_OPTIONS,
      onChange: pick(INTENSITY_OPTIONS, setIntensity),
    },
    { id: "mid", value: mid, options: MID_OPTIONS, onChange: pick(MID_OPTIONS, setMid) },
    {
      id: "isDisabled",
      value: isDisabled,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setIsDisabled),
    },
  ];

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="gradient-glossy-playground">
        {selects.map((select) => (
          <div key={select.id} className="gradient-glossy-playground__field">
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
        <GlossyTile>
          <GradientGlossy
            variant={variant}
            direction={direction}
            trigger={trigger}
            intensity={intensity}
            mid={Number(mid)}
            isDisabled={isDisabled === "true"}
            className="gg-demo__host"
          >
            <span className="gg-demo__target">{label}</span>
          </GradientGlossy>
        </GlossyTile>
      </DemoBlock>
    </DocsSection>
  );
}
