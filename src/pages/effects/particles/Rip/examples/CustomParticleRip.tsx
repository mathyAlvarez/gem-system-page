import { Rip, type RipParticle } from "@gem-org/gemffects/rip";
import { RipTile } from "./RipTile.tsx";
import "./rip-demo.css";

const renderGlyph = (item: RipParticle) => (
  <span className="rp-demo__glyph" style={{ color: item.color }}>
    ✦
  </span>
);

const renderChip = (item: RipParticle) => (
  <span className="rp-demo__chip" style={{ color: item.color }} />
);

export function CustomParticleRip() {
  return (
    <div className="rp-demo">
      <RipTile label="glyph">
        <Rip
          particle="star"
          count={6}
          variant="slash"
          trigger="click"
          renderParticle={renderGlyph}
          className="rp-demo__host"
        >
          <div className="rp-demo__target rp-demo__target--sm">✦</div>
        </Rip>
      </RipTile>
      <RipTile label="chip">
        <Rip
          particle="confetti"
          count={6}
          variant="slash"
          trigger="click"
          renderParticle={renderChip}
          className="rp-demo__host"
        >
          <div className="rp-demo__target rp-demo__target--sm">chip</div>
        </Rip>
      </RipTile>
    </div>
  );
}
