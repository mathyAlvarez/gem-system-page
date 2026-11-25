import { useState } from "react";
import { Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { Glow } from "@gem-org/gemffects/glow";
import { isIntensityToken } from "@gem-org/gemffects/tokens";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { GlowTile } from "./examples/GlowTile.tsx";
import { GLOW_COLORS, GLOW_EDGES, GLOW_TRIGGERS, GLOW_VARIANTS } from "./examples/demo.ts";

const BOOLEAN_OPTIONS = ["true", "false"] as const;
const INTENSITY_OPTIONS = ["sm", "md", "lg", "0.2", "0.62", "0.95"] as const;
const DURATION_OPTIONS = ["1200", "2400", "4000"] as const;
const SPREAD_OPTIONS = ["8", "24", "48"] as const;
const COLOR_OPTIONS = ["default", "secondary", "tertiary"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function GlowPlayground() {
  const { t } = useTranslation("glow");
  const [variant, setVariant] = useState<(typeof GLOW_VARIANTS)[number]>("halo");
  const [edge, setEdge] = useState<(typeof GLOW_EDGES)[number]>("bottom");
  const [trigger, setTrigger] = useState<(typeof GLOW_TRIGGERS)[number]>("always");
  const [intensity, setIntensity] = useState<(typeof INTENSITY_OPTIONS)[number]>("md");
  const [duration, setDuration] = useState<(typeof DURATION_OPTIONS)[number]>("2400");
  const [spread, setSpread] = useState<(typeof SPREAD_OPTIONS)[number]>("24");
  const [color, setColor] = useState<(typeof COLOR_OPTIONS)[number]>("default");
  const [isPaused, setIsPaused] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [isDisabled, setIsDisabled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const intensityValue = isIntensityToken(intensity) ? intensity : Number(intensity);
  const colorValue = color === "default" ? undefined : GLOW_COLORS[color];
  const isText = variant === "text";

  const attrs = [
    variant !== "halo" && `variant="${variant}"`,
    variant === "edge" && edge !== "bottom" && `edge="${edge}"`,
    trigger !== "always" && `trigger="${trigger}"`,
    intensity !== "md" &&
      (isIntensityToken(intensity) ? `intensity="${intensity}"` : `intensity={${intensity}}`),
    duration !== "2400" && `duration={${duration}}`,
    spread !== "24" && `spread={${spread}}`,
    colorValue && `color="${colorValue}"`,
    isPaused === "true" && "isPaused",
    isDisabled === "true" && "isDisabled",
  ].filter(Boolean);

  const opening = attrs.length > 0 ? `<Glow\n  ${attrs.join("\n  ")}\n>` : "<Glow>";
  const code = `import { Glow } from "@gem-org/gemffects/glow";

${opening}
  <span>${t("playground.target")}</span>
</Glow>`;

  const selects = [
    {
      id: "variant",
      value: variant,
      options: GLOW_VARIANTS,
      onChange: pick(GLOW_VARIANTS, setVariant),
    },
    { id: "edge", value: edge, options: GLOW_EDGES, onChange: pick(GLOW_EDGES, setEdge) },
    {
      id: "trigger",
      value: trigger,
      options: GLOW_TRIGGERS,
      onChange: pick(GLOW_TRIGGERS, setTrigger),
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
    {
      id: "spread",
      value: spread,
      options: SPREAD_OPTIONS,
      onChange: pick(SPREAD_OPTIONS, setSpread),
    },
    { id: "color", value: color, options: COLOR_OPTIONS, onChange: pick(COLOR_OPTIONS, setColor) },
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
      <div className="glow-playground">
        {selects.map((select) => (
          <div key={select.id} className="glow-playground__field">
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
        <GlowTile>
          <Glow
            variant={variant}
            edge={edge}
            trigger={trigger}
            intensity={intensityValue}
            duration={Number(duration)}
            spread={Number(spread)}
            color={colorValue}
            isPaused={isPaused === "true"}
            isDisabled={isDisabled === "true"}
            className="glow-demo__host"
          >
            <span className={isText ? "glow-demo__copy" : "glow-demo__target"}>
              {t("playground.target")}
            </span>
          </Glow>
        </GlowTile>
      </DemoBlock>
    </DocsSection>
  );
}
