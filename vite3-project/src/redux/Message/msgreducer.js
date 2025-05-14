import { gm,gn } from "./msgaction";
let initialState={
  msg:"hello"
};
function msgreducer(state=initialState,action) {
  switch (action.type) {
    case gm:
      return {msg:"Good Morning"}
    case gn:
      return {msg:"Good Night"}
      
    default: return state;
      
  }
 
}

export {msgreducer};