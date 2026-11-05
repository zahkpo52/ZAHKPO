import * as React from "react";

/**
 * Renders string content with the "Bridge" in every "ZAH KPO" occurrence
 * in the brand gold, matching the logo lockup. Non-string nodes pass through
 * untouched so callers can still supply custom JSX titles.
 */
export function BrandHighlight({ children }: { children: React.ReactNode }) {
  if (typeof children !== "string" || !children.includes("ZAH KPO")) {
    return <>{children}</>;
  }
  return (
    <>
      {children.split(/(ZAH KPO)/g).map((part, i) =>
        part === "ZAH KPO" ? (
          <React.Fragment key={i}>
            ZAH<span className="text-accent"> KPO</span>
          </React.Fragment>
        ) : (
          part
        ),
      )}
    </>
  );
}
