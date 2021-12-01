import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Author from "./pages/Author";
import "./App.css";

function App() {
  const [authors, setAuthors] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/authors")
      .then((response) => response.json())
      .then((data) => setAuthors(data));
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home authors={authors} />
          </Route>
          <Route path="/:authorId">
            <Author authors={authors} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
