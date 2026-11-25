import { Container } from "@gem-org/gem-system";
import { ContainerDemoBox } from "./ContainerDemoBox.tsx";

type LandmarkContainerProps = { title: string; body: string };

export function LandmarkContainer({ title, body }: LandmarkContainerProps) {
  return (
    <div className="container-stage">
      <Container as="section" aria-label={title}>
        <ContainerDemoBox title={title} body={body} />
      </Container>
    </div>
  );
}
