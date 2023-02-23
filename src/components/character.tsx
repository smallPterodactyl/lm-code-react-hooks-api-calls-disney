import { DisneyCharacter } from "../disney_character"
import React, { useContext } from 'react';
import { FavoritesContext, FavoritesContextType} from '../App';


interface CharacterProps {
  character: DisneyCharacter;
}

const Character : React.FC<CharacterProps> = ( { character } ) => {

  const favoritesContext = React.useContext (FavoritesContext);


  //set default image if none                                                
  let imageSrc = "https://picsum.photos/300/200/?blur";   
  if (character.imageUrl) {imageSrc = character.imageUrl};

    function toggleFavoriteForCharacter (characterID: number) {

      let updatedFavorites : Array<number> = [];

      //add a new favorite
      if (!favoritesContext?.characterFavorites.includes(characterID)) {
        favoritesContext?.setCharacterFavorites ([...favoritesContext.characterFavorites,characterID]);
      }

    //filter out a removed favorite
    else {
      updatedFavorites = 
      favoritesContext?.characterFavorites.filter((id) => id !== characterID);

      favoritesContext?.setCharacterFavorites(updatedFavorites);
    }  
      
  } 

  {return (

    <article className="character-item">

      <h2>{character.name}</h2>

      <div className="character-item__actions"
       onClick={()=>
        toggleFavoriteForCharacter(character._id)}> {
          !favoritesContext?.characterFavorites.includes(character._id)?
          "Add to Favourites" : "Favorited"
        }  
      </div>

      <img className="character-item__img" src={character.imageUrl} alt={character.name} />

    </article>
  )  }
  
}  
  
export default Character