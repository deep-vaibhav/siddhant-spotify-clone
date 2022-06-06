import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

import "./AddNewArtistModal.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  borderRadius: "4px",
  p: 4,
};

function AddNewArtistModal({ open, onClose }) {
  const handleArtistAdd = () => {};

  return (
    <div className="addArtistModal">
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontWeight: 600 }}
          >
            Add Artist
          </Typography>

          <form className="addArtistForm">
            <div>
              <label>Song Name</label>
              <TextField type="text" />
            </div>

            <div>
              <label>Date of Birth</label>
              <TextField type={"date"} />
            </div>

            <div>
              <label>Bio</label>
              <TextField type="text" />
            </div>

            <div className="buttons">
              <button onClick={onClose}>Cancel</button>
              <button onClick={handleArtistAdd}>Done</button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default AddNewArtistModal;
