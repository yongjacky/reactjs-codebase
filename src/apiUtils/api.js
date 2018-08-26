//@flow
import {
    callFetch,
} from './apiBase';

export const getVendorsApi=()=>{
    let url:string='https://phoenix.swarmcolony.com/api/vdpVendors'
    return callFetch('GET',url)
}