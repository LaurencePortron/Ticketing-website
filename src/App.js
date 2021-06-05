import Home from './components/Home';
import Product from './components/Product';
import About from './components/About';
import Features from './components/Features';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Product' component={Product} />
        <Route exact path='/Features' component={Features} />
        <Route exact path='/About' component={About} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
