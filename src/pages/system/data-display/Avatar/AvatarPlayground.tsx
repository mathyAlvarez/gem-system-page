import { useState } from "react";
import { Avatar, Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import {
  AVATAR_RADII,
  AVATAR_SIZES,
  AVATAR_STATUS_POSITIONS,
  AVATAR_STATUSES,
  AVATAR_TONES,
  PHOTO,
  type AvatarStatusKey,
} from "./examples/demo.ts";
import "./examples/avatar-demo.css";

const booleanOptions = ["true", "false"] as const;
const contentOptions = ["image", "initials", "icon"] as const;
const toneOptions = ["auto", ...AVATAR_TONES] as const;
const statusOptions = ["none", ...AVATAR_STATUSES] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

export function AvatarPlayground() {
  const { t } = useTranslation("avatar");
  const common = t("common", { returnObjects: true });
  const unknown = t("playground.unknown");
  const [content, setContent] = useState<string>("image");
  const [size, setSize] = useState<string>("lg");
  const [radius, setRadius] = useState<string>("full");
  const [tone, setTone] = useState<string>("auto");
  const [status, setStatus] = useState<string>("none");
  const [statusPosition, setStatusPosition] = useState<string>("right");
  const [bordered, setBordered] = useState<string>("false");

  const name = content === "icon" ? undefined : "Amina Costa";
  const statusLabel = status === "none" ? undefined : common.statuses[status as AvatarStatusKey];
  const ariaLabel = [name ?? unknown, statusLabel].filter(Boolean).join(", ");
  const needsLabel = content === "icon" || statusLabel !== undefined;

  const attrs = [
    content === "image" && `src="${PHOTO}"`,
    name && `name="${name}"`,
    size !== "md" && `size="${size}"`,
    radius !== "full" && `radius="${radius}"`,
    tone !== "auto" && `tone="${tone}"`,
    status !== "none" && `status="${status}"`,
    status !== "none" && statusPosition !== "right" && `statusPosition="${statusPosition}"`,
    bordered === "true" && "bordered",
    needsLabel && 'role="img"',
    needsLabel && `aria-label="${ariaLabel}"`,
  ].filter(Boolean);

  const code = `import { Avatar } from "@gem-org/gem-system";

<Avatar
  ${attrs.join("\n  ")}
/>`;

  const selects = [
    { id: "content", value: content, options: contentOptions, onChange: pick(setContent) },
    { id: "size", value: size, options: AVATAR_SIZES, onChange: pick(setSize) },
    { id: "radius", value: radius, options: AVATAR_RADII, onChange: pick(setRadius) },
    { id: "tone", value: tone, options: toneOptions, onChange: pick(setTone) },
    { id: "status", value: status, options: statusOptions, onChange: pick(setStatus) },
    {
      id: "statusPosition",
      value: statusPosition,
      options: AVATAR_STATUS_POSITIONS,
      onChange: pick(setStatusPosition),
    },
    { id: "bordered", value: bordered, options: booleanOptions, onChange: pick(setBordered) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="avatar-playground">
        {selects.map((select) => (
          <div key={select.id} className="avatar-playground__field">
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
        <div className="avatar-row">
          <Avatar
            src={content === "image" ? PHOTO : undefined}
            name={name}
            size={size as (typeof AVATAR_SIZES)[number]}
            radius={radius as (typeof AVATAR_RADII)[number]}
            tone={tone === "auto" ? undefined : (tone as (typeof AVATAR_TONES)[number])}
            status={status === "none" ? undefined : (status as AvatarStatusKey)}
            statusPosition={statusPosition as (typeof AVATAR_STATUS_POSITIONS)[number]}
            bordered={bordered === "true"}
            role={needsLabel ? "img" : undefined}
            aria-label={needsLabel ? ariaLabel : undefined}
          />
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
