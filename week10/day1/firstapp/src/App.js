import "./App.css"
import Nav from "./components/Nav";
import AboutContainer from "./components/AboutContain";
import Sidebar from "./components/Sidebar";

function App() {


  return(
    <div className="App">
    {/* <h1>App.js</h1> */}
    <Nav />
    <Sidebar />
    <AboutContainer />
    </div>
  );

}

export default App;
// react manages data with state

// STATE
