import './App.css';
import Class from './Class'
import Intro from './components/Introduction'
import Am from './components/AmIgood'
import DoI from './components/DoIUnderstand'
import Con from './components/ConfidenceIsKey'

function App() {
  return (
    <div className="App">
      <Intro  />
      <Am />
      <DoI />
      <Con />
      <Class />
    </div>
  );
}

export default App;
