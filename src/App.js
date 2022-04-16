// import logo from './logo.svg';
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import './App.css';
import Welcome from './components/Welcome';
import Pokemons from './components/Pokemons'
import PokemonInfo from './components/PokemonInfo'
import ProtectedRoutes from './components/ProtectedRoutes'


function App() {
  return (
      <HashRouter>
      <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path="/pokemons" element={<Pokemons/>} />
        
          <Route path="/pokemon/:id" element={<PokemonInfo/>} />          
        </Route>
      </Routes>
      </div>

    </HashRouter>
    
  );
}

export default App;
