import { InputText } from "@gem-org/gem-system";
import { AlertCircle, AlertTriangle, CheckCircle, Info } from "@gem-org/gem-system/icons";

type OutlineBordersInputTextProps = {
  texts: { success: string; warning: string; error: string };
};

export function OutlineBordersInputText({ texts }: OutlineBordersInputTextProps) {
  return (
    <>
      <InputText label="Default" labelPlacement="outline" placeholder="Default" />
      <InputText label="Primary" labelPlacement="outline" border="primary" placeholder="Primary" />
      <InputText
        label="Success"
        labelPlacement="outline"
        border="success"
        defaultValue={texts.success}
        suffixIcon={<CheckCircle size="sm" />}
      />
      <InputText
        label="Warning"
        labelPlacement="outline"
        border="warning"
        defaultValue={texts.warning}
        suffixIcon={<AlertTriangle size="sm" />}
      />
      <InputText
        label="Error"
        labelPlacement="outline"
        border="error"
        defaultValue={texts.error}
        suffixIcon={<AlertCircle size="sm" />}
      />
      <InputText
        label="Info"
        labelPlacement="outline"
        border="info"
        placeholder="Info"
        suffixIcon={<Info size="sm" />}
      />
    </>
  );
}
