import { createStore } from "redux";
import { prodReducer } from "./product/prodReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

let store=createStore(prodReducer,composeWithDevTools)
export {store};