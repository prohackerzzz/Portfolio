import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Mainc from './components/Mainc';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


function App() {
  return (
    
  
    <div className="App">
    
      <Navbar/>
      <Mainc/>
      <About/>
      <Footer/>
    
    </div>
  
  );
}

export default App;
