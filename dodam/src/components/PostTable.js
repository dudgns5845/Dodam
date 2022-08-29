import React from 'react';
import styled from 'styled-components';
import { Container, Grid, Card, CardMedia, CardContent, Typography, CardActionArea, CardActions, Button, CardHeader, Avatar, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function PostTable() {
    return (
        <MainWrap>
            <Container sx={{ py: 8 }} >
                {/* <Container> */}
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 345, border: '1px solid gray' }}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                                            R
                                        </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    title="Shrimp and Chorizo Paella"
                                    subheader="September 14, 2016"
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="https://source.unsplash.com/random"
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook
                                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                                        if you like.
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </MainWrap>
    )
}


const MainWrap = styled.div`
background-color: 'orange';
`;