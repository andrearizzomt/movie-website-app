import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { AppStyled } from "./AppStyles";
import { GlobalStyle } from "./Global.css";
import Landing from "./pages/Landing/Landing";
import About from "./pages/About/About";
import MovieDetails from "./pages/MovieDetails/MovieDetails";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppStyled>
        <Provider store={store}>
          <Router>
            <Routes>
              <Route exact path="/" element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/movie_details" element={<MovieDetails />} />
            </Routes>
          </Router>
        </Provider>
      </AppStyled>
    </>
  );
}

export default App;
