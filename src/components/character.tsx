import { DisneyCharacter } from "../disney_character"

interface CharacterProps {
  character: DisneyCharacter;
  characterFavorites: Array<number>;
  updateFavorites: (favorites: Array<number>)=> void;

}

// for our props we can reuse the DisneyCharacter interface
// - defining an anonymous type that just has one property - a DisneyCharacter
const Character : React.FC<CharacterProps> = ( { character,
                                                  characterFavorites,
                                                  updateFavorites } ) => {

                                                    
  
  let imageSrc = "https://picsum.photos/300/200/?blur";   

  if (character.imageUrl) {imageSrc = character.imageUrl};

  function toggleFavoriteForCharacter (characterID: number) {

    let updatedFavorites : Array<number> = [];

    //add a new favorite
    if (!characterFavorites.includes(characterID)) {
      updateFavorites ([...characterFavorites,characterID]);
    }

    //filter out a removed favorite
    else {
      updatedFavorites = 
      characterFavorites.filter((id) => id !== characterID);

      updateFavorites(updatedFavorites);
    }  
      
  } 

  {return (

    <article className="character-item">

      <h2>{character.name}</h2>

      <div className="character-item__actions"
       onClick={()=>
        toggleFavoriteForCharacter(character._id)}> {
          !characterFavorites.includes(character._id)?
          "Add to Favourites" : "Favorited"
        }  
      </div>

      <img className="character-item__img" src={character.imageUrl} alt={character.name} />

    </article>
  )  }
  
}  
  
export default Character