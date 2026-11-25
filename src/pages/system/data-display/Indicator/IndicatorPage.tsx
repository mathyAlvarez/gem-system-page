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
import { IndicatorPlayground } from "./IndicatorPlayground.tsx";
import overridesCss from "./examples/indicator-overrides.css?raw";
import { BaseIndicator } from "./examples/BaseIndicator.tsx";
import baseCode from "./examples/BaseIndicator.tsx?raw";
import { CardIndicator } from "./examples/CardIndicator.tsx";
import cardCode from "./examples/CardIndicator.tsx?raw";
import { FoldIndicator } from "./examples/FoldIndicator.tsx";
import foldCode from "./examples/FoldIndicator.tsx?raw";
import { IconIndicator } from "./examples/IconIndicator.tsx";
import iconCode from "./examples/IconIndicator.tsx?raw";
import { OffsetIndicator } from "./examples/OffsetIndicator.tsx";
import offsetCode from "./examples/OffsetIndicator.tsx?raw";
import { PlacementsIndicator } from "./examples/PlacementsIndicator.tsx";
import placementsCode from "./examples/PlacementsIndicator.tsx?raw";
import { RadiusIndicator } from "./examples/RadiusIndicator.tsx";
import radiusCode from "./examples/RadiusIndicator.tsx?raw";
import { SizesIndicator } from "./examples/SizesIndicator.tsx";
import sizesCode from "./examples/SizesIndicator.tsx?raw";
import { StyledIndicator } from "./examples/StyledIndicator.tsx";
import styledCode from "./examples/StyledIndicator.tsx?raw";
import { TailwindIndicator } from "./examples/TailwindIndicator.tsx";
import tailwindCode from "./examples/TailwindIndicator.tsx?raw";
import { ToggleIndicator } from "./examples/ToggleIndicator.tsx";
import toggleCode from "./examples/ToggleIndicator.tsx?raw";
import { TonesIndicator } from "./examples/TonesIndicator.tsx";
import tonesCode from "./examples/TonesIndicator.tsx?raw";
import { TypographyIndicator } from "./examples/TypographyIndicator.tsx";
import typographyCode from "./examples/TypographyIndicator.tsx?raw";
import { VariantIndicator } from "./examples/VariantIndicator.tsx";
import variantCode from "./examples/VariantIndicator.tsx?raw";
import { VariantsIndicator } from "./examples/VariantsIndicator.tsx";
import variantsCode from "./examples/VariantsIndicator.tsx?raw";
import "./IndicatorPage.scss";

type StoryId =
  | "base"
  | "variants"
  | "placements"
  | "tones"
  | "sizes"
  | "radius"
  | "fold"
  | "typography"
  | "card"
  | "icon"
  | "offset"
  | "toggle";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

export function IndicatorPage() {
  const { t } = useTranslation("indicator");
  const common = t("common", { returnObjects: true });
  const story = { returnObjects: true } as const;

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseIndicator.tsx",
      code: baseCode,
      preview: <BaseIndicator label={common.featured} />,
    },
    {
      id: "variants",
      file: "VariantsIndicator.tsx",
      code: variantsCode,
      preview: <VariantsIndicator label={common.featured} short={common.new} />,
    },
    {
      id: "placements",
      file: "PlacementsIndicator.tsx",
      code: placementsCode,
      preview: <PlacementsIndicator label={common.featured} />,
    },
    {
      id: "tones",
      file: "TonesIndicator.tsx",
      code: tonesCode,
      preview: <TonesIndicator label={common.new} />,
    },
    {
      id: "sizes",
      file: "SizesIndicator.tsx",
      code: sizesCode,
      preview: <SizesIndicator label={common.featured} />,
    },
    {
      id: "radius",
      file: "RadiusIndicator.tsx",
      code: radiusCode,
      preview: <RadiusIndicator label={common.new} />,
    },
    {
      id: "fold",
      file: "FoldIndicator.tsx",
      code: foldCode,
      preview: <FoldIndicator label={common.new} />,
    },
    {
      id: "typography",
      file: "TypographyIndicator.tsx",
      code: typographyCode,
      preview: <TypographyIndicator label={common.new} custom={common.hot} />,
    },
    {
      id: "card",
      file: "CardIndicator.tsx",
      code: cardCode,
      preview: <CardIndicator label={common.featured} {...t("stories.card.texts", story)} />,
    },
    {
      id: "icon",
      file: "IconIndicator.tsx",
      code: iconCode,
      preview: <IconIndicator featured={common.featured} {...t("stories.icon.texts", story)} />,
    },
    {
      id: "offset",
      file: "OffsetIndicator.tsx",
      code: offsetCode,
      preview: <OffsetIndicator label={common.new} />,
    },
    {
      id: "toggle",
      file: "ToggleIndicator.tsx",
      code: toggleCode,
      preview: <ToggleIndicator label={common.featured} {...t("stories.toggle.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Indicator } from "@gem-org/gem-system"'
      />

      <IndicatorPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindIndicator.tsx">
            <TailwindIndicator label={common.featured} short={common.new} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantIndicator.tsx">
            <VariantIndicator {...t("styles.cva", story)} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="indicator-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledIndicator.tsx">
              <StyledIndicator label={common.featured} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="Indicator"
        to="/system/data-display/indicator/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
