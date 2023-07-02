import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Main from './pages/Main';
import SignUp from './pages/SignUp';
import Nickname from './pages/Nickname';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/SignUp' element={<SignUp />}></Route>
          <Route path='/Nickname' element={<Nickname />}></Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
