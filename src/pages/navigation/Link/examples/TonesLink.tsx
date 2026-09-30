import { Link, type LinkTone } from "@gem-org/gem-system";
import "./link-demo.css";

const tones: LinkTone[] = ["primary", "secondary", "tertiary", "danger", "success", "warning", "info", "neutral", "muted"];

export function TonesLink() {
  return (
    <div className="link-row">
      {tones.map((tone) => (
        <Link key={tone} href="/guide" tone={tone}>
          {tone}
        </Link>
      ))}
    </div>
  );
}
