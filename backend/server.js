require('dotenv').config()
const cors = require('cors');
const express = require("express");
const app = express();
app.use(cors());
const port = process.env.PORT;
let auth_token = null;
let auth_token_date = null;

const clientId = "017bcc3b1f6541a0b38ab18ecd8c1583";
const clientSecret = "e6e72c25f462437184e8c237939dd239";

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

// Sample route
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
