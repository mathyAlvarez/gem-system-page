import { Button, Navbar, type NavbarProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { useDemoItems, type NavbarTexts } from "./demo.ts";
import { DemoBrand } from "./DemoBrand.tsx";
import "./navbar-demo.css";

const headerVariants = cva("", {
  variants: {
    tone: {
      default: "",
      brand: [
        "[--gem-navbar-bg:var(--gem-color-primary-700)] [--gem-navbar-fg:white] [--gem-navbar-border:transparent]",
        "[&_.gem-navbar__link]:text-white [&_.gem-navbar__link:hover]:bg-white/15 [&_.gem-navbar__link:hover]:text-white",
        "[&_.gem-navbar__link[aria-current=page]]:bg-white/20",
        "[&_.gem-navbar__brand-mark]:bg-white [&_.gem-navbar__brand-mark]:text-(--gem-color-primary-700)",
      ],
      glass:
        "[--gem-navbar-bg:color-mix(in_srgb,var(--gem-color-bg)_70%,transparent)] backdrop-blur-md",
    },
  },
  defaultVariants: { tone: "default" },
});

type HeaderProps = NavbarProps & VariantProps<typeof headerVariants>;

export function Header({ tone, className, ...props }: HeaderProps) {
  return <Navbar className={cn(headerVariants({ tone }), className)} {...props} />;
}

const tones = ["brand", "glass"] as const;

type VariantNavbarsProps = { texts: NavbarTexts };

export function VariantNavbars({ texts }: VariantNavbarsProps) {
  const items = useDemoItems(texts.items);

  return (
    <div className="navbar-stack">
      {tones.map((tone) => (
        <div key={tone}>
          <p className="navbar-caption">tone="{tone}"</p>
          <div className="navbar-frame bg-[linear-gradient(135deg,var(--gem-color-primary-200),var(--gem-color-secondary-200))]">
            <Header
              tone={tone}
              brand={<DemoBrand />}
              items={items}
              navLabel={`${texts.navLabel} ${tone}`}
              menuLabel={texts.menuLabel}
              closeLabel={texts.closeLabel}
              actions={
                <Button variant={tone === "brand" ? "secondary" : "primary"} size="sm">
                  {texts.getStarted}
                </Button>
              }
            />
            <div className="h-16" />
          </div>
        </div>
      ))}
    </div>
  );
}
