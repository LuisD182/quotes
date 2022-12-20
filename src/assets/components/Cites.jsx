import React, { useState } from 'react';
import phrases from './phrases.json'
import color from './color.json'


const Cites = () => {

    const [numRandom, setnumRandom ] = useState ( Math.floor( Math.random()*phrases.length ) )
    const otherRandom = Math.floor(Math.random()*phrases.length)
    const colorRandomIndex = (( Math.floor( Math.random()*color.length ) ))
    const colorRandom = color[colorRandomIndex].hex
        
    const changePhrase = () => {
        setnumRandom (otherRandom)    
    }
    
   
    document.body.style.backgroundColor = `${colorRandom}`;
    return (
        <div className='container' style={{color:`${colorRandom}`}}  >
            <i className="fa-solid fa-quote-left btn-quotes"></i>
            <h1 className='mainQuote'>{phrases[numRandom].quote}</h1>
            <h3 className='author'>{phrases[numRandom].author}</h3>
            <button className='btn' onClick={changePhrase} > 
                <i className="fa-solid fa-yin-yang btn-change" style={{color:`${colorRandom}`}}></i>  
            </button>
        </div>
    );
};

export default Cites;