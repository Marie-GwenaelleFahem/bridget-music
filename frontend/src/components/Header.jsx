import React, { useState } from "react";
import '../assets/styles/header.css'

function Header({user}) {
    

    return (
        <>
            <div className="header">
                <h1>Bonjour {user} !</h1>
                <span>Découvrir</span>
                <div className="create-playlist">
                    <span>Créer votre playlist</span>
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