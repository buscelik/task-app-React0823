import { NavLink } from "react-router-dom/cjs/react-router-dom";
import "./Header.css";

const Header = (props) => {
    /*
    props = {
        user: {
            name: "Büşra",
            pasword: "123456"
        }
    }
    */

    const {user, handleLogout} = props;
    console.log(user);

    return (
        <header>
            <h1>TASK APP</h1>
            <nav>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/tasks" className={(isActive) => (isActive ? "active" : null)}
                >Tasks</NavLink>
                <NavLink to="/users">Users</NavLink>
            </nav>
            <div className="user-container">
            <span className="profile-image"></span>
            <span>{user.first_name}</span>
            {user.first_name && <span className="logout-button" onClick={handleLogout}>(Logout)</span>} 
            
            </div>
        </header>
    );
}

export default Header;