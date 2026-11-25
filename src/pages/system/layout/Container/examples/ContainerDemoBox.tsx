import { Typography } from "@gem-org/gem-system";
import "./container-demo.css";

type ContainerDemoBoxProps = { title: string; body: string };

export function ContainerDemoBox({ title, body }: ContainerDemoBoxProps) {
  return (
    <div className="container-box">
      <Typography variant="h5" as="h3">
        {title}
      </Typography>
      <Typography variant="body" as="p">
        {body}
      </Typography>
    </div>
  );
}
