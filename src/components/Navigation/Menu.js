import * as React from "react";
import {
  Paper,
  MenuList,
  MenuItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { Container } from "react-bootstrap";
import {
  Home,
  MotionPhotosAutoRounded,
  Favorite,
  ViewList,

  LiveTvRounded,
  VideocamRounded,
} from "@mui/icons-material";
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";
import MenuM from './mMenu'
import MenuT from './tMenu'

export default function IconMenu({ setMList , setTList , showID }) {
  const location = useLocation();

  return (
    <div className="menu">
      <Paper
        sx={{
          color: "#423F3E",
          height: 100 + "%",
          width: 100 + "%",
          backgroundColor: "#F9FFEA",
        }}
      >
        <Container>
          <div className="logo">
            <h2>
              <span>Binge</span>Pick
            </h2>
          </div>

          <div className="menu-section">
            <MenuList>
              <h3 className="menu-head">MENU</h3>
              <MenuItem className="a"  component={Link} to="/">
                <ListItemIcon>
                  <Home fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  <span className="menu-list">Home</span>
                </ListItemText>
              </MenuItem>
              <MenuItem className="a" >
                <ListItemIcon>
                  <Favorite fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  <span className="menu-list">Favorites</span>
                </ListItemText>
              </MenuItem>
              <MenuItem className="a" >
                <ListItemIcon>
                  <ViewList fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  <span className="menu-list">Watchlist</span>
                </ListItemText>
              </MenuItem>
            </MenuList>
          </div>

          <div className="menu-section">
            <MenuList>
              <h3 className="menu-head">LIBRARY</h3>
              {
                (location.pathname==="/tv" || location.pathname==="/tv/list" || location.pathname==="/tv/"+showID)?
                <MenuT setTList={setTList} /> : <MenuM setMList={setMList} />
              }
            </MenuList>
          </div>

          <div className="menu-section">
            <MenuList>
              <h3 className="menu-head">CATEGORY</h3>
              <MenuItem className="a" component={Link} to="/">
                <ListItemIcon>
                  <LiveTvRounded fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  <span className="menu-list">Movies</span>
                </ListItemText>
              </MenuItem>
              <MenuItem className="a" component={Link} to="/tv" >
                <ListItemIcon>
                  <VideocamRounded fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  <span className="menu-list">TV Shows</span>
                </ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <MotionPhotosAutoRounded fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  <span className="menu-list">Anime</span>
                </ListItemText>
              </MenuItem>
            </MenuList>
          </div>
        </Container>
      </Paper>
    </div>
  );
}
