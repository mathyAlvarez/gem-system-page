import { useState } from "react";
import { Button, Transition, type TransitionProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { DemoPanel } from "./DemoPanel.tsx";
import type { PanelCopy, ToggleCopy } from "./demo.ts";
import "./transition-demo.css";

const revealVariants = cva("", {
  variants: {
    distance: {
      short: "[--gem-transition-offset:0.375rem]",
      medium: "",
      long: "[--gem-transition-offset:2rem]",
    },
    origin: {
      center: "",
      "top-start": "origin-top-left",
      "top-end": "origin-top-right",
    },
  },
  defaultVariants: { distance: "medium", origin: "center" },
});

type RevealProps = TransitionProps & VariantProps<typeof revealVariants>;

export function Reveal({ distance, origin, className, ...props }: RevealProps) {
  return <Transition className={cn(revealVariants({ distance, origin }), className)} {...props} />;
}

export function VariantTransition({ show, hide, title, body }: ToggleCopy & PanelCopy) {
  const [open, setOpen] = useState(true);

  return (
    <div className="transition-demo transition-demo--wide">
      <Button size="sm" variant={open ? "secondary" : "primary"} onClick={() => setOpen(!open)}>
        {open ? hide : show}
      </Button>
      <div className="transition-demo__columns">
        <Reveal in={open} effect="slide-up" distance="long" duration={400}>
          <DemoPanel title={title}>{body}</DemoPanel>
        </Reveal>
        <Reveal in={open} effect="scale" origin="top-end" duration={300}>
          <DemoPanel title={title}>{body}</DemoPanel>
        </Reveal>
      </div>
    </div>
  );
}
