import logo from './logo.svg';
// import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './pages/Login';
import Register from "./pages/Register"
import Home from './pages/Home';
import ForgetPass from './pages/ForgetPass';
import Todo from './pages/Todo';

function App() {
  return (
    <div className='container'>

   <BrowserRouter>
      <Routes>
       <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} /> 
      <Route path="/forgotpassword" element={<ForgetPass />} /> 
      <Route path="/todo" element={<Todo />} /> 
    </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
