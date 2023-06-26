import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "../../store/reducer/root.reducer.ts";
import thunk from 'redux-thunk';


export default () => createStore(rootReducer,{},applyMiddleware(thunk))