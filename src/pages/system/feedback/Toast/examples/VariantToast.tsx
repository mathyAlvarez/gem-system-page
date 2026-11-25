import { Toast, type ToastProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import type { ToastCommon } from "./demo.ts";
import "./toast-demo.css";

const toastVariants = cva("", {
  variants: {
    accent: {
      side: "",
      top: "border-t-4 border-s-[1.5px] border-s-(--gem-toast-border) border-t-(--gem-toast-accent)",
      none: "border-s-[1.5px] border-s-(--gem-toast-border)",
    },
    elevation: {
      raised: "",
      flat: "shadow-none",
    },
  },
  defaultVariants: { accent: "side", elevation: "raised" },
});

type AccentToastProps = ToastProps & VariantProps<typeof toastVariants>;

export function AccentToast({ accent, elevation, className, ...props }: AccentToastProps) {
  return <Toast className={cn(toastVariants({ accent, elevation }), className)} {...props} />;
}

type VariantToastProps = { common: ToastCommon };

export function VariantToast({ common }: VariantToastProps) {
  return (
    <div className="toast-stack">
      <AccentToast
        accent="top"
        status="warning"
        title={common.copy.warning.title}
        closeAriaLabel={common.closeLabel}
      >
        {common.copy.warning.description}
      </AccentToast>
      <AccentToast
        accent="none"
        elevation="flat"
        variant="outline"
        title={common.copy.info.title}
        closeAriaLabel={common.closeLabel}
      >
        {common.copy.info.description}
      </AccentToast>
    </div>
  );
}
