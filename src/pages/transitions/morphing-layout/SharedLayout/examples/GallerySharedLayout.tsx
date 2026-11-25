import { useState } from "react";
import { SharedLayout } from "@gem-org/gemsitions/shared-layout";
import { SHARED_LAYOUT_GALLERY, type SharedLayoutGalleryId } from "./demo.ts";
import "./shared-layout-demo.css";

type GallerySharedLayoutProps = {
  groupLabel: string;
  inLightbox: string;
  close: string;
  blurbs: {
    alpha: string;
    beta: string;
    gamma: string;
  };
};

export function GallerySharedLayout({
  groupLabel,
  inLightbox,
  close,
  blurbs,
}: GallerySharedLayoutProps) {
  const [activeId, setActiveId] = useState<SharedLayoutGalleryId | null>(null);
  /** Thumb stays mounted one frame after open so layoutId can measure it. */
  const [releasedThumbId, setReleasedThumbId] = useState<SharedLayoutGalleryId | null>(null);
  const active = SHARED_LAYOUT_GALLERY.find((item) => item.id === activeId) ?? null;

  const openItem = (id: SharedLayoutGalleryId) => {
    setActiveId(id);
    setReleasedThumbId(null);
    requestAnimationFrame(() => setReleasedThumbId(id));
  };

  const closeLightbox = () => {
    setActiveId(null);
    setReleasedThumbId(null);
  };

  return (
    <div className="shared-layout-demo shared-layout-demo--wide">
      <div className="shared-layout-demo__gallery-wrap">
        <div className="shared-layout-demo__gallery" role="group" aria-label={groupLabel}>
          {SHARED_LAYOUT_GALLERY.map((item) => {
            const isActive = activeId === item.id;
            const thumbMounted = releasedThumbId !== item.id;

            return (
              <button
                key={item.id}
                type="button"
                className="shared-layout-demo__gallery-item"
                data-active={isActive ? "false" : "true"}
                disabled={activeId != null}
                onClick={() => openItem(item.id)}
              >
                {thumbMounted ? (
                  <SharedLayout
                    layoutId={`gemst-docs-photo-${item.id}`}
                    isExpanded={false}
                    duration={420}
                    collapsed={
                      <div
                        className={`shared-layout-demo__thumb shared-layout-demo__thumb--${item.id}`}
                      >
                        {item.label}
                      </div>
                    }
                  />
                ) : (
                  <span className="shared-layout-demo__placeholder">{inLightbox}</span>
                )}
              </button>
            );
          })}
        </div>

        {active != null ? (
          <div className="shared-layout-demo__lightbox">
            <SharedLayout
              layoutId={`gemst-docs-photo-${active.id}`}
              isExpanded
              duration={420}
              expanded={
                <div
                  className={`shared-layout-demo__lightbox-card shared-layout-demo__thumb--${active.id}`}
                >
                  <strong>{active.label}</strong>
                  <p>{blurbs[active.id]}</p>
                  <button
                    type="button"
                    className="shared-layout-demo__close"
                    onClick={closeLightbox}
                  >
                    {close}
                  </button>
                </div>
              }
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
