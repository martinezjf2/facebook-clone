import React from "react";
import Feed from "./Feed";
import Sidenav from "./Sidenav";

export default function ContentContainer() {
  return (
    <section className="content-area feed">
      <Sidenav />
      <Feed />
      <Sidenav />
    </section>
  );
}
