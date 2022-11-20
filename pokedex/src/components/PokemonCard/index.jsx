import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PokemonCard({name, image , types}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{textTransform: 'capitalize'}}>
          {name}
        </Typography>

        <Typography gutterBottom variant="h6" component="div" sx={{textTransform: 'capitalize' , color: 'blue'}}>
          {types[0].type.name}
        </Typography>
        
      </CardContent>
     
    </Card>
  );
}