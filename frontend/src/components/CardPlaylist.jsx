import React, { useState, useEffect } from "react";

function CardPlaylist() {

    const [playlists, setPlaylist] = useState([])

    return (
        <div>
            {playlists.map((playlist) => 
                !!playlists && 0 < playlists.length ?
                <div key={playlist.id}>
                    <span>{playlist.name}</span>
                </div>
                : <span>Créer votre playlist dès maintenant</span>
            )}
        </div>
    )
}

export default CardPlaylist