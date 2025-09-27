import AboutUs from './AboutUs';
import './App.css';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {

   return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AboutUs/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
