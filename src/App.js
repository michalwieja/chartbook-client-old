import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Container>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/register" exact component={Register}></Route>
        </Container>
      </Switch>
      <div className="App"></div>
    </BrowserRouter>
  );
}

export default App;
