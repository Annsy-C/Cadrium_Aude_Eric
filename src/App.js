import logo from './logo.svg';

function App() {
  return (
    <div className="section">
      <div className="container">
        <div className="columns">

          <header className="column is-half is-offset-one-quarter">
            <img src={logo} className="" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className=""
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </div>
    </div>
  );
}

export default App;

