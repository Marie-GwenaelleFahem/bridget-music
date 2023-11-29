import { useEffect, useState } from "react";
import Feed from '../components/Feed';
import Header from "../components/Header";
import '../assets/styles/homepage.css';
import SearchBar from "./SearchBar";


function HomePage() {
    
    return (
        <>
            <div className="homepage">
                <Header user="Bridget"/>
                <Feed />
            </div>
        </>
    )
}

export default HomePage;