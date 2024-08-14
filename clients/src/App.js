import Login from './pages/Login';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Regsiter from './pages/Regsiter';
import Home from './pages/Home';
import Start from './components/Start';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <div className="bg-[#F8F4EA]">
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Regsiter />} />
          <Route exact path="/chats" element={<Home />} />
          <Route exact path="/" element={<Start />} />
          <Route exact path="/Privacy-policy" element={<PrivacyPolicy/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
