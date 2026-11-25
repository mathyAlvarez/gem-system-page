import { Avatar, type AvatarProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { PEOPLE } from "./demo.ts";
import "./avatar-demo.css";

const avatarVariants = cva("", {
  variants: {
    ring: {
      none: "",
      brand: "shadow-[0_0_0_2px_var(--gem-color-bg),0_0_0_4px_var(--gem-color-primary-500)]",
      story: "shadow-[0_0_0_2px_var(--gem-color-bg),0_0_0_4px_var(--gem-palette-tertiary-500)]",
    },
    dimmed: {
      true: "opacity-50 grayscale",
      false: "",
    },
  },
  defaultVariants: { ring: "none", dimmed: false },
});

type RingAvatarProps = AvatarProps & VariantProps<typeof avatarVariants>;

export function RingAvatar({ ring, dimmed, className, ...props }: RingAvatarProps) {
  return <Avatar className={cn(avatarVariants({ ring, dimmed }), className)} {...props} />;
}

export function VariantAvatar() {
  const [first, second, third] = PEOPLE;

  return (
    <div className="avatar-row">
      <RingAvatar ring="brand" size="lg" src={first.src} name={first.name} />
      <RingAvatar ring="story" size="lg" src={second.src} name={second.name} />
      <RingAvatar dimmed size="lg" src={third.src} name={third.name} />
    </div>
  );
}
