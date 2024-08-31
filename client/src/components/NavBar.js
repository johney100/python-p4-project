


import { Link } from "react-router-dom"


function NavBar(){
    
    return(
        <div>
            <nav>
            <Link to="/">Home</Link> 
            <Link to="/addshow">Add Show</Link>
            <Link to="/shows">Show Card</Link>
            </nav>
        </div>
    );
}

export default NavBar;

