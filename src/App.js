import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import CsvToJsonPage from "./views/CsvToJson/CsvToJsonPage";

const APP_CONFIG = {
  headerName: "CSV TO JSON Editor",
};

const App = () => {

  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/">
            <CsvToJsonPage title={``} />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
