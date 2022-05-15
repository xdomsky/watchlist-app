import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Watchlist } from "./pages/Watchlist";
import { Watched } from "./pages/Watched";
import { Add } from "./components/Add";
import { Footer } from "./components/Footer";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import ScrollToTop from "react-scroll-to-top";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <ScrollToTop smooth color="#121619" width="20" />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Watchlist />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/watched">
            <Watched />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </GlobalProvider>
  );
}

export default App;
