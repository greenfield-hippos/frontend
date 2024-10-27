import { useEffect, useState } from 'react'
import './App.css'
import Login from './components/Login';
import Chat from './components/Chat';
import { User } from './types';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (userLoggedIn) {
      // initialize chat
      // display all
    } else {
      /// something?
    }
  }, []);

  return (
    <>
      {(!userLoggedIn || !user) 
      ? <Login setUserLoggedIn={setUserLoggedIn} setUser={setUser}/>
      : <Chat user={user}/>
      }
    </>
  )
}

export default App;
