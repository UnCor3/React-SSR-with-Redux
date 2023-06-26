import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "../store/reducer/root.reducer.ts";
import { BrowserRouter } from "react-router-dom";
import { hydrateRoot } from "react-dom/client";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import App from "./App.tsx";

const root = document.getElementById("root") as unknown as Document;

//@ts-ignore
const store = createStore(rootReducer,window.__INITIAL_STATE || {},applyMiddleware(thunk))

hydrateRoot(
  root,
  <BrowserRouter>
    <Provider store={store}>
      <App />    
    </Provider>
  </BrowserRouter>
);                          
