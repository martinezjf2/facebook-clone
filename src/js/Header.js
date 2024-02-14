import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-section">
        <div className="logo-icon">
          <i className="fab fa-facebook"></i>
        </div>
        <div className="logo-search">
          <i className="fas fa-search"></i>
          <input type="text" />
        </div>
      </div>
      <div className="menu-tabs">
        <div className="menu-tab">
          <i className="fas fa-home">
            <div className="notification-bubble">3</div>
          </i>
        </div>
        <div className="menu-tab">
          <i className="fas fa-flag">
            <div className="notification-bubble">3</div>
          </i>
        </div>
        <div className="menu-tab">
          <i className="fas fa-tv">
            <div className="notification-bubble">9</div>
          </i>
        </div>
        <div className="menu-tab">
          <i className="fas fa-store"></i>
        </div>
        <div className="menu-tab">
          <i className="fas fa-users"></i>
        </div>
      </div>
      <div className="account">
        <div className="actions">
          <img
            src="https://randomuser.me/api/portraits/women/43.jpg"
            className="user-img"
          />
          <span className="user-name">Karla</span>
          <a href="#" className="circle-link">
            <i className="link-icon fas fa-plus link-icon">
              <div className="notification">9</div>
            </i>
          </a>
          <a href="#" className="circle-link">
            <i className="fab fa-facebook-messenger link-icon">
              <div className="notification">3</div>
            </i>
          </a>
          <a href="#" className="circle-link">
            <i className="fas fa-bell link-icon">
              <div className="notification">1</div>
            </i>
          </a>
          <a href="#" className="circle-link">
            <i className="fas fa-sort-down link-icon"></i>
          </a>
        </div>
      </div>
    </header>
  );
}
