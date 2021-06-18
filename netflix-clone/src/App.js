import "./App.css";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Row
        title="NETFLX ORIGINALS"
        fetchUrl={requests.fetchDiscoverNetflixOriginal}
      />

      <Row
        title="DISCOVER ORIGINAL"
        fetchUrl={requests.fetchDiscoverNetflixOriginal}
      />
    </div>
  );
}

export default App;
