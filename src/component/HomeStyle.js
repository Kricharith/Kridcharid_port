import { CardGiftcard } from '@mui/icons-material';
import { Card, CardActions, CardMedia, styled }  from '@mui/material';
import Button from '@mui/material/Button';
export const StyledContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(0, 0, 5),
}));
export const StyledButton = styled(Button)(({ theme }) => ({
    marginTop: 40
    // '&:hover': {
    //   backgroundColor: theme.palette.primary.dark,
    // },
  }));
export const StyledContainerCardGrid = styled('div')(({ theme }) => ({
    marginTop: 30,
    padding: "20px 0"
}));

export const StyledCard = styled(Card)(({ theme }) => ({
    height: '100%',  
    display: 'flex',
    flexDirection : 'column'
}));
export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    paddingTop: '56.25%', //16:9 
}));
export const StyledCardActions = styled(CardActions)(({ theme }) => ({
    marginTop: 40   
}));