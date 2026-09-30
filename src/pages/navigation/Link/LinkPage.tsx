import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { ApiLinkSection } from "../../../components/ApiLinkSection.tsx";
import { CodeBlock, DemoBlock, DocsPageHeader, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { StyleChangesSection } from "../../../components/StyleChangesSection.tsx";
import { LinkDemoGuard } from "./LinkDemoGuard.tsx";
import { LinkPlayground } from "./LinkPlayground.tsx";
import { BaseLink } from "./examples/BaseLink.tsx";
import baseCode from "./examples/BaseLink.tsx?raw";
import { CurrentLink } from "./examples/CurrentLink.tsx";
import currentCode from "./examples/CurrentLink.tsx?raw";
import { DisabledLink } from "./examples/DisabledLink.tsx";
import disabledCode from "./examples/DisabledLink.tsx?raw";
import { ExternalLinks } from "./examples/ExternalLinks.tsx";
import externalCode from "./examples/ExternalLinks.tsx?raw";
import { IconsLink } from "./examples/IconsLink.tsx";
import iconsCode from "./examples/IconsLink.tsx?raw";
import overridesCss from "./examples/link-overrides.css?raw";
import { ParagraphLink } from "./examples/ParagraphLink.tsx";
import paragraphCode from "./examples/ParagraphLink.tsx?raw";
import { RouterLink } from "./examples/RouterLink.tsx";
import routerCode from "./examples/RouterLink.tsx?raw";
import { SizesLink } from "./examples/SizesLink.tsx";
import sizesCode from "./examples/SizesLink.tsx?raw";
import { StyledLink } from "./examples/StyledLink.tsx";
import styledCode from "./examples/StyledLink.tsx?raw";
import { TailwindLink } from "./examples/TailwindLink.tsx";
import tailwindCode from "./examples/TailwindLink.tsx?raw";
import { TonesLink } from "./examples/TonesLink.tsx";
import tonesCode from "./examples/TonesLink.tsx?raw";
import { UnderlineLink } from "./examples/UnderlineLink.tsx";
import underlineCode from "./examples/UnderlineLink.tsx?raw";
import { VariantLink } from "./examples/VariantLink.tsx";
import variantCode from "./examples/VariantLink.tsx?raw";
import "./LinkPage.scss";

type StoryId =
  | "base"
  | "underline"
  | "tones"
  | "sizes"
  | "external"
  | "icons"
  | "disabled"
  | "current"
  | "paragraph"
  | "router";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

export function LinkPage() {
  const { t } = useTranslation("link");
  const texts = t("demo", { returnObjects: true });

  const stories: Story[] = [
    { id: "base", file: "BaseLink.tsx", code: baseCode, preview: <BaseLink texts={texts} /> },
    { id: "underline", file: "UnderlineLink.tsx", code: underlineCode, preview: <UnderlineLink texts={texts} /> },
    { id: "tones", file: "TonesLink.tsx", code: tonesCode, preview: <TonesLink /> },
    { id: "sizes", file: "SizesLink.tsx", code: sizesCode, preview: <SizesLink texts={texts} /> },
    { id: "external", file: "ExternalLinks.tsx", code: externalCode, preview: <ExternalLinks texts={texts} /> },
    { id: "icons", file: "IconsLink.tsx", code: iconsCode, preview: <IconsLink texts={texts} /> },
    { id: "disabled", file: "DisabledLink.tsx", code: disabledCode, preview: <DisabledLink texts={texts} /> },
    { id: "current", file: "CurrentLink.tsx", code: currentCode, preview: <CurrentLink texts={texts} /> },
    { id: "paragraph", file: "ParagraphLink.tsx", code: paragraphCode, preview: <ParagraphLink texts={texts} /> },
    { id: "router", file: "RouterLink.tsx", code: routerCode, preview: <RouterLink label={t("stories.router.label")} /> },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Link } from "@gem-org/gem-system"'
      />

      <LinkPlayground />

      {stories.map((item) => (
        <DocsSection
          key={item.id}
          title={t(`stories.${item.id}.title`)}
          description={t(`stories.${item.id}.description`)}
        >
          <DemoBlock code={item.code} label={item.file} stack>
            <LinkDemoGuard>{item.preview}</LinkDemoGuard>
          </DemoBlock>
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindLink.tsx" stack>
            <LinkDemoGuard>
              <TailwindLink texts={texts} />
            </LinkDemoGuard>
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantLink.tsx" stack>
            <LinkDemoGuard>
              <VariantLink texts={texts} />
            </LinkDemoGuard>
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="link-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledLink.tsx" stack>
              <LinkDemoGuard>
                <StyledLink texts={texts} />
              </LinkDemoGuard>
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="Link" to="/navigation/link/api" linkLabel={t("apiLink")} />
    </div>
  );
}
