import Header from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';
import './App.css';
import { useState } from 'react';


function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: "Büşra",
    pasword: "123456"
  });
  const [allUsers, setAllUsers] = useState([])
  const [tasks, setTasks] = useState([]);

  const handleLogin = (credentials) => {
    //login credentials check
    //setLoggedInUser
  }
  return (
    <div className="App">
    <Header user={loggedInUser} />
    <Main handleLogin={handleLogin} tasks={tasks} allUsers={allUsers} />
    <Footer />
    </div>
  );
}

export default App;
