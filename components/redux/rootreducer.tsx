import { combineReducers } from "redux";
import { productData } from './reducer';
import { piechartmark } from "./reducer";
import { answerquestions } from "./reducer";

export default combineReducers({

    productData,
    piechartmark,
    answerquestions,
})