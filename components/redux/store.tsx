import { configureStore } from "@reduxjs/toolkit";
import rootreducer from "./rootreducer";



// const store = createStore(rootReducer);

const store = configureStore({
   reducer: rootreducer,

})




export default store;