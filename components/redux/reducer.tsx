import { isAnyOf } from "@reduxjs/toolkit";
import { ADD_QUESTIONS, ASTEROID_DATA, PIE_CHART_ADD, PIE_CHART_REDUCE } from "./constant"
import { PIE_CHART } from "./constant";

export const productData = (data = 0, action: any) => {
    switch (action.type) {
        case ASTEROID_DATA:
            return data = action.data;

        default:
            return data;
    }
}


export const piechartmark = (a: any = [0, 0, 0, 0, 0], action: any) => {
    switch (action.type) {
        case PIE_CHART_ADD:
            var data: any = [];
            a.map((a: any, b: any) => {
                if (b === action.qno) {
                    data.push(action.marks);
                }
                else {
                    data.push(a);
                }
            })
            console.log(data);
            return a = data;

        case PIE_CHART_REDUCE:
            var data: any = [];
            a.map((a: any, b: any) => {
                if (b === action.qno) {
                    data.push(action.marks);
                }
                else {
                    data.push(a);
                }
            })
            console.log(data);
            return a = data;
        default:
            return a;
    }
}



export const answerquestions = (a: any = [], action: any) => {
    switch (action.type) {
        case ADD_QUESTIONS:
            var t = [...a, action.qno];
            return a = t;

        default:
            return a;
    }
}
