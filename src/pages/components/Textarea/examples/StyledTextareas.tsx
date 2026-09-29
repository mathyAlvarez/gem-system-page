import { Textarea } from "@gem-org/gem-system";
import "./textarea-overrides.css";

type StyledTextareasProps = {
  texts: {
    soft: string;
    softPlaceholder: string;
    softHelper: string;
    code: string;
    codeValue: string;
  };
};

export function StyledTextareas({ texts }: StyledTextareasProps) {
  return (
    <>
      <Textarea
        label={texts.soft}
        placeholder={texts.softPlaceholder}
        helperText={texts.softHelper}
        wrapperClassName="textarea-soft"
      />
      <Textarea
        label={texts.code}
        defaultValue={texts.codeValue}
        showCount
        maxLength={200}
        wrapperClassName="textarea-code"
      />
    </>
  );
}
