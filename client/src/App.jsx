import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} /> {/* Home is now the default page */}
    <Route path="/register" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
