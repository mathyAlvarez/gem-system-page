import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { ApiLinkSection } from "../../../components/ApiLinkSection.tsx";
import { CodeBlock, DemoBlock, DocsPageHeader, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { StyleChangesSection } from "../../../components/StyleChangesSection.tsx";
import { BadgePlayground } from "./BadgePlayground.tsx";
import overridesCss from "./examples/badge-overrides.css?raw";
import { BaseBadge } from "./examples/BaseBadge.tsx";
import baseCode from "./examples/BaseBadge.tsx?raw";
import { ClosableBadge } from "./examples/ClosableBadge.tsx";
import closableCode from "./examples/ClosableBadge.tsx?raw";
import { ContentBadge } from "./examples/ContentBadge.tsx";
import contentCode from "./examples/ContentBadge.tsx?raw";
import { CountBadge } from "./examples/CountBadge.tsx";
import countCode from "./examples/CountBadge.tsx?raw";
import { DisabledBadge } from "./examples/DisabledBadge.tsx";
import disabledCode from "./examples/DisabledBadge.tsx?raw";
import { DotBadge } from "./examples/DotBadge.tsx";
import dotCode from "./examples/DotBadge.tsx?raw";
import { IconBadge } from "./examples/IconBadge.tsx";
import iconCode from "./examples/IconBadge.tsx?raw";
import { LiveCountBadge } from "./examples/LiveCountBadge.tsx";
import liveCountCode from "./examples/LiveCountBadge.tsx?raw";
import { OverlayBadge } from "./examples/OverlayBadge.tsx";
import overlayCode from "./examples/OverlayBadge.tsx?raw";
import { PlacementBadge } from "./examples/PlacementBadge.tsx";
import placementCode from "./examples/PlacementBadge.tsx?raw";
import { RadiusBadge } from "./examples/RadiusBadge.tsx";
import radiusCode from "./examples/RadiusBadge.tsx?raw";
import { SizesBadge } from "./examples/SizesBadge.tsx";
import sizesCode from "./examples/SizesBadge.tsx?raw";
import { StatusListBadge } from "./examples/StatusListBadge.tsx";
import statusListCode from "./examples/StatusListBadge.tsx?raw";
import { StyledBadge } from "./examples/StyledBadge.tsx";
import styledCode from "./examples/StyledBadge.tsx?raw";
import { TagBadge } from "./examples/TagBadge.tsx";
import tagCode from "./examples/TagBadge.tsx?raw";
import { TailwindBadge } from "./examples/TailwindBadge.tsx";
import tailwindCode from "./examples/TailwindBadge.tsx?raw";
import { TonesBadge } from "./examples/TonesBadge.tsx";
import tonesCode from "./examples/TonesBadge.tsx?raw";
import { VariantBadge } from "./examples/VariantBadge.tsx";
import variantCode from "./examples/VariantBadge.tsx?raw";
import { VariantsBadge } from "./examples/VariantsBadge.tsx";
import variantsCode from "./examples/VariantsBadge.tsx?raw";
import "./BadgePage.scss";

type StoryId =
  | "base"
  | "tones"
  | "variants"
  | "sizes"
  | "radius"
  | "icon"
  | "count"
  | "overlay"
  | "liveCount"
  | "content"
  | "placement"
  | "dot"
  | "statusList"
  | "closable"
  | "disabled"
  | "tag";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

export function BadgePage() {
  const { t } = useTranslation("badge");
  const story = { returnObjects: true } as const;

  const stories: Story[] = [
    { id: "base", file: "BaseBadge.tsx", code: baseCode, preview: <BaseBadge {...t("stories.base.texts", story)} /> },
    { id: "tones", file: "TonesBadge.tsx", code: tonesCode, preview: <TonesBadge /> },
    { id: "variants", file: "VariantsBadge.tsx", code: variantsCode, preview: <VariantsBadge /> },
    { id: "sizes", file: "SizesBadge.tsx", code: sizesCode, preview: <SizesBadge /> },
    { id: "radius", file: "RadiusBadge.tsx", code: radiusCode, preview: <RadiusBadge /> },
    { id: "icon", file: "IconBadge.tsx", code: iconCode, preview: <IconBadge {...t("stories.icon.texts", story)} /> },
    { id: "count", file: "CountBadge.tsx", code: countCode, preview: <CountBadge /> },
    {
      id: "overlay",
      file: "OverlayBadge.tsx",
      code: overlayCode,
      preview: <OverlayBadge {...t("stories.overlay.texts", story)} />,
    },
    {
      id: "liveCount",
      file: "LiveCountBadge.tsx",
      code: liveCountCode,
      preview: <LiveCountBadge {...t("stories.liveCount.texts", story)} />,
    },
    {
      id: "content",
      file: "ContentBadge.tsx",
      code: contentCode,
      preview: <ContentBadge {...t("stories.content.texts", story)} />,
    },
    {
      id: "placement",
      file: "PlacementBadge.tsx",
      code: placementCode,
      preview: <PlacementBadge {...t("stories.placement.texts", story)} />,
    },
    { id: "dot", file: "DotBadge.tsx", code: dotCode, preview: <DotBadge {...t("stories.dot.texts", story)} /> },
    {
      id: "statusList",
      file: "StatusListBadge.tsx",
      code: statusListCode,
      preview: <StatusListBadge {...t("stories.statusList.texts", story)} />,
    },
    {
      id: "closable",
      file: "ClosableBadge.tsx",
      code: closableCode,
      preview: <ClosableBadge {...t("stories.closable.texts", story)} />,
    },
    {
      id: "disabled",
      file: "DisabledBadge.tsx",
      code: disabledCode,
      preview: <DisabledBadge {...t("stories.disabled.texts", story)} />,
    },
    { id: "tag", file: "TagBadge.tsx", code: tagCode, preview: <TagBadge {...t("stories.tag.texts", story)} /> },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Badge } from "@gem-org/gem-system"'
      />

      <BadgePlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindBadge.tsx">
            <TailwindBadge {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantBadge.tsx">
            <VariantBadge {...t("styles.cva", story)} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="badge-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledBadge.tsx">
              <StyledBadge {...t("styles.css", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="Badge" to="/feedback/badge/api" linkLabel={t("apiLink")} />
    </div>
  );
}
