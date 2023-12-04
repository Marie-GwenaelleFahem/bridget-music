import React, { useState, useEffect } from 'react';
// import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import '../assets/styles/searchbar.css'

function SearchBar() {
  const [array, setArray] = useState([]);
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState([]);

  const [value,setValue] = useState("");
  const [resultList, setResultList] = useState([]);

  useEffect(() => {
      console.log("it's working !")
  }, [])

  const submit = async (event) => {
    event.preventDefault();
    const query = value.split(" ").join("%2520");
    let result = await fetch(`http://localhost:3001/search?type=track&search=${query}`)
    .then(
      response => {
        if (!response.ok) {
          throw new Error('http error status :' + response.status)
        }
        return response.json()
      }
    )
    .then(
      data => {
          console.log('extractedData :', data)
          let extractedData = data.response.tracks.items.map(item => ({
          id: item.id,
          name: item.name,
          artist: item.artists[0].name,
          img: item.album.images[0].url,
          preview: item.preview_url
        }))
        console.log('extractedData', extractedData)
        setResultList(extractedData)
        return extractedData
    })
    .catch(
      error => {
        console.error(error.message)
      }
    )
  console.log("this is the response :" . result)
  setValue("")
    
  }
  const onChange = (event) => {
      const value = event.target.value
      setValue(value);
  }
      
    
  return (
    <>
      <div className="feed">
            <form onSubmit={submit}>
              <div className="searchbarComponent">
              <input onChange={onChange} value={value} placeholder='Rechercher'></input>
                <button type="submit">valider</button>
              </div>
            </form>
            <div className="display-result">
                {resultList.map((result) => 
                    !!resultList && 0 < resultList.length ?
                    <ul key={result.id}>
                        {/* <img src={result.img} width="70px" height="70px"/>
                        <li>{result.name}</li>
                        <li>{result.artist}</li> */}
                        <iframe src={`https://open.spotify.com/embed/track/${result.id}`} frameborder="0"></iframe>
                    </ul>
                    : <span>Aucun résultat !</span>                      
                    )
                }
            </div>
        </div>
    </>
    
  )
}

export default SearchBar
