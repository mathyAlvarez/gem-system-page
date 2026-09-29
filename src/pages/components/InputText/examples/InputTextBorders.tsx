import { InputText } from "@gem-org/gem-system";
import { AlertCircle, AlertTriangle, CheckCircle, Info, Search, User } from "@gem-org/gem-system/icons";

type BorderText = { text: string; helperText: string };

type InputTextBordersProps = {
  texts: Record<
    "default" | "outlined" | "borderless" | "primary" | "success" | "warning" | "error" | "info",
    BorderText
  >;
};

export function InputTextBorders({ texts }: InputTextBordersProps) {
  return (
    <>
      <InputText label="Default" border="default" placeholder={texts.default.text} helperText={texts.default.helperText} />
      <InputText
        label="Outlined"
        border="outlined"
        placeholder={texts.outlined.text}
        helperText={texts.outlined.helperText}
      />
      <InputText
        label="Borderless"
        border="borderless"
        placeholder={texts.borderless.text}
        helperText={texts.borderless.helperText}
        prefixIcon={<Search size="sm" />}
      />
      <InputText
        label="Primary"
        border="primary"
        placeholder={texts.primary.text}
        helperText={texts.primary.helperText}
        prefixIcon={<User size="sm" />}
      />
      <InputText
        label="Success"
        border="success"
        defaultValue={texts.success.text}
        helperText={texts.success.helperText}
        suffixIcon={<CheckCircle size="sm" />}
      />
      <InputText
        label="Warning"
        border="warning"
        defaultValue={texts.warning.text}
        helperText={texts.warning.helperText}
        suffixIcon={<AlertTriangle size="sm" />}
      />
      <InputText
        label="Error"
        border="error"
        defaultValue={texts.error.text}
        helperText={texts.error.helperText}
        suffixIcon={<AlertCircle size="sm" />}
      />
      <InputText
        label="Info"
        border="info"
        placeholder={texts.info.text}
        helperText={texts.info.helperText}
        suffixIcon={<Info size="sm" />}
      />
    </>
  );
}
