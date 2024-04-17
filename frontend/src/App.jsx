import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { api } from "./until";

export const AuthContext = createContext();

function App() {
  const [admin, setAdmin] = useState({});

  useEffect(() => {
    api("/book/me").then((user) => {
      if (!user) {
        setAdmin(null);
      }
      setAdmin(user);
    });
  }, [admin?.id]);

  return (
    <AuthContext.Provider value={{ admin,setAdmin }}>
      <div className="min-h-screen">
        <Outlet context={[admin,setAdmin]} />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
