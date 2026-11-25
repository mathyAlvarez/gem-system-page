import { useState } from "react";
import { Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { Glitch } from "@gem-org/gemffects/glitch";
import { isIntensityToken } from "@gem-org/gemffects/tokens";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { GlitchImage, GlitchTile } from "./examples/GlitchTile.tsx";
import { GLITCH_TRIGGERS, GLITCH_VARIANTS } from "./examples/demo.ts";

const BOOLEAN_OPTIONS = ["true", "false"] as const;
const INTENSITY_OPTIONS = ["sm", "md", "lg", "0.2", "0.62", "0.95"] as const;
const SPLIT_OPTIONS = ["auto", "2", "8", "16"] as const;
const DURATION_OPTIONS = ["1200", "2200", "4000"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function GlitchPlayground() {
  const { t } = useTranslation("glitch");
  const [variant, setVariant] = useState<(typeof GLITCH_VARIANTS)[number]>("cyber");
  const [trigger, setTrigger] = useState<(typeof GLITCH_TRIGGERS)[number]>("always");
  const [intensity, setIntensity] = useState<(typeof INTENSITY_OPTIONS)[number]>("md");
  const [split, setSplit] = useState<(typeof SPLIT_OPTIONS)[number]>("auto");
  const [duration, setDuration] = useState<(typeof DURATION_OPTIONS)[number]>("2200");
  const [isPaused, setIsPaused] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [isDisabled, setIsDisabled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const intensityValue = isIntensityToken(intensity) ? intensity : Number(intensity);
  const splitValue = split === "auto" ? undefined : Number(split);

  const attrs = [
    variant !== "cyber" && `variant="${variant}"`,
    trigger !== "always" && `trigger="${trigger}"`,
    intensity !== "md" &&
      (isIntensityToken(intensity) ? `intensity="${intensity}"` : `intensity={${intensity}}`),
    splitValue !== undefined && `split={${splitValue}}`,
    duration !== "2200" && `duration={${duration}}`,
    isPaused === "true" && "isPaused",
    isDisabled === "true" && "isDisabled",
  ].filter(Boolean);

  const opening = attrs.length > 0 ? `<Glitch\n  ${attrs.join("\n  ")}\n>` : "<Glitch>";
  const code = `import { Glitch } from "@gem-org/gemffects/glitch";

${opening}
  <img src="/gem-org-favicon.png" alt="${t("playground.alt")}" />
</Glitch>`;

  const selects = [
    {
      id: "variant",
      value: variant,
      options: GLITCH_VARIANTS,
      onChange: pick(GLITCH_VARIANTS, setVariant),
    },
    {
      id: "trigger",
      value: trigger,
      options: GLITCH_TRIGGERS,
      onChange: pick(GLITCH_TRIGGERS, setTrigger),
    },
    {
      id: "intensity",
      value: intensity,
      options: INTENSITY_OPTIONS,
      onChange: pick(INTENSITY_OPTIONS, setIntensity),
    },
    { id: "split", value: split, options: SPLIT_OPTIONS, onChange: pick(SPLIT_OPTIONS, setSplit) },
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
    {
      id: "isDisabled",
      value: isDisabled,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setIsDisabled),
    },
  ];

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="glitch-playground">
        {selects.map((select) => (
          <div key={select.id} className="glitch-playground__field">
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
        <GlitchTile>
          <Glitch
            variant={variant}
            trigger={trigger}
            intensity={intensityValue}
            split={splitValue}
            duration={Number(duration)}
            isPaused={isPaused === "true"}
            isDisabled={isDisabled === "true"}
            className="glitch-demo__host"
          >
            <GlitchImage alt={t("playground.alt")} />
          </Glitch>
        </GlitchTile>
      </DemoBlock>
    </DocsSection>
  );
}
