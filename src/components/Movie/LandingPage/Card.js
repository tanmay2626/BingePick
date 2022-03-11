import React from "react";
import { Card } from "react-bootstrap";
import IconButton from '@mui/material/IconButton';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Link } from 'react-router-dom'

const Box = ({id,poster,setMovieID}) => {

    const url = "https://image.tmdb.org/t/p/original" + poster;

    const HandleClick = () =>{
      setMovieID(id)
    }
  return (
    <Card id={id} className="box" >
      <Card.Img className="box-img" src={url} alt="Card image" sx={{ width : 100+'%' , height : 100+'%' }} />
      <Card.ImgOverlay>
      <IconButton 
      onClick={HandleClick} 
      component={Link} to={"/movie/"+id}
     sx={{  marginLeft : 18 , marginTop : -3 , borderRadius : 0 , height : 35 , width : 35 ,
      '@media (max-width: 780px)' : {
            marginLeft : 12
          }
     }} 
      >
      <InfoOutlinedIcon sx={{ color : 'white'}} />
    </IconButton>
  </Card.ImgOverlay>
    </Card>
  );
};

export default Box;
