import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import axios from "axios";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { IconButton } from "@mui/material";
import { ConvDate } from "../../Extras/Conversions"
import Grid from '@mui/material/Grid';

const List = ({ mList, setMovieID }) => {
  const [lists, setList] = useState([])
  const [page, setPage] = useState(1);

  const A = [1, 2, 3, 4, 5];

  const listTitle = () =>{
    let name='';
    if(mList==='now_playing'){
      name='Now Playing'
    }else if(mList==='popular'){
      name='Popular'
    }else if(mList==='top_rated'){
      name='Top Rated'
    }else{
      name='Upcoming'
    }
    return name;
  }

  const getList = () => {
    const url =
      "https://api.themoviedb.org/3/movie" +
      "/" +
      mList +
      "?api_key=54cdb44abcd9f6e8c4308299f16ba382&language=en-US&page=" +
      page;
    axios.get(url).then((res) => {
      const listData = res.data;
      setList(listData.results);
    });
  };

  const HandleClick = (e) => {
    setPage(e.target.outerText);
  };

  useEffect(() => {
    listTitle();
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page,mList]); 

  const title = listTitle();


  return (
    <Container className="list-main">
      <div className="list-title">
        <h2>{title}</h2>
      </div>
      {lists.map((item, index) => {
        const imgUrl = "https://image.tmdb.org/t/p/original" + item.poster_path;
        return (
          <Card component={Link} to="/movie" key={index} className="list">
            <Grid spacing={2} container className="list-row">
              <Grid item xs={4} sm={4} md={2}>
                <Card.Img className="list-img" variant="top" src={imgUrl} />
              </Grid>
              <Grid item xs={8} sm={8} md={9}>
                <Card.Body className="list-body">
                  <Card.Title className="list-head">
                    {index + 1}. {item.original_title}
                  </Card.Title>
                  <div className="list-genre">
                    <p>{ConvDate(item.release_date)}</p>
                  </div>
                  <Grid container className="list-rating">
                    <Grid className="sml-1" item xs={2} sm={2} md={6}>
                      <StarRateRoundedIcon
                        sx={{ color: "gold", fontSize: 35, marginLeft: -3 }}
                      />
                    </Grid>
                    <Grid  className="list-rating-mid sml-1" item xs={6} sm={6} md={6}>
                      <h5>{item.vote_average}</h5>
                    </Grid>
                    <Grid  className="list-rating-mid sml-1 lg-info" item xs={3} sm={3} md={6}>
                    <IconButton
                  component={Link}
                  to={"/movie/"+item.id}
                  onClick={() => {
                    setMovieID(item.id);
                  }}
                >
                  <InfoOutlinedIcon sx={{ fontSize: 35, marginTop: 0  , 
                        '@media (max-width: 780px)' : {
            fontSize : 30
          }
                  }} />
                </IconButton>
                    </Grid>
                  </Grid>
                </Card.Body>
              </Grid>
              <Col className="sml-info" sm={0} md={0} lg={1}>
                <IconButton
                  component={Link}
                  to={"/movie/"+item.id}
                  onClick={() => {
                    setMovieID(item.id);
                  }}
                >
                  <InfoOutlinedIcon sx={{ fontSize: 35, marginTop: 0  , 
                  }} />
                </IconButton>
              </Col>
            </Grid>
          </Card>
        );
      })}
      <Row className="pages">
        {A.map((item, index) => {
          return (
            <Col className="pg-btn" key={index} sm={1} md={1} lg={2}>
              <Button onClick={HandleClick} variant="outlined" size="small">
                {item}
              </Button>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default List;
