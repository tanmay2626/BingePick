import React from "react";
import { Container } from "react-bootstrap";
import Banner from "./Banner";
import Feature from "./Featured";
import { Msections } from "../../../Extras/section"

const Home = ({ setMovieID, setMList }) => {
  const sections =  Msections ;

  return (
    <Container className="home">
      <Banner setMovieID={setMovieID} />
      {sections.map((item, index) => {
        return (
          <Feature
            setMList={setMList}
            setMovieID={setMovieID}
            key={index}
            id={index}
            name={item.name}
            params={item.param}
          />
        );
      })}
    </Container>
  );
};

export default Home;
