import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../assets/styles/header.css'

function Header({user}) {
    
    const [playlists, setPlaylist] = useState([])

    return (
        <>
            <div className="header">
                <Link to="/"><span>HOME</span></Link>
                <h1>Bonjour {user} !</h1>
                <span>Découvrir</span>
                <div className="create-playlist">
                    <Link to="/playlist"><span>Créer votre playlist <span>+</span></span></Link>
                </div>
                <div>
                    <span>Vos playlists</span>
                    {/* <PlaylistMaker className="my-playlists">
                        <CardPlaylist setPlaylist={setPlaylist}/>
                    </PlaylistMaker> */}
                </div>
            </div>
        </>
    )
}

export default Header;