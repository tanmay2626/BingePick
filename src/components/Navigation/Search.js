import React from "react";
import { InputBase, IconButton, Paper } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const Search = () => {
  return (
    <Paper
      className="search"
      component="form"
      sx={{
        height: 40,
        p: "2px 4px",
        display: "flex",
        borderRadius: "50px",
        alignItems: "center",
        width: 250,
        backgroundColor: "#ECEFF6",
      }}
    >
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchRoundedIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search "
        inputProps={{ "aria-label": "search google maps" }}
      />
    </Paper>
  );
};

export default Search;
