import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './pages/Gallery';
import { GlobalStyle } from './styles/Global-styles';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/gallery" element={<Gallery />}></Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
