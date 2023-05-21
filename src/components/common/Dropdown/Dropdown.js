import React, { useState } from "react";
import "./styles.css";

export default function Dropdown({ inside }) {
  console.log(inside);
  return (
    <div className="dropdown-container">
      <div className="dropdown-content">
        {inside?.map((item) => (
          <>
            <div key={item.id} className="dropdownWrapper">
              <img
                src={item.image}
                alt={item.image}
                className="dropdownImages"
              />
              <p>{item.name}</p>
            </div>
            {item?.line ? <div className="line"></div> : null}
          </>
        ))}
      </div>
    </div>
  );
}
