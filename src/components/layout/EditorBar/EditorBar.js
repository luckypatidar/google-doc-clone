import React from "react";
import "./styles.css";
import backward from "../../../assets/images/backward.png";
import forward from "../../../assets/images/arrow.png";
import printer from "../../../assets/images/printer.png";
import ASymbol from "../../../assets/images/letter-a.png";
import Paint from "../../../assets/images/paint-roller.png";
import dropdown from "../../../assets/images/drop-down-arrow.png";
import minus from "../../../assets/images/minus-sign.png";
import plus from "../../../assets/images/plus.png";
import more from "../../../assets/images/more.png";
import editing from "../../../assets/images/pen.png";
import upward from "../../../assets/images/up-arrow.png";

export default function EditorBar() {
  return (
    <div className="editorWrapper">
      <div className="editorContainer">
        <img src={backward} alt="backward" className="backwardImage" />
        <img src={forward} alt="forward" className="forwardImage" />
        <img src={printer} alt="printer" className="forwardImage" />
        <img src={ASymbol} alt="forward" className="forwardImage" />
        <img src={Paint} alt="printer" className="forwardImage" />
        <div className="zoomContainer">
          <p className="zoomText">100%</p>
          <img src={dropdown} alt="dropdown" className="dropdownImage" />
        </div>
        <div class="vertical-line"></div>
        <div className="zoomContainer">
          <p className="zoomText">Normal text</p>
          <img src={dropdown} alt="dropdown" className="dropdownImage" />
        </div>
        <div class="vertical-line"></div>
        <div className="zoomContainer">
          <p className="zoomText">Arial</p>
          <img src={dropdown} alt="dropdown" className="dropdownImage" />
        </div>
        <div class="vertical-line"></div>
        <div className="plusMinusContainer">
          <img src={minus} alt="minus" className="minusImage" />
          <div className="textSizeContainer">
            <p>11</p>
          </div>
          <img src={plus} alt="plus" className="plusImage" />
        </div>
        <div class="vertical-line"></div>
        <img src={more} alt="printer" className="forwardImage" />
      </div>
      <div className="editorWrapper">
        <div className="editingContainer">
          <img src={editing} alt="printer" className="editingImage" />
          <img src={dropdown} alt="dropdown" className="dropdownImage" />
        </div>
        <div class="vertical-line"></div>
        <img src={upward} alt="upward" className="forwardImage" />
      </div>
    </div>
  );
}
