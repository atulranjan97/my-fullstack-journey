import logo from './logo.svg';
import './App.css';

// here we learn how to create react app using a tool called CRA(create-react- app) 
// this tool is outdated, now we build react application using `vite`.
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my first react app.
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
  );
}

export default App;
