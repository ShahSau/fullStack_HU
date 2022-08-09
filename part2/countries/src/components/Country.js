import React from 'react'
import Languages from './Languages'


const Country =({capital,population, language,name,flag})=>{
    let languages = []
    return(
        <div>
            <h2>{name}</h2>
           <p>capital is {capital}</p>
           <p>population is {population}</p>
           <h5>Languages</h5>
           {Object.values(language).forEach(lang=>{
                languages.push(lang)
           })} 
           {languages.map(cc=> 
           <Languages key={Math.random()}lang={cc}/>)}
           <img src={flag} alt={name} height="125" widht="125"></img> 
        </div>
    )
}

export default Country;