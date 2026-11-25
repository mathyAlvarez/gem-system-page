import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { AnimatedNumber } from "@gem-org/gemsitions/animated-number";
import { NumberPanel } from "./NumberPanel.tsx";
import "./animated-number-overrides.css";

type Side = "home" | "away";

type StyledAnimatedNumberProps = {
  home: string;
  away: string;
  /** Button text, with `{team}` replaced by the team name. */
  goal: string;
};

export function StyledAnimatedNumber({ home, away, goal }: StyledAnimatedNumberProps) {
  const [score, setScore] = useState<Record<Side, number>>({ home: 2, away: 1 });
  const teams: { side: Side; name: string }[] = [
    { side: "home", name: home },
    { side: "away", name: away },
  ];

  return (
    <div className="animated-number-demo">
      <div className="animated-number-demo__controls">
        {teams.map((team) => (
          <Button
            key={team.side}
            size="sm"
            variant="secondary"
            onClick={() => setScore((value) => ({ ...value, [team.side]: value[team.side] + 1 }))}
          >
            {goal.replace("{team}", team.name)}
          </Button>
        ))}
      </div>
      <div className="animated-number-demo__row">
        {teams.map((team) => (
          <NumberPanel key={team.side} label={team.name}>
            <AnimatedNumber
              value={score[team.side]}
              effect="down"
              duration={400}
              className="scoreboard"
            />
          </NumberPanel>
        ))}
      </div>
    </div>
  );
}
