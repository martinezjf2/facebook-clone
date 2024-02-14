import React from "react";

export default function Sidebar() {
  return (
    <section className="content-area feed">
      <section className="sidenav">
        <div className="item">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            className="item-img"
          />
          <span className="item-title">Jane Doe</span>
        </div>
        <div className="item">
          <div className="item-icon">
            <i className=" fas fa-user-friends"></i>
          </div>
          <span className="item-title">Friends</span>
        </div>
        <div className="item">
          <div className="item-icon">
            <i className=" fas fa-flag"></i>
          </div>
          <span className="item-title">
            Pages
            <span className="notification">
              <div className="notification-circle"></div>9+ new
            </span>
          </span>
        </div>
        <div className="item">
          <div className="item-icon circle-white">
            <i className=" fas fa-users"></i>
          </div>
          <span className="item-title">
            Groups
            <span className="notification">
              <div className="notification-circle"></div>3+ new
            </span>
          </span>
        </div>
        <div className="item">
          <div className="item-icon">
            <i className=" fas fa-store"></i>
          </div>
          <span className="item-title">Marketplace</span>
        </div>
        <div className="item">
          <div className="item-icon circle">
            <i className=" fas fa-chevron-down"></i>
          </div>
          <span className="item-title">See More</span>
        </div>
        <div className="line"></div>
        <span className="heading-title">Your Shortcuts</span>

        <div className="item">
          <div className="item-icon item-icon-circle-white">
            <i className=" fas fa-user-friends"></i>
          </div>
          <span className="item-title">Friends</span>
        </div>

        <div className="item">
          <div className="item-icon item-icon-circle-white">
            <i className=" fas fa-user-friends"></i>
          </div>
          <span className="item-title">Friends</span>
        </div>

        <div className="item">
          <div className="item-icon item-icon-circle-white">
            <i className=" fas fa-user-friends"></i>
          </div>
          <span className="item-title">Friends</span>
        </div>

        <div className="item">
          <div className="item-icon circle">
            <i className=" fas fa-chevron-down"></i>
          </div>
          <span className="item-title">See More</span>
        </div>
      </section>
    </section>
  );
}
