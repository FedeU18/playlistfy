// src/api/spotifyApi.js

export const fetchAlbums = async (accessToken, albumIds) => {
  if (!accessToken) return null;

  try {
    const response = await fetch(
      `https://api.spotify.com/v1/albums?ids=${albumIds.join(",")}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const data = await response.json();
    return data.albums;
  } catch (error) {
    console.error("Error fetching albums:", error);
    return null;
  }
};
