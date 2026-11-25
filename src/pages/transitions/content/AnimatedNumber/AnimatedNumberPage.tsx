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
import { AnimatedNumberPlayground } from "./AnimatedNumberPlayground.tsx";
import { AsChildAnimatedNumber } from "./examples/AsChildAnimatedNumber.tsx";
import asChildCode from "./examples/AsChildAnimatedNumber.tsx?raw";
import { BaseAnimatedNumber } from "./examples/BaseAnimatedNumber.tsx";
import baseCode from "./examples/BaseAnimatedNumber.tsx?raw";
import { CallbacksAnimatedNumber } from "./examples/CallbacksAnimatedNumber.tsx";
import callbacksCode from "./examples/CallbacksAnimatedNumber.tsx?raw";
import { CurrencyAnimatedNumber } from "./examples/CurrencyAnimatedNumber.tsx";
import currencyCode from "./examples/CurrencyAnimatedNumber.tsx?raw";
import { DisabledAnimatedNumber } from "./examples/DisabledAnimatedNumber.tsx";
import disabledCode from "./examples/DisabledAnimatedNumber.tsx?raw";
import { EffectAnimatedNumber } from "./examples/EffectAnimatedNumber.tsx";
import effectCode from "./examples/EffectAnimatedNumber.tsx?raw";
import { FormatAnimatedNumber } from "./examples/FormatAnimatedNumber.tsx";
import formatCode from "./examples/FormatAnimatedNumber.tsx?raw";
import overridesCss from "./examples/animated-number-overrides.css?raw";
import { PercentAnimatedNumber } from "./examples/PercentAnimatedNumber.tsx";
import percentCode from "./examples/PercentAnimatedNumber.tsx?raw";
import { RoundAnimatedNumber } from "./examples/RoundAnimatedNumber.tsx";
import roundCode from "./examples/RoundAnimatedNumber.tsx?raw";
import { StyledAnimatedNumber } from "./examples/StyledAnimatedNumber.tsx";
import styledCode from "./examples/StyledAnimatedNumber.tsx?raw";
import { TailwindAnimatedNumber } from "./examples/TailwindAnimatedNumber.tsx";
import tailwindCode from "./examples/TailwindAnimatedNumber.tsx?raw";
import { TrendAnimatedNumber } from "./examples/TrendAnimatedNumber.tsx";
import trendCode from "./examples/TrendAnimatedNumber.tsx?raw";
import { UtilitiesAnimatedNumber } from "./examples/UtilitiesAnimatedNumber.tsx";
import utilitiesCode from "./examples/UtilitiesAnimatedNumber.tsx?raw";
import { VariantAnimatedNumber } from "./examples/VariantAnimatedNumber.tsx";
import variantCode from "./examples/VariantAnimatedNumber.tsx?raw";
import "./AnimatedNumberPage.scss";

type StoryId =
  | "base"
  | "effects"
  | "currency"
  | "percent"
  | "format"
  | "round"
  | "trend"
  | "callbacks"
  | "disabled"
  | "asChild"
  | "utilities";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

const importCode = `import "@gem-org/gemsitions/animated-number.css";
import { AnimatedNumber } from "@gem-org/gemsitions/animated-number";`;

const story = { returnObjects: true } as const;

export function AnimatedNumberPage() {
  const { t } = useTranslation("animatedNumber");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseAnimatedNumber.tsx",
      code: baseCode,
      preview: <BaseAnimatedNumber {...t("stories.base.texts", story)} />,
    },
    {
      id: "effects",
      file: "EffectAnimatedNumber.tsx",
      code: effectCode,
      preview: <EffectAnimatedNumber {...t("stories.effects.texts", story)} />,
    },
    {
      id: "currency",
      file: "CurrencyAnimatedNumber.tsx",
      code: currencyCode,
      preview: <CurrencyAnimatedNumber {...t("stories.currency.texts", story)} />,
    },
    {
      id: "percent",
      file: "PercentAnimatedNumber.tsx",
      code: percentCode,
      preview: <PercentAnimatedNumber {...t("stories.percent.texts", story)} />,
    },
    {
      id: "format",
      file: "FormatAnimatedNumber.tsx",
      code: formatCode,
      preview: <FormatAnimatedNumber {...t("stories.format.texts", story)} />,
    },
    {
      id: "round",
      file: "RoundAnimatedNumber.tsx",
      code: roundCode,
      preview: <RoundAnimatedNumber {...t("stories.round.texts", story)} />,
    },
    {
      id: "trend",
      file: "TrendAnimatedNumber.tsx",
      code: trendCode,
      preview: <TrendAnimatedNumber {...t("stories.trend.texts", story)} />,
    },
    {
      id: "callbacks",
      file: "CallbacksAnimatedNumber.tsx",
      code: callbacksCode,
      preview: <CallbacksAnimatedNumber {...t("stories.callbacks.texts", story)} />,
    },
    {
      id: "disabled",
      file: "DisabledAnimatedNumber.tsx",
      code: disabledCode,
      preview: <DisabledAnimatedNumber {...t("stories.disabled.texts", story)} />,
    },
    {
      id: "asChild",
      file: "AsChildAnimatedNumber.tsx",
      code: asChildCode,
      preview: <AsChildAnimatedNumber {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "utilities",
      file: "UtilitiesAnimatedNumber.tsx",
      code: utilitiesCode,
      preview: <UtilitiesAnimatedNumber {...t("stories.utilities.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath={importCode}
      />

      <AnimatedNumberPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindAnimatedNumber.tsx" stack>
            <TailwindAnimatedNumber {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantAnimatedNumber.tsx" stack>
            <VariantAnimatedNumber {...t("styles.variant", story)} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="animated-number-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledAnimatedNumber.tsx" stack>
              <StyledAnimatedNumber {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="AnimatedNumber"
        to="/transitions/content/animated-number/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
