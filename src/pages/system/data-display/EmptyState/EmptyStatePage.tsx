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
import { EmptyStatePlayground } from "./EmptyStatePlayground.tsx";
import overridesCss from "./examples/empty-state-overrides.css?raw";
import { ActionsEmptyState } from "./examples/ActionsEmptyState.tsx";
import actionsCode from "./examples/ActionsEmptyState.tsx?raw";
import { BaseEmptyState } from "./examples/BaseEmptyState.tsx";
import baseCode from "./examples/BaseEmptyState.tsx?raw";
import { CardEmptyState } from "./examples/CardEmptyState.tsx";
import cardCode from "./examples/CardEmptyState.tsx?raw";
import { FilterEmptyState } from "./examples/FilterEmptyState.tsx";
import filterCode from "./examples/FilterEmptyState.tsx?raw";
import { IconEmptyState } from "./examples/IconEmptyState.tsx";
import iconCode from "./examples/IconEmptyState.tsx?raw";
import { ImageEmptyState } from "./examples/ImageEmptyState.tsx";
import imageCode from "./examples/ImageEmptyState.tsx?raw";
import { KindsEmptyState } from "./examples/KindsEmptyState.tsx";
import kindsCode from "./examples/KindsEmptyState.tsx?raw";
import { SearchEmptyState } from "./examples/SearchEmptyState.tsx";
import searchCode from "./examples/SearchEmptyState.tsx?raw";
import { SizesEmptyState } from "./examples/SizesEmptyState.tsx";
import sizesCode from "./examples/SizesEmptyState.tsx?raw";
import { StartEmptyState } from "./examples/StartEmptyState.tsx";
import startCode from "./examples/StartEmptyState.tsx?raw";
import { StyledEmptyState } from "./examples/StyledEmptyState.tsx";
import styledCode from "./examples/StyledEmptyState.tsx?raw";
import { TailwindEmptyState } from "./examples/TailwindEmptyState.tsx";
import tailwindCode from "./examples/TailwindEmptyState.tsx?raw";
import { VariantEmptyState } from "./examples/VariantEmptyState.tsx";
import variantCode from "./examples/VariantEmptyState.tsx?raw";
import "./EmptyStatePage.scss";

type StoryId =
  | "base"
  | "kinds"
  | "actions"
  | "filter"
  | "sizes"
  | "start"
  | "icon"
  | "image"
  | "card"
  | "search";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

export function EmptyStatePage() {
  const { t } = useTranslation("emptyState");
  const story = { returnObjects: true } as const;

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseEmptyState.tsx",
      code: baseCode,
      preview: <BaseEmptyState {...t("stories.base.texts", story)} />,
    },
    {
      id: "kinds",
      file: "KindsEmptyState.tsx",
      code: kindsCode,
      preview: <KindsEmptyState {...t("stories.kinds.texts", story)} />,
    },
    {
      id: "actions",
      file: "ActionsEmptyState.tsx",
      code: actionsCode,
      preview: <ActionsEmptyState {...t("stories.actions.texts", story)} />,
    },
    {
      id: "filter",
      file: "FilterEmptyState.tsx",
      code: filterCode,
      preview: <FilterEmptyState {...t("stories.filter.texts", story)} />,
    },
    {
      id: "sizes",
      file: "SizesEmptyState.tsx",
      code: sizesCode,
      preview: <SizesEmptyState {...t("stories.sizes.texts", story)} />,
    },
    {
      id: "start",
      file: "StartEmptyState.tsx",
      code: startCode,
      preview: <StartEmptyState {...t("stories.start.texts", story)} />,
    },
    {
      id: "icon",
      file: "IconEmptyState.tsx",
      code: iconCode,
      preview: <IconEmptyState {...t("stories.icon.texts", story)} />,
    },
    {
      id: "image",
      file: "ImageEmptyState.tsx",
      code: imageCode,
      preview: <ImageEmptyState {...t("stories.image.texts", story)} />,
    },
    {
      id: "card",
      file: "CardEmptyState.tsx",
      code: cardCode,
      preview: <CardEmptyState {...t("stories.card.texts", story)} />,
    },
    {
      id: "search",
      file: "SearchEmptyState.tsx",
      code: searchCode,
      preview: <SearchEmptyState {...t("stories.search.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { EmptyState } from "@gem-org/gem-system"'
      />

      <EmptyStatePlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindEmptyState.tsx">
            <TailwindEmptyState {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantEmptyState.tsx">
            <VariantEmptyState {...t("styles.cva", story)} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="empty-state-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledEmptyState.tsx">
              <StyledEmptyState {...t("styles.css", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="EmptyState"
        to="/system/data-display/empty-state/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
