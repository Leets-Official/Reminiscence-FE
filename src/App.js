import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersonalGallery from './components/PersonalGallery/PersonalGallery.js';
import Home from './components/Home';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/api/images/1" element={<PersonalGallery />}></Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
