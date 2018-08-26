//@flow
import type { ActionType } from './actionTypes'
import { getSuccessAction,getErrorAction } from './actionTypes'
import {
    getVendorsApi
} from '../../apiUtils/api';

type Dispatch = (action: ActionType ) => any;

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