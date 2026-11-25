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
import { BreadcrumbsPlayground } from "./BreadcrumbsPlayground.tsx";
import { BaseBreadcrumbs } from "./examples/BaseBreadcrumbs.tsx";
import baseCode from "./examples/BaseBreadcrumbs.tsx?raw";
import overridesCss from "./examples/breadcrumbs-overrides.css?raw";
import { CollapsedBreadcrumbs } from "./examples/CollapsedBreadcrumbs.tsx";
import collapsedCode from "./examples/CollapsedBreadcrumbs.tsx?raw";
import { CurrentBreadcrumbs } from "./examples/CurrentBreadcrumbs.tsx";
import currentCode from "./examples/CurrentBreadcrumbs.tsx?raw";
import { IconsBreadcrumbs } from "./examples/IconsBreadcrumbs.tsx";
import iconsCode from "./examples/IconsBreadcrumbs.tsx?raw";
import { MobileBreadcrumbs } from "./examples/MobileBreadcrumbs.tsx";
import mobileCode from "./examples/MobileBreadcrumbs.tsx?raw";
import { NavigationBreadcrumbs } from "./examples/NavigationBreadcrumbs.tsx";
import navigationCode from "./examples/NavigationBreadcrumbs.tsx?raw";
import { SeparatorBreadcrumbs } from "./examples/SeparatorBreadcrumbs.tsx";
import separatorCode from "./examples/SeparatorBreadcrumbs.tsx?raw";
import { SizesBreadcrumbs } from "./examples/SizesBreadcrumbs.tsx";
import sizesCode from "./examples/SizesBreadcrumbs.tsx?raw";
import { StyledBreadcrumbs } from "./examples/StyledBreadcrumbs.tsx";
import styledCode from "./examples/StyledBreadcrumbs.tsx?raw";
import { TailwindBreadcrumbs } from "./examples/TailwindBreadcrumbs.tsx";
import tailwindCode from "./examples/TailwindBreadcrumbs.tsx?raw";
import { VariantBreadcrumbs } from "./examples/VariantBreadcrumbs.tsx";
import variantCode from "./examples/VariantBreadcrumbs.tsx?raw";
import "./BreadcrumbsPage.scss";

type StoryId =
  "base" | "current" | "icons" | "separator" | "collapsed" | "sizes" | "navigation" | "mobile";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

export function BreadcrumbsPage() {
  const { t } = useTranslation("breadcrumbs");
  const texts = t("demo", { returnObjects: true });
  const story = { returnObjects: true } as const;

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseBreadcrumbs.tsx",
      code: baseCode,
      preview: <BaseBreadcrumbs texts={texts} />,
    },
    {
      id: "current",
      file: "CurrentBreadcrumbs.tsx",
      code: currentCode,
      preview: <CurrentBreadcrumbs texts={texts} />,
    },
    {
      id: "icons",
      file: "IconsBreadcrumbs.tsx",
      code: iconsCode,
      preview: <IconsBreadcrumbs texts={texts} />,
    },
    {
      id: "separator",
      file: "SeparatorBreadcrumbs.tsx",
      code: separatorCode,
      preview: <SeparatorBreadcrumbs texts={texts} />,
    },
    {
      id: "collapsed",
      file: "CollapsedBreadcrumbs.tsx",
      code: collapsedCode,
      preview: <CollapsedBreadcrumbs texts={texts} />,
    },
    {
      id: "sizes",
      file: "SizesBreadcrumbs.tsx",
      code: sizesCode,
      preview: <SizesBreadcrumbs texts={texts} />,
    },
    {
      id: "navigation",
      file: "NavigationBreadcrumbs.tsx",
      code: navigationCode,
      preview: <NavigationBreadcrumbs texts={texts} {...t("stories.navigation.texts", story)} />,
    },
    {
      id: "mobile",
      file: "MobileBreadcrumbs.tsx",
      code: mobileCode,
      preview: <MobileBreadcrumbs texts={texts} {...t("stories.mobile.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Breadcrumbs } from "@gem-org/gem-system"'
      />

      <BreadcrumbsPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindBreadcrumbs.tsx" stack>
            <TailwindBreadcrumbs texts={texts} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantBreadcrumbs.tsx" stack>
            <VariantBreadcrumbs texts={texts} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="breadcrumbs-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledBreadcrumbs.tsx" stack>
              <StyledBreadcrumbs texts={texts} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="Breadcrumbs"
        to="/system/navigation/breadcrumbs/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
