export const fetchTracks = async (accessToken, trackIds) => {
  if (!accessToken) return null;

  try {
    const response = await fetch(
      `https://api.spotify.com/v1/tracks?ids=${trackIds.join(",")}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    return data.tracks;
  } catch (error) {
    console.error("Error fetching tracks:", error);
    return null;
  }
};
