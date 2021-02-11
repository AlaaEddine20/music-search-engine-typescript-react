import React, { useState } from "react";
import { Song, SearchResponse } from "./types";
import "./style.css";

const Main = () => {
  const [data, setData] = useState<Song[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const fetchSongs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchQuery}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "7058b459femsh8bbc3e5e09ff45bp16ae10jsnaa8151340a4c",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );
      if (response.ok) {
        const { data }: SearchResponse = await response.json();
        setData(data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetchSongs();
  };

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(ev.target.value);
  };

  return (
    <div id="main-view">
      <h1>Sputofy</h1>
      <div id="form-container">
        <form id="form" onSubmit={handleSubmit}>
          <input id="form-input" onChange={handleChange} value={searchQuery} />
          <button type="submit">Search</button>
        </form>
      </div>
      {data.map((song: Song) =>
        isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className={song ? "results-success" : "no-results"}>
            <img
              style={{ marginRight: "20px", marginBottom: "20px" }}
              src={song.artist.picture}
              alt="cover"
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 style={{ color: "rgb(136, 127, 255)" }}>
                {song.artist.name}
              </h3>
              <h4>{song.title}</h4>
              <h5>From: {song.album.title}</h5>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Main;
