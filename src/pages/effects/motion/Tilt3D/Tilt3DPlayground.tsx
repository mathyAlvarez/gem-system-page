import { useState } from "react";
import { Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { Tilt3D } from "@gem-org/gemffects/tilt-3d";
import { isIntensityToken } from "@gem-org/gemffects/tokens";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { TiltTile } from "./examples/TiltTile.tsx";
import { TILT_GLARE_COLORS, TILT_TRIGGERS } from "./examples/demo.ts";

const BOOLEAN_OPTIONS = ["true", "false"] as const;
const INTENSITY_OPTIONS = ["sm", "md", "lg", "0.2", "0.62", "0.95"] as const;
const MAX_TILT_OPTIONS = ["auto", "8", "14", "24"] as const;
const PERSPECTIVE_OPTIONS = ["400", "900", "2000"] as const;
const SCALE_OPTIONS = ["1", "1.04", "1.1"] as const;
const GLARE_COLOR_OPTIONS = ["default", "primary", "tertiary"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function Tilt3DPlayground() {
  const { t } = useTranslation("tilt3D");
  const [trigger, setTrigger] = useState<(typeof TILT_TRIGGERS)[number]>("hover");
  const [intensity, setIntensity] = useState<(typeof INTENSITY_OPTIONS)[number]>("md");
  const [maxTilt, setMaxTilt] = useState<(typeof MAX_TILT_OPTIONS)[number]>("auto");
  const [perspective, setPerspective] = useState<(typeof PERSPECTIVE_OPTIONS)[number]>("900");
  const [scale, setScale] = useState<(typeof SCALE_OPTIONS)[number]>("1.04");
  const [reverse, setReverse] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [glare, setGlare] = useState<(typeof BOOLEAN_OPTIONS)[number]>("true");
  const [glareColor, setGlareColor] = useState<(typeof GLARE_COLOR_OPTIONS)[number]>("default");
  const [isPaused, setIsPaused] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const intensityValue = isIntensityToken(intensity) ? intensity : Number(intensity);
  const maxTiltValue = maxTilt === "auto" ? undefined : Number(maxTilt);
  const glareColorValue = glareColor === "default" ? undefined : TILT_GLARE_COLORS[glareColor];

  const attrs = [
    trigger !== "hover" && `trigger="${trigger}"`,
    intensity !== "md" &&
      (isIntensityToken(intensity) ? `intensity="${intensity}"` : `intensity={${intensity}}`),
    maxTiltValue !== undefined && `maxTilt={${maxTiltValue}}`,
    perspective !== "900" && `perspective={${perspective}}`,
    scale !== "1.04" && `scale={${scale}}`,
    reverse === "true" && "reverse",
    glare === "false" && "glare={false}",
    glareColorValue && `glareColor="${glareColorValue}"`,
    isPaused === "true" && "isPaused",
  ].filter(Boolean);

  const opening = attrs.length > 0 ? `<Tilt3D\n  ${attrs.join("\n  ")}\n>` : "<Tilt3D>";
  const code = `import { Tilt3D } from "@gem-org/gemffects/tilt-3d";

${opening}
  <span>${t("playground.target")}</span>
</Tilt3D>`;

  const selects = [
    {
      id: "trigger",
      value: trigger,
      options: TILT_TRIGGERS,
      onChange: pick(TILT_TRIGGERS, setTrigger),
    },
    {
      id: "intensity",
      value: intensity,
      options: INTENSITY_OPTIONS,
      onChange: pick(INTENSITY_OPTIONS, setIntensity),
    },
    {
      id: "maxTilt",
      value: maxTilt,
      options: MAX_TILT_OPTIONS,
      onChange: pick(MAX_TILT_OPTIONS, setMaxTilt),
    },
    {
      id: "perspective",
      value: perspective,
      options: PERSPECTIVE_OPTIONS,
      onChange: pick(PERSPECTIVE_OPTIONS, setPerspective),
    },
    { id: "scale", value: scale, options: SCALE_OPTIONS, onChange: pick(SCALE_OPTIONS, setScale) },
    {
      id: "reverse",
      value: reverse,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setReverse),
    },
    {
      id: "glare",
      value: glare,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setGlare),
    },
    {
      id: "glareColor",
      value: glareColor,
      options: GLARE_COLOR_OPTIONS,
      onChange: pick(GLARE_COLOR_OPTIONS, setGlareColor),
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
      <div className="tilt-3d-playground">
        {selects.map((select) => (
          <div key={select.id} className="tilt-3d-playground__field">
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
        <TiltTile>
          <Tilt3D
            trigger={trigger}
            intensity={intensityValue}
            maxTilt={maxTiltValue}
            perspective={Number(perspective)}
            scale={Number(scale)}
            reverse={reverse === "true"}
            glare={glare === "true"}
            glareColor={glareColorValue}
            isPaused={isPaused === "true"}
            className="tilt-demo__host"
          >
            <div className="tilt-demo__tile">
              <p className="tilt-demo__kicker">Tilt3D</p>
              <p className="tilt-demo__title">{t("playground.target")}</p>
            </div>
          </Tilt3D>
        </TiltTile>
      </DemoBlock>
    </DocsSection>
  );
}
