import React from 'react';
import "../styles/MovieCard.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const MovieCard = ({ albums }, props) => {

  return (
    <div className='movies'>
      {albums.length > 0 &&
        albums.map((album) => {
          return (
            <Card key={album.id} sx={{ maxWidth: 400, marginTop: 10, borderRadius: 5, backgroundColor: 'var(--light-color)' }}>
              <CardMedia
                component="img"
                height="600"
                image={"https://image.tmdb.org/t/p/original/" + album.poster_path}
                alt={album.poster_path}
              />
              <CardContent>
                <Typography gutterBottom variant="h4" color="text.primary" component="div" textAlign="center">
                  {album.title}
                </Typography>
                <Typography variant="h6" color="text.primary" textAlign="center">
                  Description
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign="center">
                  {album.overview}
                </Typography>
                <Typography variant="h6" color="text.primary" textAlign="center">
                  Note
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign="center">
                  {album.vote_average}/10 <span>⭐</span>
                </Typography>
              </CardContent>
            </Card>
          )
        }
        )}
    </div>
  )
};


export default MovieCard;
