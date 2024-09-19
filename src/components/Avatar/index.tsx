import React from "react";
import "./Avatar.css";

interface AvatarProps {
  text: string;
  size?: number;
}

const getFirstLetters = (text: string) => {
  const textarr = text.split(" ");
  return textarr.reduce(
    (accumulator, currentValue: string) =>
      accumulator + currentValue.charAt(0).toUpperCase(),
    ""
  );
};

const Avatar: React.FC<AvatarProps> = ({ text }) => {
  const bgColors = ["#1769aa", "#ab003c", "#9500ae", "#357a38"];
  return (
    <div className="avatar" style={{ backgroundColor: bgColors[0] }}>
      {getFirstLetters(text)}
    </div>
  );
};

export default Avatar;
