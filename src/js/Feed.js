import React from "react";

export default function Feed() {
  return (
    <section className="feed">
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
      </div>
    </section>
  );
}
