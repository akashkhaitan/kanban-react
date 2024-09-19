import axios from "axios";
import { useEffect, useState } from "react";

export const useGetData = (shoulCall: boolean) => {
  const [tickets, setTickets] = useState<any>([]);
  const [users, setUsers] = useState([]);

  const getData = async () => {
    return axios({
      method: "get",
      url: "https://api.quicksell.co/v1/internal/frontend-assignment",
    }).then((response) => {
      return response.data;
    });
  };

  const fetchMyAPI = async () => {
    try {
      const response = await getData();
      setTickets(response.tickets);
      setUsers(response.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (shoulCall) {
      fetchMyAPI();
    }
  }, [shoulCall]);

  return {
    tickets,
    users,
  } as const;
};
