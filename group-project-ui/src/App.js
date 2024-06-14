import './App.css';
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
