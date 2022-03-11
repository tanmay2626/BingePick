import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Box from "./Card";
import axios from "axios";
import IconButton from '@mui/material/IconButton';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { Link } from "react-router-dom";

const Feature = ({ name, params, setMovieID , setMList }) => {
  const [now, setNow] = useState([]);

  const getNow = () => {
    const url =
      "https://api.themoviedb.org/3/movie/" +
      params +
      "?api_key=54cdb44abcd9f6e8c4308299f16ba382&language=en-US&page=1";
    axios.get(url).then((res) => {
      const data = res.data;
      setNow(data.results);
    });
  };

  const section = now?.slice(0, 4);

  useEffect(() => {
    getNow();
    return () => {
      setNow([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container fluid className="featured">
      <div className="featured-header">
      {name}
      <IconButton 
        className="a"
        component={Link}
        to="/movie/list"
        onClick={()=>{
          setMList(params)
        }}
      >
      <ChevronRightRoundedIcon className="featured-go" sx={{ fontSize: 35 }} />
      </IconButton>
      </div>
      <div className="featured-grid">
        {section?.map((item) => {
          return (
            <Box
              setMovieID={setMovieID}
              key={item.id}
              id={item.id}
              poster={item.poster_path}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Feature;
