import { Container, Typography, type ContainerSize } from "@gem-org/gem-system";
import { ContainerDemoBox } from "./ContainerDemoBox.tsx";

const sizes: ContainerSize[] = ["sm", "md", "lg", "xl", "2xl"];

type ContainerSizesProps = { body: string };

export function ContainerSizes({ body }: ContainerSizesProps) {
  return (
    <div className="container-compare">
      {sizes.map((size) => (
        <div key={size}>
          <Typography variant="caption" as="p">
            size="{size}"
          </Typography>
          <div className="container-stage">
            <Container size={size}>
              <ContainerDemoBox title={size} body={body} />
            </Container>
          </div>
        </div>
      ))}
    </div>
  );
}
