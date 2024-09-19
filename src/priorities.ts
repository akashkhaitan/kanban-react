import NoPriorityIcon from "./icons/No-priority.svg";
import LowIcon from "./icons/Img - Low Priority.svg";
import MediumIcon from "./icons/Img - Medium Priority.svg";
import HighIcon from "./icons/Img - High Priority.svg";
import UrgentIcon from "./icons/SVG - Urgent Priority colour.svg";

export const priorities = [
  {
    id: 0,
    name: "No priority",
    icon: NoPriorityIcon,
  },
  {
    id: 4,
    name: "Urgent",
    icon: UrgentIcon,
  },
  {
    id: 3,
    name: "High",
    icon: HighIcon,
  },
  {
    id: 2,
    name: "Medium",
    icon: MediumIcon,
  },
  {
    id: 1,
    name: "Low",
    icon: LowIcon,
  },
];
