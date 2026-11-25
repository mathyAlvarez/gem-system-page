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
import { BorderBeamPlayground } from "./BorderBeamPlayground.tsx";
import overridesCss from "./examples/border-beam-overrides.css?raw";
import { AsChildBorderBeam } from "./examples/AsChildBorderBeam.tsx";
import asChildCode from "./examples/AsChildBorderBeam.tsx?raw";
import { CallbacksBorderBeam } from "./examples/CallbacksBorderBeam.tsx";
import callbacksCode from "./examples/CallbacksBorderBeam.tsx?raw";
import { CardBorderBeam } from "./examples/CardBorderBeam.tsx";
import cardCode from "./examples/CardBorderBeam.tsx?raw";
import { ColorBorderBeam } from "./examples/ColorBorderBeam.tsx";
import colorCode from "./examples/ColorBorderBeam.tsx?raw";
import { GeometryBorderBeam } from "./examples/GeometryBorderBeam.tsx";
import geometryCode from "./examples/GeometryBorderBeam.tsx?raw";
import { IntensityBorderBeam } from "./examples/IntensityBorderBeam.tsx";
import intensityCode from "./examples/IntensityBorderBeam.tsx?raw";
import { MotionBorderBeam } from "./examples/MotionBorderBeam.tsx";
import motionCode from "./examples/MotionBorderBeam.tsx?raw";
import { OffsetBorderBeam } from "./examples/OffsetBorderBeam.tsx";
import offsetCode from "./examples/OffsetBorderBeam.tsx?raw";
import { StateBorderBeam } from "./examples/StateBorderBeam.tsx";
import stateCode from "./examples/StateBorderBeam.tsx?raw";
import { StyledBorderBeam } from "./examples/StyledBorderBeam.tsx";
import styledCode from "./examples/StyledBorderBeam.tsx?raw";
import { TailwindBorderBeam } from "./examples/TailwindBorderBeam.tsx";
import tailwindCode from "./examples/TailwindBorderBeam.tsx?raw";
import { TriggerBorderBeam } from "./examples/TriggerBorderBeam.tsx";
import triggerCode from "./examples/TriggerBorderBeam.tsx?raw";
import { VariantBorderBeam } from "./examples/VariantBorderBeam.tsx";
import variantCode from "./examples/VariantBorderBeam.tsx?raw";
import { VariantsBorderBeam } from "./examples/VariantsBorderBeam.tsx";
import variantsCode from "./examples/VariantsBorderBeam.tsx?raw";
import "./BorderBeamPage.scss";

type StoryId =
  | "variants"
  | "card"
  | "triggers"
  | "geometry"
  | "motion"
  | "offset"
  | "intensity"
  | "color"
  | "asChild"
  | "state"
  | "callbacks";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode; stack?: boolean };

const importCode = `import "@gem-org/gemffects/border-beam.css";
import { BorderBeam } from "@gem-org/gemffects/border-beam";`;

const story = { returnObjects: true } as const;

export function BorderBeamPage() {
  const { t } = useTranslation("borderBeam");

  const stories: Story[] = [
    {
      id: "variants",
      file: "VariantsBorderBeam.tsx",
      code: variantsCode,
      preview: <VariantsBorderBeam />,
    },
    {
      id: "card",
      file: "CardBorderBeam.tsx",
      code: cardCode,
      preview: <CardBorderBeam {...t("stories.card.texts", story)} />,
    },
    {
      id: "triggers",
      file: "TriggerBorderBeam.tsx",
      code: triggerCode,
      preview: <TriggerBorderBeam {...t("stories.triggers.texts", story)} />,
    },
    {
      id: "geometry",
      file: "GeometryBorderBeam.tsx",
      code: geometryCode,
      preview: <GeometryBorderBeam />,
    },
    { id: "motion", file: "MotionBorderBeam.tsx", code: motionCode, preview: <MotionBorderBeam /> },
    { id: "offset", file: "OffsetBorderBeam.tsx", code: offsetCode, preview: <OffsetBorderBeam /> },
    {
      id: "intensity",
      file: "IntensityBorderBeam.tsx",
      code: intensityCode,
      preview: <IntensityBorderBeam />,
    },
    { id: "color", file: "ColorBorderBeam.tsx", code: colorCode, preview: <ColorBorderBeam /> },
    {
      id: "asChild",
      file: "AsChildBorderBeam.tsx",
      code: asChildCode,
      preview: <AsChildBorderBeam {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "state",
      file: "StateBorderBeam.tsx",
      code: stateCode,
      preview: <StateBorderBeam {...t("stories.state.texts", story)} />,
      stack: true,
    },
    {
      id: "callbacks",
      file: "CallbacksBorderBeam.tsx",
      code: callbacksCode,
      preview: <CallbacksBorderBeam {...t("stories.callbacks.texts", story)} />,
      stack: true,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath={importCode}
      />

      <BorderBeamPlayground />

      {stories.map((item) => (
        <DocsSection
          key={item.id}
          title={t(`stories.${item.id}.title`)}
          description={t(`stories.${item.id}.description`)}
        >
          <DemoBlock code={item.code} label={item.file} stack={item.stack}>
            {item.preview}
          </DemoBlock>
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindBorderBeam.tsx">
            <TailwindBorderBeam {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantBorderBeam.tsx">
            <VariantBorderBeam />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="border-beam-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledBorderBeam.tsx">
              <StyledBorderBeam {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="BorderBeam"
        to="/effects/light/border-beam/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
