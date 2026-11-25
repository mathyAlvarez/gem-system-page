import { Combobox } from "@gem-org/gem-system";
import { CITY_RECORDS } from "./data";
import "./custom-option.css";

type CustomOptionComboboxProps = { label: string; placeholder: string; helperText: string };

export function CustomOptionCombobox({
  label,
  placeholder,
  helperText,
}: CustomOptionComboboxProps) {
  return (
    <Combobox
      label={label}
      options={CITY_RECORDS}
      optionValue="code"
      optionLabel="name"
      optionSearchText={(city) => `${city.name} ${city.country}`}
      placeholder={placeholder}
      helperText={helperText}
    >
      {(city, { highlight }) => (
        <span className="city-option">
          <span className="city-option__avatar" aria-hidden>
            {city.tag}
          </span>
          <span className="city-option__copy">
            <span className="gem-combobox__option-label">{highlight(city.name)}</span>
            <span className="gem-combobox__option-description">{city.country}</span>
          </span>
        </span>
      )}
    </Combobox>
  );
}
