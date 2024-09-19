import React from "react";
import "./TicketCard.css";

interface TicketCardProps {
  title: string;
  description: string;
  status: "todo" | "in-progress" | "done";
}

const TicketCard: React.FC<TicketCardProps> = ({
  title,
  description,
  status,
}) => {
  return (
    <div className={`ticket-card`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default TicketCard;
