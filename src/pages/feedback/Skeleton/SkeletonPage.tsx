import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { ApiLinkSection } from "../../../components/ApiLinkSection.tsx";
import { CodeBlock, DemoBlock, DocsPageHeader, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { StyleChangesSection } from "../../../components/StyleChangesSection.tsx";
import { SkeletonPlayground } from "./SkeletonPlayground.tsx";
import { AnimationsSkeleton } from "./examples/AnimationsSkeleton.tsx";
import animationsCode from "./examples/AnimationsSkeleton.tsx?raw";
import { BaseSkeleton } from "./examples/BaseSkeleton.tsx";
import baseCode from "./examples/BaseSkeleton.tsx?raw";
import { CardSkeleton } from "./examples/CardSkeleton.tsx";
import cardCode from "./examples/CardSkeleton.tsx?raw";
import { CustomSizeSkeleton } from "./examples/CustomSizeSkeleton.tsx";
import customSizeCode from "./examples/CustomSizeSkeleton.tsx?raw";
import { DisabledSkeleton } from "./examples/DisabledSkeleton.tsx";
import disabledCode from "./examples/DisabledSkeleton.tsx?raw";
import { FitSkeleton } from "./examples/FitSkeleton.tsx";
import fitCode from "./examples/FitSkeleton.tsx?raw";
import { ListSkeleton } from "./examples/ListSkeleton.tsx";
import listCode from "./examples/ListSkeleton.tsx?raw";
import { LoadedSkeleton } from "./examples/LoadedSkeleton.tsx";
import loadedCode from "./examples/LoadedSkeleton.tsx?raw";
import { RadiusSkeleton } from "./examples/RadiusSkeleton.tsx";
import radiusCode from "./examples/RadiusSkeleton.tsx?raw";
import overridesCss from "./examples/skeleton-overrides.css?raw";
import { StyledSkeleton } from "./examples/StyledSkeleton.tsx";
import styledCode from "./examples/StyledSkeleton.tsx?raw";
import { TailwindSkeleton } from "./examples/TailwindSkeleton.tsx";
import tailwindCode from "./examples/TailwindSkeleton.tsx?raw";
import { TextLinesSkeleton } from "./examples/TextLinesSkeleton.tsx";
import textLinesCode from "./examples/TextLinesSkeleton.tsx?raw";
import { VariantSkeleton } from "./examples/VariantSkeleton.tsx";
import variantCode from "./examples/VariantSkeleton.tsx?raw";
import { VariantsSkeleton } from "./examples/VariantsSkeleton.tsx";
import variantsCode from "./examples/VariantsSkeleton.tsx?raw";
import "./SkeletonPage.scss";

type StoryId =
  | "base"
  | "variants"
  | "textLines"
  | "animations"
  | "radius"
  | "customSize"
  | "card"
  | "loaded"
  | "fit"
  | "list"
  | "disabled";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

export function SkeletonPage() {
  const { t } = useTranslation("skeleton");
  const ariaLabel = t("common.ariaLabel");
  const story = { returnObjects: true } as const;

  const stories: Story[] = [
    { id: "base", file: "BaseSkeleton.tsx", code: baseCode, preview: <BaseSkeleton ariaLabel={ariaLabel} /> },
    {
      id: "variants",
      file: "VariantsSkeleton.tsx",
      code: variantsCode,
      preview: <VariantsSkeleton ariaLabel={ariaLabel} />,
    },
    {
      id: "textLines",
      file: "TextLinesSkeleton.tsx",
      code: textLinesCode,
      preview: <TextLinesSkeleton ariaLabel={ariaLabel} />,
    },
    {
      id: "animations",
      file: "AnimationsSkeleton.tsx",
      code: animationsCode,
      preview: <AnimationsSkeleton ariaLabel={ariaLabel} />,
    },
    { id: "radius", file: "RadiusSkeleton.tsx", code: radiusCode, preview: <RadiusSkeleton ariaLabel={ariaLabel} /> },
    {
      id: "customSize",
      file: "CustomSizeSkeleton.tsx",
      code: customSizeCode,
      preview: <CustomSizeSkeleton ariaLabel={ariaLabel} />,
    },
    {
      id: "card",
      file: "CardSkeleton.tsx",
      code: cardCode,
      preview: <CardSkeleton {...t("stories.card.texts", story)} />,
    },
    {
      id: "loaded",
      file: "LoadedSkeleton.tsx",
      code: loadedCode,
      preview: <LoadedSkeleton {...t("stories.loaded.texts", story)} />,
    },
    {
      id: "fit",
      file: "FitSkeleton.tsx",
      code: fitCode,
      preview: <FitSkeleton {...t("stories.fit.texts", story)} />,
    },
    {
      id: "list",
      file: "ListSkeleton.tsx",
      code: listCode,
      preview: <ListSkeleton {...t("stories.list.texts", story)} />,
    },
    {
      id: "disabled",
      file: "DisabledSkeleton.tsx",
      code: disabledCode,
      preview: <DisabledSkeleton ariaLabel={ariaLabel} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Skeleton } from "@gem-org/gem-system"'
      />

      <SkeletonPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindSkeleton.tsx">
            <TailwindSkeleton ariaLabel={ariaLabel} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantSkeleton.tsx">
            <VariantSkeleton ariaLabel={ariaLabel} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="skeleton-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledSkeleton.tsx">
              <StyledSkeleton ariaLabel={ariaLabel} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="Skeleton" to="/feedback/skeleton/api" linkLabel={t("apiLink")} />
    </div>
  );
}
