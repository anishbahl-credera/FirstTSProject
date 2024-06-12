import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import rootRoutes from '../pages.config';

// Utilize a layout to decouple page layout (navigation menu/header/footer/side menu) from main app component
// https://reactrouter.com/web/guides/quick-start
export const RootLayout = () => (
    <Router>
      <Switch>
        {rootRoutes.map((route, index) => (
          <Route exact={route.exact} key={index} path={route.path} component={route.routeComponent} />
        ))}
      </Switch>
  </Router>
);

export default RootLayout;
