import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Navbar from "../components/Navbar";

function AppRouter() {
  console.log(process.env);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/register" component={Signup} />
          <Route path="/login" component={Signin} />
        </Switch>
      </Router>
    </div>
  );
}

export default AppRouter;
