import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../helper/FetchData";
import { makeStyles } from "@material-ui/core/styles";
import { capitalize, Container, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const stylesFunc = makeStyles((theme) => ({
  wrapper: {
    marginTop: "10rem",
    height: "calc(100vh - 19.0625rem)",
    textAlign: "center",
  },
  avatar: {
    margin: "1rem auto",
    backgroundColor: theme.palette.secondary.main,
  },
}));

function UserDetail() {
  const { id } = useParams();
  const [userDetail, setUserDetail] = useState();
  const mainStyles = stylesFunc();

  useEffect(() => {
    fetchData(`/user/${id}`)
      .then((res) => setUserDetail(res))
      .catch()
      .finally();
  }, []);

  return (
    <Container className={mainStyles.wrapper}>
      <img src={userDetail?.picture} />
      <Typography variant="h4">{userDetail?.firstName}</Typography>
      <Typography variant="h4">{userDetail?.lastName}</Typography>
      <Typography variant="h4">{userDetail?.registerDate}</Typography>
      <Typography variant="h4">{userDetail?.phone}</Typography>
    </Container>
  );
}

export default UserDetail;
