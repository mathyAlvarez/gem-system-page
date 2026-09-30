import { useState } from "react";
import { Badge, Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { Star } from "@gem-org/gem-system/icons";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { BADGE_RADII, BADGE_SIZES, BADGE_TONES, BADGE_VARIANTS } from "./examples/demo.ts";

const booleanOptions = ["false", "true"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

export function BadgePlayground() {
  const { t } = useTranslation("badge");
  const texts = t("playground.texts", { returnObjects: true });
  const [tone, setTone] = useState<string>("primary");
  const [variant, setVariant] = useState<string>("soft");
  const [size, setSize] = useState<string>("md");
  const [radius, setRadius] = useState<string>("full");
  const [icon, setIcon] = useState<string>("false");
  const [isDot, setIsDot] = useState<string>("false");
  const [isClosable, setIsClosable] = useState<string>("false");
  const [isDisabled, setIsDisabled] = useState<string>("false");

  const dot = isDot === "true";
  const attrs = [
    tone !== "primary" && `tone="${tone}"`,
    variant !== "soft" && `variant="${variant}"`,
    size !== "md" && `size="${size}"`,
    radius !== "full" && `radius="${radius}"`,
    icon === "true" && !dot && `icon={<Star size="sm" strokeWidth={2} />}`,
    dot && "isDot",
    isClosable === "true" && !dot && "isClosable",
    isClosable === "true" && !dot && `closeAriaLabel="${texts.remove} ${texts.label}"`,
    isDisabled === "true" && "isDisabled",
  ].filter(Boolean);

  const imports = icon === "true" && !dot ? `import { Star } from "@gem-org/gem-system/icons";\n` : "";
  const open = attrs.length > 0 ? `<Badge\n      ${attrs.join("\n      ")}\n    ` : "<Badge";
  const jsx = dot ? `${open}/>` : `${open}>\n      ${texts.label}\n    </Badge>`;

  const code = `import { Badge } from "@gem-org/gem-system";
${imports}
export function Example() {
  return (
    ${jsx}
  );
}`;

  const selects = [
    { id: "tone", value: tone, options: BADGE_TONES, onChange: pick(setTone) },
    { id: "variant", value: variant, options: BADGE_VARIANTS, onChange: pick(setVariant) },
    { id: "size", value: size, options: BADGE_SIZES, onChange: pick(setSize) },
    { id: "radius", value: radius, options: BADGE_RADII, onChange: pick(setRadius) },
    { id: "icon", value: icon, options: booleanOptions, onChange: pick(setIcon) },
    { id: "isDot", value: isDot, options: booleanOptions, onChange: pick(setIsDot) },
    { id: "isClosable", value: isClosable, options: booleanOptions, onChange: pick(setIsClosable) },
    { id: "isDisabled", value: isDisabled, options: booleanOptions, onChange: pick(setIsDisabled) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="badge-playground">
        {selects.map((select) => (
          <div key={select.id} className="badge-playground__field">
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
        <Badge
          tone={tone as (typeof BADGE_TONES)[number]}
          variant={variant as (typeof BADGE_VARIANTS)[number]}
          size={size as (typeof BADGE_SIZES)[number]}
          radius={radius as (typeof BADGE_RADII)[number]}
          icon={icon === "true" ? <Star size="sm" strokeWidth={2} /> : undefined}
          isDot={dot}
          isClosable={isClosable === "true"}
          closeAriaLabel={`${texts.remove} ${texts.label}`}
          isDisabled={isDisabled === "true"}
        >
          {dot ? undefined : texts.label}
        </Badge>
      </DemoBlock>
    </DocsSection>
  );
}
