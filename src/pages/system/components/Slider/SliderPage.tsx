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
import { SliderPlayground } from "./SliderPlayground.tsx";
import { BaseSlider } from "./examples/BaseSlider.tsx";
import baseCode from "./examples/BaseSlider.tsx?raw";
import { ControlledRangeSlider } from "./examples/ControlledRangeSlider.tsx";
import controlledRangeCode from "./examples/ControlledRangeSlider.tsx?raw";
import { ControlledSlider } from "./examples/ControlledSlider.tsx";
import controlledCode from "./examples/ControlledSlider.tsx?raw";
import { DisabledSlider } from "./examples/DisabledSlider.tsx";
import disabledCode from "./examples/DisabledSlider.tsx?raw";
import { ErrorSlider } from "./examples/ErrorSlider.tsx";
import errorCode from "./examples/ErrorSlider.tsx?raw";
import { PrefixSuffixSlider } from "./examples/PrefixSuffixSlider.tsx";
import prefixSuffixCode from "./examples/PrefixSuffixSlider.tsx?raw";
import { RangeSlider } from "./examples/RangeSlider.tsx";
import rangeCode from "./examples/RangeSlider.tsx?raw";
import overridesCss from "./examples/slider-overrides.css?raw";
import { SliderSizes } from "./examples/SliderSizes.tsx";
import sizesCode from "./examples/SliderSizes.tsx?raw";
import { SliderTones } from "./examples/SliderTones.tsx";
import tonesCode from "./examples/SliderTones.tsx?raw";
import { StepSlider } from "./examples/StepSlider.tsx";
import stepCode from "./examples/StepSlider.tsx?raw";
import { StyledSliders } from "./examples/StyledSliders.tsx";
import styledCode from "./examples/StyledSliders.tsx?raw";
import { TailwindSlider } from "./examples/TailwindSlider.tsx";
import tailwindCode from "./examples/TailwindSlider.tsx?raw";
import { TooltipSlider } from "./examples/TooltipSlider.tsx";
import tooltipCode from "./examples/TooltipSlider.tsx?raw";
import { VariantSliders } from "./examples/VariantSlider.tsx";
import variantCode from "./examples/VariantSlider.tsx?raw";
import { WithoutValueSlider } from "./examples/WithoutValueSlider.tsx";
import withoutValueCode from "./examples/WithoutValueSlider.tsx?raw";
import "./SliderPage.scss";

type StoryId =
  | "base"
  | "range"
  | "disabled"
  | "error"
  | "tones"
  | "sizes"
  | "step"
  | "prefixSuffix"
  | "withoutValue"
  | "withTooltip"
  | "controlled"
  | "controlledRange";

type Story = {
  id: StoryId;
  file: string;
  code: string;
  preview: ReactNode;
};

export function SliderPage() {
  const { t } = useTranslation("slider");
  const rangeLabels = { minAriaLabel: t("rangeLabels.min"), maxAriaLabel: t("rangeLabels.max") };

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseSlider.tsx",
      code: baseCode,
      preview: <BaseSlider {...t("stories.base.texts", { returnObjects: true })} />,
    },
    {
      id: "range",
      file: "RangeSlider.tsx",
      code: rangeCode,
      preview: (
        <RangeSlider {...rangeLabels} {...t("stories.range.texts", { returnObjects: true })} />
      ),
    },
    {
      id: "disabled",
      file: "DisabledSlider.tsx",
      code: disabledCode,
      preview: <DisabledSlider {...t("stories.disabled.texts", { returnObjects: true })} />,
    },
    {
      id: "error",
      file: "ErrorSlider.tsx",
      code: errorCode,
      preview: <ErrorSlider {...t("stories.error.texts", { returnObjects: true })} />,
    },
    {
      id: "tones",
      file: "SliderTones.tsx",
      code: tonesCode,
      preview: <SliderTones />,
    },
    {
      id: "sizes",
      file: "SliderSizes.tsx",
      code: sizesCode,
      preview: <SliderSizes labels={t("stories.sizes.labels", { returnObjects: true })} />,
    },
    {
      id: "step",
      file: "StepSlider.tsx",
      code: stepCode,
      preview: <StepSlider {...t("stories.step.texts", { returnObjects: true })} />,
    },
    {
      id: "prefixSuffix",
      file: "PrefixSuffixSlider.tsx",
      code: prefixSuffixCode,
      preview: (
        <PrefixSuffixSlider
          {...rangeLabels}
          {...t("stories.prefixSuffix.texts", { returnObjects: true })}
        />
      ),
    },
    {
      id: "withoutValue",
      file: "WithoutValueSlider.tsx",
      code: withoutValueCode,
      preview: <WithoutValueSlider {...t("stories.withoutValue.texts", { returnObjects: true })} />,
    },
    {
      id: "withTooltip",
      file: "TooltipSlider.tsx",
      code: tooltipCode,
      preview: <TooltipSlider {...t("stories.withTooltip.texts", { returnObjects: true })} />,
    },
    {
      id: "controlled",
      file: "ControlledSlider.tsx",
      code: controlledCode,
      preview: <ControlledSlider {...t("stories.controlled.texts", { returnObjects: true })} />,
    },
    {
      id: "controlledRange",
      file: "ControlledRangeSlider.tsx",
      code: controlledRangeCode,
      preview: (
        <ControlledRangeSlider
          {...rangeLabels}
          {...t("stories.controlledRange.texts", { returnObjects: true })}
        />
      ),
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Slider } from "@gem-org/gem-system"'
      />

      <SliderPlayground />

      {stories.map((story) => (
        <DocsSection
          key={story.id}
          title={t(`stories.${story.id}.title`)}
          description={t(`stories.${story.id}.description`)}
        >
          <DemoBlock code={story.code} label={story.file}>
            <div className="slider-demo">{story.preview}</div>
          </DemoBlock>
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindSlider.tsx">
            <div className="slider-demo">
              <TailwindSlider texts={t("styleChanges.tailwind", { returnObjects: true })} />
            </div>
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantSlider.tsx">
            <div className="slider-demo">
              <VariantSliders />
            </div>
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="slider-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledSliders.tsx">
              <div className="slider-demo">
                <StyledSliders texts={t("styleChanges.css", { returnObjects: true })} />
              </div>
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="Slider"
        to="/system/components/slider/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
