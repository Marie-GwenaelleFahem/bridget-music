import React from "react";


function Login(){
    return (
        <div>
            <div class="container">
                <div class="bienvenue">
                    <h1>Bienvenue</h1>
                    <hr class="ligne"></hr>
                    <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla suscipit deleniti fugit error voluptates corporis
                    eius id odit vitae tempore consequatur odio repudiandae sit explicabo voluptatem nemo recusandae, ab velit?
                    </p>
                    <button>Playlists</button>
                </div>  
                <div class="connexion"> 
                    <h1>Connexion</h1>
                    <label for="monInput">Pseudo / Email</label>
                    <input type="text" id="monInput"name="nom"></input>
                    <label for="monInput">Mot de Passe</label>
                    <input type="text" id="monInput"name="nom"></input>
                    <button>Connexion</button>
                    <p>Pas encore Inscrit ? Inscrivez-vous !</p>
                    <hr class="ligne2"></hr>
                    <button class="spotify">Connexion avec Spotify</button>
                </div>
            </div>
        </div>
    )
}

export default Login;