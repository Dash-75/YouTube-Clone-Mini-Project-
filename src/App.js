import Home from './pages/home';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import License from './pages/license';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/license" element={<License />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
