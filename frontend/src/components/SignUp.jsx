import React from "react";
import '../assets/styles/signup.css';

function SignUp(){
    return (
        <div>
            <div className="container1">
                <div className="titre">
                    <h1>Inscription</h1>
                </div>
                <div className="formulaire1">
                <form method="POST">
                    <label htmlFor="firstname">Nom :</label>
                    <input id="firstname" name="firstname" type="text" placeholder="Nom"></input>
                    <label htmlFor="name">Prénom :</label>
                    <input id="name" name="name" type="text" placeholder="Prénom"></input>                
                    <label htmlFor="pseudo">Pseudo :</label>
                    <input id="pseudo" name="pseudo" type="text" placeholder="Pseudo"></input>
                    <label htmlFor="mail">Mail :</label>
                    <input id="mail" name="mail" type="text" placeholder="Mail"></input>
                    <label htmlFor="password">Mot de passe :</label>
                    <input id="password" name="password" type="text" placeholder="Mot de passe"></input>      
                    <label htmlFor="confirmed">Cofirmez le Mot de passe :</label>
                    <input id="confirmed" name="confirmed" type="text" placeholder="Confirmez le Mot de passe"></input> 
                </form>
                <div className="buttons">
                <a href="loginwG" className="google">Connectez-vous avec Google</a>
                <a href="register" className="go">Let's go</a>
                </div>
                
                </div>
            </div>
        </div>
    )
}

export default SignUp;