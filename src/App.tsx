import {
  BrowserRouter as Router,
  Route, Routes, NavLink, Navigate,
} from 'react-router-dom';
import './App.scss';
import HomePage from './Pages/HomePage/HomePage';
import CharactersPage from './Pages/CharactersPage/CharactersPage';
import CharacterPage from './Pages/CharacterPage/CharacterPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import Page404 from './Pages/Page404/Page404';

// Routes is the new Switch

const App = () => (
  <Router>
    <header>
      <nav className="navigation">
        <NavLink
          className={({ isActive }) => (isActive ? 'link link--active' : 'link')}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'link link--active' : 'link')}
          to="/characters"
        >
          Characters
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'link link--active' : 'link')}
          to="/about"
        >
          About
        </NavLink>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/characters" element={<CharactersPage />} />
      <Route path="/characters/:id" element={<CharacterPage />} />
      <Route path="/about" element={<AboutPage />} />
      {/* <Route path="*" element={<Page404 />} /> */}
      <Route path="404" element={<Page404 />} />
      <Route path="*" element={<Navigate to="/404" />} />
      {/* Ja stacko routus, tad komponentee kontentu ievieto kaa <Outlet /> */}
    </Routes>
  </Router>
);

export default App;
