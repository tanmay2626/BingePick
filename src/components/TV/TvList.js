import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import axios from "axios";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { IconButton } from "@mui/material";
import { ConvDate } from "../../Extras/Conversions"

const List = ({ tList, setShowID }) => {
  const [lists, setList] = useState([])
  const [page, setPage] = useState(1);

  const A = [1, 2, 3, 4, 5];

  const listTitle = () =>{
    let name='';
    if(tList==='on_the_air'){
      name='On Air'
    }else if(tList==='popular'){
      name='Popular'
    }else if(tList==='top_rated'){
      name='Top Rated'
    }else{
      name='Airing Today'
    }
    return name;
  }

  const getList = () => {
    const url =
      "https://api.themoviedb.org/3/tv" +
      "/" +
      tList +
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
  }, [page,tList]); 

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
            <Row>
              <Col sm={0} md={0} lg={2}>
                <Card.Img className="list-img sml-list" variant="top" src={imgUrl} />
              </Col>
              <Col sm={12} md={12} lg={8}>
                <Card.Body className="list-body">
                  <Card.Title className="list-head">
                    {index + 1}. {item.original_name}
                  <Card.Img className="list-img lgl-list" variant="top" src={imgUrl} />
                  </Card.Title>
                  <div className="list-genre">
                    <p>{ConvDate(item.first_air_date)}</p>
                  </div>
                  <Row className="list-rating">
                    <Col className="sml-1" sm={1} md={1} lg={1}>
                      <StarRateRoundedIcon
                        sx={{ color: "gold", fontSize: 35, marginLeft: -3 }}
                      />
                    </Col>
                    <Col className="list-rating-mid sml-1" sm={5} md={5} lg={5}>
                      <h5>{item.vote_average}</h5>
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
              <Col className="sml-info" sm={2} md={2} lg={2}>
                <IconButton
                  component={Link}
                  to={"/tv/"+item.id}
                  onClick={() => {
                    setShowID(item.id);
                  }}
                >
                  <InfoOutlinedIcon sx={{ fontSize: 35, marginTop: 0 }} />
                </IconButton>
              </Col>
            </Row>
          </Card>
        );
      })}
      <Row className="pages">
        {A.map((item, index) => {
          return (
            <Col className="pg-btn" key={index} sm={2} md={2} lg={2}>
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
