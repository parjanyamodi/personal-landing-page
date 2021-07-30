import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Container />
          </Route>
          <Route path="home">
            <Container />
          </Route>
          <Route path="index">
            <Container />
          </Route>
          <Route path="contact">
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
