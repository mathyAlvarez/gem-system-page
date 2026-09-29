import { Select, type SelectOption } from "@gem-org/gem-system";
import "./select-overrides.css";

type StyledSelectsProps = {
  options: readonly SelectOption[];
  texts: { branded: string; brandedHelper: string; pill: string; pillHelper: string };
};

export function StyledSelects({ options, texts }: StyledSelectsProps) {
  return (
    <>
      <Select
        label={texts.branded}
        helperText={texts.brandedHelper}
        options={options}
        multiple
        defaultValue={["br", "es"]}
        searchable={false}
        wrapperClassName="select-branded"
      />
      <Select
        label={texts.pill}
        helperText={texts.pillHelper}
        options={options}
        multiple
        defaultValue={["mx", "jp"]}
        searchable={false}
        wrapperClassName="select-pill"
      />
    </>
  );
}
