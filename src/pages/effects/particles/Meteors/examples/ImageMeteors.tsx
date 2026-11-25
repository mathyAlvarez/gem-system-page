import { Meteors } from "@gem-org/gemffects/meteors";
import "./meteors-demo.css";

type ImageMeteorsProps = {
  alt: string;
};

/** `img` is a void element, so it goes inside the default `div` host instead of `asChild`. */
export function ImageMeteors({ alt }: ImageMeteorsProps) {
  return (
    <Meteors speed={1.2} count={16} className="mt-demo__media">
      <img className="mt-demo__image" src="/gem-org-favicon.png" alt={alt} />
    </Meteors>
  );
}
