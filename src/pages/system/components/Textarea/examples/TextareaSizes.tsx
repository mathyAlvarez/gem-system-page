import { Textarea, type TextareaSize } from "@gem-org/gem-system";

const sizes: TextareaSize[] = ["sm", "md", "lg"];

type TextareaSizesProps = {
  labels: Record<TextareaSize, string>;
};

export function TextareaSizes({ labels }: TextareaSizesProps) {
  return (
    <>
      {sizes.map((size) => (
        <Textarea
          key={size}
          size={size}
          label={labels[size]}
          minRows={2}
          showCount
          maxLength={80}
        />
      ))}
    </>
  );
}
