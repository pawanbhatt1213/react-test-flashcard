import "bootstrap/dist/css/bootstrap.min.css";

import { Route, BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import { createStore } from "redux";
import { Provider } from "react-redux";

import StackList from "./StackList";
import Stack from "./Stack";
import rootReducer from "./reducers/index";
import StackForm from "./StackForm";

const store = createStore(rootReducer);

store.subscribe(()=> console.log("store", store.getState()))

function App() {
  return (
    <Container>
      <h1 className="text-center">Flash-Card</h1>
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={StackList}/>
          <Route path="/stack" component={Stack}/>
          <Route path="/newStack" component={StackForm}/>
        </Router>
      </Provider>
    </Container>
  );
}

export default App;
