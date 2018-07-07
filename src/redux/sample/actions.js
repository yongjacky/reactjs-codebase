import * as actionTypes from './actionTypes';
import {
    getVendorsApi
} from '../../apiUtils/api';

export const getVendors=()=>{
    return dispatch => getVendorsApi().then((res)=>res.json()).then((data) =>{
        if (data.error){
            dispatch({type: actionTypes.GET_VENDORS_SUCCESS_ERROR,error: data.error});
        }else {
            dispatch({type: actionTypes.GET_VENDORS_SUCCESS, vendors: data });
        }
    }).catch((err)=>{
        console.log(err);
        dispatch({type: actionTypes.GET_VENDORS_SUCCESS_ERROR, error: err});
    })
}