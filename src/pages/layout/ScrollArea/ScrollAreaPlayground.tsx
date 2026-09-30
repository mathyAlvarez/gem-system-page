import { useState } from "react";
import {
  ScrollArea,
  Select,
  Typography,
  type ScrollAreaOrientation,
  type ScrollAreaRadius,
  type ScrollAreaSize,
  type ScrollAreaType,
  type SelectValue,
} from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { LongCopy } from "./examples/LongCopy.tsx";
import { scrollOrientations, scrollRadii, scrollSizes, scrollTypes } from "./scrollAreaDocs.ts";

const maxHeightOptions = ["160", "240", "320", "50vh"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

const toLength = (value: string) => (/^\d+$/.test(value) ? Number(value) : value);

export function ScrollAreaPlayground() {
  const { t } = useTranslation("scrollArea");
  const [orientation, setOrientation] = useState<string>("vertical");
  const [type, setType] = useState<string>("auto");
  const [size, setSize] = useState<string>("md");
  const [radius, setRadius] = useState<string>("md");
  const [maxHeight, setMaxHeight] = useState<string>("240");

  const paragraphs = t("paragraphs", { returnObjects: true });
  const label = t("playground.label");
  const maxHeightValue = toLength(maxHeight);
  const wide = orientation !== "vertical";

  const attrs = [
    orientation !== "vertical" && `orientation="${orientation}"`,
    type !== "auto" && `type="${type}"`,
    size !== "md" && `size="${size}"`,
    radius !== "md" && `radius="${radius}"`,
    typeof maxHeightValue === "number" ? `maxHeight={${maxHeightValue}}` : `maxHeight="${maxHeightValue}"`,
    `label="${label}"`,
  ].filter(Boolean);

  const code = `import { ScrollArea } from "@gem-org/gem-system";

export function Example() {
  return (
    <ScrollArea ${attrs.join(" ")}>
      ${wide ? '<div style={{ width: "48rem" }}>{content}</div>' : "{content}"}
    </ScrollArea>
  );
}`;

  const selects = [
    { id: "orientation", value: orientation, options: scrollOrientations, onChange: pick(setOrientation) },
    { id: "type", value: type, options: scrollTypes, onChange: pick(setType) },
    { id: "size", value: size, options: scrollSizes, onChange: pick(setSize) },
    { id: "radius", value: radius, options: scrollRadii, onChange: pick(setRadius) },
    { id: "maxHeight", value: maxHeight, options: maxHeightOptions, onChange: pick(setMaxHeight) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="scroll-playground">
        {selects.map((select) => (
          <div key={select.id} className="scroll-playground__field">
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
        <div className="scroll-frame w-full">
          <ScrollArea
            orientation={orientation as ScrollAreaOrientation}
            type={type as ScrollAreaType}
            size={size as ScrollAreaSize}
            radius={radius as ScrollAreaRadius}
            maxHeight={maxHeightValue}
            maxWidth="100%"
            label={label}
          >
            <div className={wide ? "scroll-sheet" : undefined}>
              <LongCopy paragraphs={paragraphs} />
            </div>
          </ScrollArea>
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
