import React from 'react';
import Header from "../components/ui/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {ThemeProvider} from "@material-ui/styles";
import theme from "./ui/Theme"
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={()=><div>Home</div>}></Route>
          <Route exact path="/huts" component={()=><div>Huts</div>}></Route>
          <Route exact path="/campsites" component={()=><div>Managed Campsites</div>}></Route>
          <Route exact path="/tracksections" component={()=><div>Track Sections</div>}></Route>
          <Route exact path="/lodges" component={()=><div>Lodges, Cabins & Cottages</div>}></Route>
          <Route exact path="/greatwalks" component={()=><div>Great Walks</div>}></Route>
         </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
