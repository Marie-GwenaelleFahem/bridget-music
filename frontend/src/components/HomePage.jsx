import React from "react";
import Feed from '../components/Feed';
import Header from "./Header";
import '../assets/styles/homepage.css';

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