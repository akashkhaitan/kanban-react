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
  selectedObj: any;
  onSelectedChange: Function;
}

const ButtonPopup: React.FC<ButtonPopupProps> = ({
  title,
  popupItems,
  selectedObj,
  onSelectedChange,
}) => {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleDisplayButton = () => {
    setPopupVisible((prevState) => !prevState);
  };

  const handleSelectChange = (e: any) => {
    const { name, value } = e.target;
    onSelectedChange({ [name]: value });
    setPopupVisible(false);
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
              <select
                name={item.type}
                value={selectedObj[item.type]}
                onChange={(e) => handleSelectChange(e)}
              >
                {item.values.map((option: any) => (
                  <option value={option.value}>{option.label}</option>
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
