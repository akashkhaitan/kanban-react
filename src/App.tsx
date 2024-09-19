import "./App.css";
import ThreeDotMenuIcon from "./icons/3 dot menu.svg";
import AddIcon from "./icons/add.svg";

import TicketCard from "./components/TicketCard";

import { useGetData } from "./hooks/useGetData";
import ButtonPopup from "./components/ButtonPopup";
import { useEffect, useState } from "react";

import Avatar from "./components/Avatar";

function App() {
  const { tickets, users, statuses, priorities } = useGetData(true);

  const [boardArray, setBoardArray] = useState({
    ...statuses,
  });

  const userArr = users.map((user: any) => {
    return {
      ...user,
      avatar: <Avatar text={user.name} />,
    };
  });

  const popupItems = [
    {
      type: "Display",
      values: [
        { label: "Status", value: "status" },
        { label: "User", value: "userId" },
        { label: "Priority", value: "priority" },
      ],
    },
    {
      type: "Ordering",
      values: [
        { label: "Priority", value: "priority" },
        { label: "Title", value: "title" },
      ],
    },
  ];

  const [filterSelected, setFilterSelected] = useState({
    Display: "status",
    Ordering: "priority",
  });

  const boardMap: any = {
    status: statuses,
    priority: priorities,
    userId: userArr,
  };

  useEffect(() => {
    const displayFilter = filterSelected["Display"];
    setBoardArray(boardMap?.[displayFilter]);
  }, [filterSelected]);

  return (
    <div className="App">
      <header className="App-header">
        <ButtonPopup
          title="Display"
          popupItems={popupItems}
          selectedObj={filterSelected}
          onSelectedChange={(obj: any) =>
            setFilterSelected((prevState) => {
              return { ...prevState, ...obj };
            })
          }
        />
      </header>
      <main className="main-section">
        <div className="board-row">
          {boardArray.length > 0 &&
            boardArray.map((boardColumn: any) => {
              const displayFilter = filterSelected["Display"];
              const orderFilter = filterSelected["Ordering"];

              const filteredTickets = tickets.filter((ticket: any) => {
                return (
                  ticket?.[displayFilter]?.toString().toLowerCase() ===
                  boardColumn.id?.toString().toLowerCase()
                );
              });

              filteredTickets.sort((a: any, b: any) => {
                return orderFilter === "priority"
                  ? a.priority - b.priority
                  : a.title.localeCompare(b.title);
              });

              return (
                <div className="status-section board-column">
                  <div className="column-header">
                    <div className="column-left-side">
                      {boardColumn.avatar ? (
                        boardColumn.avatar
                      ) : (
                        <img src={boardColumn?.icon} alt="icon"></img>
                      )}
                      <h3>{boardColumn.name}</h3>
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
                          priority={ticket.priority}
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
