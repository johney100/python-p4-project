
// Displaying individual show information

function ActorCard({name, age}){
  
    // Uses props passed from ShowContainer const mappedShows as attributes to display in the list below
    return(
    <div>
   
   
            <li>
                
                <h3> Show: {name}</h3>
                <p> Age: {age} </p>
            </li>
    </div>
    );
}

export default ActorCard;