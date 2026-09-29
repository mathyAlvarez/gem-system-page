import { Container } from "@gem-org/gem-system";
import { ContainerDemoBox } from "./ContainerDemoBox.tsx";

type FluidContainerProps = { title: string; body: string };

export function FluidContainer({ title, body }: FluidContainerProps) {
  return (
    <div className="container-stage">
      <Container fluid>
        <ContainerDemoBox title={title} body={body} />
      </Container>
    </div>
  );
}
