import { createStore } from "redux";
import { msgreducer } from "./Message/msgreducer";

let store=createStore(msgreducer)
export {store}