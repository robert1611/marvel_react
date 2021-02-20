import React from 'react';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Home, CreateMarvel, Marvels } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav} from 'react-bootstrap';
import logo from './assets/img/logo.png';
import './styles.css';


// Import from React-Router-Dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
from 'react-router-dom';

render(
  <React.StrictMode>
    <Router>
    <Navbar bg='dark' variant='dark'>
        <Navbar.Brand>
          <img
            alt="Marvel Members"
            src={logo}
            width="60"
            height="30"
            className="d-inline-block align-top"
          />{' '}
					<Link to="/">Marvel Members Area</Link>
        </Navbar.Brand>
			{/* Nav Items to the right  */}
      <Nav className="move-nav" activeKey="/">
        
				<Nav.Item>
				{/* Item is a child component of Nav */}
          <Nav.Link>
            <Link to='/'> Home </Link>
          </Nav.Link>
        </Nav.Item>

				<Nav.Item>
          <Nav.Link>
            <Link to='/marvels'> Display a Marvel Character </Link>
          </Nav.Link>
        </Nav.Item>
      
			</Nav>

      </Navbar>
			
      <Switch>
        <Route exact path="/">
          <Home title="Marvel Characters" age={31} />
        </Route>
        <Route path="/create">
          <CreateMarvel />
        </Route>
        <Route path="/marvels">
          <Marvels />
        </Route>
      </Switch>
    </Router>
  {/* <Home /> is self closing */}
  </React.StrictMode>,
  document.getElementById('root')
); 

reportWebVitals();
