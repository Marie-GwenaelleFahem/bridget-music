import React from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { useState, useEffect } from "react";
import '../assets/styles/searchbar.css'


function SearchBar() {
  const [array, setArray] = useState([]);
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const [timer, setTimer] = useState(null);

    let playlist = []

      const handleSearch = (value) => {
        if( value == "" ) {
          return;
        }
        setSearchValue(value)
        if (timer) {
          clearTimeout(timer);
        };
        const newTimer = setTimeout(() => {
          sendRequest(value)
        }, "1500");
        setTimer(newTimer);
      };
      
      useEffect(() => {
        return () => {
          if (timer) {
            clearTimeout(timer);
          }
        };
      }, [timer]);

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
        return (
          <>
          <div className='dataPlaylist'>
            {data.map(item => (
            <div key={item.id}>
              <p>{item.name}</p>
            </div>
        ))}
          </div>
          </>
        )
      }

      const sendRequest = (requestParam) => {
        let dataSearchbar = searchValue
        const url = `http://localhost:3001/search?search=${requestParam}&type=track`
        fetch(url, {
          method: 'GET',
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