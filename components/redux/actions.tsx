import { ADD_QUESTIONS, ASTEROID_DATA, PIE_CHART_ADD, PIE_CHART_REDUCE } from "./constant";
import { PIE_CHART } from "./constant";

export const asteroiddata = (data: number) => {

    return {
        type: ASTEROID_DATA,
        data: data,
    }
}


export const piechartadd = (qno: number, marks: number) => {

    return {
        type: PIE_CHART_ADD,
        qno: qno,
        marks: marks,
    }
}


export const piechartreduce = (qno: number, marks: number) => {

    return {
        type: PIE_CHART_REDUCE,
        qno: qno,
        marks: marks,
    }
}

export const addquestions = (qno: number) => {

    return {
        type: ADD_QUESTIONS,
        qno: qno,

    }
}