import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Chat from "./components/Chat";
import { User } from "./types";
const apiUrl: string = import.meta.env.VITE_API_URL;

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    handleLogOut();
  }, []);

  async function handleLogOut() {
    const signinUrl = apiUrl + "logout";
    const response = await fetch(signinUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status == 500) {
      alert("Logout failed");
    }

    setUserLoggedIn(false);
    setUser(null);
  }

  return (
    <>
      {!userLoggedIn || !user ? (
        <Login setUserLoggedIn={setUserLoggedIn} setUser={setUser} />
      ) : (
        <Chat user={user} handleLogOut={handleLogOut} />
      )}
    </>
  );
}

export default App;
