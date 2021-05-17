import Middle from './components/Middle'
import Top from './components/Top'
import Bottom from './components/Bottom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faMicrophone, faEllipsisV, faPencilAlt} from '@fortawesome/free-solid-svg-icons'
import './App.css'

library.add(fab, faSearch, faMicrophone, faEllipsisV, faPencilAlt)


function App() {
  return (
    <div className="App">
      <Top />
      <Middle />
      <Bottom />
    </div>
  );
}

export default App;
