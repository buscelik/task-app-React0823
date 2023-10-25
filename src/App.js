import Header from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';
import './App.css';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [allUsers, setAllUsers] = useState([])
  const [tasks, setTasks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if(!loggedInUser.name){
      history.push("/login"); 
    }
  }, [])

  useEffect(() => {
   axios
   .get("https://reqres.in/api/users?per_page=20")
   .then((res)=>{
    setAllUsers(res.data.data);
   })
   .catch((err)=>{
    console.erros(err.response);
   });
  }, [])

  const handleLogin = (credentials) => {
    //login credentials check
    //setLoggedInUser
    const user = allUsers.find(user=> (user.first_name === credentials.password && user.email === credentials.email));
    if(user){
      setLoggedInUser(user)
      history.push("/tasks")
    } else {
      console.error("User login", credentials);
    }
  }

  const handleLogout = () => {
    setLoggedInUser({});
    history.push('/login')
  }
  return (
    <div className="App">
    <Header user={loggedInUser} handleLogout={handleLogout} />
    <Main handleLogin={handleLogin} tasks={tasks} allUsers={allUsers} />
    <Footer />
    </div>
  );
}

export default App;
