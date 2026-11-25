import { InputText } from "@gem-org/gem-system";
import "./style-overrides.css";

type OverrideText = { placeholder: string; helperText: string };

type StyleOverridesInputTextProps = {
  texts: { className: OverrideText; wrapperClassName: OverrideText; style: OverrideText };
};

export function StyleOverridesInputText({ texts }: StyleOverridesInputTextProps) {
  return (
    <>
      <InputText
        label="className"
        placeholder={texts.className.placeholder}
        className="input-text-pill"
        helperText={texts.className.helperText}
      />
      <InputText
        label="wrapperClassName"
        placeholder={texts.wrapperClassName.placeholder}
        wrapperClassName="input-text-branded"
        helperText={texts.wrapperClassName.helperText}
      />
      <InputText
        label="style"
        placeholder={texts.style.placeholder}
        defaultValue="INLINE"
        uppercase
        style={{
          borderRadius: "0.25rem",
          borderColor: "var(--gem-palette-primary-500)",
          background: "color-mix(in srgb, var(--gem-palette-primary-500) 10%, transparent)",
          letterSpacing: "0.08em",
        }}
        helperText={texts.style.helperText}
      />
    </>
  );
}
