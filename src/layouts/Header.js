const Header = (props) => {
    /*
    props = {
        user: {
            name: "Büşra",
            pasword: "123456"
        }
    }
    */

    const {user} = props;

    return (
        <header>
            <h1>TASK APP</h1>
            <nav></nav>
            <div className="user-container">{user.name}</div>
        </header>
    );
}

export default Header;