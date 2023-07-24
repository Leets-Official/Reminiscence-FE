import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './pages/Gallery';
import GlobalStyle from './styles/Global-styles';
import Main from './pages/main';
import SignUp from './pages/signup';
import Nickname from './pages/nickname';
import Login from './pages/login';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/" element={<Main />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/nickname" element={<Nickname />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
