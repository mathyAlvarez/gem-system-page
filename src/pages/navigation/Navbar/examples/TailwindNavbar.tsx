import { Button, Navbar, type NavbarProps } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";
import { useDemoItems, type NavbarTexts } from "./demo.ts";
import { DemoBrand } from "./DemoBrand.tsx";
import "./navbar-demo.css";

function AppHeader({ className, classNames, ...props }: NavbarProps) {
  return (
    <Navbar
      className={cn(
        "[--gem-navbar-border:var(--gem-color-primary-200)]",
        "[&_.gem-navbar__link]:rounded-full [&_.gem-navbar__link]:px-4",
        className,
      )}
      classNames={{ ...classNames, inner: cn("max-w-none", classNames?.inner) }}
      {...props}
    />
  );
}

type TailwindNavbarProps = { texts: NavbarTexts };

export function TailwindNavbar({ texts }: TailwindNavbarProps) {
  const items = useDemoItems(texts.items);

  return (
    <div className="navbar-stack">
      <div className="navbar-frame">
        <AppHeader
          brand={<DemoBrand />}
          items={items}
          navLabel={texts.navLabel}
          menuLabel={texts.menuLabel}
          closeLabel={texts.closeLabel}
          actions={
            <Button variant="primary" size="sm" rounded>
              {texts.getStarted}
            </Button>
          }
        />
      </div>
      <div className="navbar-frame">
        <AppHeader
          className="[--gem-navbar-bg:var(--gem-color-bg-subtle)] [&_.gem-navbar__link]:uppercase [&_.gem-navbar__link]:tracking-wider"
          brand={<DemoBrand />}
          items={items}
          navLabel={`${texts.navLabel} 2`}
          menuLabel={texts.menuLabel}
          closeLabel={texts.closeLabel}
        />
      </div>
    </div>
  );
}
