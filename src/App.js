import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Header from "./components/Navigation/Header";
import Nav from "./components/Navigation/Menu";
import MHome from "./components/Movie/LandingPage/Home";
import THome from "./components/TV/LandingPage/Home";
import Movie from "./components/Movie/Movie"
import Tv from './components/TV/Tv'
import MovieList from './components/Movie/Movielist'
import TVList from './components/TV/TvList'

function App() {
  const [showID, setShowID] = useState(null)
  const [movieID, setMovieID] = useState(null)
  const [mList, setMList] = useState(null)
  const [tList, setTList] = useState(null)

  return (
    <Row className="main">
        <Router>
        <Col className="main-left" sm={0} md={0} lg={2}>
        <Nav setMList={setMList} setTList={setTList} showID={showID} />
        </Col>
        <Col className="main-right" sm={12} md={12} lg={10}>
          <Header  />
          <Routes>
            <Route
              path="/"
              exact
              element={<MHome setMList={setMList}  setMovieID={setMovieID} />}
            />
            <Route path="/movie/:mid" exact element={<Movie movieID={movieID} />} />
            <Route path="/movie/list" exact element={<MovieList mList={mList} />} />
            <Route
              path="/tv"
              exact
              element={<THome setTList={setTList}  setShowID={setShowID}  />}
            />
            <Route path="/tv/:sid" exact element={<Tv showID={showID} />} />
            <Route path="/tv/list" exact element={<TVList tList={tList} />} />
          </Routes>
          <div className="footer">
          <p>Copyright Tanmay 2022</p>
          </div>
        </Col>
      </Router>
    </Row>
  );
}

export default App;
