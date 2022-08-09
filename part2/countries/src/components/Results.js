import React from 'react'
import Languages from './Languages'




const Results =({country})=>{
    let languages = []
    return(
        <div>
           <p>capital is {country.capital}</p>
           <p>population is {country.population}</p>
           <h5>Spoken Languages:</h5>
           {Object.values(country.languages).forEach(lang=>{
                languages.push(lang)
           })} 
           {languages.map(cc=> 
           <Languages key={Math.random()}lang={cc}/>)}
           <img src={country.flags.png} alt={'namme'} height="125" width="125"></img> 
           

           
        </div>
            
    )
}


export default Results;