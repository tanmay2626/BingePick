import React from "react";
import { Container } from "react-bootstrap";
import Banner from "./Banner";
import Feature from "./Featured";
import { Tsections } from "../../../Extras/section"

const Home = ({ setShowID , setTList }) => {
  const sections =  Tsections;
  return (
    <Container className="home">
      <Banner setShowID={setShowID} />
      {sections.map((item, index) => {
        return (
          <Feature
            setTList={setTList}
            setShowID={setShowID}
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
