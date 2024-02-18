import React from "react";

export default function Newpost() {
  return (
    <div className="box">
      <div className="newpost">
        <img
          className="user-img"
          src="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <input type="text" placeholder="What's on your mind, Jane?" />
      </div>
      <div className="hline"></div>
      <div className="hline"></div>
      <div className="post-types">
        <div className="item">
          <i className="fas fa-video"></i>{" "}
          <span className="title">Live Video</span>
        </div>
        <div className="item">
          <i className="fas fa-photo-video"></i>{" "}
          <span className="title">Photo Video</span>
        </div>
        <div className="item">
          <i className="fas fa-laugh-beam"></i>{" "}
          <span className="title">Feeling/Activity</span>
        </div>
      </div>
    </div>
  );
}
