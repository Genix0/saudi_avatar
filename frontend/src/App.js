import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import FinalBanner from './Components/FinalBanner/FinalBanner';
import Footer from './Components/Footer/Footer';
import FinalFooter from './Components/Footer/FinalFooter';
import Chat from './Pages/ChatFolder/Chat';
import Payment from './Pages/Payment/Payment';
import Rest from './Pages/RestPasswordP/Rest';
import Login from './Sections/Users/Login/Login';
import Signup from './Sections/Users/Signup/Signup';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/payment" element={<Payment/>}/> 
        <Route path="/Rest_password" element={<Rest/>}/> 
        <Route path="/login" element={<Login/>}/> 
        <Route path="/login-page" element={<LoginPage/>}/> 
        <Route path="/signup-page" element={<SignUpPage/>}/> 
        <Route path="/sign-up" element={<Signup/>}/> 
      </Routes>
    </Router>
  );
}

export default App;
