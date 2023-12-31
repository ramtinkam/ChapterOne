
import './App.css';
import { Route, Routes, Link } from "react-router-dom"
import Landing from './Components/Landing';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Searchbox from './Components/Searchbox';
import { ForgotPassword } from './Components/ForgotPassword';
import PassRecovery from './Components/PassRecovery';
import Author from './Components/Author';
import BookCard from './Components/BookCard';
import GenrePage from './Components/GenrePage';
import Profile from './Components/Profile';
import Book from './Components/Book';

function App() {
  return (
    <div className="App">




      { <Routes>
      <Route path ="/" element={<Landing/>}></Route>
      <Route path ="login" element={<Login/>}></Route>
      <Route path ="signup" element={<SignUp/>}></Route>
      <Route path ="forgot-password" element={<ForgotPassword/>}></Route>
      <Route path ="pass-recovery" element={<PassRecovery/>}></Route>
      <Route path ="author-page/:id/:bookId" element={<Author/>}></Route>
      <Route path ="genre-page" element={<GenrePage/>}></Route>
      <Route path ="profile" element={<Profile/>}></Route>
      <Route path ="book-page/:id" element={<Book/>}></Route>
      </Routes> }


    </div>
  );
}

export default App;
