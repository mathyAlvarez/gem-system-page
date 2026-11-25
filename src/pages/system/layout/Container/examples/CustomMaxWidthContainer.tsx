import { Container, Typography } from "@gem-org/gem-system";
import { ContainerDemoBox } from "./ContainerDemoBox.tsx";

const examples = [
  { label: "720 (px)", value: 720 },
  { label: "80%", value: "80%" },
  { label: "30rem", value: "30rem" },
  { label: "min(90%, 36rem)", value: "min(90%, 36rem)" },
] as const;

type CustomMaxWidthContainerProps = { body: string };

export function CustomMaxWidthContainer({ body }: CustomMaxWidthContainerProps) {
  return (
    <div className="container-compare">
      {examples.map((example) => (
        <div key={example.label}>
          <Typography variant="caption" as="p">
            maxWidth={example.label}
          </Typography>
          <div className="container-stage">
            <Container maxWidth={example.value}>
              <ContainerDemoBox title={example.label} body={body} />
            </Container>
          </div>
        </div>
      ))}
    </div>
  );
}
