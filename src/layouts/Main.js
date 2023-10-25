import { Switch, Route } from "react-router-dom";
import UserList from "../pages/UserList"
import Login from "../pages/Login"
import Tasks from "../pages/Tasks"
import UserPage from "../pages/UserPage";

const Main = (props) => {
    const {allUsers, handleLogin} = props;
    return (
        <div className="main-container">
            <Switch>
                <Route exact path="/login">
                 {" "}
                 <Login handleLogin= {handleLogin}/>
                </Route>
                <Route path="/tasks">
                    <Tasks/>
                </Route>
                <Route exact path="/users">
                    <UserList allUsers={allUsers}/>
                </Route>
                <Route exact path="/users/:id/:name/:surname">
                    <UserPage/>
                </Route>
            </Switch>
         </div>
    );
};

export default Main;