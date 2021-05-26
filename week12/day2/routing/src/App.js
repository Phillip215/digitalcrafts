import './App.css';
import AboutMe from './components/AboutMe';
import Blog from './components/Blog';
import Home from './components/Home';
import CoolGuy from './components/CoolGuy'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/cool">Cool</Link>
          </nav>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/cool">
            <CoolGuy />
          </Route>
          <Route path="*">
            <h1>Nope not a Page</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
