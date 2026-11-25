import { Container, type ContainerProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { ContainerDemoBox } from "./ContainerDemoBox.tsx";

const containerVariants = cva("", {
  variants: {
    width: {
      prose: "[--gem-container-max:65ch]",
      page: "",
    },
    gutter: {
      default: "",
      none: "[--gem-container-pad:0]",
      wide: "[--gem-container-pad:var(--gem-space-10)]",
    },
  },
  defaultVariants: { width: "page", gutter: "default" },
});

type VariantContainerProps = ContainerProps & VariantProps<typeof containerVariants>;

export function VariantContainer({ width, gutter, className, ...props }: VariantContainerProps) {
  return <Container className={cn(containerVariants({ width, gutter }), className)} {...props} />;
}

type VariantContainersProps = { body: string };

export function VariantContainers({ body }: VariantContainersProps) {
  return (
    <div className="container-compare">
      <div className="container-stage">
        <VariantContainer width="prose">
          <ContainerDemoBox title='width="prose"' body={body} />
        </VariantContainer>
      </div>
      <div className="container-stage">
        <VariantContainer width="prose" gutter="wide">
          <ContainerDemoBox title='width="prose" gutter="wide"' body={body} />
        </VariantContainer>
      </div>
      <div className="container-stage">
        <VariantContainer gutter="none">
          <ContainerDemoBox title='gutter="none"' body={body} />
        </VariantContainer>
      </div>
    </div>
  );
}
