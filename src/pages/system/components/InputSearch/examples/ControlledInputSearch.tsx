import { useState } from "react";
import { InputSearch, Typography } from "@gem-org/gem-system";

type ControlledInputSearchProps = {
  label: string;
  helperText: string;
  valueLabel: string;
  searchLabel: string;
  empty: string;
};

export function ControlledInputSearch({
  label,
  helperText,
  valueLabel,
  searchLabel,
  empty,
}: ControlledInputSearchProps) {
  const [value, setValue] = useState("gem");
  const [lastSearch, setLastSearch] = useState("");

  return (
    <>
      <InputSearch
        label={label}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onClear={() => setValue("")}
        onSearch={setLastSearch}
        helperText={helperText}
      />
      <div>
        <Typography variant="caption" as="p">
          {valueLabel}: <code>{value || empty}</code>
        </Typography>
        <Typography variant="caption" as="p">
          {searchLabel}: <code>{lastSearch || empty}</code>
        </Typography>
      </div>
    </>
  );
}
