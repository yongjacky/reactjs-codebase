//@flow
import * as actionTypes from './actionTypes';
import reduce from '../reduce';

type stateType = {
    vendors: Array<any>,
    error: string
}

const initialState:stateType = {
    vendors: [],
    error: '',
}

const refreshVendors = (state,action)=>{
    return {
        ...state,
        vendors: action.vendors,
    }
}

const refreshVendorsError = (state,action)=> {
    return {
        ...state,
        error: action.error
    }
}

export default reduce(initialState,{
    [actionTypes.GET_VENDORS_SUCCESS]: refreshVendors,
    [actionTypes.GET_VENDORS_ERROR]: refreshVendorsError
});