const serverURL = "http://localhost:3001";

async function getAccessToken() {
  const response = await fetch(`${serverURL}/test`);
  const data = await response.json();
  return data.token;
}


async function searchSpotify(query, type) {
  const accessToken = await getAccessToken();

  const response = await fetch(`${serverURL}/search?search=${query}&type=${type}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();
  console.log("Search Results:", data);
}