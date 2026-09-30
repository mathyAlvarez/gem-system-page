import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { ApiLinkSection } from "../../../components/ApiLinkSection.tsx";
import { CodeBlock, DemoBlock, DocsPageHeader, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { StyleChangesSection } from "../../../components/StyleChangesSection.tsx";
import { ShinePlayground } from "./ShinePlayground.tsx";
import overridesCss from "./examples/shine-overrides.css?raw";
import { AngleShine } from "./examples/AngleShine.tsx";
import angleCode from "./examples/AngleShine.tsx?raw";
import { BaseShine } from "./examples/BaseShine.tsx";
import baseCode from "./examples/BaseShine.tsx?raw";
import { BurstShine } from "./examples/BurstShine.tsx";
import burstCode from "./examples/BurstShine.tsx?raw";
import { CardShine } from "./examples/CardShine.tsx";
import cardCode from "./examples/CardShine.tsx?raw";
import { ColorShine } from "./examples/ColorShine.tsx";
import colorCode from "./examples/ColorShine.tsx?raw";
import { ControlShine } from "./examples/ControlShine.tsx";
import controlCode from "./examples/ControlShine.tsx?raw";
import { HoverShine } from "./examples/HoverShine.tsx";
import hoverCode from "./examples/HoverShine.tsx?raw";
import { IntensityShine } from "./examples/IntensityShine.tsx";
import intensityCode from "./examples/IntensityShine.tsx?raw";
import { IntervalShine } from "./examples/IntervalShine.tsx";
import intervalCode from "./examples/IntervalShine.tsx?raw";
import { RadiusShine } from "./examples/RadiusShine.tsx";
import radiusCode from "./examples/RadiusShine.tsx?raw";
import { StyledShine } from "./examples/StyledShine.tsx";
import styledCode from "./examples/StyledShine.tsx?raw";
import { TailwindShine } from "./examples/TailwindShine.tsx";
import tailwindCode from "./examples/TailwindShine.tsx?raw";
import { TonesShine } from "./examples/TonesShine.tsx";
import tonesCode from "./examples/TonesShine.tsx?raw";
import { VariantShine } from "./examples/VariantShine.tsx";
import variantCode from "./examples/VariantShine.tsx?raw";
import "./ShinePage.scss";

type StoryId =
  | "base"
  | "tones"
  | "intensity"
  | "burst"
  | "hover"
  | "interval"
  | "angle"
  | "radius"
  | "card"
  | "color"
  | "control";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

export function ShinePage() {
  const { t } = useTranslation("shine");
  const label = t("common.label");

  const stories: Story[] = [
    { id: "base", file: "BaseShine.tsx", code: baseCode, preview: <BaseShine label={label} /> },
    { id: "tones", file: "TonesShine.tsx", code: tonesCode, preview: <TonesShine /> },
    { id: "intensity", file: "IntensityShine.tsx", code: intensityCode, preview: <IntensityShine /> },
    { id: "burst", file: "BurstShine.tsx", code: burstCode, preview: <BurstShine /> },
    {
      id: "hover",
      file: "HoverShine.tsx",
      code: hoverCode,
      preview: <HoverShine label={t("stories.hover.texts.label")} />,
    },
    { id: "interval", file: "IntervalShine.tsx", code: intervalCode, preview: <IntervalShine /> },
    { id: "angle", file: "AngleShine.tsx", code: angleCode, preview: <AngleShine /> },
    { id: "radius", file: "RadiusShine.tsx", code: radiusCode, preview: <RadiusShine /> },
    {
      id: "card",
      file: "CardShine.tsx",
      code: cardCode,
      preview: <CardShine {...t("stories.card.texts", { returnObjects: true })} />,
    },
    { id: "color", file: "ColorShine.tsx", code: colorCode, preview: <ColorShine /> },
    {
      id: "control",
      file: "ControlShine.tsx",
      code: controlCode,
      preview: <ControlShine {...t("stories.control.texts", { returnObjects: true })} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Shine } from "@gem-org/gem-system"'
      />

      <ShinePlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindShine.tsx">
            <TailwindShine label={label} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantShine.tsx">
            <VariantShine label={t("common.promo")} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="shine-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledShine.tsx">
              <StyledShine label={label} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="Shine" to="/data-display/shine/api" linkLabel={t("apiLink")} />
    </div>
  );
}
