import React from 'react'
import styles from './styles.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const typeColors = {
  grass: '#78C850',
  fire: '#F08030', 
  water: '#6890F0', 
  bug: '#A8B820',
};

function Pokedex(props) {

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <>
    <Grid container spacing={2} >
    {
      props.pokemon.map(element => {
        const pokemonType = element.types[0].type.name;
        const cardColor = typeColors[pokemonType] || '#FFF';
        return (
          <Grid  item xs={4}  className='grid'  key={element.id} >
          <Card sx={{backgroundColor: cardColor, borderRadius: '1.5vw'}} className='card'>
            <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      type: { pokemonType }
                    </Typography>
              <Typography variant="h5" component="div" >
                <h1 className='name'>{capitalizeFirstLetter(element.name)} </h1>
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Weight: {element.weight} Kg / Height: {element.height } {element.height} Mts
              </Typography>
              <div className="screen">
              <img src={element.sprites.front_default} alt="does not work" className='pokemon-image' />
              </div>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          </Grid>
          
        )
      })
    }
    
    </Grid>
   
    </>

  )
}

export default Pokedex