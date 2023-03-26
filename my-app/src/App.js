import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import IntroductionPage from './IntroductionPage';
import DataPage from './DataPage';
import ContactPage from './ContactPage';
import Header from './components/Header';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/">Introduction</Link>
            </li>
            <li>
              <Link to="/data">Data</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={IntroductionPage} />
          <Route path="/data" component={DataPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
