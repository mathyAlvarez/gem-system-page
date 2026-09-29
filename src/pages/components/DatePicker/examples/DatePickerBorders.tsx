import { DatePicker, type DatePickerBorder } from "@gem-org/gem-system";

const today = new Date();

const borders: DatePickerBorder[] = [
  "default",
  "outlined",
  "primary",
  "success",
  "warning",
  "error",
  "info",
  "borderless",
];

export function DatePickerBorders() {
  return (
    <>
      {borders.map((border) => (
        <DatePicker
          key={border}
          border={border}
          label={`${border[0].toUpperCase()}${border.slice(1)}`}
          defaultValue={today}
          helperText={`border="${border}"`}
        />
      ))}
    </>
  );
}
