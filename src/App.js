import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store";

import Landing from "./ui-components/Landing";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            {/* <Route exact path="/about" element={<About />} /> */}
            {/* <Route exact path="/movie_details" element={<MovieDetails />} /> */}
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
