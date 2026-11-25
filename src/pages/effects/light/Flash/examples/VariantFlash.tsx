import { Flash, type FlashProps } from "@gem-org/gemffects/flash";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { FlashTile } from "./FlashTile.tsx";
import "./flash-demo.css";

const feedbackVariants = cva("rounded-[var(--gem-radius-md)]", {
  variants: {
    feedback: {
      neutral: "",
      success: "[--gemfx-flash-color:var(--gem-palette-success-200)]",
      error: "[--gemfx-flash-color:var(--gem-palette-error-200)]",
    },
  },
  defaultVariants: { feedback: "neutral" },
});

type FeedbackFlashProps = FlashProps & VariantProps<typeof feedbackVariants>;

export function FeedbackFlash({ feedback, className, ...props }: FeedbackFlashProps) {
  return (
    <Flash variant="wash" className={cn(feedbackVariants({ feedback }), className)} {...props} />
  );
}

export function VariantFlash() {
  return (
    <div className="flash-demo">
      <FlashTile label='feedback="success"'>
        <FeedbackFlash feedback="success" asChild>
          <button type="button" className="flash-demo__target">
            success
          </button>
        </FeedbackFlash>
      </FlashTile>
      <FlashTile label='feedback="error"'>
        <FeedbackFlash feedback="error" asChild>
          <button type="button" className="flash-demo__target">
            error
          </button>
        </FeedbackFlash>
      </FlashTile>
    </div>
  );
}
