
import './App.css';
import React, { useState,useEffect } from 'react';
import Header from './components/header';
import CharacterContainer from './components/character_container';
import Navigation from './components/navigation';
import { DisneyCharacter } from './disney_character';


//Create a single Context to pass to value
export type FavoritesContextType = {
  characterFavorites : Array<number>;
  setCharacterFavorites : React.Dispatch<React.SetStateAction<number[]>>;
}

//Introduce a null context option to support potential checks against it
export const FavoritesContext = 
  React.createContext<null | FavoritesContextType>(null)

const App : React.FC = () => {

  const [characters, setCharacters] = useState<Array<DisneyCharacter>>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);
  const [characterFavorites, setCharacterFavorites] = useState<number[]>([]);

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
