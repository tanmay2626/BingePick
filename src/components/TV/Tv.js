import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import axios from "axios";
import { ConvData } from "../../Extras/Conversions"
import { useLocation } from 'react-router-dom'

const Tv = ({ showID }) => {
  const location = useLocation();
  const loc = location.pathname.split('/')
  const currID = loc[2];
  
  const [show, setShow] = useState({
      sName : '',
      poster : '',
      backdrop : '',
      rating : '',
      rateCount : '',
      age : '',
      overview : '',
      seasons : '',
      startDate : '',
      endDate : ''
  });
  const [genre, setGenre] = useState([]);
  const [casts, setCast] = useState([]);

  const convert = (start,end) =>{
      const startD = start.split('-')
      const endD = end.split('-')
      const d2 = (endD[0]==='2022')?"present" : endD[0];
      return startD[0]+' - '+d2;
  }


  const genreD = ConvData(genre);
  const airingD = convert(show.startDate,show.endDate)

  const getMovie = () => {
    const url =
      "https://api.themoviedb.org/3/tv/" +
      currID +
      "?api_key=54cdb44abcd9f6e8c4308299f16ba382&language=en-US";
    axios.get(url).then((res) => {
      const showDetails = res.data;
      setShow({
          sName : showDetails.name,
          backdrop : showDetails.backdrop_path,
          poster : showDetails.poster_path,
          rating : showDetails.vote_average,
          rateCount : showDetails.vote_count,
          age : showDetails.adult,
          overview : showDetails.overview,
          seasons : showDetails.number_of_seasons,
          startDate : showDetails.first_air_date,
          endDate : showDetails.last_air_date
      })
      setGenre(showDetails.genres)
    });
  };

  const getCast = () => {
    const url = 
      "https://api.themoviedb.org/3/tv/" +
      currID +
      "/credits?api_key=54cdb44abcd9f6e8c4308299f16ba382&language=en-US";
    axios.get(url).then((res) => {
      const castDetails = res.data;
      setCast(castDetails.cast);
    });
  };

  useEffect(() => {
    getMovie();
    getCast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Backdrop = "https://image.tmdb.org/t/p/original" + show.backdrop;
  const Poster = "https://image.tmdb.org/t/p/original" + show.poster;
  return (
    <div className="movie-main">
      <Container className="movie">
        <div className="movie-backdrop">
          <img src={Backdrop} alt="movie" />
        </div>
        <Row className="poster-box">
          <Col sm={3} md={3} lg={3}>
            <Card className="movie-poster">
              <Card.Img variant="top" src={Poster} />
              <Card.Body>
                <Row className="sm-poster">
                  <Col sm={7} md={7} lg={7}>
                    <Card.Title className="movie-rating">
                      {show.rating}
                      <span>/10</span>
                    </Card.Title>
                    <p>{show.rateCount} votes</p>
                  </Col>
                  <Col className="age" sm={5} md={5} lg={5}>
                    {show.age ? "18+" : "16+"}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col className="movie-info" sm={9} md={9} lg={9}>
            <h1>{show.sName}</h1>
            <Row className="movie-details sm-detail">
              <Col sm={4} md={4} lg={4}>
                <p>{show.seasons} Seasons</p>
              </Col>
              <Col sm={4} md={4} lg={4}>
                <p>{airingD}</p>
              </Col>
              <Col sm={4} md={4} lg={4}>
                <p>{genreD}</p>
              </Col>
            </Row>
            <Container className="movie-overview">
              <h3>{show.overview}</h3>
            </Container>
            <Row className="movie-details lg-detail">
              <Col className="sm-1" sm={4} md={4} lg={2}>
                <p>{show.seasons} Seasons</p>
              </Col>
              <Col className="sm-2"  sm={4} md={4} lg={4}>
                <p>{airingD}</p>
              </Col>
              <Col className="sm-2"  sm={4} md={4} lg={6}>
                <p>{genreD}</p>
              </Col>
            </Row>
            
          </Col>
        </Row>
      </Container>
      <Container className="cast">
        <h1>Cast</h1>
        <div className="cast-grid">
          {casts.slice(0, 8).map((item) => {
            const imgUrl =
              "https://image.tmdb.org/t/p/original" + item.profile_path;
            return (
              <Card key={item.id} className="cast-card">
                <Card.Img className="cast-img" variant="top" src={imgUrl} />
                <Card.Body>{item.name}</Card.Body>
              </Card>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Tv;
