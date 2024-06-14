import './App.css';
import Header from './modules/component/Navbar.js';
import Home from './modules/pages/home-page/home-page.component.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RootLayout from './modules/pages/layouts/root.layout';

function App() {
  return (
    <Router>
      <RootLayout />
    </Router>
  );
}

export default App;
