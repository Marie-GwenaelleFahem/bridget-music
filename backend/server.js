require('dotenv').config()
const cors = require('cors');
const express = require("express");
const app = express();
app.use(cors());
const port = process.env.PORT;
let auth_token = null;
let auth_token_date = null;

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

async function requestToken() {
  const token = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        new Buffer.from(clientId + ":" + clientSecret).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
  });
  if(!token.ok) {
    throw new Error("error requesting token")
  }
  let tokenJson = await token.json();

  const expiresInMilliseconds = tokenJson.expires_in * 1000; // convert seconds to milliseconds
  auth_token_date = new Date(Date.now() + expiresInMilliseconds);
  // auth_token_date = new Date() + tokenJson.expires_in;
  auth_token = tokenJson.access_token;
}

async function checkToken() {
  if (auth_token_date && new Date() < auth_token_date) return;
  await requestToken();
}

app.get("/test", async (req, res) => {
  try {
    await checkToken();
    return res
      .status(200)
      .json({ token: auth_token, expires_in: auth_token_date });
  } catch (error) {
    console.error("Error making request to external API:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Middleware to parse JSON requests
app.use(express.json());

// search route
app.get("/search", async (req, res) => {
  try {
    const search = req.query.search; // Extracting the parameter from the query
    const type = req.query.type;

    if (!search) {
      res.status(400).json({ error: "search parameter is required" });
    }
    await checkToken();

    const apiResponse = await fetch(
      `https://api.spotify.com/v1/search?q=${search}&type=${type}&market=FR&limit=10`,
      {
        method: "GET", // Replace with the desired HTTP method
        headers: {
          Authorization: `Bearer ${auth_token}`,
        },
      }
    );
    const apiData = await apiResponse.json();
    res.status(200).json({ response: apiData });
  } catch (error) {
    console.error("Error making request to external API:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(auth_token);
});


 // Route Artiste
 app.get("/artist/:id", async (req, res) => {
  try {
    const artistId = req.params.id;

    // Vérif token
    await checkToken();

    // requête
    const apiResponse = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${auth_token}`,
      },
    });

    // Vérifier si la réponse est réussie (statut 200)
    if (apiResponse.status === 200) {
      const artistData = await apiResponse.json();
      res.json({ artist: artistData });
    } else {
      // Gérer les erreurs si la réponse n'est pas réussie
      console.error(`Error fetching artist data. Status: ${apiResponse.status}`);
      res.status(apiResponse.status).json({ error: "Unable to fetch artist data" });
    }
  } catch (error) {
    console.error("Error making request to external API:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route récupérer Playlist
app.get("/playlist/:id", async (req, res) => {
  try {
    const playlistId = req.params.id;

    // Vérif token
    await checkToken();

    // requête
    const apiResponse = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${auth_token}`,
      },
    });

    // Vérifier si la réponse est réussie (statut 200)
    if (apiResponse.status === 200) {
      const playlistData = await apiResponse.json();
      res.json({ playlist: playlistData });
    } else {
      // Gérer les erreurs si la réponse n'est pas réussie
      console.error(`Error fetching playlist data. Status: ${apiResponse.status}`);
      res.status(apiResponse.status).json({ error: "Unable to fetch playlist data" });
    }
  } catch (error) {
    console.error("Error making request to external API:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Route créer playlist
app.post("/playlist/create", async (req, res) => {
  try {
    // Récupérer les données de la requête POST
    const { user_id, name, public, collaborative, description } = req.body;

    // Vérif token
    await checkToken();

    // requête
    const apiResponse = await fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${auth_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        public: public || true, // Si non spécifié, par défaut la playlist sera publique
        collaborative: collaborative || false, // Si non spécifié, par défaut la playlist ne sera pas collaborative
        description,
      }),
    });

    // Vérifier si la réponse est réussie (statut 201)
    if (apiResponse.status === 201) {
      const playlistData = await apiResponse.json();
      res.status(201).json({ playlist: playlistData });
    } else {
      // Gérer les erreurs si la réponse n'est pas réussie
      console.error(`Error creating playlist. Status: ${apiResponse.status}`);
      res.status(apiResponse.status).json({ error: "Unable to create playlist" });
    }
  } catch (error) {
    console.error("Error making request to external API:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});