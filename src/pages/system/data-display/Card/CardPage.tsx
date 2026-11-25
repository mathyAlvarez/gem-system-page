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
import { CardPlayground } from "./CardPlayground.tsx";
import { BaseCard } from "./examples/BaseCard.tsx";
import baseCode from "./examples/BaseCard.tsx?raw";
import { BorderShadowCard } from "./examples/BorderShadowCard.tsx";
import borderShadowCode from "./examples/BorderShadowCard.tsx?raw";
import overridesCss from "./examples/card-overrides.css?raw";
import { CompoundCard } from "./examples/CompoundCard.tsx";
import compoundCode from "./examples/CompoundCard.tsx?raw";
import { ControlledCard } from "./examples/ControlledCard.tsx";
import controlledCode from "./examples/ControlledCard.tsx?raw";
import { CustomHeaderCard } from "./examples/CustomHeaderCard.tsx";
import customHeaderCode from "./examples/CustomHeaderCard.tsx?raw";
import { ElevatedCard } from "./examples/ElevatedCard.tsx";
import elevatedCode from "./examples/ElevatedCard.tsx?raw";
import { ExpandableCard } from "./examples/ExpandableCard.tsx";
import expandableCode from "./examples/ExpandableCard.tsx?raw";
import { HeadingCard } from "./examples/HeadingCard.tsx";
import headingCode from "./examples/HeadingCard.tsx?raw";
import { ListCard } from "./examples/ListCard.tsx";
import listCode from "./examples/ListCard.tsx?raw";
import { MediaCard } from "./examples/MediaCard.tsx";
import mediaCode from "./examples/MediaCard.tsx?raw";
import { RadiusCard } from "./examples/RadiusCard.tsx";
import radiusCode from "./examples/RadiusCard.tsx?raw";
import { RoundedCard } from "./examples/RoundedCard.tsx";
import roundedCode from "./examples/RoundedCard.tsx?raw";
import { ShadowsCard } from "./examples/ShadowsCard.tsx";
import shadowsCode from "./examples/ShadowsCard.tsx?raw";
import { SizesCard } from "./examples/SizesCard.tsx";
import sizesCode from "./examples/SizesCard.tsx?raw";
import { StyledCard } from "./examples/StyledCard.tsx";
import styledCode from "./examples/StyledCard.tsx?raw";
import { TailwindCard } from "./examples/TailwindCard.tsx";
import tailwindCode from "./examples/TailwindCard.tsx?raw";
import { VariantCard } from "./examples/VariantCard.tsx";
import variantCode from "./examples/VariantCard.tsx?raw";
import "./CardPage.scss";

type StoryId =
  | "base"
  | "expandable"
  | "controlled"
  | "elevated"
  | "borderShadow"
  | "customHeader"
  | "compound"
  | "media"
  | "rounded"
  | "radius"
  | "sizes"
  | "shadows"
  | "heading"
  | "list";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

export function CardPage() {
  const { t } = useTranslation("card");
  const common = t("common", { returnObjects: true });
  const story = { returnObjects: true } as const;

  const stories: Story[] = [
    { id: "base", file: "BaseCard.tsx", code: baseCode, preview: <BaseCard common={common} /> },
    {
      id: "expandable",
      file: "ExpandableCard.tsx",
      code: expandableCode,
      preview: <ExpandableCard common={common} {...t("stories.expandable.texts", story)} />,
    },
    {
      id: "controlled",
      file: "ControlledCard.tsx",
      code: controlledCode,
      preview: <ControlledCard common={common} {...t("stories.controlled.texts", story)} />,
    },
    {
      id: "elevated",
      file: "ElevatedCard.tsx",
      code: elevatedCode,
      preview: <ElevatedCard {...t("stories.elevated.texts", story)} />,
    },
    {
      id: "borderShadow",
      file: "BorderShadowCard.tsx",
      code: borderShadowCode,
      preview: <BorderShadowCard {...t("stories.borderShadow.texts", story)} />,
    },
    {
      id: "customHeader",
      file: "CustomHeaderCard.tsx",
      code: customHeaderCode,
      preview: <CustomHeaderCard common={common} {...t("stories.customHeader.texts", story)} />,
    },
    {
      id: "compound",
      file: "CompoundCard.tsx",
      code: compoundCode,
      preview: <CompoundCard {...t("stories.compound.texts", story)} />,
    },
    {
      id: "media",
      file: "MediaCard.tsx",
      code: mediaCode,
      preview: <MediaCard {...t("stories.media.texts", story)} />,
    },
    {
      id: "rounded",
      file: "RoundedCard.tsx",
      code: roundedCode,
      preview: <RoundedCard {...t("stories.rounded.texts", story)} />,
    },
    {
      id: "radius",
      file: "RadiusCard.tsx",
      code: radiusCode,
      preview: <RadiusCard {...t("stories.radius.texts", story)} />,
    },
    {
      id: "sizes",
      file: "SizesCard.tsx",
      code: sizesCode,
      preview: <SizesCard {...t("stories.sizes.texts", story)} />,
    },
    {
      id: "shadows",
      file: "ShadowsCard.tsx",
      code: shadowsCode,
      preview: <ShadowsCard {...t("stories.shadows.texts", story)} />,
    },
    {
      id: "heading",
      file: "HeadingCard.tsx",
      code: headingCode,
      preview: <HeadingCard {...t("stories.heading.texts", story)} />,
    },
    {
      id: "list",
      file: "ListCard.tsx",
      code: listCode,
      preview: <ListCard {...t("stories.list.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Card } from "@gem-org/gem-system"'
      />

      <CardPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindCard.tsx">
            <TailwindCard common={common} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantCard.tsx">
            <VariantCard common={common} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="card-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledCard.tsx">
              <StyledCard {...t("styles.texts", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="Card"
        to="/system/data-display/card/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
