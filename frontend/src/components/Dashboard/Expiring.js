import React from 'react';
import Color from 'color';
import GoogleFont from 'react-google-font-loader';
import { makeStyles } from '@material-ui/core/styles';
import NoSsr from '@material-ui/core/NoSsr';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import {useState,useEffect} from 'react';


const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up('md')]: {
      justifyContent: 'center',
    },
  },
}));

const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
    boxShadow: '2px 6px 15px 2px white'
  },
  card: ({ color }) => ({
    minWidth: 256,
    maxWidth: 300,
    borderRadius: 16,
    boxShadow: 'none',
    '&:hover': {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: '1rem 1.5rem 1.5rem',
    };
  },
  title: {
    fontFamily: 'Keania One',
    fontSize: '2rem',
    color: '#fff',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontFamily: 'Montserrat',
    color: '#fff',
    opacity: 0.87,
    marginTop: '2rem',
    fontWeight: 500,
    fontSize: 14,
  },
}));


const data =  [
      {
          "imgURL": "https://www.icicibank.com//managed-assets/images/offer-zone/credit-debit-card/green-tuesday-offer/green-tuesday-offer-t.jpg",
          "title": "Everyday Delights Green Tuesdays",
          "code": "ICICIGTMAR2",
          "discount": null,
          "category": "E-Commerce",
          "price": null,
          "description": "Everyday Delights Tuesdays Offer Use ICICI Bank Credit/Debit Card or Pockets",
          "expiry": "2022-03-30",
          "_id": "623f62404a4c3437a9b0e1af"
      },
      {
          "imgURL": "https://www.icicibank.com//managed-assets/images/offer-zone/credit-debit-card/vivo-phones-cashback-offer-t.jpg",
          "title": "Vivo Phones Offer - Get Up To Rs 3500 Cashback",
          "discount": null,
          "category": "Electronics",
          "price": 3500,
          "description": "Vivo Phones offer Pay using ICICI Bank Credit or Debit Card",
          "expiry": "2022-03-30",
          "_id": "623f62404a4c3437a9b0e1b0"
      },
      {
          "imgURL": "https://www.icicibank.com//managed-assets/images/offer-zone/credit-card/oppo-phones-offer-t.jpg",
          "title": "OPPO phone offer – Get up to Rs 2,500/- cashback",
          "discount": null,
          "category": "Electronics",
          "price": 3000,
          "description": "OPPO Phones Offer Pay using ICICI Bank Credit or Debit Card",
          "expiry": "2022-03-30",
          "_id": "623f62404a4c3437a9b0e1b1"
      },
      {
          "imgURL": "https://www.icicibank.com//managed-assets/images/offer-zone/credit-debit-card/whirlpool-emi-offer-thumbnail.jpg",
          "title": "Whirlpool Offer - Get Up to 15% Cashback",
          "discount": 15,
          "category": "Electronics",
          "price": null,
          "description": "Whirlpool Offer - Use ICICI Bank Credit and Debit Card EMI transactions",
          "expiry": "2022-03-30",
          "_id": "623f62404a4c3437a9b0e1b2"
      }
  ]

const CustomCard = ({ classes, image, title, subtitle, price, expiry }) => {
  const mediaStyles = useFourThreeCardMediaStyles();
  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card}>
        <CardMedia classes={mediaStyles} image={image}/>
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={'h2'}>
            {title}
          </Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
          <br></br>
          <Typography className={classes.price}>{price}</Typography>
          <Typography className={classes.expiry}>{expiry}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export const Expiring = React.memo(function SolidGameCard({type}) {
  const gridStyles = useGridStyles();
  const styles = useStyles({ color: '#203f52' });
  const styles2 = useStyles({ color: '#4d137f' });
  const styles3 = useStyles({ color: '#ff9900' });
  const styles4 = useStyles({ color: '#34241e' });
    return (
      <>
        <Grid classes={gridStyles} container spacing={4} wrap={'nowrap'}>
          
          <Grid item>
            <CustomCard
              classes={styles}
              title={data[0].title}
              subtitle={data[0].description}
              image={
                data[0].imgURL
              }
              price={data[0].code}
              expiry={data[0].expiry}
            />
          </Grid>
          <Grid item>
            <CustomCard
              classes={styles2}
              title={data[1].title}
              subtitle={data[1].description}
              image={
                data[1].imgURL
              }
              price={data[1].price+'₹'}
              expiry={data[1].expiry}
            />
          </Grid>
          <Grid item>
            <CustomCard
              classes={styles3}
              title={data[2].title}
              subtitle={data[2].description}
              image={
                data[2].imgURL
              }
              price={data[2].price+'₹'}
              expiry={data[2].expiry}
            />
          </Grid>
          <Grid item>
            <CustomCard
              classes={styles4}
              title={data[3].title}
              subtitle={data[3].description}
              image={
                data[3].imgURL
              }
              price={data[3].discount+'%'}
              expiry={data[3].expiry}
            />
          </Grid>
        </Grid>
      </>
    );
});
export default Expiring;