import { Link, type LinkProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import type { LinkTexts } from "./demo.ts";
import "./link-demo.css";

const navLinkVariants = cva("", {
  variants: {
    kind: {
      inline: "",
      nav: "rounded-md px-2 py-1 hover:bg-(--gem-color-bg-subtle)",
      pill: "rounded-full bg-(--gem-color-primary-100) px-3 py-1",
    },
  },
  defaultVariants: { kind: "inline" },
});

type NavLinkProps = LinkProps & VariantProps<typeof navLinkVariants>;

export function NavLink({ kind, className, ...props }: NavLinkProps) {
  return (
    <Link
      underline={kind === "inline" ? "hover" : "none"}
      className={cn(navLinkVariants({ kind }), className)}
      {...props}
    />
  );
}

const kinds = ["inline", "nav", "pill"] as const;

type VariantLinkProps = { texts: LinkTexts };

export function VariantLink({ texts }: VariantLinkProps) {
  return (
    <div className="link-stack">
      {kinds.map((kind) => (
        <div key={kind} className="link-stack">
          <p className="link-caption">kind="{kind}"</p>
          <NavLink kind={kind} href="/guide">
            {texts.guide}
          </NavLink>
        </div>
      ))}
    </div>
  );
}
