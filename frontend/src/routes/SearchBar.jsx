import React from 'react';
// import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { useState } from "react";
import '../assets/styles/searchbar.css'


function SearchBar() {
  const [array, setArray] = useState([]);
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState([]);

    let playlist = []

      const handleSearch = (value) => {
        setSearchValue(value)
      };
  
      const handleOnSelect = (item) => {
        let isUnique = true
        
        array.forEach((element) => {
          if (element.id == item.id){
            isUnique = false
          }
        })
        if (isUnique){
          playlist.push(
            item
        )
          setArray(array.concat(playlist))
        }
      }
      const DataPlaylist = ({data}) => {
        const dataArray = []
        return (
          <>
          <div className='dataPlaylist'>
            {data.map(item => (
            <div key={item.id}>
              <p>Name: {item.name}</p>
            </div>
        ))}
          </div>
          </>
        )
      }

      const sendRequest = () => {
        let dataSearchbar = searchValue
        const token = 'BQCfVhAjhw5TAPmOW-n65cubtXOoRP31CSRwbIFL6u0_ZlpTMt2mZo5Eziejk3owtChcCxlHV3CdEtzYwWPRKr0W82MNcIt45JwCgCgBJxHIoyaj2o0'
        const url = `https://api.spotify.com/v1/search?q=${dataSearchbar}&type=track`
        fetch(url, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`
          },
        })
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
            let extractedData = data.tracks.items.map(item => ({
              id: item.id,
              name: item.name,
              artist: item.artists[0].name
            }))
            setItems(extractedData)
            console.log('extractedData', extractedData)
            return extractedData
        })
        .catch(
          error => {
            console.error(error.message)
          }
        )
      }
    
      return (
        <div className='searchbarComponent'>
            <div className='searchbar'>
              <ReactSearchAutocomplete
                items={items}
                onSelect={handleOnSelect}
                onSearch={handleSearch}
              />
              <div className="playlistComponent">
              <div className='arrayComponent'>
                <DataPlaylist
                data = {array}
                />
              </div>  
            </div>
            <button onClick={sendRequest}>Send</button>
            </div>
            </div>
      )
}

export default SearchBar;
