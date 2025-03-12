// Import the React library
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import React from "react";
import { puppyBowlApi } from "../../api/puppyBowlApi";
// Import the generated hook from our RTK Query API slice
import { useAllPuppiesQuery } from "../../api/puppyBowlApi";

// Define a new React component
const Players = () => {
  // Use the generated hook to fetch data from the API

  // When the component is first rendered, it will start the API fetch
  // It will re-render each time the fetch status changes (e.g., "loading", "data arrived", "error")
  const { data = {}, error, isLoading } = useAllPuppiesQuery();

  // Show a loading message while data is being fetched
  if (isLoading) {
    return <div> Loading... </div>;
  }

  // Show an error message if the fetch failed
  if (error) {
    return <div> {error.message} </div>
  }

  // Show the fetched data after it has arrived
  return (
    <div className="players">
      {/* Map through the data array and generate a div for each player */}
      {data.data.players.map((player) => (
        // Use the player's ID as the key for this div
        <div key={player.id} className="player-card">
          <img className="player-image" src={player.imageUrl} />

          <div className="player-details">
            <h2> {player.name} </h2>

            <p> {player.breed} </p>

            <p> {player.status} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Export the component so it can be imported and used in other files
export default Players;