import { ScrambleText } from "@gem-org/gemffects/scramble-text";
import { ScrambleTile } from "./ScrambleTile.tsx";
import "./scramble-text-demo.css";

type TailwindScrambleTextProps = {
  text: string;
};

export function TailwindScrambleText({ text }: TailwindScrambleTextProps) {
  return (
    <ScrambleTile>
      <ScrambleText
        variant="loop"
        text={text}
        className="text-[2rem] font-bold tracking-[0.2em] text-[var(--gem-palette-primary-300)]"
        classNames={{ glyphs: "drop-shadow-[0_0_10px_var(--gem-palette-primary-500)]" }}
      />
    </ScrambleTile>
  );
}
