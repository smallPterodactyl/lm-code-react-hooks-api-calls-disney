
import './App.css';
import React, { useState,useEffect } from 'react';
import Header from './components/header';
import CharacterContainer from './components/character_container';
import Navigation from './components/navigation';
import { DisneyCharacter } from './disney_character';

const App : React.FC = () => {

  const [characters, setCharacters] = useState<Array<DisneyCharacter>>([]);

	const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getCharacters(1);
    }, []);

  const getCharacters = async (pageNumber : number) => {

    const apiResponse = await
      fetch (`http://api.disneyapi.dev/characters?page=${pageNumber}`);

    const json = await apiResponse.json () as { data : DisneyCharacter [] };

    setCharacters (json.data);

  };


  
  

 
  

  return (
    <div className="page">
      <Header currentPage={currentPage} />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <CharacterContainer characters={characters} />
    </div>
  );
}

export default App;
