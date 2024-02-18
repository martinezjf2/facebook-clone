import React from "react";

export default function Messenger() {
  return (
    <section className="floatingmsg">
      <div className="bubble">
        <img src="https://randomuser.me/api/portraits/women/14.jpg" />
        <div className="notification">1</div>
      </div>
      <div className="bubble">
        <img src="https://randomuser.me/api/portraits/women/24.jpg" />
      </div>
      <div className="bubble">
        <img src="https://randomuser.me/api/portraits/women/34.jpg" />
        <div className="notification">3</div>
      </div>
      <div className="bubble">
        <img src="https://randomuser.me/api/portraits/men/54.jpg" />
        <div className="notification">30</div>
      </div>
      <div className="bubble">
        <img src="https://randomuser.me/api/portraits/men/14.jpg" />
        <div className="notification">20</div>
      </div>
      <div className="bubble">
        <i className="fas fa-edit"></i>
      </div>
    </section>
  );
}
