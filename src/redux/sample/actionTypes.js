//@flow
//Action Type Registered
export const GET_VENDORS_SUCCESS:string = 'GET_VENDORS_SUCCESS'
export const GET_VENDORS_ERROR:string = 'GET_VENDORS_ERROR'

type GET_VENDORS_SUCCESS_ACTION={type: string , vendors?: any}
type GET_VENDORS_ERROR_ACTION={type: string, error?: any}

export type ActionType = GET_VENDORS_SUCCESS_ACTION | GET_VENDORS_ERROR_ACTION

export const getSuccessAction=(vendors: ?any):GET_VENDORS_SUCCESS_ACTION=> {
    return { type: GET_VENDORS_SUCCESS,vendors: vendors }
}

export const getErrorAction=(error: ?any):GET_VENDORS_ERROR_ACTION=>{
    return { type: GET_VENDORS_ERROR, error: error}
}