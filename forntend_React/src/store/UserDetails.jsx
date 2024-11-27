import { createContext, useState } from "react";

const UserDetailsContext = createContext({
  username: "",
  password: "",
  setUserName: () => {},
  setUserPassword: () => {},
});

export function UserDetailsContextProvider({ children }) {
  const [username, setUserName] = useState("");
  const [password, setUserPassword] = useState("");

  const userDetailsContext = {
    username,
    password,
    setUserName,
    setUserPassword,
  };
  return (
    <UserDetailsContext.Provider value={userDetailsContext}>
      {children}
    </UserDetailsContext.Provider>
  );
}

export default UserDetailsContext;
