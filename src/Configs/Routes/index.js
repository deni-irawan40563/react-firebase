import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//Setup Redux
import { Provider } from "react-redux";
import store from "../Redux/Store";

//Import Component
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login";
import NotFound from "../../Components/NotFound/NotFound";
import Register from "../../Components/Register/Register";


function Routes() {
  return (
    <Provider store={store}>
      <Router>
            <Switch>
                <Route path="/" component={Login} exact/>
                <Route path="/register" component={Register} />
                <Route path="/home" component={Home} />
                <Route component={NotFound} exact/>
            </Switch>
      </Router>
    </Provider>
  );
}

export default Routes;
