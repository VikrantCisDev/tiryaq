import './App.css';
import Home from './pages/home/Home';
import TermsPage from './pages/terms/TermsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
      <div className="App">
        <AppRoutes/>
      </div>
  );
}

export default App;
