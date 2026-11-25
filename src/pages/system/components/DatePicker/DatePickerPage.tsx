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
import { DatePickerPlayground } from "./DatePickerPlayground.tsx";
import { BaseDatePicker } from "./examples/BaseDatePicker.tsx";
import baseCode from "./examples/BaseDatePicker.tsx?raw";
import { BirthDatePicker } from "./examples/BirthDatePicker.tsx";
import birthCode from "./examples/BirthDatePicker.tsx?raw";
import { ClearableDatePicker } from "./examples/ClearableDatePicker.tsx";
import clearableCode from "./examples/ClearableDatePicker.tsx?raw";
import { ControlledDatePicker } from "./examples/ControlledDatePicker.tsx";
import controlledCode from "./examples/ControlledDatePicker.tsx?raw";
import { ControlledRangeDatePicker } from "./examples/ControlledRangeDatePicker.tsx";
import controlledRangeCode from "./examples/ControlledRangeDatePicker.tsx?raw";
import { DatePickerBorders } from "./examples/DatePickerBorders.tsx";
import bordersCode from "./examples/DatePickerBorders.tsx?raw";
import overridesCss from "./examples/datepicker-overrides.css?raw";
import { DatePickerSizes } from "./examples/DatePickerSizes.tsx";
import sizesCode from "./examples/DatePickerSizes.tsx?raw";
import { DisabledDatePicker } from "./examples/DisabledDatePicker.tsx";
import disabledCode from "./examples/DisabledDatePicker.tsx?raw";
import { ErrorDatePicker } from "./examples/ErrorDatePicker.tsx";
import errorCode from "./examples/ErrorDatePicker.tsx?raw";
import eventsCss from "./examples/events-log.css?raw";
import { EventsDatePicker } from "./examples/EventsDatePicker.tsx";
import eventsCode from "./examples/EventsDatePicker.tsx?raw";
import { FormatDatePickers } from "./examples/FormatDatePickers.tsx";
import formatCode from "./examples/FormatDatePickers.tsx?raw";
import { LoadingDatePicker } from "./examples/LoadingDatePicker.tsx";
import loadingCode from "./examples/LoadingDatePicker.tsx?raw";
import { LoadingThenValueDatePicker } from "./examples/LoadingThenValueDatePicker.tsx";
import loadingThenValueCode from "./examples/LoadingThenValueDatePicker.tsx?raw";
import { LocaleDatePickers } from "./examples/LocaleDatePickers.tsx";
import localeCode from "./examples/LocaleDatePickers.tsx?raw";
import { MinMaxDatePicker } from "./examples/MinMaxDatePicker.tsx";
import minMaxCode from "./examples/MinMaxDatePicker.tsx?raw";
import { MinuteStepDatePicker } from "./examples/MinuteStepDatePicker.tsx";
import minuteStepCode from "./examples/MinuteStepDatePicker.tsx?raw";
import { RangeDatePicker } from "./examples/RangeDatePicker.tsx";
import rangeCode from "./examples/RangeDatePicker.tsx?raw";
import { StyledDatePickers } from "./examples/StyledDatePickers.tsx";
import styledCode from "./examples/StyledDatePickers.tsx?raw";
import { TailwindDatePicker } from "./examples/TailwindDatePicker.tsx";
import tailwindCode from "./examples/TailwindDatePicker.tsx?raw";
import { TimeDatePicker } from "./examples/TimeDatePicker.tsx";
import timeCode from "./examples/TimeDatePicker.tsx?raw";
import { TimeFormatDatePickers } from "./examples/TimeFormatDatePickers.tsx";
import timeFormatCode from "./examples/TimeFormatDatePickers.tsx?raw";
import { TimeRangeDatePicker } from "./examples/TimeRangeDatePicker.tsx";
import timeRangeCode from "./examples/TimeRangeDatePicker.tsx?raw";
import { TooltipDatePicker } from "./examples/TooltipDatePicker.tsx";
import tooltipCode from "./examples/TooltipDatePicker.tsx?raw";
import { VariantDatePickers } from "./examples/VariantDatePicker.tsx";
import variantCode from "./examples/VariantDatePicker.tsx?raw";
import "./DatePickerPage.scss";

type StoryId =
  | "base"
  | "locale"
  | "outputFormat"
  | "range"
  | "withTime"
  | "timeRange"
  | "minuteStep"
  | "timeFormat"
  | "clearable"
  | "disabled"
  | "loading"
  | "loadingThenValue"
  | "error"
  | "minMax"
  | "birthDate"
  | "sizes"
  | "borders"
  | "withTooltip"
  | "controlled"
  | "controlledRange"
  | "events";

type Story = {
  id: StoryId;
  file: string;
  code: string;
  preview: ReactNode;
  css?: { file: string; code: string };
};

