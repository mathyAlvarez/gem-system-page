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
import { TimelinePlayground } from "./TimelinePlayground.tsx";
import overridesCss from "./examples/timeline-overrides.css?raw";
import { AlternateTimeline } from "./examples/AlternateTimeline.tsx";
import alternateCode from "./examples/AlternateTimeline.tsx?raw";
import { BaseTimeline } from "./examples/BaseTimeline.tsx";
import baseCode from "./examples/BaseTimeline.tsx?raw";
import { CardTimeline } from "./examples/CardTimeline.tsx";
import cardCode from "./examples/CardTimeline.tsx?raw";
import { DatesTimeline } from "./examples/DatesTimeline.tsx";
import datesCode from "./examples/DatesTimeline.tsx?raw";
import { EndTimeline } from "./examples/EndTimeline.tsx";
import endCode from "./examples/EndTimeline.tsx?raw";
import { IconsTimeline } from "./examples/IconsTimeline.tsx";
import iconsCode from "./examples/IconsTimeline.tsx?raw";
import { PendingTimeline } from "./examples/PendingTimeline.tsx";
import pendingCode from "./examples/PendingTimeline.tsx?raw";
import { ReverseTimeline } from "./examples/ReverseTimeline.tsx";
import reverseCode from "./examples/ReverseTimeline.tsx?raw";
import { RichTitleTimeline } from "./examples/RichTitleTimeline.tsx";
import richTitleCode from "./examples/RichTitleTimeline.tsx?raw";
import { SizesTimeline } from "./examples/SizesTimeline.tsx";
import sizesCode from "./examples/SizesTimeline.tsx?raw";
import { StyledTimeline } from "./examples/StyledTimeline.tsx";
import styledCode from "./examples/StyledTimeline.tsx?raw";
import { TailwindTimeline } from "./examples/TailwindTimeline.tsx";
import tailwindCode from "./examples/TailwindTimeline.tsx?raw";
import { TonesTimeline } from "./examples/TonesTimeline.tsx";
import tonesCode from "./examples/TonesTimeline.tsx?raw";
import { VariantTimeline } from "./examples/VariantTimeline.tsx";
import variantCode from "./examples/VariantTimeline.tsx?raw";
import type { ActivityCopy } from "./examples/activity.tsx";
import type { OrderCopy } from "./examples/demo.ts";
import "./TimelinePage.scss";

type StoryId =
  | "base"
  | "icons"
  | "tones"
  | "end"
  | "alternate"
  | "reverse"
  | "pending"
  | "sizes"
  | "dates"
  | "richTitle"
  | "card";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

export function TimelinePage() {
  const { t, i18n } = useTranslation("timeline");
  const story = { returnObjects: true } as const;
  const order = t("common.order", story) as OrderCopy;
  const activity = t("common.activity", story) as ActivityCopy;

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseTimeline.tsx",
      code: baseCode,
      preview: <BaseTimeline order={order} />,
    },
    {
      id: "icons",
      file: "IconsTimeline.tsx",
      code: iconsCode,
      preview: <IconsTimeline activity={activity} />,
    },
    {
      id: "tones",
      file: "TonesTimeline.tsx",
      code: tonesCode,
      preview: <TonesTimeline {...t("stories.tones.texts", story)} />,
    },
    { id: "end", file: "EndTimeline.tsx", code: endCode, preview: <EndTimeline order={order} /> },
    {
      id: "alternate",
      file: "AlternateTimeline.tsx",
      code: alternateCode,
      preview: <AlternateTimeline order={order} />,
    },
    {
      id: "reverse",
      file: "ReverseTimeline.tsx",
      code: reverseCode,
      preview: <ReverseTimeline order={order} />,
    },
    {
      id: "pending",
      file: "PendingTimeline.tsx",
      code: pendingCode,
      preview: <PendingTimeline order={order} {...t("stories.pending.texts", story)} />,
    },
    {
      id: "sizes",
      file: "SizesTimeline.tsx",
      code: sizesCode,
      preview: <SizesTimeline order={order} label={t("stories.sizes.texts.label")} />,
    },
    {
      id: "dates",
      file: "DatesTimeline.tsx",
      code: datesCode,
      preview: <DatesTimeline locale={i18n.language} {...t("stories.dates.texts", story)} />,
    },
    {
      id: "richTitle",
      file: "RichTitleTimeline.tsx",
      code: richTitleCode,
      preview: <RichTitleTimeline {...t("stories.richTitle.texts", story)} />,
    },
    {
      id: "card",
      file: "CardTimeline.tsx",
      code: cardCode,
      preview: <CardTimeline activity={activity} title={t("stories.card.texts.title")} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Timeline } from "@gem-org/gem-system"'
      />

      <TimelinePlayground order={order} pendingLabel={t("playground.pendingLabel")} />

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
          <DemoBlock code={tailwindCode} label="TailwindTimeline.tsx">
            <TailwindTimeline order={order} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantTimeline.tsx">
            <VariantTimeline order={order} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="timeline-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledTimeline.tsx">
              <StyledTimeline order={order} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="Timeline"
        to="/system/data-display/timeline/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
