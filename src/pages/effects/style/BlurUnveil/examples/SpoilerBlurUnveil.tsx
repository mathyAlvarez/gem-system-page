import { BlurUnveil } from "@gem-org/gemffects/blur-unveil";
import { UnveilTile } from "./UnveilTile.tsx";
import "./blur-unveil-demo.css";

type SpoilerBlurUnveilProps = {
  title: string;
  body: string;
};

export function SpoilerBlurUnveil({ title, body }: SpoilerBlurUnveilProps) {
  return (
    <UnveilTile>
      <BlurUnveil
        trigger="click"
        intensity="sm"
        scale={1}
        tabIndex={0}
        className="unveil-demo__host"
      >
        <article className="unveil-demo__card">
          <p className="unveil-demo__card-title">{title}</p>
          <p className="unveil-demo__card-body">{body}</p>
        </article>
      </BlurUnveil>
    </UnveilTile>
  );
}
