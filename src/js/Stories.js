import React from "react";
import Story from "./Story";

export default function Stories() {
  return (
    <div className="stories">
      <div className="video-container">
        <img
          className="bg"
          src="https://i.ytimg.com/vi/NlKamRgzIdk/maxresdefault.jpg"
        />
        <div className="title">
          Create A Story
          <div className="new-btn">
            <i className="fas fa-plus"></i>
          </div>
        </div>
      </div>
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  );
}
