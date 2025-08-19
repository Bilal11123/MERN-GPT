import './App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import { useAuth } from './context/AuthContext';


function App() {
  const auth = useAuth();
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {auth?.isLoggedIn && auth.user? ( <Route path="/chat" element={<Chat />} />) : null}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <h1>Welcome to the Chatbot</h1>
      <p>Interact with the chatbot by typing your messages below:</p>
      <div className="chat-container">
        <div className="messages"></div>
        <input type="text" placeholder="Type your message..." />
      </div> */}
    </main>
  );
};

export default App;
