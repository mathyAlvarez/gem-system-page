import { useState } from "react";
import { AspectRatio, Button, InputText, resolveAspectRatio } from "@gem-org/gem-system";
import "./aspect-demo.css";

type CustomAspectRatioProps = {
  label: string;
  helperText: string;
  apply: string;
  alt: string;
};

export function CustomAspectRatio({ label, helperText, apply, alt }: CustomAspectRatioProps) {
  const [draft, setDraft] = useState("1.618");
  const [ratio, setRatio] = useState("1.618");

  return (
    <div className="aspect-stack">
      <div className="flex flex-wrap items-end gap-3">
        <div className="min-w-0 flex-[1_1_16rem]">
          <InputText
            label={label}
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            helperText={helperText}
          />
        </div>
        <Button variant="primary" onClick={() => setRatio(draft.trim())}>
          {apply}
        </Button>
      </div>
      <div className="aspect-caption">
        ratio="{ratio}" → aspect-ratio: {resolveAspectRatio(ratio)}
      </div>
      <AspectRatio ratio={ratio} maxWidth={480}>
        <img src="/gem-org-banner.jpeg" alt={alt} />
      </AspectRatio>
    </div>
  );
}
