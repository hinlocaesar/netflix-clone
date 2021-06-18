import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>HI, Cesar</h1>

      <Row title="TRENDING NOW" fetchUrl={requests.fetchJackReaper}/>
      <Row title="DISCOVER ORIGINAL" fetchUrl={requests.fetchDiscoverNetflixOriginal}/>
  

    </div>
  );
}

export default App;
