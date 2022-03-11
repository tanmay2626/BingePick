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

 function Menu({ setMList }) {

  return (
    <div>
              <MenuItem
              className="a" 
                component={Link}
                to="/movie/list"
                onClick={()=>{
                  setMList('now_playing')
                }}
              >
                <ListItemIcon>
                  <AccessTimeFilled fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  <span className="menu-list">
                    Recent
                  </span>
                </ListItemText>
              </MenuItem>
              <MenuItem className="a"  component={Link} to="/movie/list" 
              onClick={()=>{
                setMList('top_rated')
                }
                }
                >
                <ListItemIcon>
                  <StarRateRounded fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  <span className="menu-list">Top Rated</span>
                </ListItemText>
              </MenuItem>
              <MenuItem className="a"  component={Link} to="/movie/list" onClick={()=>{
                setMList('popular')
                }
                }>
                <ListItemIcon>
                  <WhatshotRounded fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  <span className="menu-list">Popular</span>
                </ListItemText>
              </MenuItem>
              <MenuItem className="a"  component={Link} to="/movie/list" onClick={()=>{
                setMList('upcoming')
                }
                }>
                <ListItemIcon>
                  <PersonRounded fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  <span className="menu-list">
                    Upcoming
                  </span>
                </ListItemText>
              </MenuItem>
            </div>
  );
}

export default Menu
