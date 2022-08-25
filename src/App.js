
import "./styles.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from "./components/Navbar";


export default function App() {
  return (
    <div className="App">
     <Navbar/>
    </div> 
  );
}
