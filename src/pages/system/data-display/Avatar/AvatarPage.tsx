import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { ApiLinkSection } from "../../../../components/ApiLinkSection.tsx";
import {
  CodeBlock,
  DemoBlock,
  DocsPageHeader,
  DocsSection,
} from "../../../../components/DocsPrimitives.tsx";
import { StyleChangesSection } from "../../../../components/StyleChangesSection.tsx";
import { AvatarPlayground } from "./AvatarPlayground.tsx";
import overridesCss from "./examples/avatar-overrides.css?raw";
import { BaseAvatar } from "./examples/BaseAvatar.tsx";
import baseCode from "./examples/BaseAvatar.tsx?raw";
import { BrokenAvatar } from "./examples/BrokenAvatar.tsx";
import brokenCode from "./examples/BrokenAvatar.tsx?raw";
import { GroupAvatar } from "./examples/GroupAvatar.tsx";
import groupCode from "./examples/GroupAvatar.tsx?raw";
import { HelpersAvatar } from "./examples/HelpersAvatar.tsx";
import helpersCode from "./examples/HelpersAvatar.tsx?raw";
import { IconAvatar } from "./examples/IconAvatar.tsx";
import iconCode from "./examples/IconAvatar.tsx?raw";
import { InitialsAvatar } from "./examples/InitialsAvatar.tsx";
import initialsCode from "./examples/InitialsAvatar.tsx?raw";
import { PersonAvatar } from "./examples/PersonAvatar.tsx";
import personCode from "./examples/PersonAvatar.tsx?raw";
import { RadiusAvatar } from "./examples/RadiusAvatar.tsx";
import radiusCode from "./examples/RadiusAvatar.tsx?raw";
import { SizesAvatar } from "./examples/SizesAvatar.tsx";
import sizesCode from "./examples/SizesAvatar.tsx?raw";
import { StatusAvatar } from "./examples/StatusAvatar.tsx";
import statusCode from "./examples/StatusAvatar.tsx?raw";
import { StyledAvatar } from "./examples/StyledAvatar.tsx";
import styledCode from "./examples/StyledAvatar.tsx?raw";
import { TailwindAvatar } from "./examples/TailwindAvatar.tsx";
import tailwindCode from "./examples/TailwindAvatar.tsx?raw";
import { TonesAvatar } from "./examples/TonesAvatar.tsx";
import tonesCode from "./examples/TonesAvatar.tsx?raw";
import { TooltipAvatar } from "./examples/TooltipAvatar.tsx";
import tooltipCode from "./examples/TooltipAvatar.tsx?raw";
import { VariantAvatar } from "./examples/VariantAvatar.tsx";
import variantCode from "./examples/VariantAvatar.tsx?raw";
import "./AvatarPage.scss";

type StoryId =
  | "base"
  | "initials"
  | "icon"
  | "sizes"
  | "tones"
  | "radius"
  | "status"
  | "broken"
  | "group"
  | "tooltip"
  | "person"
  | "helpers";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

export function AvatarPage() {
  const { t } = useTranslation("avatar");
  const common = t("common", { returnObjects: true });
  const story = { returnObjects: true } as const;
  const unknown = t("stories.icon.texts.unknown");

  const stories: Story[] = [
    { id: "base", file: "BaseAvatar.tsx", code: baseCode, preview: <BaseAvatar /> },
    { id: "initials", file: "InitialsAvatar.tsx", code: initialsCode, preview: <InitialsAvatar /> },
    {
      id: "icon",
      file: "IconAvatar.tsx",
      code: iconCode,
      preview: <IconAvatar {...t("stories.icon.texts", story)} />,
    },
    {
      id: "sizes",
      file: "SizesAvatar.tsx",
      code: sizesCode,
      preview: <SizesAvatar unknown={unknown} />,
    },
    { id: "tones", file: "TonesAvatar.tsx", code: tonesCode, preview: <TonesAvatar /> },
    { id: "radius", file: "RadiusAvatar.tsx", code: radiusCode, preview: <RadiusAvatar /> },
    {
      id: "status",
      file: "StatusAvatar.tsx",
      code: statusCode,
      preview: <StatusAvatar common={common} />,
    },
    {
      id: "broken",
      file: "BrokenAvatar.tsx",
      code: brokenCode,
      preview: <BrokenAvatar unknown={unknown} />,
    },
    {
      id: "group",
      file: "GroupAvatar.tsx",
      code: groupCode,
      preview: <GroupAvatar common={common} {...t("stories.group.texts", story)} />,
    },
    {
      id: "tooltip",
      file: "TooltipAvatar.tsx",
      code: tooltipCode,
      preview: <TooltipAvatar common={common} {...t("stories.tooltip.texts", story)} />,
    },
    {
      id: "person",
      file: "PersonAvatar.tsx",
      code: personCode,
      preview: <PersonAvatar common={common} />,
    },
    {
      id: "helpers",
      file: "HelpersAvatar.tsx",
      code: helpersCode,
      preview: <HelpersAvatar {...t("stories.helpers.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Avatar, AvatarGroup } from "@gem-org/gem-system"'
      />

      <AvatarPlayground />

      {stories.map((item) => (
        <DocsSection
          key={item.id}
          title={t(`stories.${item.id}.title`)}
          description={t(`stories.${item.id}.description`)}
        >
          <DemoBlock code={item.code} label={item.file}>
            {item.preview}
          </DemoBlock>
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindAvatar.tsx">
            <TailwindAvatar />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantAvatar.tsx">
            <VariantAvatar />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="avatar-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledAvatar.tsx">
              <StyledAvatar common={common} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="Avatar"
        to="/system/data-display/avatar/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
