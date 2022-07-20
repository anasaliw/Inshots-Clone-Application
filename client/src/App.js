import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import {Box,styled} from '@mui/material';
import Article from './components/Article';


function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Article/>

    </div>
  );
}

export default App;
