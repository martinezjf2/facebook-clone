import React from "react";
import Stats from "./Stats";

export default function Post() {
  return (
    <div className="box photopost">
      <div className="info">
        <div className="left">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" />
          <div className="details">
            <span className="name">James Madison</span>
            <span className="date">
              May 05, 2001 <i className="fas fa-user-friends"></i>
            </span>
          </div>
        </div>
        <i className="fas fa-ellipsis-h"></i>
      </div>
      <div className="description">
        Hey, just hanging out with my cousing in Venice Beach, California!
      </div>
      <div className="image">
        <img src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/VC_California101_VeniceBeach_Stock_RF_638340372_1280x640.jpg" />
      </div>
      <Stats />
    </div>
  );
}
