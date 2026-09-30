import { useState } from "react";
import {
  AspectRatio,
  Select,
  Typography,
  type AspectRatioObjectFit,
  type AspectRatioRadius,
  type SelectValue,
} from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { aspectObjectFits, aspectPresets, aspectRadii, BANNER_SRC, MARK_SRC } from "./aspectRatioDocs.ts";

const none = "—";
const ratioOptions = [...aspectPresets, "tcg", "1.618", "4/5"] as const;
const positionOptions = ["center", "top", "bottom", "left", "right"] as const;
const maxWidthOptions = [none, "240", "400", "60%"] as const;
const imageOptions = ["banner", "mark"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

const toMaxWidth = (value: string) => (value === none ? undefined : /^\d+$/.test(value) ? Number(value) : value);

export function AspectRatioPlayground() {
  const { t } = useTranslation("aspectRatio");
  const [ratio, setRatio] = useState("16:9");
  const [objectFit, setObjectFit] = useState<string>("cover");
  const [objectPosition, setObjectPosition] = useState<string>("center");
  const [radius, setRadius] = useState<string>("md");
  const [maxWidth, setMaxWidth] = useState<string>("400");
  const [image, setImage] = useState<string>("banner");

  const maxWidthValue = toMaxWidth(maxWidth);
  const src = image === "banner" ? BANNER_SRC : MARK_SRC;
  const alt = t(`alt.${image === "banner" ? "banner" : "mark"}`);

  const attrs = [
    ratio !== "16:9" && `ratio="${ratio}"`,
    objectFit !== "cover" && `objectFit="${objectFit}"`,
    objectPosition !== "center" && `objectPosition="${objectPosition}"`,
    radius !== "md" && `radius="${radius}"`,
    typeof maxWidthValue === "number" && `maxWidth={${maxWidthValue}}`,
    typeof maxWidthValue === "string" && `maxWidth="${maxWidthValue}"`,
  ].filter(Boolean);

  const code = `import { AspectRatio } from "@gem-org/gem-system";

export function Example() {
  return (
    <AspectRatio${attrs.length ? ` ${attrs.join(" ")}` : ""}>
      <img src="${src}" alt=${JSON.stringify(alt)} />
    </AspectRatio>
  );
}`;

  const selects = [
    { id: "ratio", value: ratio, options: ratioOptions, onChange: pick(setRatio) },
    { id: "objectFit", value: objectFit, options: aspectObjectFits, onChange: pick(setObjectFit) },
    { id: "objectPosition", value: objectPosition, options: positionOptions, onChange: pick(setObjectPosition) },
    { id: "radius", value: radius, options: aspectRadii, onChange: pick(setRadius) },
    { id: "maxWidth", value: maxWidth, options: maxWidthOptions, onChange: pick(setMaxWidth) },
    { id: "image", value: image, options: imageOptions, onChange: pick(setImage) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="aspect-playground">
        {selects.map((select) => (
          <div key={select.id} className="aspect-playground__field">
            <Typography variant="label">{t(`playground.${select.id}`)}</Typography>
            <Select
              aria-label={t(`playground.${select.id}`)}
              options={toOptions(select.options)}
              value={select.value}
              onChange={select.onChange}
              searchable={false}
            />
          </div>
        ))}
      </div>

      <DemoBlock code={code} label="Example.tsx" stack>
        <AspectRatio
          ratio={ratio}
          objectFit={objectFit as AspectRatioObjectFit}
          objectPosition={objectPosition}
          radius={radius as AspectRatioRadius}
          maxWidth={maxWidthValue}
        >
          <img src={src} alt={alt} />
        </AspectRatio>
      </DemoBlock>
    </DocsSection>
  );
}
