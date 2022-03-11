import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "@mui/material/Button";
import Search from "./Search";
import Linki from '@mui/material/Link'

const Header = () => {

  return (
    <Container fluid className="header">
              <div className="logo sm">
            <h2>
              <span>Binge</span>Pick
            </h2>
          </div>
      <Row className="section-btn">
        <Col className="sec" sm={4} md={4} lg={2}>
          <Button  size="medium" component="span">
            <Linki className="a"  href="/" underline="none" color="inherit" >movie</Linki>
          </Button>
        </Col>
        <Col className="sec" sm={4} md={4}  lg={2}>
          <Button  size="medium" component="span">
          <Linki className="a"  href="/tv" underline="none" color="inherit" >tv</Linki>
          </Button>
        </Col>
        <Col className="sec" sm={4} md={4} lg={2}>
          <Button className="a"  size="medium" component="span">
            Anime
          </Button>
        </Col>
        <Col className="sm-search" sm={0} md={0} lg={6}>
          <Search />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
