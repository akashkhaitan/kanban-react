import React from "react";
import "./TicketCard.css";

interface TicketCardProps {
  title: string;
  description: string;
  status: "todo" | "in-progress" | "done";
  priority: number;
}

const TicketCard: React.FC<TicketCardProps> = ({
  title,
  description,
  status,
  priority,
}) => {
  return (
    <div className={`ticket-card`}>
      <div className="card-heading">
        <span>{status}</span>
        <span>sd</span>
      </div>
      <h3>{title}</h3>

      {/* Tags Section */}
      <div className="tags"></div>
    </div>
  );
};

export default TicketCard;
