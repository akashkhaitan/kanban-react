import React, { useState } from "react";
import DownIcon from "../../icons/down.svg";
import FilterIcon from "../../icons/Display.svg";

import "./ButtonPopup.css";

interface IPopupItem {
  type: string;
  values: any;
}

interface ButtonPopupProps {
  title: string;
  popupItems: IPopupItem[];
}

const ButtonPopup: React.FC<ButtonPopupProps> = ({ title, popupItems }) => {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleDisplayButton = () => {
    setPopupVisible((prevState) => !prevState);
  };

  return (
    <div className="button-popup-container">
      <button className="display-button" onClick={handleDisplayButton}>
        <img src={FilterIcon} alt="filter"></img>
        <span>{title}</span> <img src={DownIcon} alt="down"></img>
      </button>

      <div className={`popup ${popupVisible ? "show" : "hide"}`}>
        <div className="popup-items">
          {popupItems.map((item: IPopupItem) => (
            <div className="popup-item">
              <span>{item.type}</span>
              <select>
                {item.values.map((option: any) => (
                  <option>{option}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default ButtonPopup;
