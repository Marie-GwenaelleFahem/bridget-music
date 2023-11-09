import React from "react";

function HomePage() {

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
        {
            id: 5,
            artist: "Queen",
            track: "Bohemian Rhapsody",
            album: "A Night at the Opera",
            year: "1975"
        },
        {
            id: 6,
            artist: "Bob Marley & The Wailers",
            track: "No Woman, No Cry",
            album: "Natty Dread",
            year: "1974"
        },
        {
            id: 7,
            artist: "Adele",
            track: "Rolling in the Deep",
            album: "21",
            year: "2010"
        },
        {
            id: 8,
            artist: "Nirvana",
            track: "Smells like Teen Spirits",
            album: "Nevermind",
            year: "1991"
        },
        {
            id: 9,
            artist: "Elvis Presley",
            track: "Can't Help Falling in Love",
            album: "Blue Hawaii",
            year: "1961"
        }
    ]


    return (
        <>
            <div className="card-music">
            <h2>Les tendances du moment</h2>
                <div className="card-music_inner">
                    {spotifyDatas.map((data) => 
                        !!spotifyDatas && 0 < spotifyDatas.length ?
                        <ul key={data.id}>
                            <li>{data.track}</li>
                            <li>{data.artist}</li>
                            <li>{data.album}</li>
                            <li>{data.year}</li>
                        </ul>

                        : console.log("Hide the money y'all !!")
                        // <span>Pas de playlist disponible actuellement</span>
                    )}
                </div>
            </div>
        </>
    )
}

export default HomePage;