import React from "react";
import Post from "./Post";
import Messenger from "./Messenger";

export default function Feed() {
  return (
    <>
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
          {/* Camila Cabello */}
          <div className="video-container plain">
            <img
              className="bg"
              src="https://i.pinimg.com/originals/32/cf/be/32cfbe96b0608c1dc67728499e7b3fa9.gif"
            />
            <div className="title">
              <img
                className="user"
                src="https://randomuser.me/api/portraits/women/95.jpg"
              />
              Cindy Bane
            </div>
          </div>
          {/* Camila Cabello */}
          <div className="video-container plain">
            <img
              className="bg"
              src="https://i.pinimg.com/originals/32/cf/be/32cfbe96b0608c1dc67728499e7b3fa9.gif"
            />
            <div className="title">
              <img
                className="user"
                src="https://randomuser.me/api/portraits/women/95.jpg"
              />
              Cindy Bane
            </div>
          </div>
          {/* Camila Cabello */}
          <div className="video-container plain">
            <img
              className="bg"
              src="https://i.pinimg.com/originals/32/cf/be/32cfbe96b0608c1dc67728499e7b3fa9.gif"
            />
            <div className="title">
              <img
                className="user"
                src="https://randomuser.me/api/portraits/women/95.jpg"
              />
              Cindy Bane
            </div>
          </div>
          {/* Camila Cabello */}
          <div className="video-container plain">
            <img
              className="bg"
              src="https://i.pinimg.com/originals/32/cf/be/32cfbe96b0608c1dc67728499e7b3fa9.gif"
            />
            <div className="title">
              <img
                className="user"
                src="https://randomuser.me/api/portraits/women/95.jpg"
              />
              Cindy Bane
            </div>
          </div>
          {/* Camila Cabello */}
          <div className="video-container plain">
            <img
              className="bg"
              src="https://i.pinimg.com/originals/32/cf/be/32cfbe96b0608c1dc67728499e7b3fa9.gif"
            />
            <div className="title">
              <img
                className="user"
                src="https://randomuser.me/api/portraits/women/95.jpg"
              />
              Cindy Bane
            </div>
          </div>
        </div>
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
        <Post />
        <Post />
        <Post />
      </section>
      <Messenger />
    </>
  );
}
