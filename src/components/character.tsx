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

  return (

    <article className="character-item">

      <h2>{character.name}</h2>

      <div className="character-item__actions">
        Add to Favourites
      </div>

      <img className="character-item__img" src={character.imageUrl} alt={character.name} />

    </article>
  )  

}  
  
export default Character