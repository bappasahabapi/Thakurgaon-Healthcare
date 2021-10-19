import { BrowserRouter ,Switch,Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Appointments from './pages/Appointments/Appointments';
import Booking from './pages/Booking/Booking/Booking';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">
        <AuthProvider>
        <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path ="/"> 
            <Home></Home>
          </Route>
          <Route path ="/home"> 
            <Home></Home>
          </Route>
          <PrivateRoute path ="/appointments"> 
            <Appointments></Appointments>
          </PrivateRoute>
          <Route path ="/login"> 
            <Login></Login>
          </Route>
          <PrivateRoute path ="/booking/:serviceId"> 
            <Booking></Booking>
          </PrivateRoute>
          <Route path ="*"> 
            <NotFound></NotFound>
          </Route>
          
        </Switch>
        <Footer></Footer>
        </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
