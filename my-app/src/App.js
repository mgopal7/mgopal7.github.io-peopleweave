import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
          <Route exact path="/" render={() => <IntroductionPage />} />
          <Route exact path="/data" render={() => <DataPage />} />
          <Route exact path="/contact" render={() => <ContactPage />} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
