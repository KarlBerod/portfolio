import '../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header"
import HomePage from './HomePage';
import data from '../data.json';
import ProjectPage from './ProjectPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            {data.map((item, index) => (
              <Route key={index} path={`/project/${item.id}`} element={<ProjectPage index={index} />}/>
            ))}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
