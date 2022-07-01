import { LayoutProps } from "@/models/index";
import React from "react";

export function MainLayout({ children }: LayoutProps) {
  return (
    <React.Fragment>
      <h1>Main Layout</h1>
      <div>{children}</div>
    </React.Fragment>
  );
}
