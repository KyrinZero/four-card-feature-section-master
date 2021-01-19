import React from "react";

export default function Card({ title, text, icon, gridName }) {
  return (
    <div className={gridName}>
      <h3>{title}</h3>
      <p>{text}</p>

      <div className="img">
        <img src={icon} alt="Icon" />
      </div>
    </div>
  );
}
