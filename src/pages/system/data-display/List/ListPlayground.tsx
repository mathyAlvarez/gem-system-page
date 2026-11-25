import { useState } from "react";
import {
  Avatar,
  List,
  Select,
  Typography,
  type ListItem,
  type SelectValue,
} from "@gem-org/gem-system";
import { Folder as FolderIcon } from "@gem-org/gem-system/icons";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { LIST_RADII, LIST_SIZES, type Folder } from "./examples/demo.ts";
import "./examples/list-demo.css";

const booleanOptions = ["true", "false"] as const;
const contentOptions = ["text", "icon", "description", "avatar"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

export function ListPlayground() {
  const { t } = useTranslation("list");
  const folders = t("common.folders", { returnObjects: true }) as Folder[];
  const [content, setContent] = useState<string>("description");
  const [size, setSize] = useState<string>("md");
  const [radius, setRadius] = useState<string>("md");
  const [bordered, setBordered] = useState<string>("true");
  const [divided, setDivided] = useState<string>("false");
  const [disablePadding, setDisablePadding] = useState<string>("false");
  const [disableGutters, setDisableGutters] = useState<string>("false");
  const [isDisabled, setIsDisabled] = useState<string>("false");
  const [value, setValue] = useState<string>(folders[0].id);

  const items: ListItem[] = folders.map((folder) => ({
    id: folder.id,
    label: folder.label,
    description: content === "description" || content === "avatar" ? folder.description : undefined,
    icon: content === "icon" || content === "description" ? <FolderIcon size="sm" /> : undefined,
    avatar: content === "avatar" ? <Avatar name={folder.label} size="sm" alt="" /> : undefined,
  }));

  const itemLines = folders.map((folder) => {
    const parts = [`id: "${folder.id}"`, `label: "${folder.label}"`];
    if (content === "description" || content === "avatar")
      parts.push(`description: "${folder.description}"`);
    if (content === "icon" || content === "description") parts.push('icon: <Folder size="sm" />');
    if (content === "avatar")
      parts.push(`avatar: <Avatar name="${folder.label}" size="sm" alt="" />`);
    return `    { ${parts.join(", ")} },`;
  });

  const attrs = [
    size !== "md" && `size="${size}"`,
    bordered === "true" && "bordered",
    bordered === "true" && radius !== "md" && `radius="${radius}"`,
    divided === "true" && "divided",
    disablePadding === "true" && "disablePadding",
    disableGutters === "true" && "disableGutters",
    isDisabled === "true" && "isDisabled",
    "value={value}",
    "onChange={(id) => setValue(id)}",
  ].filter(Boolean);

  const code = `import { List } from "@gem-org/gem-system";

<List
  ${attrs.join("\n  ")}
  items={[
${itemLines.join("\n")}
  ]}
/>`;

  const selects = [
    { id: "content", value: content, options: contentOptions, onChange: pick(setContent) },
    { id: "size", value: size, options: LIST_SIZES, onChange: pick(setSize) },
    { id: "radius", value: radius, options: LIST_RADII, onChange: pick(setRadius) },
    { id: "bordered", value: bordered, options: booleanOptions, onChange: pick(setBordered) },
    { id: "divided", value: divided, options: booleanOptions, onChange: pick(setDivided) },
    {
      id: "disablePadding",
      value: disablePadding,
      options: booleanOptions,
      onChange: pick(setDisablePadding),
    },
    {
      id: "disableGutters",
      value: disableGutters,
      options: booleanOptions,
      onChange: pick(setDisableGutters),
    },
    { id: "isDisabled", value: isDisabled, options: booleanOptions, onChange: pick(setIsDisabled) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="list-playground">
        {selects.map((select) => (
          <div key={select.id} className="list-playground__field">
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
        <div className="list-demo">
          <List
            size={size as (typeof LIST_SIZES)[number]}
            radius={radius as (typeof LIST_RADII)[number]}
            bordered={bordered === "true"}
            divided={divided === "true"}
            disablePadding={disablePadding === "true"}
            disableGutters={disableGutters === "true"}
            isDisabled={isDisabled === "true"}
            value={value}
            onChange={(id) => setValue(id)}
            items={items}
          />
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
