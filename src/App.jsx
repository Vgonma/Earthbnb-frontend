import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import SplashScreen from './components/SplashScreen';
import MyReservations from './components/MyReservations';
import MakeAReservation from './components/MakeAReservation';
import AddProperty from './components/AddProperty';
import DeleteProperty from './components/DeleteProperty';
import Mainpage from './pages/Mainpage';
import './App.css';

function App() {
  const location = useLocation();

  const loginStatus = async () => {
    if (sessionStorage.getItem('earthbnb_user')) {
      let temp_user = JSON.parse(sessionStorage.getItem('earthbnb_user'))
      const response = await fetch('http://localhost:3000/login/', {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({user: temp_user})
      });

      const data = await response.json();
      if (data.logged_in) {
        return {
          isLoggedIn: true,
          user: JSON.parse(sessionStorage.getItem('earthbnb_user'))
        };
      } else {
        sessionStorage.removeItem('earthbnb_user');
      }
    }
    return {
      isLoggedIn: false,
      user: {}
    };
  };

  const handleLogin = async (data) => {
    sessionStorage.setItem('earthbnb_user', JSON.stringify(data.user));
  };

  const handleLogout = () => {
    sessionStorage.removeItem('earthbnb_user');
  };

  return (
    <div className="App container-fluid p-0">
      <div className="d-flex p-0 vh-100">
        {location.pathname !== '/' && location.pathname !== '/Register' && location.pathname !== '/Login' && <Navbar />}
        <Routes>
          <Route exact path="/" element={<SplashScreen />} />
          <Route path="/home" element={<Mainpage />} />
          <Route exact path="/makeareservation" element={<MakeAReservation />} />
          <Route exact path="/myreservations" element={<MyReservations loginStatus={ loginStatus } />} />
          <Route exact path="/addproperty" element={<AddProperty />} />
          <Route exact path="/deleteproperty" element={<DeleteProperty />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
