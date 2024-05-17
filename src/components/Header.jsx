import { NavLink } from "react-router-dom";

import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>My website nav links</h2>
            <nav className="nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/posts">Posts</NavLink>
            </nav>
            <hr />
            
        </div>
    );
};

export default Header;