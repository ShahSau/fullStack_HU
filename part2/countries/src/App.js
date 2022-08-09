import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'
import Search from './components/Search'

const App = () => {
  
  useEffect( ()=>{
    axios.get('https://restcountries.com/v3.1/all')
    .then(response=>{
      setListCountry(response.data)
      console.log(listCountry)
    })
  },[])
  const [listCountry, setListCountry] = useState([])
  const[search, setSearchs] = useState('')
  const updateSearch = (event)=>{
    setSearchs(event.target.value)
  }
  let filter_country = listCountry.filter(country=>country.name.common.toLowerCase().indexOf(search.toLowerCase())!==-1)
  if (filter_country.length >10){
    return(
      <div>
        <Search search={search} updateSearch={updateSearch} />
        <p>too many matches</p>
      </div>
      
    )
  }else if (filter_country.length <= 10 && filter_country.length > 1){
    return(
      <div>
        <Search search={search} updateSearch={updateSearch} />
      {filter_country.map(country =>
      <p key={Math.random()}>{country.name.common}</p>
        )}
      </div>
    )
  }else {
      return (
        <div>
        <Search search={search} updateSearch={updateSearch} />
        {filter_country.map(country =>
      <Country key={Math.random()}capital={country.capital} population={country.population} name={country.name.common} flag={country.flags.png} language={country.languages}/>
      
    )}
  </div>
  )
  }
  
}

export default App;