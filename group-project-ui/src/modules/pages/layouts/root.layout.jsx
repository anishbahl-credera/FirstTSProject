import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import rootRoutes from '../pages.config';
import pepperGIF from '../../../images/pepper.gif';
import { TiShoppingCart } from "react-icons/ti";
import './navbar.css';

export const RootLayout = () => (
  <Router>
    <div className="navbar">
      <ul>
        <Link to={'/'}>
          <img src={ pepperGIF } alt="pepperGIF" />
        </Link>
        <li className="links">
          <Link to={'/shop'}> Shop </Link>
          <div className="dropdown"> 
            <button className="dropdownButton"> Sauces </button>
            <div className="dropdownContent">
              <Link to={'/FranksRedHot'}> Frank's Red Hot </Link>
              <Link to={'/HuyFong'}> Huy Fong </Link>
              <Link to={'/Cholula'}> Cholula </Link>
              <Link to={'/TexasPete'}> Texas Pete </Link>
              <Link to={'/Tapatio'}> Tapatio </Link>
              <Link to={'/Tabasco'}> Tabasco </Link>
              <Link to={'/LHS'}> Louisiana Hot Sauce </Link>
              <Link to={'/Valentina'}> Valentina </Link>
              <Link to={'/Crystal'}> Crystal </Link>
            </div>
          </div>
          <div className="icon">
            <TiShoppingCart />
          </div>
        </li>
      </ul>
    </div>
    <Switch>
      {rootRoutes.map((route, index) => (
        <Route exact={route.exact} key={index} path={route.path} component={route.routeComponent} />
      ))}
    </Switch>
  </Router>
);

export default RootLayout;
