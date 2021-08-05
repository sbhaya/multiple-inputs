import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StudentDetails from "./components/StudentDetails";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/details" component={StudentDetails}></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}
export default App;
