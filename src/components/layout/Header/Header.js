import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import { navBar } from "../../../utils/constanst";
import doc from "../../../assets/images/google-docs.png";
import star from "../../../assets/images/star.png";
import comment from "../../../assets/images/comment.png";
import video from "../../../assets/images/video-camera.png";
import dropdown from "../../../assets/images/drop-down-arrow.png";
import share from "../../../assets/images/padlock.png";
import Dropdown from "../../common/Dropdown/Dropdown";

export default function Header() {
  const [fileName, setFileName] = useState("Untitled document");
  const [isOpen, setIsOpen] = useState(false);
  const [navBarArray, setNavBarArray] = useState(navBar);

  const toggleDropdown = (index) => {
    setNavBarArray((prevNavBar) => {
      const updatedNavBar = prevNavBar.map((item, i) => {
        if (i + 1 === index) {
          return { ...item, isOpen: true };
        } else {
          return { ...item, isOpen: false };
        }
      });
      return updatedNavBar;
    });
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setNavBarArray((prevNavBar) =>
        prevNavBar.map((item) => ({ ...item, isOpen: false }))
      );
    }
  };

  const navbarRef = useRef(null);

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="container" ref={navbarRef}>
      <div className="wrapper">
        <div className="docContainer">
          <img src={doc} alt="google doc" className="docImage" />
        </div>
        <div className="headerContainer">
          <div className="nameContainer">
            <input
              className="fileName"
              defaultValue={fileName}
              onChange={(e) => setFileName(e.target.value)}
            />
            <img src={star} alt="star" className="starImage" />
          </div>
          <div className="navBarContainer">
            {navBarArray?.map((item) => {
              return (
                <div>
                  <p
                    onClick={() => toggleDropdown(item.id)}
                    key={item.id}
                    className="navText"
                  >
                    {item.name}
                  </p>
                  {item.isOpen ? <Dropdown inside={item.inside} /> : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="shareContainer">
        <div className="commentWrapper">
          <img src={comment} alt="comment" className="commentImage" />
        </div>
        <div className="videoWrapper">
          <img src={video} alt="video" className="videoIcon" />
          <img src={dropdown} alt="dropdown" className="dropdownIcon" />
        </div>
        <div className="shareWrapperButton">
          <img src={share} alt="share" className="shareIcon" />
          <p className="shareText">Share</p>
        </div>
        <div className="emailWrapper">
          <p className="emailText">S</p>
        </div>
      </div>
    </div>
  );
}
