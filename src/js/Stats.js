import React from "react";

export default function Stats() {
  return (
    <div className="stats">
      <div className="stats-emojis">
        <div className="emoji-circle blue">
          <i className="fas fa-thumbs-up"></i>
        </div>
        <div className="emoji-circle red">
          <i className="fas fa-heart"></i>
        </div>
        <div className="emoji-circle yellow">
          <i className="fas fa-surprise"></i>
        </div>
      </div>
    </div>
  );
}
