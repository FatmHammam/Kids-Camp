import { legacy_createStore as createStore } from 'redux';
import { Labs, Courses } from '../Redux/Data';

const goToCourse = "GO_TO_Course";
const addToEnrolled = "ADD_TO_ENROLLED"
const removeIndividualClass = "REMOVE_INDIVIDUAL_CLASS";

const initialState = {
    Labs: Labs,
    Courses: Courses,
    SingleLabOrCourse: {},
    EnrolledClasses: [],
    filteredClasses: []
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case goToCourse:
            return { ...state, SingleLabOrCourse: payload }

        case addToEnrolled:
            return { ...state, EnrolledClasses: [...state.EnrolledClasses, payload] }

        case removeIndividualClass:
            return { ...state, EnrolledClasses: payload }

        default:
            return state;
    }
}


const store = createStore(reducer);

export default store;
