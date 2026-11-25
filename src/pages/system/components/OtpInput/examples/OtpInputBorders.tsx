import { OtpInput, type OtpInputBorder } from "@gem-org/gem-system";

const borders: { border: OtpInputBorder; label: string; value: string }[] = [
  { border: "default", label: "Default", value: "123456" },
  { border: "outlined", label: "Outlined", value: "123456" },
  { border: "borderless", label: "Borderless", value: "123456" },
  { border: "primary", label: "Primary", value: "123456" },
  { border: "success", label: "Success", value: "123456" },
  { border: "warning", label: "Warning", value: "123456" },
  { border: "error", label: "Error", value: "000000" },
  { border: "info", label: "Info", value: "123456" },
];

type OtpInputBordersProps = { helperTexts: Record<OtpInputBorder, string> };

export function OtpInputBorders({ helperTexts }: OtpInputBordersProps) {
  return (
    <>
      {borders.map(({ border, label, value }) => (
        <OtpInput
          key={border}
          label={label}
          border={border}
          defaultValue={value}
          helperText={helperTexts[border]}
        />
      ))}
    </>
  );
}
