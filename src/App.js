import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Comments } from './features/comments/comments';
import { CommentsForm } from './features/comments/commentsForm';
import { Navbarmain } from './features/navbarmain/navbarmain';
import './App.css';

function App() {
  return (
  <Router>
    <div className="App">
        <Navbarmain />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <Routes>
      <Route path="/comments" element={<Comments/>}></Route>
      <Route path="/create" element={<CommentsForm/>}></Route>
    </Routes>
  </Router>
  );
}

export default App;
