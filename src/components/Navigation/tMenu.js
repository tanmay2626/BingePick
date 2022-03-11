import * as React from "react";
import {
  MenuItem,
  ListItemText,
  ListItemIcon
} from "@mui/material";
import {
  AccessTimeFilled,
  StarRateRounded,
  WhatshotRounded,
  PersonRounded,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

 function Menu({ setTList }) {

  return (
    <div>
      <MenuItem
      className="a" 
        component={Link}
        to="/tv/list"
        onClick={() => {
          setTList("on_the_air");
        }}
      >
        <ListItemIcon>
          <AccessTimeFilled fontSize="small" />
        </ListItemIcon>
        <ListItemText>
          <span className="menu-list">On Air</span>
        </ListItemText>
      </MenuItem>
      <MenuItem
      className="a" 
        component={Link}
        to="/tv/list"
        onClick={() => {
          setTList("top_rated");
        }}
      >
        <ListItemIcon>
          <StarRateRounded fontSize="small" />
        </ListItemIcon>
        <ListItemText>
          <span className="menu-list">Top Rated</span>
        </ListItemText>
      </MenuItem>
      <MenuItem
      className="a" 
        component={Link}
        to="/tv/list"
        onClick={() => {
          setTList("popular");
        }}
      >
        <ListItemIcon>
          <WhatshotRounded fontSize="small" />
        </ListItemIcon>
        <ListItemText>
          <span className="menu-list">Popular</span>
        </ListItemText>
      </MenuItem>
      <MenuItem
      className="a" 
        component={Link}
        to="/tv/list"
        onClick={() => {
          setTList("airing_today");
        }}
      >
        <ListItemIcon>
          <PersonRounded fontSize="small" />
        </ListItemIcon>
        <ListItemText>
          <span className="menu-list">Todays</span>
        </ListItemText>
      </MenuItem>
      </div>
  );
}

export default Menu
