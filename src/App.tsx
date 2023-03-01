
import './App.css';
import React, { useState,useEffect } from 'react';
import Header from './components/header';
import CharacterContainer from './components/character_container';
import Navigation from './components/navigation';
import { DisneyCharacter } from './disney_character';


//Create a single Context to pass to value
export type FavoritesContextType = {
  characterFavorites : Array<DisneyCharacter>;
  setCharacterFavorites : React.Dispatch<React.SetStateAction<DisneyCharacter[]>>;
}

export const FavoritesContext = 
  React.createContext<null | FavoritesContextType>(null)

  
//Main app starts here
const App : React.FC = () => {

  //Structures to handle data
  const [characters, setCharacters] = useState<Array<DisneyCharacter>>([]);
	//const [characterFavorites, setCharacterFavorites] = useState<number[]>([]);
  const [characterFavorites, setCharacterFavorites] = useState<Array<DisneyCharacter>>([]);

  //Structures to handle navigation
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  //Change page following a state update
  useEffect(() => {
    getCharacters(currentPage);
    }, [currentPage]);

  const getCharacters = async (pageNumber : number) => {

    const apiResponse = await
      fetch (`http://api.disneyapi.dev/characters?page=${pageNumber}`);

    const json = await apiResponse.json () as { data : DisneyCharacter [] };
    setCharacters (json.data);

  };

  return (
    <FavoritesContext.Provider 
    value={{characterFavorites,setCharacterFavorites}}>
    
    <div className="page">
      <Header currentPage={currentPage} />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <CharacterContainer characters={characters}
      />
     </div>
     </FavoritesContext.Provider>   
  );
}  
 
export default App;
