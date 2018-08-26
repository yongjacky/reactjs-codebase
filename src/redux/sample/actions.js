//@flow
import { getSuccessAction,getErrorAction } from './actionTypes'
import {
    getVendorsApi
} from '../../apiUtils/api';

type SUCCESS_ACTION = {type: string, vendors?: any}
type ERROR_ACTION = {type: string, error?: any}
type ACTION = SUCCESS_ACTION | ERROR_ACTION
type Dispatch = (action: ACTION ) => any;

export const getVendors=()=>{
    return (dispatch:Dispatch) => getVendorsApi().then((res)=>res.json()).then((data) =>{
        if (data.error){
            dispatch(getErrorAction(data.error));
        }else {
            dispatch(getSuccessAction(data));
        }
    }).catch((err)=>{
        console.log(err);
        dispatch(getErrorAction(err));
    })
}