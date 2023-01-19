import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import { BrowserRouter } from "react-router-dom";

function App() {
  return(
   <div>
    <BrowserRouter>
    <Switch>
    <Route path="/"><Home/></Route>
      <Route path="/movies"><Movies/></Route>
      <Route path="/directors" ><Directors/></Route>
      <Route path="/actors"><Actors/></Route>
      <Route path="/NavBar"><NavBar/></Route>
      <NavBar/>
      </Switch>
      </BrowserRouter>

  </div>
  )
}

export default App;
