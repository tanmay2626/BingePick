import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import axios from "axios";
import { ConvDate, ConvData } from "../../Extras/Conversions"
import { useLocation } from 'react-router-dom'

const Movie = () => {
  const location = useLocation();
  const loc = location.pathname.split('/')
  const currID = loc[2];

  const [movie, setMovie] = useState({
    mName: "",
    mId: "",
    rating: "",
    rateCount: "",
    backdrop: "",
    poster: "",
    runtime: "",
    releaseDate: "",
    genreData: "",
    overview: "",
    age: "",
  });
  const [genre, setGenre] = useState([]);
  const [casts, setCast] = useState([]);

  const movieDate = movie.releaseDate;
  const releaseD = ConvDate(movieDate);
  const genreD = ConvData(genre);

  const getMovie = () => {
    const url =
      "https://api.themoviedb.org/3/movie/" +
      currID +
      "?api_key=54cdb44abcd9f6e8c4308299f16ba382&language=en-US";
    axios.get(url).then((res) => {
      const movieDetails = res.data;
      setMovie({
        mName: movieDetails.original_title,
        rating: movieDetails.vote_average,
        rateCount: movieDetails.vote_count,
        backdrop: movieDetails.backdrop_path,
        poster: movieDetails.poster_path,
        releaseDate: movieDetails.release_date,
        runtime: movieDetails.runtime,
        overview: movieDetails.overview,
        age: movieDetails.adult,
      });
      setGenre(movieDetails.genres);
    });
  };

  const getCast = () => {
    const url = 
      "https://api.themoviedb.org/3/movie/" +
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

  const Backdrop = "https://image.tmdb.org/t/p/original" + movie.backdrop;
  const Poster = "https://image.tmdb.org/t/p/original" + movie.poster;
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
                      {movie.rating}
                      <span>/10</span>
                    </Card.Title>
                    <p>{movie.rateCount} votes</p>
                  </Col>
                  <Col className="age" sm={5} md={5} lg={5}>
                    {movie.age ? "18+" : "16+"}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col className="movie-info" sm={9} md={9} lg={9}>
            <h1>{movie.mName}</h1>
            <Row className="movie-details sm-detail">
              <Col className="sm-1" sm={4} md={4} lg={2}>
                <p>{movie.runtime}min</p>
              </Col>
              <Col className="sm-2"  sm={4} md={4} lg={4}>
                <p>{releaseD}</p>
              </Col>
              <Col className="sm-2"  sm={4} md={4} lg={6}>
                <p>{genreD}</p>
              </Col>
            </Row>
            <Container className="movie-overview">
              <h3>{movie.overview}</h3>
            </Container>
            <Row className="movie-details lg-detail">
              <Col className="sm-1" sm={4} md={4} lg={2}>
                <p>{movie.runtime}min</p>
              </Col>
              <Col className="sm-2"  sm={4} md={4} lg={4}>
                <p>{releaseD}</p>
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

export default Movie;
