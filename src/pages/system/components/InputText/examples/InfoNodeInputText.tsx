import { InputText } from "@gem-org/gem-system";

type InfoNodeInputTextProps = {
  label: string;
  placeholder: string;
  infoLabel: string;
  infoTitle: string;
  infoBody: string;
  helperText: string;
};

export function InfoNodeInputText({
  label,
  placeholder,
  infoLabel,
  infoTitle,
  infoBody,
  helperText,
}: InfoNodeInputTextProps) {
  return (
    <InputText
      label={label}
      placeholder={placeholder}
      infoLabel={infoLabel}
      infoText={
        <span style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          <strong style={{ fontWeight: 700 }}>{infoTitle}</strong>
          <span style={{ opacity: 0.9 }}>{infoBody}</span>
        </span>
      }
      helperText={helperText}
    />
  );
}
