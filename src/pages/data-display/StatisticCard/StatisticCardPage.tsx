import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { ApiLinkSection } from "../../../components/ApiLinkSection.tsx";
import { CodeBlock, DemoBlock, DocsPageHeader, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { StyleChangesSection } from "../../../components/StyleChangesSection.tsx";
import { StatisticCardPlayground } from "./StatisticCardPlayground.tsx";
import overridesCss from "./examples/statistic-card-overrides.css?raw";
import { BaseStatisticCard } from "./examples/BaseStatisticCard.tsx";
import baseCode from "./examples/BaseStatisticCard.tsx?raw";
import { CurrencyStatisticCard } from "./examples/CurrencyStatisticCard.tsx";
import currencyCode from "./examples/CurrencyStatisticCard.tsx?raw";
import { CustomStatisticCard } from "./examples/CustomStatisticCard.tsx";
import customCode from "./examples/CustomStatisticCard.tsx?raw";
import { DividedStatisticCard } from "./examples/DividedStatisticCard.tsx";
import dividedCode from "./examples/DividedStatisticCard.tsx?raw";
import { FooterStatisticCard } from "./examples/FooterStatisticCard.tsx";
import footerCode from "./examples/FooterStatisticCard.tsx?raw";
import { FormatStatisticCard } from "./examples/FormatStatisticCard.tsx";
import formatCode from "./examples/FormatStatisticCard.tsx?raw";
import { GroupStatisticCard } from "./examples/GroupStatisticCard.tsx";
import groupCode from "./examples/GroupStatisticCard.tsx?raw";
import { InlineStatisticCard } from "./examples/InlineStatisticCard.tsx";
import inlineCode from "./examples/InlineStatisticCard.tsx?raw";
import { InvertStatisticCard } from "./examples/InvertStatisticCard.tsx";
import invertCode from "./examples/InvertStatisticCard.tsx?raw";
import { LoadingStatisticCard } from "./examples/LoadingStatisticCard.tsx";
import loadingCode from "./examples/LoadingStatisticCard.tsx?raw";
import { SizesStatisticCard } from "./examples/SizesStatisticCard.tsx";
import sizesCode from "./examples/SizesStatisticCard.tsx?raw";
import { StyledStatisticCard } from "./examples/StyledStatisticCard.tsx";
import styledCode from "./examples/StyledStatisticCard.tsx?raw";
import { TailwindStatisticCard } from "./examples/TailwindStatisticCard.tsx";
import tailwindCode from "./examples/TailwindStatisticCard.tsx?raw";
import { TonesStatisticCard } from "./examples/TonesStatisticCard.tsx";
import tonesCode from "./examples/TonesStatisticCard.tsx?raw";
import { TrendStatisticCard } from "./examples/TrendStatisticCard.tsx";
import trendCode from "./examples/TrendStatisticCard.tsx?raw";
import { VariantStatisticCard } from "./examples/VariantStatisticCard.tsx";
import variantCode from "./examples/VariantStatisticCard.tsx?raw";
import type { MetricCopy, Separators } from "./examples/demo.ts";
import "./StatisticCardPage.scss";

type StoryId =
  | "base"
  | "currency"
  | "trend"
  | "invert"
  | "inline"
  | "loading"
  | "footer"
  | "sizes"
  | "tones"
  | "format"
  | "group"
  | "divided"
  | "custom";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

export function StatisticCardPage() {
  const { t, i18n } = useTranslation("statisticCard");
  const story = { returnObjects: true } as const;
  const separators = t("common.separators", story) as Separators;
  const users = t("common.users", story) as MetricCopy;

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseStatisticCard.tsx",
      code: baseCode,
      preview: <BaseStatisticCard {...t("stories.base.texts", story)} />,
    },
    {
      id: "currency",
      file: "CurrencyStatisticCard.tsx",
      code: currencyCode,
      preview: <CurrencyStatisticCard {...t("stories.currency.texts", story)} separators={separators} />,
    },
    {
      id: "trend",
      file: "TrendStatisticCard.tsx",
      code: trendCode,
      preview: <TrendStatisticCard {...t("stories.trend.texts", story)} separators={separators} />,
    },
    {
      id: "invert",
      file: "InvertStatisticCard.tsx",
      code: invertCode,
      preview: <InvertStatisticCard {...t("stories.invert.texts", story)} />,
    },
    {
      id: "inline",
      file: "InlineStatisticCard.tsx",
      code: inlineCode,
      preview: <InlineStatisticCard {...t("stories.inline.texts", story)} />,
    },
    {
      id: "loading",
      file: "LoadingStatisticCard.tsx",
      code: loadingCode,
      preview: <LoadingStatisticCard {...users} reload={t("stories.loading.texts.reload")} separators={separators} />,
    },
    {
      id: "footer",
      file: "FooterStatisticCard.tsx",
      code: footerCode,
      preview: <FooterStatisticCard {...t("stories.footer.texts", story)} />,
    },
    {
      id: "sizes",
      file: "SizesStatisticCard.tsx",
      code: sizesCode,
      preview: (
        <SizesStatisticCard
          trendValue={users.trendValue ?? ""}
          trendLabel={users.trendLabel ?? ""}
          separators={separators}
        />
      ),
    },
    {
      id: "tones",
      file: "TonesStatisticCard.tsx",
      code: tonesCode,
      preview: <TonesStatisticCard separators={separators} />,
    },
    {
      id: "format",
      file: "FormatStatisticCard.tsx",
      code: formatCode,
      preview: <FormatStatisticCard locale={i18n.language} {...t("stories.format.texts", story)} />,
    },
    {
      id: "group",
      file: "GroupStatisticCard.tsx",
      code: groupCode,
      preview: <GroupStatisticCard {...t("stories.group.texts", story)} separators={separators} />,
    },
    {
      id: "divided",
      file: "DividedStatisticCard.tsx",
      code: dividedCode,
      preview: <DividedStatisticCard {...t("stories.divided.texts", story)} separators={separators} />,
    },
    {
      id: "custom",
      file: "CustomStatisticCard.tsx",
      code: customCode,
      preview: <CustomStatisticCard {...t("stories.custom.texts", story)} separators={separators} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { StatisticCard } from "@gem-org/gem-system"'
      />

      <StatisticCardPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindStatisticCard.tsx">
            <TailwindStatisticCard {...users} separators={separators} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantStatisticCard.tsx">
            <VariantStatisticCard {...users} separators={separators} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="statistic-card-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledStatisticCard.tsx">
              <StyledStatisticCard {...t("styles.texts", story)} separators={separators} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="StatisticCard" to="/data-display/statistic-card/api" linkLabel={t("apiLink")} />
    </div>
  );
}
