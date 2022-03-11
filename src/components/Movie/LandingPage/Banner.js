import React,{ useEffect, useState }  from "react";
import { Card } from "react-bootstrap";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import axios from 'axios'
import { Link } from 'react-router-dom'

const Banner = ({setMovieID}) => {

  const [backdrops,setBackdrop] = useState([])
  
  const getData = () =>{
    const Url = "https://api.themoviedb.org/3/trending/movie/week?api_key=54cdb44abcd9f6e8c4308299f16ba382"
    axios.get(Url).then(res=>{
      const Data = res.data
      setBackdrop(Data.results)
    })
  }

  useEffect(()=>{
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const item = backdrops[Math.floor(Math.random()*backdrops.length)];
  const backdrop_path = item?.backdrop_path;  
  const titleM = item?.original_title;
  const id = item?.id

  const HandleClick = () =>{
    setMovieID(id)
  }


  const Imgurl = "http://image.tmdb.org/t/p/original" + backdrop_path;
  return (
    <Card className="banner">
      <Card.Img className="banner-img" src={Imgurl} alt="Card image" />
      <Card.ImgOverlay>
      <div className="banner-box">
      <Card.Title className="banner-txt">{titleM}</Card.Title>
        <Button
        className="ab" 
          onClick={HandleClick}
          component={Link} to={"/movie/"+id}
          variant="contained"
          sx={{ backgroundColor: "#E60965", height: 40 , width : 90 ,
          '@media (max-width: 780px)' : {
            width: 2,
            height : 30
          }
          }}
        >
          View
        </Button>
        <IconButton
          sx={{
            marginLeft: 2,
            borderRadius: 5,
            height: 40,
            width: 45,
          }}
        >
          <BookmarkAddIcon sx={{ color: "#E60965", fontSize: 50 ,
          '@media (max-width: 780px)' : {
            fontSize : 40
          } }} />
        </IconButton>
      </div>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Banner;
