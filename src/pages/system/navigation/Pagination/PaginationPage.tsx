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
import { PaginationPlayground } from "./PaginationPlayground.tsx";
import { BasePagination } from "./examples/BasePagination.tsx";
import baseCode from "./examples/BasePagination.tsx?raw";
import { ControlledPagination } from "./examples/ControlledPagination.tsx";
import controlledCode from "./examples/ControlledPagination.tsx?raw";
import { CustomSummaryPagination } from "./examples/CustomSummaryPagination.tsx";
import customSummaryCode from "./examples/CustomSummaryPagination.tsx?raw";
import { DisabledPagination } from "./examples/DisabledPagination.tsx";
import disabledCode from "./examples/DisabledPagination.tsx?raw";
import { FirstLastPagination } from "./examples/FirstLastPagination.tsx";
import firstLastCode from "./examples/FirstLastPagination.tsx?raw";
import { GhostPagination } from "./examples/GhostPagination.tsx";
import ghostCode from "./examples/GhostPagination.tsx?raw";
import { HiddenPageSizePagination } from "./examples/HiddenPageSizePagination.tsx";
import hiddenPageSizeCode from "./examples/HiddenPageSizePagination.tsx?raw";
import { ManyPagesPagination } from "./examples/ManyPagesPagination.tsx";
import manyPagesCode from "./examples/ManyPagesPagination.tsx?raw";
import { MobilePagination } from "./examples/MobilePagination.tsx";
import mobileCode from "./examples/MobilePagination.tsx?raw";
import overridesCss from "./examples/pagination-overrides.css?raw";
import { RowsPagination } from "./examples/RowsPagination.tsx";
import rowsCode from "./examples/RowsPagination.tsx?raw";
import { SizesPagination } from "./examples/SizesPagination.tsx";
import sizesCode from "./examples/SizesPagination.tsx?raw";
import { StyledPagination } from "./examples/StyledPagination.tsx";
import styledCode from "./examples/StyledPagination.tsx?raw";
import { TailwindPagination } from "./examples/TailwindPagination.tsx";
import tailwindCode from "./examples/TailwindPagination.tsx?raw";
import { VariantPagination } from "./examples/VariantPagination.tsx";
import variantCode from "./examples/VariantPagination.tsx?raw";
import "./PaginationPage.scss";

type StoryId =
  | "base"
  | "rows"
  | "firstLast"
  | "manyPages"
  | "sizes"
  | "ghost"
  | "hiddenPageSize"
  | "customSummary"
  | "disabled"
  | "controlled"
  | "mobile";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

export function PaginationPage() {
  const { t } = useTranslation("pagination");
  const texts = t("demo", { returnObjects: true });
  const story = { returnObjects: true } as const;

  const stories: Story[] = [
    {
      id: "base",
      file: "BasePagination.tsx",
      code: baseCode,
      preview: <BasePagination texts={texts} />,
    },
    {
      id: "rows",
      file: "RowsPagination.tsx",
      code: rowsCode,
      preview: <RowsPagination texts={texts} />,
    },
    {
      id: "firstLast",
      file: "FirstLastPagination.tsx",
      code: firstLastCode,
      preview: <FirstLastPagination texts={texts} />,
    },
    {
      id: "manyPages",
      file: "ManyPagesPagination.tsx",
      code: manyPagesCode,
      preview: <ManyPagesPagination texts={texts} />,
    },
    {
      id: "sizes",
      file: "SizesPagination.tsx",
      code: sizesCode,
      preview: <SizesPagination texts={texts} />,
    },
    {
      id: "ghost",
      file: "GhostPagination.tsx",
      code: ghostCode,
      preview: <GhostPagination texts={texts} />,
    },
    {
      id: "hiddenPageSize",
      file: "HiddenPageSizePagination.tsx",
      code: hiddenPageSizeCode,
      preview: <HiddenPageSizePagination texts={texts} />,
    },
    {
      id: "customSummary",
      file: "CustomSummaryPagination.tsx",
      code: customSummaryCode,
      preview: (
        <CustomSummaryPagination texts={texts} {...t("stories.customSummary.texts", story)} />
      ),
    },
    {
      id: "disabled",
      file: "DisabledPagination.tsx",
      code: disabledCode,
      preview: <DisabledPagination texts={texts} />,
    },
    {
      id: "controlled",
      file: "ControlledPagination.tsx",
      code: controlledCode,
      preview: <ControlledPagination texts={texts} {...t("stories.controlled.texts", story)} />,
    },
    {
      id: "mobile",
      file: "MobilePagination.tsx",
      code: mobileCode,
      preview: <MobilePagination texts={texts} {...t("stories.mobile.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Pagination } from "@gem-org/gem-system"'
      />

      <PaginationPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindPagination.tsx" stack>
            <TailwindPagination texts={texts} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantPagination.tsx" stack>
            <VariantPagination texts={texts} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="pagination-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledPagination.tsx" stack>
              <StyledPagination texts={texts} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="Pagination"
        to="/system/navigation/pagination/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
