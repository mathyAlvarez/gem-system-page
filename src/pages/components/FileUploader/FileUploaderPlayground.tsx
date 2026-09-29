import { useState } from "react";
import {
  FileUploader,
  Select,
  Switch,
  Typography,
  type FileUploaderBorder,
  type FileUploaderSize,
  type SelectValue,
} from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { fileUploaderBorders, fileUploaderSizes } from "./fileUploaderDocs.ts";

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

type Flags = {
  multiple: boolean;
  droppable: boolean;
  simulateUpload: boolean;
  isDisabled: boolean;
  isRequired: boolean;
};

const flagDefaults: Flags = {
  multiple: false,
  droppable: true,
  simulateUpload: true,
  isDisabled: false,
  isRequired: false,
};
const flagOrder = Object.keys(flagDefaults) as (keyof Flags)[];
const componentDefaults: Partial<Flags> = { droppable: true };

const pick =
  <T extends string>(setter: (value: T) => void) =>
  (value: SelectValue) => {
    if (typeof value === "string") setter(value as T);
  };

export function FileUploaderPlayground() {
  const { t } = useTranslation("fileUploader");
  const [size, setSize] = useState<FileUploaderSize>("md");
  const [border, setBorder] = useState<FileUploaderBorder>("default");
  const [flags, setFlags] = useState<Flags>(flagDefaults);

  const label = t("playground.label");
  const dropLabel = t("playground.dropLabel");
  const browseLabel = t("playground.browseLabel");
  const helperText = t("playground.helperText");

  const attrs = [
    `label=${JSON.stringify(label)}`,
    flags.droppable && `dropLabel=${JSON.stringify(dropLabel)}`,
    `browseLabel=${JSON.stringify(browseLabel)}`,
    `helperText=${JSON.stringify(helperText)}`,
    size !== "md" && `size="${size}"`,
    border !== "default" && `border="${border}"`,
    ...flagOrder
      .filter((flag) => flags[flag] !== (componentDefaults[flag] ?? false))
      .map((flag) => (flags[flag] ? flag : `${flag}={false}`)),
  ].filter(Boolean);

  const code = `import { FileUploader } from "@gem-org/gem-system";

export function Example() {
  return (
    <FileUploader
${attrs.map((attr) => `      ${attr}`).join("\n")}
    />
  );
}`;

  const selects = [
    { id: "size", value: size, options: fileUploaderSizes, onChange: pick<FileUploaderSize>(setSize) },
    { id: "border", value: border, options: fileUploaderBorders, onChange: pick<FileUploaderBorder>(setBorder) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="fileuploader-playground">
        {selects.map((select) => (
          <div key={select.id} className="fileuploader-playground__field">
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
        <div className="fileuploader-playground__flags">
          {flagOrder.map((flag) => (
            <Switch
              key={flag}
              size="sm"
              label={t(`playground.${flag}`)}
              checked={flags[flag]}
              onChange={(event) => setFlags((current) => ({ ...current, [flag]: event.target.checked }))}
            />
          ))}
        </div>
      </div>

      <DemoBlock code={code} label="Example.tsx" overflow>
        <div className="fileuploader-demo">
          <FileUploader
            key={flags.multiple ? "multiple" : "single"}
            label={label}
            dropLabel={dropLabel}
            browseLabel={browseLabel}
            helperText={helperText}
            size={size}
            border={border}
            {...flags}
          />
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
