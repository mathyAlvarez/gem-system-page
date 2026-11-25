import { Textarea, type TextareaBorder } from "@gem-org/gem-system";

const borders: TextareaBorder[] = [
  "default",
  "outlined",
  "borderless",
  "primary",
  "success",
  "warning",
  "error",
  "info",
];

type TextareaBordersProps = {
  placeholders: Record<TextareaBorder, string>;
};

export function TextareaBorders({ placeholders }: TextareaBordersProps) {
  return (
    <>
      {borders.map((border) => (
        <Textarea
          key={border}
          label={border}
          border={border}
          minRows={2}
          placeholder={placeholders[border]}
        />
      ))}
    </>
  );
}
