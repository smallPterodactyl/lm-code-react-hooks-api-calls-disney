
import React, { useState,useEffect } from 'react';

const Navigation : React.FC< { currentPage: number, setCurrentPage: (page: number) => void } > 
	= ({ currentPage, setCurrentPage }) => 
	{

        let [changeText, setChangeText] = useState(true);

        const toggleButton = () => {
            return setChangeText(!changeText);
        };
    
        const nextPage = () => {
        const newPageNumber = currentPage + 1;
        setCurrentPage(newPageNumber);
    }

    const prevPage = () => {
        if (currentPage > 1) {
            const newPageNumber = currentPage - 1;
            setCurrentPage(newPageNumber);
        }   

    }

    return (
        <div className="navigation">
            <div className="navigation__item">
                <button className="navigation__button" onClick={prevPage}>Prev Page</button>
            </div>
            <div className="navigation__item">
                <button className="navigation__button" onClick={() => toggleButton()}>
                {changeText ? "Show Favorites" : "Show All"}</button>
            </div>
            <div className="navigation__item">
                <button className="navigation__button" onClick={nextPage}>Next Page</button>
            </div>
        </div>

    )
}

export default Navigation;