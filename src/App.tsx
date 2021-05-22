import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Views
import Home from './views/Home';
import Register from './views/Register';
import ServiceDisclaimer from './views/Disclaimer';
import Membership from './views/Membership';
import Recipes from './views/Recipes';
import Blog from './views/Blog';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={() => <Home />}/>
        <Route path="/register" component={() => <Register />}/>
        <Route path="/services" component={() => <ServiceDisclaimer />}/>
        <Route path="/membership" component={() => <Membership />}/>
        <Route path="/recipes" component={() => <Recipes />}/>
        <Route path="/blog" component={() => <Blog />}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
