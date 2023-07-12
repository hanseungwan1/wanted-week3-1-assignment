import style from "styled-components";
import React, { ReactNode } from "react";
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}