import React from "react";
import { Typography, Container, Button, Grid, CardMedia, Card, CardContent, CardActions, Box } from '@mui/material';
import { StyledButton, StyledCard, StyledCardMedia, StyledContainer, StyledContainerCardGrid } from "../component/HomeStyle";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Certificate = () => {
    return (
        <StyledContainer>
            <Box 
                sx={{ 
                    backgroundImage: 'url(/image/ProfileImage3.jpg)', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center', 
                    width: '100%', 
                    height: '600px',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    // paddingTop: '100px'
                }}
            >
            </Box>
            <Box sx={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', mt: -15, width: '90%', mx: 'auto',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                <Typography variant="h2" align="center" color="textPrimary">Certificate</Typography>
                <Typography variant="h5" align="center" color="textSecondary">
                    Hello everyone. This is an album and I'm trying to make this sentence as long as possible so we can see how does it look on the screen.
                </Typography>
                <div>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item>
                            <StyledButton variant="contained" color="primary">
                                See my photos
                            </StyledButton>
                        </Grid>
                        <Grid item>
                            <StyledButton variant="outlined" color="secondary">
                                Secondary action
                            </StyledButton>
                        </Grid>
                    </Grid>
                </div>
                <StyledContainerCardGrid maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <StyledCard>
                                    <StyledCardMedia
                                        image="https://scontent.fbkk19-1.fna.fbcdn.net/v/t39.30808-6/326697869_730689648585865_8804121204148182108_n.jpg?stp=dst-jpg_p720x720&_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=PFw56i142W4Q7kNvgEnqVBc&_nc_ht=scontent.fbkk19-1.fna&oh=00_AYCZqFtzwTgvkaMSBfgIbhUOuVr4TXKl1odMWpoHH1f6ew&oe=66A1F735"
                                        sx={{ height: 200 }}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Kridcharid
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Hi my name's Kridcharid Srikam. Nickname's Jack. I'm 23 years old.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Share</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </StyledContainerCardGrid>
            </Box>
        </StyledContainer>
    )
}

export default Certificate;