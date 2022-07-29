import reactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";

import store from "./store/store";
import App from "./App";

// default url to access URL
axios.defaults.baseURL = "https://thecocktaildb.com/api/json/v1/1";

reactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
