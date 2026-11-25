import { ScrambleText } from "@gem-org/gemffects/scramble-text";
import { ScrambleTile } from "./ScrambleTile.tsx";
import "./scramble-text-demo.css";

const SAMPLES = [
  { label: "default", text: "ACCESS", charset: undefined },
  { label: 'charset="0123456789ABCDEF"', text: "0x7F3A", charset: "0123456789ABCDEF" },
  { label: 'charset="01"', text: "BINARY", charset: "01" },
  { label: 'charset="!<>-_\\/[]{}=+*^?#"', text: "GLITCH", charset: "!<>-_\\/[]{}=+*^?#" },
];

export function CharsetScrambleText() {
  return (
    <div className="scramble-demo">
      {SAMPLES.map((sample) => (
        <ScrambleTile key={sample.label} label={sample.label}>
          <ScrambleText
            variant="loop"
            duration={1400}
            hold={800}
            charset={sample.charset}
            text={sample.text}
            className="scramble-demo__copy scramble-demo__copy--sm"
          />
        </ScrambleTile>
      ))}
    </div>
  );
}
