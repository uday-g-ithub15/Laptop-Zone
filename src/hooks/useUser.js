import { useEffect, useState } from "react";

export const useUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`user.json`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return [users, setUsers];
};
