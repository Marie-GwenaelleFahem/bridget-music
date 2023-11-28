import { useState } from "react";
import Feed from '../components/Feed';
import Header from "../components/Header";
import '../assets/styles/homepage.css';


function HomePage() {
    const [value,setValue] = useState("");
    const submit = async (event) => {
        event.preventDefault();
        const query = value.split(" ").join("%2520");
        try {
            const response = await fetch(`http://localhost:3001/search?type=track&search=${query}`);
            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }
    
            const result = await response.json();
            console.log(result);  // Faites quelque chose avec les données de la réponse
    
        } catch (error) {
            console.error('Erreur lors de la requête Fetch:', error);
            // Faites quelque chose pour gérer l'erreur côté client
        }

    }
    const onChange = (event) => {
        const value = event.target.value
        setValue(value);
    }
    return (
        <>
            <div className="homepage">
                <Header user="Bridget"/>
                <Feed />
                <form onSubmit={submit}>
                    <input onChange={onChange} value={value}></input>
                    <button type="submit">valider</button>
                    
                </form>
            </div>
        </>
    )
}

export default HomePage;