


import { Link } from "react-router-dom"


function NavBar(){
    
    return(
        <div>
            <nav>
            <Link to="/">Shows</Link> 
            <Link to="/addshow">Add Show</Link>
            <Link to="/actors">Actors</Link>
            </nav>
        </div>
    );
}

export default NavBar;

