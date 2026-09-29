import { Select, type SelectBorder, type SelectOption } from "@gem-org/gem-system";

const borders: SelectBorder[] = ["default", "outlined", "primary", "success", "warning", "error", "info", "borderless"];

export function SelectBorders({ options }: { options: readonly SelectOption[] }) {
  return (
    <>
      {borders.map((border) => (
        <Select
          key={border}
          border={border}
          label={`${border[0].toUpperCase()}${border.slice(1)}`}
          options={options}
          defaultValue="br"
          searchable={false}
          helperText={`border="${border}"`}
        />
      ))}
    </>
  );
}
