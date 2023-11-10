const express = require('express');
const app = express();
const port = 3001;
const auth_token = "BQCr25aTz919muTGxPiyfnf1kTK8mvM7W_45FpXzw7EB9OFkKjJ4vRNro14wdT1fqo89FWxL_MqHDhGYTQzyqxm_cpYbEWhoN3j5iY4CufFAFqhnY-c"

// Middleware to parse JSON requests
app.use(express.json());

// Sample route
app.get('/search', async (req, res) => {
    try {
        const search = req.query.search; // Extracting the parameter from the query
        const type = req.query.type;
        if (!search) {
          return res.status(400).json({ error: 'search parameter is required' });
        }

        const apiResponse = await fetch(`https://api.spotify.com/v1/search?q=${search}&type=${type}&market=FR&limit=10`, {
            method: 'GET', // Replace with the desired HTTP method
            headers: {
                Authorization: `Bearer ${auth_token}`,
            },
          });
        const apiData = await apiResponse.json();
        res.json({ apiData });
    } catch (error) {
        console.error('Error making request to external API:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});