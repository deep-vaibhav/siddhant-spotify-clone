import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

function SongsTable({ rows }) {
  return (
    <div className="songsTable">
      <div className="songsTableHeader">
        <h1>Top 10 Songs</h1>

        <button>
          <Link to={"/add-song"}>
            <span>+</span> Add Song
          </Link>
        </button>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Artwork</TableCell>
              <TableCell align="right">Song</TableCell>
              <TableCell align="right">Date of Release</TableCell>
              <TableCell align="right">Artists</TableCell>
              <TableCell align="right">Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img src={row.artwork} className="artistImage" />
                </TableCell>
                <TableCell align="right">{row.song}</TableCell>
                <TableCell align="right">{row.dateOfRelease}</TableCell>
                <TableCell align="right">{row.artists}</TableCell>
                <TableCell align="right">
                  <Rating
                    name="simple-controlled"
                    value={row.rating}
                    onChange={(event, val) => {}}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default SongsTable;
