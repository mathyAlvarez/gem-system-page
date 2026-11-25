import { Sidebar, type SidebarProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { sidebarLabels, useDemoItems, type SidebarTexts } from "./demo.tsx";
import { DemoBrand } from "./DemoBrand.tsx";
import { SidebarFrame } from "./SidebarFrame.tsx";

const sidebarVariants = cva("", {
  variants: {
    tone: {
      default: "",
      brand: [
        "[--gem-sidebar-bg:var(--gem-color-primary-700)] [--gem-sidebar-fg:white] [--gem-sidebar-border:transparent]",
        "[&_.gem-sidebar__item:hover]:bg-white/15 [&_.gem-sidebar__item:hover]:text-white",
        "[&_.gem-sidebar__item[aria-current=page]]:bg-white/20 [&_.gem-sidebar__item[aria-current=page]]:text-white",
        "[&_.sidebar-brand__mark]:bg-white [&_.sidebar-brand__mark]:text-(--gem-color-primary-700)",
        "[&_.gem-sidebar__toggle]:[--gem-btn-fg:white] [&_.gem-sidebar__toggle]:[--gem-btn-bg-hover:rgb(255_255_255/0.15)]",
      ],
    },
    density: {
      comfortable: "",
      compact:
        "[--gem-sidebar-width:13rem] [&_.gem-sidebar__item]:min-h-8 [&_.gem-sidebar__item]:text-xs",
    },
  },
  defaultVariants: { tone: "default", density: "comfortable" },
});

type AppSidebarProps = SidebarProps & VariantProps<typeof sidebarVariants>;

export function AppSidebar({ tone, density, className, ...props }: AppSidebarProps) {
  return <Sidebar className={cn(sidebarVariants({ tone, density }), className)} {...props} />;
}

const variants = [
  { tone: "brand", density: "comfortable" },
  { tone: "default", density: "compact" },
] as const;

type VariantSidebarsProps = { texts: SidebarTexts };

export function VariantSidebars({ texts }: VariantSidebarsProps) {
  const items = useDemoItems(texts.items);

  return (
    <div className="sidebar-grid">
      {variants.map(({ tone, density }) => (
        <div key={`${tone}-${density}`}>
          <p className="sidebar-caption">
            tone="{tone}" density="{density}"
          </p>
          <SidebarFrame title={texts.pageTitle}>
            <AppSidebar
              tone={tone}
              density={density}
              position="static"
              collapsible={false}
              header={<DemoBrand />}
              items={items}
              {...sidebarLabels(texts)}
              navLabel={`${texts.navLabel} ${tone} ${density}`}
            />
          </SidebarFrame>
        </div>
      ))}
    </div>
  );
}
