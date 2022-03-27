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
          "imgURL": "https://www.icicibank.com//managed-assets/images/offer-zone/credit-debit-card/electro-thrusday-offer/electro-croma-thrusday-offer-t.jpg",
          "title": "Everyday Delights Electro Offer",
          "discount": null,
          "category": "Electronics",
          "price": 1000,
          "description": "Get flat ₹1,000 off on home appliances Pay using ICICI Bank Credit or Debit Card",
          "expiry": "2022-03-30T18:30:00.000Z",
          "_id": "623f62404a4c3437a9b0e1ab"
      },
      {
          "imgURL": "https://www.icicibank.com//managed-assets/images/offer-zone/debit-card/trendy-wednesday-offer-new-t.jpg",
          "title": "Everyday Delights Trendy Wednesdays Offer on Flipkart",
          "discount": 10,
          "category": "E-Commerce",
          "price": null,
          "description": "Everyday Delights Trendy Wednesdays Offer Use ICICI Bank Credit/Debit Card or Pockets",
          "expiry": "2022-03-29T18:30:00.000Z",
          "_id": "623f62404a4c3437a9b0e1ac"
      },
      {
          "imgURL": "https://www.icicibank.com//managed-assets/images/offer-zone/debit-card/travel-monday-offer-t.jpg",
          "title": "MakeMyTrip App Travel Mondays Offer",
          "code": "FLYMON",
          "discount": null,
          "category": "Travel",
          "price": null,
          "description": "MakeMyTrip Mondays Cashback Offer Pay using ICICI Bank Credit or Debit Card",
          "expiry": "2022-03-30T18:30:00.000Z",
          "_id": "623f62404a4c3437a9b0e1ad"
      },
      {
          "imgURL": "https://www.icicibank.com//managed-assets/images/offer-zone/credit-debit-card/triple-rewarding-weekend-offer/triple-rewarding-weekend-offer-t.jpg",
          "title": "Weekend Specials Offer",
          "code": "ICICIEMI",
          "discount": null,
          "category": "Finance",
          "price": null,
          "description": "Weekend Specials Offer Pay using ICICI Bank Credit or Debit Card",
          "expiry": "2022-03-30T18:30:00.000Z",
          "_id": "623f62404a4c3437a9b0e1ae"
      },
      {
          "imgURL": "https://www.icicibank.com//managed-assets/images/offer-zone/credit-debit-card/green-tuesday-offer/green-tuesday-offer-t.jpg",
          "title": "Everyday Delights Green Tuesdays Offer",
          "code": "ICICIGTMAR2",
          "discount": null,
          "category": "E-Commerce",
          "price": null,
          "description": "Everyday Delights Green Tuesdays Offer Use ICICI Bank Credit/Debit Card or Pockets",
          "expiry": "2022-03-30T18:30:00.000Z",
          "_id": "623f62404a4c3437a9b0e1af"
      },
      {
          "imgURL": "https://www.icicibank.com//managed-assets/images/offer-zone/credit-debit-card/vivo-phones-cashback-offer-t.jpg",
          "title": "Vivo Phones Offer - Get Up To Rs 3500 Cashback",
          "discount": null,
          "category": "Electronics",
          "price": 3500,
          "description": "Vivo Phones offer Pay using ICICI Bank Credit or Debit Card",
          "expiry": "2022-03-30T18:30:00.000Z",
          "_id": "623f62404a4c3437a9b0e1b0"
      },
      {
          "imgURL": "https://www.icicibank.com//managed-assets/images/offer-zone/credit-card/oppo-phones-offer-t.jpg",
          "title": "OPPO phone offer – Get up to Rs 2,500/- cashback",
          "discount": null,
          "category": "Electronics",
          "price": 3000,
          "description": "OPPO Phones Offer Pay using ICICI Bank Credit or Debit Card",
          "expiry": "2022-03-30T18:30:00.000Z",
          "_id": "623f62404a4c3437a9b0e1b1"
      },
      {
          "imgURL": "https://www.icicibank.com//managed-assets/images/offer-zone/credit-debit-card/whirlpool-emi-offer-thumbnail.jpg",
          "title": "Whirlpool Offer - Get Up to 15% Cashback",
          "discount": 15,
          "category": "Electronics",
          "price": null,
          "description": "Whirlpool Offer - Get 15% cashback up to Rs. 7,500 Use ICICI Bank Credit and Debit Card EMI transactions",
          "expiry": "2022-03-30T18:30:00.000Z",
          "_id": "623f62404a4c3437a9b0e1b2"
      },
      {
          "imgURL": "https://www.icicibank.com//managed-assets/images/offer-zone/credit-debit-card/electro-thrusday-offer/electro-croma-thrusday-offer-t.jpg",
          "title": "Everyday Delights Electro Offer",
          "discount": null,
          "category": "E-Commerce",
          "price": 1000,
          "description": "Get flat ₹1,000 off on home appliances Pay using ICICI Bank Credit or Debit Card",
          "expiry": "2022-03-30T18:30:00.000Z",
          "_id": "623f62404a4c3437a9b0e1b3"
      },
      {
          "imgURL": "https://www.icicibank.com//managed-assets/images/offer-zone/debit-card/travel-monday-offer-t.jpg",
          "title": "MakeMyTrip App Travel Mondays Offer",
          "code": "FLYMON",
          "discount": null,
          "category": "Travel",
          "price": null,
          "description": "MakeMyTrip Mondays Cashback Offer Pay using ICICI Bank Credit or Debit Card",
          "expiry": "2022-03-30T18:30:00.000Z",
          "_id": "623f62404a4c3437a9b0e1b4"
      },
      {
          "imgURL": "https://www.icicibank.com//managed-assets/images/offer-zone/credit-card/emi-credit-card-sony-cashback-offer-t.jpg",
          "title": "Get up to 10% cashback up to Rs.20000 on TV.",
          "discount": 10,
          "category": "Electronics",
          "price": null,
          "description": "Get up to 10% cashback up to Rs. 20,000 - Sony EMI offer",
          "expiry": "2022-03-30T18:30:00.000Z",
          "_id": "623f62404a4c3437a9b0e1b5"
      },
      {
          "imgURL": "https://www.icicibank.com//managed-assets/images/offer-zone/credit-card/samsung-cashback-offer-t1.jpg",
          "title": "Samsung offer – Get Up to 22.5% Cashback",
          "discount": 25,
          "category": "Electronics",
          "price": null,
          "description": "Get Up To 22.5% Cashback Pay using ICICI Bank Credit Card",
          "expiry": "2022-03-30T18:30:00.000Z",
          "_id": "623f62404a4c3437a9b0e1b6"
      },
      {
          "imgURL": "https://www.icicibank.com//managed-assets/images/offer-zone/credit-debit-card/ifb-appliances-offer-t.jpg",
          "title": "IFB appliances EMI offer",
          "discount": 10,
          "category": "E-Commerce",
          "price": null,
          "description": "Get 10% cashback on select IFB appliances Pay using ICICI Bank Credit or Debit Card",
          "expiry": "2022-03-30T18:30:00.000Z",
          "_id": "623f62404a4c3437a9b0e1b7"
      },
      {
          "imgURL": "https://www.icicibank.com//managed-assets/images/offer-zone/credit-card/lg-products-offer-t.jpg",
          "title": "Get Up To 20% Cashback on select LG products",
          "category": "Electronics",
          "price": null,
          "description": "Get up to 20% cashback on LG products cashback on LG products",
          "expiry": "2022-03-30T18:30:00.000Z",
          "_id": "623f62404a4c3437a9b0e1b8"
      },
      {
          "imgURL": "https://www.icicibank.com//managed-assets/images/offer-zone/net-banking/byju-offer-t.jpg",
          "title": "BYJU'S Offer",
          "discount": null,
          "category": "Finance",
          "description": "Avail of no cost* EMI on BYJU’s courses Pay using ICICI Bank Credit Card",
          "expiry": "2022-03-30T18:30:00.000Z",
          "_id": "623f62404a4c3437a9b0e1b9"
      },
      {
          "imgURL": "https://www.icicibank.com//managed-assets/images/offer-zone/credit-card/panasonic-ac-offer-t.jpg",
          "title": "Panasonic EMI offer",
          "discount": 20,
          "category": "Finance",
          "price": null,
          "description": "Get 20% cashback - Panasonic Air Conditioner Offer",
          "expiry": "2022-03-30T18:30:00.000Z",
          "_id": "623f62404a4c3437a9b0e1ba"
      },
      {
          "imgURL": "https://www.icicibank.com//managed-assets/images/offer-zone/credit-debit-card/flipkart-boss-offer-t.jpg",
          "title": "Flat 30% off on Clear Tax",
          "discount": 30,
          "category": "Finance",
          "price": null,
          "description": "Flat 30% off on Clear Tax Pay using ICICI Bank Credit or Debit Card",
          "expiry": "2022-03-30T18:30:00.000Z",
          "_id": "623f62404a4c3437a9b0e1bb"
      },
      {
          "imgURL": "https://www.icicibank.com//managed-assets/images/offer-zone/credit-debit-card/Reliance-digital-banner-t.jpg",
          "title": "Reliance Digital Offer - Get 10% Cashback on your purchases",
          "discount": 10,
          "category": "Finance",
          "price": null,
          "description": "Get 10% Cashback on Reliance Digital Offer Pay using ICICI Bank Credit or Debit Card",
          "expiry": "2022-06-29T18:30:00.000Z",
          "_id": "623f62404a4c3437a9b0e1bc"
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
          <Typography className={classes.price}>{price}</Typography>
          <Typography className={classes.expiry}>{expiry}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export const Recommend = React.memo(function SolidGameCard({type}) {
  const gridStyles = useGridStyles();
  const styles = useStyles({ color: '#203f52' });
  const styles2 = useStyles({ color: '#4d137f' });
  const styles3 = useStyles({ color: '#ff9900' });
  const styles4 = useStyles({ color: '#34241e' });
  if(type=='1'){
    return (
      <>
        <Grid classes={gridStyles} container spacing={4} wrap={'nowrap'}>
          <Grid item>
            <CustomCard
              classes={styles}
              title={'Everyday Delights Electro Offer'}
              subtitle={'Get flat ₹1,000 off on home appliances Pay using ICICI Bank Credit or Debit Card'}
              image={
                'https://www.icicibank.com//managed-assets/images/offer-zone/credit-debit-card/electro-thrusday-offer/electro-croma-thrusday-offer-t.jpg'
              }
              price={'₹1000'}
              expiry={'Mar 30, 2022'}
            />
          </Grid>
          <Grid item>
            <CustomCard
              classes={styles2}
              title={'Fortnite'}
              subtitle={'Time to choose side!'}
              image={
                'https://progameguides.com/wp-content/uploads/2019/10/fortnite-outfit-scratch.jpg'
              }
            />
          </Grid>
          <Grid item>
            <CustomCard
              classes={styles3}
              title={'Overwatch'}
              subtitle={'What are you waiting?'}
              image={'https://images5.alphacoders.com/690/thumb-1920-690653.png'}
            />
          </Grid>
          <Grid item>
            <CustomCard
              classes={styles4}
              title={'PUBG'}
              subtitle={'Are you ready?'}
              image={
                'https://www.itp.net/public/styles/full_img_sml/public/images/2019/05/27/44485-pubg_base1.jpg?itok=EF911Xan'
              }
            />
          </Grid>     
        </Grid>
      </>
    );
    
  } // end of 1
  if(type=='2'){
    return (
      <>
        <Grid classes={gridStyles} container spacing={4} wrap={'nowrap'}>
          <Grid item>
            <CustomCard
              classes={styles}
              title={'Dota 2'}
              subtitle={'Be a Legend!'}
              image={
                'https://steamcdn-a.akamaihd.net/apps/dota2/images/blog/play/dota_heroes.png'
              }
            />
          </Grid>
          <Grid item>
            <CustomCard
              classes={styles2}
              title={'Fortnite'}
              subtitle={'Time to choose side!'}
              image={
                'https://progameguides.com/wp-content/uploads/2019/10/fortnite-outfit-scratch.jpg'
              }
            />
          </Grid>
          <Grid item>
            <CustomCard
              classes={styles3}
              title={'Overwatch'}
              subtitle={'What are you waiting?'}
              image={'https://images5.alphacoders.com/690/thumb-1920-690653.png'}
            />
          </Grid>
          <Grid item>
            <CustomCard
              classes={styles4}
              title={'PUBG'}
              subtitle={'Are you ready?'}
              image={
                'https://www.itp.net/public/styles/full_img_sml/public/images/2019/05/27/44485-pubg_base1.jpg?itok=EF911Xan'
              }
            />
          </Grid>     
        </Grid>
      </>
    );
    
  } // end of 2
  return (
    <>
      <Grid classes={gridStyles} container spacing={4} wrap={'nowrap'}>
        <Grid item>
          <CustomCard
            classes={styles}
            title={'Dota 2'}
            subtitle={'Be a Legend!'}
            image={
              'https://steamcdn-a.akamaihd.net/apps/dota2/images/blog/play/dota_heroes.png'
            }
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles2}
            title={'Fortnite'}
            subtitle={'Time to choose side!'}
            image={
              'https://progameguides.com/wp-content/uploads/2019/10/fortnite-outfit-scratch.jpg'
            }
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles3}
            title={'Overwatch'}
            subtitle={'What are you waiting?'}
            image={'https://images5.alphacoders.com/690/thumb-1920-690653.png'}
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles4}
            title={'PUBG'}
            subtitle={'Are you ready?'}
            image={
              'https://www.itp.net/public/styles/full_img_sml/public/images/2019/05/27/44485-pubg_base1.jpg?itok=EF911Xan'
            }
          />
        </Grid>     
      </Grid>
    </>
  );

});
export default Recommend;