export const fetchArtists = async (accessToken, artistIds) => {
  if (!accessToken) return null;

  try {
    const response = await fetch(
      `https://api.spotify.com/v1/artists?ids=${artistIds.join(",")}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    return data.artists;
  } catch (error) {
    console.error("Error fetching artists:", error);
    return null;
  }
};