export function DatePickerPage() {
  const { t } = useTranslation("datePicker");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseDatePicker.tsx",
      code: baseCode,
      preview: <BaseDatePicker {...t("stories.base.texts", { returnObjects: true })} />,
    },
    {
      id: "locale",
      file: "LocaleDatePickers.tsx",
      code: localeCode,
      preview: <LocaleDatePickers labels={t("stories.locale.labels", { returnObjects: true })} />,
    },
    {
      id: "outputFormat",
      file: "FormatDatePickers.tsx",
      code: formatCode,
      preview: <FormatDatePickers {...t("stories.outputFormat.texts", { returnObjects: true })} />,
    },
    {
      id: "range",
      file: "RangeDatePicker.tsx",
      code: rangeCode,
      preview: <RangeDatePicker {...t("stories.range.texts", { returnObjects: true })} />,
    },
    {
      id: "withTime",
      file: "TimeDatePicker.tsx",
      code: timeCode,
      preview: <TimeDatePicker {...t("stories.withTime.texts", { returnObjects: true })} />,
    },
    {
      id: "timeRange",
      file: "TimeRangeDatePicker.tsx",
      code: timeRangeCode,
      preview: <TimeRangeDatePicker {...t("stories.timeRange.texts", { returnObjects: true })} />,
    },
    {
      id: "minuteStep",
      file: "MinuteStepDatePicker.tsx",
      code: minuteStepCode,
      preview: <MinuteStepDatePicker {...t("stories.minuteStep.texts", { returnObjects: true })} />,
    },
    {
      id: "timeFormat",
      file: "TimeFormatDatePickers.tsx",
      code: timeFormatCode,
      preview: (
        <TimeFormatDatePickers {...t("stories.timeFormat.texts", { returnObjects: true })} />
      ),
    },
    {
      id: "clearable",
      file: "ClearableDatePicker.tsx",
      code: clearableCode,
      preview: <ClearableDatePicker {...t("stories.clearable.texts", { returnObjects: true })} />,
    },
    {
      id: "disabled",
      file: "DisabledDatePicker.tsx",
      code: disabledCode,
      preview: <DisabledDatePicker {...t("stories.disabled.texts", { returnObjects: true })} />,
    },
    {
      id: "loading",
      file: "LoadingDatePicker.tsx",
      code: loadingCode,
      preview: <LoadingDatePicker {...t("stories.loading.texts", { returnObjects: true })} />,
    },
    {
      id: "loadingThenValue",
      file: "LoadingThenValueDatePicker.tsx",
      code: loadingThenValueCode,
      preview: (
        <LoadingThenValueDatePicker
          {...t("stories.loadingThenValue.texts", { returnObjects: true })}
        />
      ),
    },
    {
      id: "error",
      file: "ErrorDatePicker.tsx",
      code: errorCode,
      preview: <ErrorDatePicker {...t("stories.error.texts", { returnObjects: true })} />,
    },
    {
      id: "minMax",
      file: "MinMaxDatePicker.tsx",
      code: minMaxCode,
      preview: <MinMaxDatePicker {...t("stories.minMax.texts", { returnObjects: true })} />,
    },
    {
      id: "birthDate",
      file: "BirthDatePicker.tsx",
      code: birthCode,
      preview: <BirthDatePicker {...t("stories.birthDate.texts", { returnObjects: true })} />,
    },
    {
      id: "sizes",
      file: "DatePickerSizes.tsx",
      code: sizesCode,
      preview: <DatePickerSizes labels={t("stories.sizes.labels", { returnObjects: true })} />,
    },
    {
      id: "borders",
      file: "DatePickerBorders.tsx",
      code: bordersCode,
      preview: <DatePickerBorders />,
    },
    {
      id: "withTooltip",
      file: "TooltipDatePicker.tsx",
      code: tooltipCode,
      preview: <TooltipDatePicker {...t("stories.withTooltip.texts", { returnObjects: true })} />,
    },
    {
      id: "controlled",
      file: "ControlledDatePicker.tsx",
      code: controlledCode,
      preview: <ControlledDatePicker {...t("stories.controlled.texts", { returnObjects: true })} />,
    },
    {
      id: "controlledRange",
      file: "ControlledRangeDatePicker.tsx",
      code: controlledRangeCode,
      preview: (
        <ControlledRangeDatePicker
          {...t("stories.controlledRange.texts", { returnObjects: true })}
        />
      ),
    },
    {
      id: "events",
      file: "EventsDatePicker.tsx",
      code: eventsCode,
      css: { file: "events-log.css", code: eventsCss },
      preview: <EventsDatePicker {...t("stories.events.texts", { returnObjects: true })} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { DatePicker } from "@gem-org/gem-system"'
      />

      <DatePickerPlayground />

      {stories.map((story) => (
        <DocsSection
          key={story.id}
          title={t(`stories.${story.id}.title`)}
          description={t(`stories.${story.id}.description`)}
        >
          {story.css ? (
            <CodeBlock code={story.css.code} label={story.css.file} language="css" />
          ) : null}
          <DemoBlock code={story.code} label={story.file} overflow>
            <div className="datepicker-demo">{story.preview}</div>
          </DemoBlock>
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindDatePicker.tsx" overflow>
            <div className="datepicker-demo">
              <TailwindDatePicker texts={t("styleChanges.tailwind", { returnObjects: true })} />
            </div>
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantDatePicker.tsx" overflow>
            <div className="datepicker-demo">
              <VariantDatePickers />
            </div>
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="datepicker-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledDatePickers.tsx" overflow>
              <div className="datepicker-demo">
                <StyledDatePickers texts={t("styleChanges.css", { returnObjects: true })} />
              </div>
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="DatePicker"
        to="/system/components/date-picker/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
