import { Combobox, type ComboboxBorder } from "@gem-org/gem-system";
import { COUNTRIES } from "./data";

const borders: ComboboxBorder[] = [
  "default",
  "outlined",
  "primary",
  "success",
  "warning",
  "error",
  "info",
  "borderless",
];

export function ComboboxBorders() {
  return (
    <>
      {borders.map((border) => (
        <Combobox
          key={border}
          border={border}
          label={`${border[0].toUpperCase()}${border.slice(1)}`}
          options={COUNTRIES}
          defaultValue="ar"
          helperText={`border="${border}"`}
        />
      ))}
    </>
  );
}
