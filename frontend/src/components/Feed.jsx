import React, {useState, useEffect} from "react";
import '../assets/styles/feed.css';
import SearchBar from "../routes/SearchBar";

function Feed() {

    const spotifyDatas = [
        {
            id: 0,
            artist: "Taylor Swift",
            track: "...Ready for it ?",
            album: "Reputation",
            year: "2017"
        },
        {
            id: 1,
            artist: "Adele",
            track: "Hello",
            album: "25",
            year: "2015"
        },
        {
            id: 2,
            artist: "Stromae",
            track: "Alors on danse",
            album: "Cheese",
            year: "2010"
        },
        {
            id: 3,
            artist: "The Beatles",
            track: "Let It Be",
            album: "Let It Be",
            year: "1970"
        },
        {
            id: 4,
            artist: "Michael Jackson",
            track: "Thriller",
            album: "Thriller",
            year: "1983"
        },
        // {
        //     id: 5,
        //     artist: "Queen",
        //     track: "Bohemian Rhapsody",
        //     album: "A Night at the Opera",
        //     year: "1975"
        // },
        // {
        //     id: 6,
        //     artist: "Bob Marley & The Wailers",
        //     track: "No Woman, No Cry",
        //     album: "Natty Dread",
        //     year: "1974"
        // },
        // {
        //     id: 7,
        //     artist: "Adele",
        //     track: "Rolling in the Deep",
        //     album: "21",
        //     year: "2010"
        // },
        // {
        //     id: 8,
        //     artist: "Nirvana",
        //     track: "Smells like Teen Spirits",
        //     album: "Nevermind",
        //     year: "1991"
        // },
        // {
        //     id: 9,
        //     artist: "Elvis Presley",
        //     track: "Can't Help Falling in Love",
        //     album: "Blue Hawaii",
        //     year: "1961"
        // }
    ]

    const playlist1 = {
        id: 1,
        playlistName: 'Lofi girl'
    }

    const playlist2 = {
        id: 1,
        playlistName: 'Workout session'
    }


    return (
        <>
            <div className="card-music">
                <SearchBar />
                <h2>Les playlists du moment</h2>
                <div className="card-music_inner">
                    <div><span>Pop</span></div>
                    <div><span>Rock</span></div>
                    <div><span>Rap</span></div>
                </div>
                <div className="playlist-votes">
                        <h2>Votez pour la playlist de la semaine</h2>
                        <div className="playlist-votes_inner">
                            <div className="playlist1"></div>
                            <span>VS</span>
                            <div className="playlist2"></div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Feed;
 
