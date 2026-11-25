import { Flash } from "@gem-org/gemffects/flash";
import { FlashTile } from "./FlashTile.tsx";
import "./flash-demo.css";

type ImageFlashProps = {
  alt: string;
};

export function ImageFlash({ alt }: ImageFlashProps) {
  return (
    <FlashTile>
      <Flash origin="pointer" intensity="lg" className="flash-demo__host">
        <img className="flash-demo__image" src="/gem-org-favicon.png" alt={alt} draggable={false} />
      </Flash>
    </FlashTile>
  );
}
