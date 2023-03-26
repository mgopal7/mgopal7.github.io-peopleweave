import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import IntroductionPage from "./IntroductionPage";
import DataPage from "./DataPage";
import ContactPage from "./ContactPage";
import Header from "./components/Header";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={IntroductionPage} />
          <Route exact path="/data" component={DataPage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
