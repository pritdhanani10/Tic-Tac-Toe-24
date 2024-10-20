import React from "react";
import "./Items.css";
import pr from "../assets/product_1.png"

const Items = () => {
  return (
    <div className="item">
      <div className="image">
        <img alt="" src={pr} />
        <div className="buttons">
          <button className="view-button">View</button>
          <button className="download-button">Download</button>
        </div>
      </div>
    </div>
  );
};
export default Items;
