
// Displaying individual show information

function ShowCard({image, name}){
  
    // Uses props passed from ShowContainer const mappedShows as attributes to display in the list below
    return(
    <div>
   
   
            <li>
                <img src={image} alt={name} />
                <h3> Show: {name}</h3>
            </li>
    </div>
    );
}

export default ShowCard;