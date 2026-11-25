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
import { StepperPlayground } from "./StepperPlayground.tsx";
import { AlternativeLabelStepper } from "./examples/AlternativeLabelStepper.tsx";
import alternativeLabelCode from "./examples/AlternativeLabelStepper.tsx?raw";
import { BaseStepper } from "./examples/BaseStepper.tsx";
import baseCode from "./examples/BaseStepper.tsx?raw";
import { DisabledStepper } from "./examples/DisabledStepper.tsx";
import disabledCode from "./examples/DisabledStepper.tsx?raw";
import { ErrorStepper } from "./examples/ErrorStepper.tsx";
import errorCode from "./examples/ErrorStepper.tsx?raw";
import { IconsStepper } from "./examples/IconsStepper.tsx";
import iconsCode from "./examples/IconsStepper.tsx?raw";
import { NonLinearStepper } from "./examples/NonLinearStepper.tsx";
import nonLinearCode from "./examples/NonLinearStepper.tsx?raw";
import { OptionalStepper } from "./examples/OptionalStepper.tsx";
import optionalCode from "./examples/OptionalStepper.tsx?raw";
import { ReadOnlyStepper } from "./examples/ReadOnlyStepper.tsx";
import readOnlyCode from "./examples/ReadOnlyStepper.tsx?raw";
import { SizesStepper } from "./examples/SizesStepper.tsx";
import sizesCode from "./examples/SizesStepper.tsx?raw";
import overridesCss from "./examples/stepper-overrides.css?raw";
import { StyledStepper } from "./examples/StyledStepper.tsx";
import styledCode from "./examples/StyledStepper.tsx?raw";
import { TailwindStepper } from "./examples/TailwindStepper.tsx";
import tailwindCode from "./examples/TailwindStepper.tsx?raw";
import { VariantStepper } from "./examples/VariantStepper.tsx";
import variantCode from "./examples/VariantStepper.tsx?raw";
import { VerticalStepper } from "./examples/VerticalStepper.tsx";
import verticalCode from "./examples/VerticalStepper.tsx?raw";
import { VerticalWizardStepper } from "./examples/VerticalWizardStepper.tsx";
import verticalWizardCode from "./examples/VerticalWizardStepper.tsx?raw";
import { WizardStepper } from "./examples/WizardStepper.tsx";
import wizardCode from "./examples/WizardStepper.tsx?raw";
import "./StepperPage.scss";

type StoryId =
  | "base"
  | "alternativeLabel"
  | "vertical"
  | "wizard"
  | "verticalWizard"
  | "nonLinear"
  | "error"
  | "icons"
  | "optional"
  | "disabled"
  | "readOnly"
  | "sizes";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

export function StepperPage() {
  const { t } = useTranslation("stepper");
  const texts = t("demo", { returnObjects: true });
  const story = { returnObjects: true } as const;

  const stories: Story[] = [
    { id: "base", file: "BaseStepper.tsx", code: baseCode, preview: <BaseStepper texts={texts} /> },
    {
      id: "alternativeLabel",
      file: "AlternativeLabelStepper.tsx",
      code: alternativeLabelCode,
      preview: <AlternativeLabelStepper texts={texts} />,
    },
    {
      id: "vertical",
      file: "VerticalStepper.tsx",
      code: verticalCode,
      preview: <VerticalStepper texts={texts} />,
    },
    {
      id: "wizard",
      file: "WizardStepper.tsx",
      code: wizardCode,
      preview: <WizardStepper texts={texts} />,
    },
    {
      id: "verticalWizard",
      file: "VerticalWizardStepper.tsx",
      code: verticalWizardCode,
      preview: <VerticalWizardStepper texts={texts} />,
    },
    {
      id: "nonLinear",
      file: "NonLinearStepper.tsx",
      code: nonLinearCode,
      preview: <NonLinearStepper texts={texts} />,
    },
    {
      id: "error",
      file: "ErrorStepper.tsx",
      code: errorCode,
      preview: <ErrorStepper texts={texts} {...t("stories.error.texts", story)} />,
    },
    {
      id: "icons",
      file: "IconsStepper.tsx",
      code: iconsCode,
      preview: <IconsStepper navLabel={texts.navLabel} {...t("stories.icons.texts", story)} />,
    },
    {
      id: "optional",
      file: "OptionalStepper.tsx",
      code: optionalCode,
      preview: <OptionalStepper texts={texts} {...t("stories.optional.texts", story)} />,
    },
    {
      id: "disabled",
      file: "DisabledStepper.tsx",
      code: disabledCode,
      preview: <DisabledStepper texts={texts} />,
    },
    {
      id: "readOnly",
      file: "ReadOnlyStepper.tsx",
      code: readOnlyCode,
      preview: <ReadOnlyStepper {...t("stories.readOnly.texts", story)} />,
    },
    {
      id: "sizes",
      file: "SizesStepper.tsx",
      code: sizesCode,
      preview: <SizesStepper texts={texts} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Stepper } from "@gem-org/gem-system"'
      />

      <StepperPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindStepper.tsx" stack>
            <TailwindStepper texts={texts} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantStepper.tsx" stack>
            <VariantStepper texts={texts} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="stepper-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledStepper.tsx" stack>
              <StyledStepper texts={texts} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="Stepper"
        to="/system/navigation/stepper/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
