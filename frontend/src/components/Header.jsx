import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../assets/styles/header.css'

function Header({user}) {
    

    return (
        <>
            <div className="header">
                <h1>Bonjour {user} !</h1>
                <span>Découvrir</span>
                <div className="create-playlist">
                    <Link to="/search"><span>Créer votre playlist</span></Link>
                    <div><span>+</span></div>
                </div>
                <div>
                    <span>Vos playlists</span>

                </div>
            </div>
        </>
    )
}

export default Header;