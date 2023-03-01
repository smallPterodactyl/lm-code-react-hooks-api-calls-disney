import { DisneyCharacter } from "../disney_character"
import React, { useContext } from 'react';
import { FavoritesContext } from '../App';

interface CharacterProps{
	character: DisneyCharacter;
}

const Character : React.FC<CharacterProps> = ( { character }) => {

  //Information about currently-favorited characters
	const favoritesContext = useContext(FavoritesContext); 
  
  //Handles selection/deselection of favorites
  function toggleFavoriteForCharacter(selectedFavorite : DisneyCharacter) {

    // Add to Favorites if character is not found in Favorites
    if (! (favoritesContext?.characterFavorites.find (favorite => 
      favorite._id === character._id))) {
        
        favoritesContext?.setCharacterFavorites([...favoritesContext?.characterFavorites, character]);  

		}

    // Remove from Favorites
		else {
		  
		  const updatedFavorites = favoritesContext.characterFavorites.filter (favorite =>
        favorite['_id'] !== character._id);
     
		  favoritesContext?.setCharacterFavorites(updatedFavorites);
		}
	}

    return(<article className="character-item">

      <h2>{character.name}</h2>
      
      <div className="character-item__actions"  onClick={() => toggleFavoriteForCharacter(character)}>
	  	{!favoritesContext?.characterFavorites.includes(character) ? "Add to Favorites" : "Favorited"}
      </div>
      
      <img className="character-item__img" src={character.imageUrl} alt={character.name} />
    
    </article>);
}


export default Character;