import React from "react";

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
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>
    </div>
  );
}
