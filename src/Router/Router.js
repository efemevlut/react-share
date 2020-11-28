import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../pages/Main";

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/register" component={Signup} />
        <Route path="/login" component={Signin} />
        <Route path="/" component={Main} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default AppRouter;