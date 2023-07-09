
import './App.css';
import { Route, Routes, Link } from "react-router-dom"
import Landing from './Components/Landing';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Searchbox from './Components/Searchbox';
import { ForgotPassword } from './Components/ForgotPassword';

function App() {
  return (
    <div className="App">


      <Routes>
      <Route path ="/" element={<Landing/>}></Route>
      <Route path ="login" element={<Login/>}></Route>
      <Route path ="signup" element={<SignUp/>}></Route>
      <Route path ="forgot-password" element={<ForgotPassword/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
