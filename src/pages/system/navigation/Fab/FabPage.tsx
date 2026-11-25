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
import { FabPlayground } from "./FabPlayground.tsx";
import { BaseFab } from "./examples/BaseFab.tsx";
import baseCode from "./examples/BaseFab.tsx?raw";
import { ControlledFab } from "./examples/ControlledFab.tsx";
import controlledCode from "./examples/ControlledFab.tsx?raw";
import { CustomFab } from "./examples/CustomFab.tsx";
import customCode from "./examples/CustomFab.tsx?raw";
import { CustomIconFab } from "./examples/CustomIconFab.tsx";
import customIconCode from "./examples/CustomIconFab.tsx?raw";
import { DirectionFab } from "./examples/DirectionFab.tsx";
import directionCode from "./examples/DirectionFab.tsx?raw";
import { DisabledFab } from "./examples/DisabledFab.tsx";
import disabledCode from "./examples/DisabledFab.tsx?raw";
import { ExtendedFab } from "./examples/ExtendedFab.tsx";
import extendedCode from "./examples/ExtendedFab.tsx?raw";
import overridesCss from "./examples/fab-overrides.css?raw";
import { LoadingFab } from "./examples/LoadingFab.tsx";
import loadingCode from "./examples/LoadingFab.tsx?raw";
import { OnCardFab } from "./examples/OnCardFab.tsx";
import onCardCode from "./examples/OnCardFab.tsx?raw";
import { PlacementsFab } from "./examples/PlacementsFab.tsx";
import placementsCode from "./examples/PlacementsFab.tsx?raw";
import { SizesFab } from "./examples/SizesFab.tsx";
import sizesCode from "./examples/SizesFab.tsx?raw";
import { SpeedDialFab } from "./examples/SpeedDialFab.tsx";
import speedDialCode from "./examples/SpeedDialFab.tsx?raw";
import { StyledFab } from "./examples/StyledFab.tsx";
import styledCode from "./examples/StyledFab.tsx?raw";
import { TailwindFab } from "./examples/TailwindFab.tsx";
import tailwindCode from "./examples/TailwindFab.tsx?raw";
import { TonesFab } from "./examples/TonesFab.tsx";
import tonesCode from "./examples/TonesFab.tsx?raw";
import { VariantFab } from "./examples/VariantFab.tsx";
import variantCode from "./examples/VariantFab.tsx?raw";
import "./FabPage.scss";

type StoryId =
  | "base"
  | "extended"
  | "tones"
  | "sizes"
  | "placements"
  | "speedDial"
  | "direction"
  | "custom"
  | "customIcon"
  | "controlled"
  | "onCard"
  | "loading"
  | "disabled";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

export function FabPage() {
  const { t } = useTranslation("fab");
  const texts = t("demo", { returnObjects: true });
  const story = { returnObjects: true } as const;

  const stories: Story[] = [
    { id: "base", file: "BaseFab.tsx", code: baseCode, preview: <BaseFab texts={texts} /> },
    {
      id: "extended",
      file: "ExtendedFab.tsx",
      code: extendedCode,
      preview: <ExtendedFab texts={texts} />,
    },
    { id: "tones", file: "TonesFab.tsx", code: tonesCode, preview: <TonesFab texts={texts} /> },
    { id: "sizes", file: "SizesFab.tsx", code: sizesCode, preview: <SizesFab texts={texts} /> },
    {
      id: "placements",
      file: "PlacementsFab.tsx",
      code: placementsCode,
      preview: <PlacementsFab texts={texts} />,
    },
    {
      id: "speedDial",
      file: "SpeedDialFab.tsx",
      code: speedDialCode,
      preview: <SpeedDialFab texts={texts} />,
    },
    {
      id: "direction",
      file: "DirectionFab.tsx",
      code: directionCode,
      preview: <DirectionFab texts={texts} />,
    },
    {
      id: "custom",
      file: "CustomFab.tsx",
      code: customCode,
      preview: <CustomFab texts={texts} toasts={t("stories.custom.texts.toasts", story)} />,
    },
    {
      id: "customIcon",
      file: "CustomIconFab.tsx",
      code: customIconCode,
      preview: <CustomIconFab texts={texts} />,
    },
    {
      id: "controlled",
      file: "ControlledFab.tsx",
      code: controlledCode,
      preview: <ControlledFab texts={texts} {...t("stories.controlled.texts", story)} />,
    },
    {
      id: "onCard",
      file: "OnCardFab.tsx",
      code: onCardCode,
      preview: <OnCardFab {...t("stories.onCard.texts", story)} />,
    },
    {
      id: "loading",
      file: "LoadingFab.tsx",
      code: loadingCode,
      preview: <LoadingFab {...t("stories.loading.texts", story)} />,
    },
    {
      id: "disabled",
      file: "DisabledFab.tsx",
      code: disabledCode,
      preview: <DisabledFab texts={texts} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Fab } from "@gem-org/gem-system"'
      />

      <FabPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindFab.tsx" stack>
            <TailwindFab texts={texts} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantFab.tsx" stack>
            <VariantFab texts={texts} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="fab-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledFab.tsx" stack>
              <StyledFab texts={texts} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="Fab" to="/system/navigation/fab/api" linkLabel={t("apiLink")} />
    </div>
  );
}
