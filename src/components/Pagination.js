import React from 'react';

const Pagination = ({pokePerPage, totalPokes, paginate }) => {
    const pageNumbers = []

    for (let i = 1; i < Math.ceil(totalPokes / pokePerPage); i++) {
        pageNumbers.push(i)        
    }
    console.log(pageNumbers)
    return (
        <nav>
            <ul className='pagination' id='pagination'>
                {
                    pageNumbers.map(number => {return(
                        <span key={number} className="page-item">
                            <button onClick={() => paginate(number)} className='page-link'>
                               {number+ " "} 
                            </button>
                        </span>
                    )})
                }
                
            </ul>  
        </nav>
    );
};

export default Pagination;