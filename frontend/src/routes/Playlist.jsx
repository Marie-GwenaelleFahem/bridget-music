import React, { useRef } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { useState } from "react";
import '../assets/styles/playlist.css'
import Header from "../components/Header";


function Playlist() {
  const [array, setArray] = useState([]);
  const [items, setItems] = useState([]); 

    let playlist = []

      const handleOnSearch = (value) => {
        if( value == "" ) {
          setItems("")
          return;
        }
        sendRequest(value)
      }
      
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
            {data.map((item,index) => (
            <div key={item.id}>
              <div className="itemPlaylist">
              <p>{index + 1} - {item.name} - {item.artist}</p> 
              <button onClick={removeSong} value={"delete"} data-index={index}>X</button>
              </div>
            </div>
        ))}
          </div>
          </>
        )
      }

      const sendRequest = (requestParam) => {
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
            console.log('data', data)
            let extractedData = data.response.tracks.items.map(item => ({
              id: item.id,
              name: item.name,
              artist: item.artists[0].name  
            }))
            setItems(extractedData)
            console.log('extractedData', extractedData)
            console.log(document.querySelector(".ffXrxx"))
            return extractedData
        })
        .catch(
          error => {
            console.error(error.message)
          }
        )
      }

      const formatResult = (item) => {
        return(
          
          <div className='result-wrapper' key={item.id} style={{ display: 'block', textAlign: 'left' }  }>
            <span className='result-span'>{item.name} {item.artist}</span>
          </div>
          
        )
      }

      const removeSong = (e) => {
        const i = e.target.getAttribute("data-index")
        const newArray = [...array];
        newArray.splice(i, 1);
        setArray(newArray);

      }

      const submitPlaylist = (e) => {
        e.preventDefault();
        let newPlaylist = array;
        console.log(newPlaylist)
        alert("Playlist créée !");
      }
    
      return (
        <>
        <div className="playlistContainer">
        <Header user="Bridget" />
        <div className="globalComponent">
        <h1> CRÉER VOTRE PLAYLIST !</h1>
        <div className="searchBarComponent">
              <ReactSearchAutocomplete
                items={items}
                onSelect={handleOnSelect}
                onSearch={handleOnSearch}
                formatResult={formatResult}
                inputDebounce={100}
                styling={{backgroundColor: "black", color: "white", border: '1px solid #646cff'}}
              />
        </div>
        <div className="playlistComponent">
              <DataPlaylist
              data={array}
              />
        </div>
        <form className="formContainer" onSubmit={submitPlaylist}>
          <label id='labelNamePlaylist'>Nom de la playlist:
            <input id='inputNamePlaylist' type="text" name="titlePlaylist" placeholder='Nom de votre playlist' required />
          </label>
          <button id='buttonAddPlaylist' type='submit'>Ajouter la playlist</button>
        </form>
      </div>
        </div>
        </>
      )
}

export default Playlist;
