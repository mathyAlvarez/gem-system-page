import { useEffect, useState } from "react";
import { Combobox, type ComboboxOption } from "@gem-org/gem-system";
import { COUNTRIES } from "./data";

type AsyncComboboxProps = { label: string; placeholder: string; loadingText: string; helperText: string };

function fetchCountries(query: string): Promise<ComboboxOption[]> {
  const needle = query.trim().toLocaleLowerCase();
  const matches = COUNTRIES.filter((item) => String(item.label).toLocaleLowerCase().includes(needle));
  return new Promise((resolve) => window.setTimeout(() => resolve(matches), 400));
}

export function AsyncCombobox({ label, placeholder, loadingText, helperText }: AsyncComboboxProps) {
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("");
  const [options, setOptions] = useState<ComboboxOption[]>(COUNTRIES);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let active = true;
    fetchCountries(query).then((result) => {
      if (!active) return;
      setOptions(result);
      setIsLoading(false);
    });
    return () => {
      active = false;
    };
  }, [query]);

  return (
    <Combobox
      label={label}
      options={options}
      filter={false}
      isLoading={isLoading}
      inputValue={query}
      onInputChange={(next) => {
        setIsLoading(true);
        setQuery(next);
      }}
      value={value}
      onChange={(next) => {
        if (typeof next === "string") setValue(next);
      }}
      placeholder={placeholder}
      helperText={isLoading ? loadingText : helperText}
    />
  );
}
