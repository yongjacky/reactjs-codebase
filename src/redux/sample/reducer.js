//@flow
import * as actionTypes from './actionTypes';
import reduce from '../reduce';

type State = {
    vendors: Array<any>,
    error: string
}

const initialState:State = {
    vendors: [],
    error: '',
}

const refreshVendors = (state:State,action:State)=>{
    return {
        ...state,
        vendors: action.vendors,
    }
}

const refreshVendorsError = (state:State,action:State)=> {
    return {
        ...state,
        error: action.error
    }
}

export default reduce(initialState,{
    [actionTypes.GET_VENDORS_SUCCESS]: refreshVendors,
    [actionTypes.GET_VENDORS_ERROR]: refreshVendorsError
});