import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { FormatBold } from "@material-ui/icons";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    maxWidth: 1200,
    margin: "auto",
    marginBottom: "30px",
    display: "flex",
    flexDirection: "row",
  },
  media: {
    minHeight: 300,
    minWidth: 300,
    //   resizeMode: "contain",
  },
  cardContent: {
    width: 400
  }
});

export default function FullProfileCard({ user }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {console.log(user)}
      <CardMedia
        className={classes.media}
        image={user?.picture}
        alt={user?.picuter}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {user.firstName + " " + user.lastName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <Box fontWeight="fontWeightBold" m={1} color="black">
            Gender
          </Box>
          {user.gender}
        </Typography>
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          Lizard
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
}
