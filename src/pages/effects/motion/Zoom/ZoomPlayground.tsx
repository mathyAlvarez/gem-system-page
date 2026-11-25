import { useState } from "react";
import { Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { Zoom } from "@gem-org/gemffects/zoom";
import { isIntensityToken } from "@gem-org/gemffects/tokens";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { ZoomImage, ZoomTile } from "./examples/ZoomTile.tsx";
import { ZOOM_ORIGINS, ZOOM_TRIGGERS, ZOOM_VARIANTS } from "./examples/demo.ts";

const BOOLEAN_OPTIONS = ["true", "false"] as const;
const INTENSITY_OPTIONS = ["sm", "md", "lg", "0.2", "0.62", "0.95"] as const;
const SCALE_OPTIONS = ["auto", "1.04", "1.4", "1.8"] as const;
const DURATION_OPTIONS = ["120", "280", "700", "1800"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function ZoomPlayground() {
  const { t } = useTranslation("zoom");
  const [variant, setVariant] = useState<(typeof ZOOM_VARIANTS)[number]>("in");
  const [trigger, setTrigger] = useState<(typeof ZOOM_TRIGGERS)[number]>("hover");
  const [origin, setOrigin] = useState<(typeof ZOOM_ORIGINS)[number]>("center");
  const [intensity, setIntensity] = useState<(typeof INTENSITY_OPTIONS)[number]>("md");
  const [scale, setScale] = useState<(typeof SCALE_OPTIONS)[number]>("auto");
  const [clip, setClip] = useState<(typeof BOOLEAN_OPTIONS)[number]>("true");
  const [duration, setDuration] = useState<(typeof DURATION_OPTIONS)[number]>("280");
  const [isPaused, setIsPaused] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [isDisabled, setIsDisabled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const intensityValue = isIntensityToken(intensity) ? intensity : Number(intensity);
  const scaleValue = scale === "auto" ? undefined : Number(scale);

  const attrs = [
    variant !== "in" && `variant="${variant}"`,
    trigger !== "hover" && `trigger="${trigger}"`,
    origin !== "center" && `origin="${origin}"`,
    intensity !== "md" &&
      (isIntensityToken(intensity) ? `intensity="${intensity}"` : `intensity={${intensity}}`),
    scaleValue !== undefined && `scale={${scaleValue}}`,
    clip === "false" && "clip={false}",
    duration !== "280" && `duration={${duration}}`,
    isPaused === "true" && "isPaused",
    isDisabled === "true" && "isDisabled",
  ].filter(Boolean);

  const opening = attrs.length > 0 ? `<Zoom\n  ${attrs.join("\n  ")}\n>` : "<Zoom>";
  const code = `import { Zoom } from "@gem-org/gemffects/zoom";

${opening}
  <img src="/gem-org-favicon.png" alt="${t("playground.alt")}" />
</Zoom>`;

  const selects = [
    {
      id: "variant",
      value: variant,
      options: ZOOM_VARIANTS,
      onChange: pick(ZOOM_VARIANTS, setVariant),
    },
    {
      id: "trigger",
      value: trigger,
      options: ZOOM_TRIGGERS,
      onChange: pick(ZOOM_TRIGGERS, setTrigger),
    },
    { id: "origin", value: origin, options: ZOOM_ORIGINS, onChange: pick(ZOOM_ORIGINS, setOrigin) },
    {
      id: "intensity",
      value: intensity,
      options: INTENSITY_OPTIONS,
      onChange: pick(INTENSITY_OPTIONS, setIntensity),
    },
    { id: "scale", value: scale, options: SCALE_OPTIONS, onChange: pick(SCALE_OPTIONS, setScale) },
    { id: "clip", value: clip, options: BOOLEAN_OPTIONS, onChange: pick(BOOLEAN_OPTIONS, setClip) },
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
      <div className="zoom-playground">
        {selects.map((select) => (
          <div key={select.id} className="zoom-playground__field">
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
        <ZoomTile>
          <Zoom
            variant={variant}
            trigger={trigger}
            origin={origin}
            intensity={intensityValue}
            scale={scaleValue}
            clip={clip === "true"}
            duration={Number(duration)}
            isPaused={isPaused === "true"}
            isDisabled={isDisabled === "true"}
            className="zoom-demo__host"
          >
            <ZoomImage alt={t("playground.alt")} />
          </Zoom>
        </ZoomTile>
      </DemoBlock>
    </DocsSection>
  );
}
