import React from "react";
import Post from "./Post";
import Messenger from "./Messenger";
import Newpost from "./Newpost";
import Stories from "./Stories";

export default function Feed() {
  return (
    <>
      <section className="feed">
        <Stories />
        <Newpost />
        <Post />
        <Post />
        <Post />
      </section>
      <Messenger />
    </>
  );
}
