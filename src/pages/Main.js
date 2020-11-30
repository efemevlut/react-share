import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { capitalize, Container, Grid } from "@material-ui/core";
import axios from "axios";
import MediaCard from "../components/MediaCard";

const stylesFunc = makeStyles((theme) => ({
  wrapper: {
    marginTop: "10rem",
    height: "calc(100vh - 19.0625rem)",
    display:'flex',
    flexDirection:'column',
    minHeight: '100vh',
    marginTop: "5rem",
    textAlign: "center",
  },
  avatar: {
    margin: "1rem auto",
    backgroundColor: theme.palette.secondary.main,
  },
}));

function Main() {
  const [userList, setUserList] = useState();
  const mainStyles = stylesFunc();
  const { REACT_APP_API_BASE_URL, REACT_APP_API_TOKEN } = process.env;

  const fetchData = async () => {
    const response = await axios.get(`${REACT_APP_API_BASE_URL}/user`, {
      headers: {
        "app-id": REACT_APP_API_TOKEN,
      },
    });
    setUserList(response?.data?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className={mainStyles.wrapper}>
      <Grid container spacing={5}>
        {userList?.map((user) => {
          return (
            <Grid item xs={6} sm={4} key={user?.id}>
              <MediaCard
                id={user?.id}
                userImage={user?.picture}
                userName={`${capitalize(user?.title)} ${user?.firstName} ${
                  user?.lastName
                }`}
                userEmail={user?.email}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Main;
