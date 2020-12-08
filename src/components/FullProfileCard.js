import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { capitalize } from "@material-ui/core";
import { formatDateFunc } from "../helper/FormatDate";
import Map from "./MapCard";


const useStyles = makeStyles({
  root: {
    maxWidth: 1200,
    margin: "auto",
    marginBottom: "30px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  media: {
    minHeight: 300,
    minWidth: 300,
  },
  cardContent: {
    width: 400,
    height: 300
  },
  typography: {
    display: "flex",
    flexDirection: "row",
  },
});

export default function FullProfileCard({ user }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={user?.picture}
        alt={user?.picuter}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2" fontSize={25}>
          {user.firstName + " " + user.lastName}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.typography}
        >
          <Box
            fontWeight="fontWeightRegular"
            m={1}
            color="black"
            display="inline"
            fontSize={20}
          >
            Gender :
          </Box>
          <Box
            fontWeight="fontWeightLight"
            m={1}
            color="black"
            display="inline"
            fontSize={20}
          >
            {capitalize(user.gender)}
          </Box>
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.typography}
        >
          <Box
            fontWeight="fontWeightRegular"
            m={1}
            color="black"
            display="inline"
            fontSize={20}
          >
            Date of Birth :
          </Box>
          <Box
            fontWeight="fontWeightLight"
            m={1}
            color="black"
            display="inline"
            fontSize={20}
          >
            {formatDateFunc(user.dateOfBirth)}
          </Box>
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.typography}
        >
          <Box
            fontWeight="fontWeightRegular"
            m={1}
            color="black"
            display="inline"
            fontSize={20}
          >
            Register Date :
          </Box>
          <Box
            fontWeight="fontWeightLight"
            m={1}
            color="black"
            display="inline"
            fontSize={20}
          >
            {formatDateFunc(user.registerDate)}
          </Box>
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.typography}
        >
          <Box
            fontWeight="fontWeightRegular"
            m={1}
            color="black"
            display="inline"
            fontSize={20}
          >
            Email :
          </Box>
          <Box
            fontWeight="fontWeightLight"
            m={1}
            color="black"
            display="inline"
            fontSize={20}
          >
            {user.email}
          </Box>
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.typography}
        >
          <Box
            fontWeight="fontWeightRegular"
            m={1}
            color="black"
            display="inline"
            fontSize={20}
          >
            Phone :
          </Box>
          <Box
            fontWeight="fontWeightLight"
            m={1}
            color="black"
            display="inline"
            fontSize={20}
          >
            {user.phone}
          </Box>
        </Typography>
      </CardContent>
        
      <CardContent className={classes.cardContent}><Map /></CardContent>
    </Card>
  );
}
