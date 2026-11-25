import { useState } from "react";
import { Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { GradientMesh } from "@gem-org/gemffects/gradient-mesh";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { MESH_TRIGGERS, MESH_VARIANTS } from "./examples/demo.ts";
import { MeshTile } from "./examples/MeshTile.tsx";

const BOOLEAN_OPTIONS = ["true", "false"] as const;
const INTENSITY_OPTIONS = ["sm", "md", "lg"] as const;
const BLUR_OPTIONS = ["16", "40", "80"] as const;
const DURATION_OPTIONS = ["4000", "9000", "16000"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function GradientMeshPlayground() {
  const { t } = useTranslation("gradientMesh");
  const [variant, setVariant] = useState<(typeof MESH_VARIANTS)[number]>("liquid");
  const [trigger, setTrigger] = useState<(typeof MESH_TRIGGERS)[number]>("always");
  const [intensity, setIntensity] = useState<(typeof INTENSITY_OPTIONS)[number]>("md");
  const [blur, setBlur] = useState<(typeof BLUR_OPTIONS)[number]>("40");
  const [duration, setDuration] = useState<(typeof DURATION_OPTIONS)[number]>("9000");
  const [isPaused, setIsPaused] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const label = t("playground.label");

  const attrs = [
    variant !== "liquid" && `variant="${variant}"`,
    trigger !== "always" && `trigger="${trigger}"`,
    intensity !== "md" && `intensity="${intensity}"`,
    blur !== "40" && `blur={${blur}}`,
    duration !== "9000" && `duration={${duration}}`,
    isPaused === "true" && "isPaused",
  ].filter(Boolean);

  const opening = attrs.length > 0 ? `<GradientMesh\n  ${attrs.join("\n  ")}\n>` : "<GradientMesh>";
  const code = `import { GradientMesh } from "@gem-org/gemffects/gradient-mesh";

${opening}
  <p className="copy">${label}</p>
</GradientMesh>`;

  const selects = [
    {
      id: "variant",
      value: variant,
      options: MESH_VARIANTS,
      onChange: pick(MESH_VARIANTS, setVariant),
    },
    {
      id: "trigger",
      value: trigger,
      options: MESH_TRIGGERS,
      onChange: pick(MESH_TRIGGERS, setTrigger),
    },
    {
      id: "intensity",
      value: intensity,
      options: INTENSITY_OPTIONS,
      onChange: pick(INTENSITY_OPTIONS, setIntensity),
    },
    { id: "blur", value: blur, options: BLUR_OPTIONS, onChange: pick(BLUR_OPTIONS, setBlur) },
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
      <div className="gradient-mesh-playground">
        {selects.map((select) => (
          <div key={select.id} className="gradient-mesh-playground__field">
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
        <MeshTile>
          <GradientMesh
            variant={variant}
            trigger={trigger}
            intensity={intensity}
            blur={Number(blur)}
            duration={Number(duration)}
            isPaused={isPaused === "true"}
            className="gm-demo__host"
          >
            <p className="gm-demo__copy">{label}</p>
          </GradientMesh>
        </MeshTile>
      </DemoBlock>
    </DocsSection>
  );
}
