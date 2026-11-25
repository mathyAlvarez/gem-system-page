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
import { MeteorsPlayground } from "./MeteorsPlayground.tsx";
import { BaseMeteors } from "./examples/BaseMeteors.tsx";
import baseCode from "./examples/BaseMeteors.tsx?raw";
import { CallbacksMeteors } from "./examples/CallbacksMeteors.tsx";
import callbacksCode from "./examples/CallbacksMeteors.tsx?raw";
import { ColorsMeteors } from "./examples/ColorsMeteors.tsx";
import colorsCode from "./examples/ColorsMeteors.tsx?raw";
import { CountMeteors } from "./examples/CountMeteors.tsx";
import countCode from "./examples/CountMeteors.tsx?raw";
import { ImageMeteors } from "./examples/ImageMeteors.tsx";
import imageCode from "./examples/ImageMeteors.tsx?raw";
import { IntensityMeteors } from "./examples/IntensityMeteors.tsx";
import intensityCode from "./examples/IntensityMeteors.tsx?raw";
import overridesCss from "./examples/meteors-overrides.css?raw";
import { ReverseMeteors } from "./examples/ReverseMeteors.tsx";
import reverseCode from "./examples/ReverseMeteors.tsx?raw";
import { SpeedMeteors } from "./examples/SpeedMeteors.tsx";
import speedCode from "./examples/SpeedMeteors.tsx?raw";
import { StateMeteors } from "./examples/StateMeteors.tsx";
import stateCode from "./examples/StateMeteors.tsx?raw";
import { StyledMeteors } from "./examples/StyledMeteors.tsx";
import styledCode from "./examples/StyledMeteors.tsx?raw";
import { TailwindMeteors } from "./examples/TailwindMeteors.tsx";
import tailwindCode from "./examples/TailwindMeteors.tsx?raw";
import { TriggerMeteors } from "./examples/TriggerMeteors.tsx";
import triggerCode from "./examples/TriggerMeteors.tsx?raw";
import { VariantMeteors } from "./examples/VariantMeteors.tsx";
import variantCode from "./examples/VariantMeteors.tsx?raw";
import { VariantsMeteors } from "./examples/VariantsMeteors.tsx";
import variantsCode from "./examples/VariantsMeteors.tsx?raw";
import "./MeteorsPage.scss";

type StoryId =
  | "base"
  | "variants"
  | "reverse"
  | "image"
  | "colors"
  | "count"
  | "speed"
  | "triggers"
  | "intensity"
  | "state"
  | "callbacks";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode; stack?: boolean };

const importCode = `import "@gem-org/gemffects/meteors.css";
import { Meteors } from "@gem-org/gemffects/meteors";`;

const story = { returnObjects: true } as const;

export function MeteorsPage() {
  const { t } = useTranslation("meteors");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseMeteors.tsx",
      code: baseCode,
      preview: <BaseMeteors {...t("stories.base.texts", story)} />,
    },
    {
      id: "variants",
      file: "VariantsMeteors.tsx",
      code: variantsCode,
      preview: <VariantsMeteors />,
    },
    { id: "reverse", file: "ReverseMeteors.tsx", code: reverseCode, preview: <ReverseMeteors /> },
    {
      id: "image",
      file: "ImageMeteors.tsx",
      code: imageCode,
      preview: <ImageMeteors {...t("stories.image.texts", story)} />,
    },
    { id: "colors", file: "ColorsMeteors.tsx", code: colorsCode, preview: <ColorsMeteors /> },
    { id: "count", file: "CountMeteors.tsx", code: countCode, preview: <CountMeteors /> },
    { id: "speed", file: "SpeedMeteors.tsx", code: speedCode, preview: <SpeedMeteors /> },
    {
      id: "triggers",
      file: "TriggerMeteors.tsx",
      code: triggerCode,
      preview: <TriggerMeteors {...t("stories.triggers.texts", story)} />,
    },
    {
      id: "intensity",
      file: "IntensityMeteors.tsx",
      code: intensityCode,
      preview: <IntensityMeteors />,
    },
    {
      id: "state",
      file: "StateMeteors.tsx",
      code: stateCode,
      preview: <StateMeteors {...t("stories.state.texts", story)} />,
      stack: true,
    },
    {
      id: "callbacks",
      file: "CallbacksMeteors.tsx",
      code: callbacksCode,
      preview: <CallbacksMeteors {...t("stories.callbacks.texts", story)} />,
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

      <MeteorsPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindMeteors.tsx">
            <TailwindMeteors {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantMeteors.tsx">
            <VariantMeteors />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="meteors-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledMeteors.tsx">
              <StyledMeteors {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="Meteors"
        to="/effects/particles/meteors/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
