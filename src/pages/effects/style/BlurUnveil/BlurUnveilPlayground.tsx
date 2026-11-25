import { useState } from "react";
import { Button, Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { BlurUnveil } from "@gem-org/gemffects/blur-unveil";
import { isIntensityToken } from "@gem-org/gemffects/tokens";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { UnveilImage, UnveilTile } from "./examples/UnveilTile.tsx";
import { UNVEIL_TRIGGERS, UNVEIL_VARIANTS } from "./examples/demo.ts";

const BOOLEAN_OPTIONS = ["true", "false"] as const;
const INTENSITY_OPTIONS = ["sm", "md", "lg", "0.2", "0.62", "0.95"] as const;
const BLUR_OPTIONS = ["auto", "4", "12", "40"] as const;
const SCALE_OPTIONS = ["auto", "1", "1.1", "1.2"] as const;
const DURATION_OPTIONS = ["280", "700", "1400", "1800"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function BlurUnveilPlayground() {
  const { t } = useTranslation("blurUnveil");
  const [variant, setVariant] = useState<(typeof UNVEIL_VARIANTS)[number]>("in");
  const [trigger, setTrigger] = useState<(typeof UNVEIL_TRIGGERS)[number]>("always");
  const [intensity, setIntensity] = useState<(typeof INTENSITY_OPTIONS)[number]>("md");
  const [blur, setBlur] = useState<(typeof BLUR_OPTIONS)[number]>("auto");
  const [scale, setScale] = useState<(typeof SCALE_OPTIONS)[number]>("auto");
  const [duration, setDuration] = useState<(typeof DURATION_OPTIONS)[number]>("700");
  const [isPaused, setIsPaused] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [isDisabled, setIsDisabled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [replayKey, setReplayKey] = useState(0);

  const intensityValue = isIntensityToken(intensity) ? intensity : Number(intensity);
  const blurValue = blur === "auto" ? undefined : Number(blur);
  const scaleValue = scale === "auto" ? undefined : Number(scale);

  const attrs = [
    variant !== "in" && `variant="${variant}"`,
    trigger !== "always" && `trigger="${trigger}"`,
    intensity !== "md" &&
      (isIntensityToken(intensity) ? `intensity="${intensity}"` : `intensity={${intensity}}`),
    blurValue !== undefined && `blur={${blurValue}}`,
    scaleValue !== undefined && `scale={${scaleValue}}`,
    duration !== "700" && `duration={${duration}}`,
    isPaused === "true" && "isPaused",
    isDisabled === "true" && "isDisabled",
  ].filter(Boolean);

  const opening = attrs.length > 0 ? `<BlurUnveil\n  ${attrs.join("\n  ")}\n>` : "<BlurUnveil>";
  const code = `import { BlurUnveil } from "@gem-org/gemffects/blur-unveil";

${opening}
  <img src="/gem-org-favicon.png" alt="${t("playground.alt")}" />
</BlurUnveil>`;

  const selects = [
    {
      id: "variant",
      value: variant,
      options: UNVEIL_VARIANTS,
      onChange: pick(UNVEIL_VARIANTS, setVariant),
    },
    {
      id: "trigger",
      value: trigger,
      options: UNVEIL_TRIGGERS,
      onChange: pick(UNVEIL_TRIGGERS, setTrigger),
    },
    {
      id: "intensity",
      value: intensity,
      options: INTENSITY_OPTIONS,
      onChange: pick(INTENSITY_OPTIONS, setIntensity),
    },
    { id: "blur", value: blur, options: BLUR_OPTIONS, onChange: pick(BLUR_OPTIONS, setBlur) },
    { id: "scale", value: scale, options: SCALE_OPTIONS, onChange: pick(SCALE_OPTIONS, setScale) },
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
      <div className="blur-unveil-playground">
        {selects.map((select) => (
          <div key={select.id} className="blur-unveil-playground__field">
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
        <div className="blur-unveil-playground__field blur-unveil-playground__field--action">
          <Button
            size="sm"
            variant="secondary"
            onClick={() => setReplayKey((current) => current + 1)}
          >
            {t("replay")}
          </Button>
        </div>
      </div>

      <DemoBlock code={code} label="Example.tsx">
        <UnveilTile>
          <BlurUnveil
            key={replayKey}
            variant={variant}
            trigger={trigger}
            intensity={intensityValue}
            blur={blurValue}
            scale={scaleValue}
            duration={Number(duration)}
            isPaused={isPaused === "true"}
            isDisabled={isDisabled === "true"}
            className="unveil-demo__host"
          >
            <UnveilImage alt={t("playground.alt")} />
          </BlurUnveil>
        </UnveilTile>
      </DemoBlock>
    </DocsSection>
  );
}
