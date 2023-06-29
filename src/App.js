import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Main from './pages/Main';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/SignUp' element={<SignUp />}></Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
