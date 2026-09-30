import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { ApiLinkSection } from "../../../components/ApiLinkSection.tsx";
import { CodeBlock, DemoBlock, DocsPageHeader, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { StyleChangesSection } from "../../../components/StyleChangesSection.tsx";
import { BlockUiPlayground } from "./BlockUiPlayground.tsx";
import { AsyncBlockUi } from "./examples/AsyncBlockUi.tsx";
import asyncCode from "./examples/AsyncBlockUi.tsx?raw";
import { BaseBlockUi } from "./examples/BaseBlockUi.tsx";
import baseCode from "./examples/BaseBlockUi.tsx?raw";
import overridesCss from "./examples/block-ui-overrides.css?raw";
import { ContentBlockUi } from "./examples/ContentBlockUi.tsx";
import contentCode from "./examples/ContentBlockUi.tsx?raw";
import { OpacityBlockUi } from "./examples/OpacityBlockUi.tsx";
import opacityCode from "./examples/OpacityBlockUi.tsx?raw";
import { OverlayBlockUi } from "./examples/OverlayBlockUi.tsx";
import overlayCode from "./examples/OverlayBlockUi.tsx?raw";
import { StyledBlockUi } from "./examples/StyledBlockUi.tsx";
import styledCode from "./examples/StyledBlockUi.tsx?raw";
import { TailwindBlockUi } from "./examples/TailwindBlockUi.tsx";
import tailwindCode from "./examples/TailwindBlockUi.tsx?raw";
import { VariantBlockUi } from "./examples/VariantBlockUi.tsx";
import variantCode from "./examples/VariantBlockUi.tsx?raw";
import "./BlockUiPage.scss";

type StoryId = "base" | "overlay" | "content" | "opacity" | "async";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

export function BlockUiPage() {
  const { t } = useTranslation("blockUi");
  const texts = t("demo", { returnObjects: true });
  const story = { returnObjects: true } as const;

  const stories: Story[] = [
    { id: "base", file: "BaseBlockUi.tsx", code: baseCode, preview: <BaseBlockUi texts={texts} /> },
    {
      id: "overlay",
      file: "OverlayBlockUi.tsx",
      code: overlayCode,
      preview: <OverlayBlockUi loading={texts.loading} {...t("stories.overlay.texts", story)} />,
    },
    {
      id: "content",
      file: "ContentBlockUi.tsx",
      code: contentCode,
      preview: <ContentBlockUi {...t("stories.content.texts", story)} />,
    },
    {
      id: "opacity",
      file: "OpacityBlockUi.tsx",
      code: opacityCode,
      preview: <OpacityBlockUi {...t("stories.opacity.texts", story)} />,
    },
    {
      id: "async",
      file: "AsyncBlockUi.tsx",
      code: asyncCode,
      preview: <AsyncBlockUi {...t("stories.async.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { BlockUi } from "@gem-org/gem-system"'
      />

      <BlockUiPlayground />

      {stories.map((item) => (
        <DocsSection
          key={item.id}
          title={t(`stories.${item.id}.title`)}
          description={t(`stories.${item.id}.description`)}
        >
          <DemoBlock code={item.code} label={item.file} stack>
            {item.preview}
          </DemoBlock>
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindBlockUi.tsx" stack>
            <TailwindBlockUi texts={texts} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantBlockUi.tsx" stack>
            <VariantBlockUi texts={texts} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="block-ui-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledBlockUi.tsx" stack>
              <StyledBlockUi texts={texts} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="BlockUi" to="/navigation/block-ui/api" linkLabel={t("apiLink")} />
    </div>
  );
}
