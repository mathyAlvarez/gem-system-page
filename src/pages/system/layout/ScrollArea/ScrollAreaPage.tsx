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
import { ScrollAreaPlayground } from "./ScrollAreaPlayground.tsx";
import { BaseScrollArea } from "./examples/BaseScrollArea.tsx";
import baseCode from "./examples/BaseScrollArea.tsx?raw";
import { BothScrollArea } from "./examples/BothScrollArea.tsx";
import bothCode from "./examples/BothScrollArea.tsx?raw";
import { CardScrollArea } from "./examples/CardScrollArea.tsx";
import cardCode from "./examples/CardScrollArea.tsx?raw";
import { FillParentScrollArea } from "./examples/FillParentScrollArea.tsx";
import fillParentCode from "./examples/FillParentScrollArea.tsx?raw";
import { HeightScrollArea } from "./examples/HeightScrollArea.tsx";
import heightCode from "./examples/HeightScrollArea.tsx?raw";
import { HorizontalScrollArea } from "./examples/HorizontalScrollArea.tsx";
import horizontalCode from "./examples/HorizontalScrollArea.tsx?raw";
import longCopyCode from "./examples/LongCopy.tsx?raw";
import { MobileScrollArea } from "./examples/MobileScrollArea.tsx";
import mobileCode from "./examples/MobileScrollArea.tsx?raw";
import overridesCss from "./examples/scroll-area-overrides.css?raw";
import demoCss from "./examples/scroll-demo.css?raw";
import { ScrollToScrollArea } from "./examples/ScrollToScrollArea.tsx";
import scrollToCode from "./examples/ScrollToScrollArea.tsx?raw";
import { SizesScrollArea } from "./examples/SizesScrollArea.tsx";
import sizesCode from "./examples/SizesScrollArea.tsx?raw";
import { StyledScrollAreas } from "./examples/StyledScrollAreas.tsx";
import styledCode from "./examples/StyledScrollAreas.tsx?raw";
import { TailwindScrollArea } from "./examples/TailwindScrollArea.tsx";
import tailwindCode from "./examples/TailwindScrollArea.tsx?raw";
import { TypesScrollArea } from "./examples/TypesScrollArea.tsx";
import typesCode from "./examples/TypesScrollArea.tsx?raw";
import { VariantScrollAreas } from "./examples/VariantScrollArea.tsx";
import variantCode from "./examples/VariantScrollArea.tsx?raw";
import "./ScrollAreaPage.scss";

type StoryId =
  | "base"
  | "horizontal"
  | "both"
  | "types"
  | "sizes"
  | "height"
  | "fillParent"
  | "card"
  | "scrollTo"
  | "mobile";

type Story = {
  id: StoryId;
  file: string;
  code: string;
  preview: ReactNode;
  extra?: ReactNode;
};

export function ScrollAreaPage() {
  const { t } = useTranslation("scrollArea");
  const texts = { returnObjects: true } as const;
  const paragraphs = t("paragraphs", texts);

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseScrollArea.tsx",
      code: baseCode,
      preview: <BaseScrollArea label={t("stories.base.label")} paragraphs={paragraphs} />,
      extra: (
        <>
          <CodeBlock code={longCopyCode} label="LongCopy.tsx" language="typescript" />
          <CodeBlock code={demoCss} label="scroll-demo.css" language="css" />
        </>
      ),
    },
    {
      id: "horizontal",
      file: "HorizontalScrollArea.tsx",
      code: horizontalCode,
      preview: <HorizontalScrollArea {...t("stories.horizontal.texts", texts)} />,
    },
    {
      id: "both",
      file: "BothScrollArea.tsx",
      code: bothCode,
      preview: <BothScrollArea label={t("stories.both.label")} paragraphs={paragraphs} />,
    },
    {
      id: "types",
      file: "TypesScrollArea.tsx",
      code: typesCode,
      preview: <TypesScrollArea paragraphs={paragraphs} />,
    },
    {
      id: "sizes",
      file: "SizesScrollArea.tsx",
      code: sizesCode,
      preview: <SizesScrollArea paragraphs={paragraphs} />,
    },
    {
      id: "height",
      file: "HeightScrollArea.tsx",
      code: heightCode,
      preview: <HeightScrollArea {...t("stories.height.texts", texts)} paragraphs={paragraphs} />,
    },
    {
      id: "fillParent",
      file: "FillParentScrollArea.tsx",
      code: fillParentCode,
      preview: <FillParentScrollArea {...t("stories.fillParent.texts", texts)} />,
    },
    {
      id: "card",
      file: "CardScrollArea.tsx",
      code: cardCode,
      preview: <CardScrollArea {...t("stories.card.texts", texts)} />,
    },
    {
      id: "scrollTo",
      file: "ScrollToScrollArea.tsx",
      code: scrollToCode,
      preview: (
        <ScrollToScrollArea {...t("stories.scrollTo.texts", texts)} paragraphs={paragraphs} />
      ),
    },
    {
      id: "mobile",
      file: "MobileScrollArea.tsx",
      code: mobileCode,
      preview: <MobileScrollArea label={t("stories.mobile.label")} paragraphs={paragraphs} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { ScrollArea } from "@gem-org/gem-system"'
      />

      <ScrollAreaPlayground />

      {stories.map((story) => (
        <DocsSection
          key={story.id}
          title={t(`stories.${story.id}.title`)}
          description={t(`stories.${story.id}.description`)}
        >
          {story.extra}
          <DemoBlock code={story.code} label={story.file} stack>
            {story.preview}
          </DemoBlock>
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindScrollArea.tsx" stack>
            <TailwindScrollArea label={t("styles.label")} paragraphs={paragraphs} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantScrollArea.tsx" stack>
            <VariantScrollAreas paragraphs={paragraphs} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="scroll-area-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledScrollAreas.tsx" stack>
              <StyledScrollAreas label={t("styles.codeLabel")} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="ScrollArea"
        to="/system/layout/scroll-area/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
