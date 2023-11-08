import React from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { useState } from "react";


function SearchBar() {
    const items = [
        {
          id: 0,
          name: 'CSS'
        },
        {
          id: 1,
          name: 'JavaScript'
        },
        {
          id: 2,
          name: 'Basic'
        },
        {
          id: 3,
          name: 'PHP'
        },
        {
          id: 4,
          name: 'Java'
        }
    ]

    let playlist = []

    const [array, setArray] = useState([]);
    const addItem = () => {
        array.push('aaaaa');
        playlist.push(array);
        setArray(playlist);
      };

      
      const formatResult = (item) => {
        return (
          <>
            <span>{item.name}</span>
          </>
        )
      }
    
      return (
        <div style={{display:'flex', justifyContent: 'center'}}>

            <div style={{ width: 400}}>
              <ReactSearchAutocomplete
                items={items}
                autoFocus
                formatResult={formatResult}
              />
              <div>
                {array}
              </div>
                <button onClick={addItem}>Add song</button>
            </div>
            </div>
      )
}

export default SearchBar