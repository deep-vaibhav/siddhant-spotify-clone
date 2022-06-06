import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import AddNewArtistModal from "../../components/Modal/AddNewArtistModal";
import "./addSong.scss";

function AddSong() {
  const artists = ["artist1", "artist2", "artist3", "artist4", "artist5"];
  const [selectedArtist, setSelectedArtist] = useState(artists[0]);
  const [openNewArtistModal, setOpenNewArtistModal] = useState(false);

  const handleNewArtistClick = (e) => {
    e.preventDefault();

    setOpenNewArtistModal(true);
  };

  const handleClose = () => {
    setOpenNewArtistModal(false);
  };

  return (
    <div className="addSongContainer">
      <AddNewArtistModal open={openNewArtistModal} onClose={handleClose} />

      <h1>Add a New Song</h1>

      <form className="addSongForm">
        <div>
          <label>Song Name</label>
          <TextField />
        </div>

        <div>
          <label>Date Released</label>
          <TextField />
        </div>

        <div>
          <label>Artwork</label>
          <TextField type={"file"} />
        </div>

        <div>
          <label>Artists</label>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedArtist}
            label="Age"
            onChange={(e) => setSelectedArtist(e.target.value)}
          >
            {artists.map((artist) => (
              <MenuItem value={artist}>{artist}</MenuItem>
            ))}
          </Select>

          <button className="addArtistButton" onClick={handleNewArtistClick}>
            <span>+</span> Add Artist
          </button>
        </div>

        <div className="buttons">
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </form>
    </div>
  );
}

export default AddSong;
