import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';

export default function Morerep() {
    const [recipes, setAllrecipes] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('https://dummyjson.com/recipes')
            .then((res) => {
                console.log(res.data); // Log the entire response data to inspect its structure
                if (res.data && Array.isArray(res.data.recipes)) {
                    setAllrecipes(res.data.recipes);
                    console.log(res.data.recipes,"data")
                } else {
                    console.error('Invalid data format received:', res.data);
                }
            })
            .catch((err) => {
                console.error('Error fetching data:', err);
            });
    }, []);

    const handleChange = (e) => {
        setSearch(e.target.value.toLowerCase());
    };

    return (
        <div>
            <TextField
      onChange={handleChange}
      label="Search products here"
      InputProps={{style:{fontSize:40}}}
      />
      
            <Grid container spacing={2} style={{ marginTop: 20 }}>
                {recipes.length === 0 && (
                    <Typography variant="body2" color="text.secondary">
                        Loading...
                    </Typography>
                )}
                {
                    recipes.map((item) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={item.images && item.images.length > 0 ? item.images[0] : ''}
                                    title={item.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                {recipes.length > 0 && recipes
                    .filter((item) => item.title && item.title.toLowerCase().includes(search)).length === 0 && (
                        <Typography variant="body2" color="text.secondary">
                            No recipes found.
                        </Typography>
                    )}
            </Grid>
        </div>
    );
}
