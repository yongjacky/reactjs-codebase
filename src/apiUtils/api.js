import {
    callFetch,
    API_GET,
} from './apiBase';

export const getVendorsApi=()=>{
    let url='https://phoenix.swarmcolony.com/api/vdpVendors'
    return callFetch(API_GET,url)
}

exports.getVendorsApi=getVendorsApi;