import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../pages/Main";
import UserDetail from "../pages/UserDetail";

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/register" component={Signup} />
        <Route exact path="/login" component={Signin} />
        <Route exact path="/user/:id" component={UserDetail} />
        <Route path="/" component={Main} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default AppRouter;