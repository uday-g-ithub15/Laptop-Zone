import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import Error from './components/Error/Error';

function App() {
  return (
   <>
  <Header/>
  <Routes>
    <Route path='/' element = {<Home/>}></Route>
    <Route path='/home' element = {<Home/>}></Route>
    <Route path='/reviews' element = {<Reviews/>}></Route>
    <Route path='/dashboard' element = {<Dashboard/>}></Route>
    <Route path='/blogs' element = {<Blogs/>}></Route>
    <Route path='/about' element = {<About/>}></Route>
    <Route path='*' element = {<Error/>}></Route>
  </Routes>
   </>
  );
}

export default App;
