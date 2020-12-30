import { BrowserRouter as Router, Route } from 'react-router-dom';
import English from './components/English';
import Sinhala from './components/Sinhala';
import Tamil from './components/Tamil';

function App() {
  return (
    <div className='App'>
      <Router>
        <Route exact path='/' component={English} />
        <Route path='/English' component={English} />
        <Route path='/Sinhala' component={Sinhala} />
        <Route exact path='/Tamil' component={Tamil} />
      </Router>
    </div>
  );
}

export default App;
