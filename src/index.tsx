import React from 'react';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Home, CreateMarvel, Marvels, UpdateMarvel, Login } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav} from 'react-bootstrap';
import logo from './assets/img/logo.png';
import './styles.css';
import { FirebaseAppProvider, AuthCheck} from 'reactfire';
import 'firebase/auth';
import { firebaseConfig } from './firebase.Config';

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
    <FirebaseAppProvider firebaseConfig = {firebaseConfig}>
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

        {/* Auth Check for Authed User */}
        <AuthCheck fallback={
          <Nav.Item>
            <Nav.Link>
              <Link to="/login">Login Here</Link>
            </Nav.Link>
          </Nav.Item>

        }>

				<Nav.Item>
          <Nav.Link>
            <Link to='/marvels'> Display a Marvel Character </Link>
          </Nav.Link>
        </Nav.Item>
       
        <Nav.Item>
          <Nav.Link>
            <Link to='/login'> Logout </Link>
          </Nav.Link>
        </Nav.Item>

        </AuthCheck>
        {/* End of Auth Check */}

      
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
        <Route path="/update">
          <UpdateMarvel />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      
    </Router>
    </FirebaseAppProvider>
  {/* <Home /> is self closing */}
  </React.StrictMode>,
  document.getElementById('root')
); 

reportWebVitals();
