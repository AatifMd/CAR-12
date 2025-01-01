import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from '@mui/material';

function CarCards({ image, title, description, price, onButtonClick, buttonLabel, year }) {
  return (
    <Card sx={{ maxWidth: 345, margin: 2, boxShadow: 3 }}>
      {image && (
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
        />
      )}
      <CardContent>
        <Typography variant="h6" component="div">
          {year}{" "}{title}
        </Typography>
        {description && (
          <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
            {description}
          </Typography>
        )}
        {price && (
          <Typography variant="body1" color="text.primary" sx={{ marginTop: 1, fontWeight: 'bold' }}>
            Price: ${price}
          </Typography>
        )}
      </CardContent>
      {onButtonClick && (
        <CardActions>
          <Button size="small" variant="contained" color="primary" onClick={onButtonClick}>
            {buttonLabel || 'View More'}
          </Button>
        </CardActions>
      )}
    </Card>
  );
}

export default CarCards;
