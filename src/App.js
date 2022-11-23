import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import MainBody from "./components/MainBody";
export default function App() {
  return (
    <div className="App">
      <Router>
        <MainBody />
      </Router>
    </div>
  );
}
