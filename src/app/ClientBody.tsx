"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.className = "antialiased";

    const disableDragPreview = (event: DragEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      if (target.closest("a, button, img, [role='button']")) {
        event.preventDefault();
      }
    };

    const disableNativeDraggable = () => {
      document.querySelectorAll("a, button, img, [role='button']").forEach((node) => {
        node.setAttribute("draggable", "false");
      });
    };

    disableNativeDraggable();
    document.addEventListener("dragstart", disableDragPreview, true);

    return () => {
      document.removeEventListener("dragstart", disableDragPreview, true);
    };
  }, []);

  return <div className="antialiased">{children}</div>;
}
