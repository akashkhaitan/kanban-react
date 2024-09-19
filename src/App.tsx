import "./App.css";
import BacklogIcon from "./icons/Backlog.svg";
import TodoIcon from "./icons/To-do.svg";
import InProgressIcon from "./icons/in-progress.svg";
import DoneIcon from "./icons/Done.svg";
import CancelledIcon from "./icons/Cancelled.svg";
import ThreeDotMenuIcon from "./icons/3 dot menu.svg";
import AddIcon from "./icons/add.svg";

import TicketCard from "./components/TicketCard";

import { useGetData } from "./hooks/useGetData";
import ButtonPopup from "./components/ButtonPopup";

function App() {
  const statuses = [
    {
      status: "Backlog",
      icon: BacklogIcon,
    },
    {
      status: "Todo",
      icon: TodoIcon,
    },
    {
      status: "In Progress",
      icon: InProgressIcon,
    },
    {
      status: "Done",
      icon: DoneIcon,
    },
    {
      status: "Cancelled",
      icon: CancelledIcon,
    },
  ];

  const { tickets, users } = useGetData(true);

  return (
    <div className="App">
      <header className="App-header">
        <ButtonPopup
          title="Display"
          popupItems={[
            {
              type: "Display",
              values: ["Status", "User", "Priority"],
            },
            {
              type: "Ordering",
              values: ["Priority", "Title"],
            },
          ]}
        />
      </header>
      <main className="main-section">
        <div className="board-row">
          {statuses.map((statusObj: any) => {
            const filteredTickets = tickets.filter(
              (ticket: any) =>
                ticket?.status?.toLowerCase() ===
                statusObj.status?.toLowerCase()
            );
            return (
              <div className="status-section board-column">
                <div className="column-header">
                  <div className="column-left-side">
                    <img src={statusObj.icon} alt="icon"></img>
                    <h3>{statusObj.status}</h3>
                    <span>{filteredTickets.length}</span>
                  </div>
                  <div className="column-right-side">
                    <img src={AddIcon} alt="icon"></img>
                    <img src={ThreeDotMenuIcon} alt="icon"></img>
                  </div>
                </div>

                <div className="tickets-container">
                  {filteredTickets?.map((ticket: any) => {
                    return (
                      <TicketCard
                        title={ticket.title}
                        description={ticket.description}
                        status={ticket.status}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
