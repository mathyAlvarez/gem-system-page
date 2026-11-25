import { InputText } from "@gem-org/gem-system";
import { AlertCircle, Mail, Search, User } from "@gem-org/gem-system/icons";

type AllStatesInputTextProps = {
  texts: {
    base: { label: string; placeholder: string; helperText: string };
    icons: { label: string; placeholder: string };
    error: { label: string; defaultValue: string; errorMessage: string };
    disabled: { label: string; defaultValue: string };
  };
};

export function AllStatesInputText({ texts }: AllStatesInputTextProps) {
  return (
    <>
      <InputText
        label={texts.base.label}
        placeholder={texts.base.placeholder}
        helperText={texts.base.helperText}
      />
      <InputText
        label={texts.icons.label}
        placeholder={texts.icons.placeholder}
        prefixIcon={<User size="sm" />}
        suffixIcon={<Search size="sm" />}
      />
      <InputText
        label={texts.error.label}
        defaultValue={texts.error.defaultValue}
        isInvalid
        errorMessage={texts.error.errorMessage}
        suffixIcon={<AlertCircle size="sm" />}
      />
      <InputText
        label={texts.disabled.label}
        defaultValue={texts.disabled.defaultValue}
        isDisabled
        prefixIcon={<Mail size="sm" />}
      />
    </>
  );
}
