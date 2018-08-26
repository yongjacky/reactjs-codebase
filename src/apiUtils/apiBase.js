// @flow
/* eslint-disable no-console */
const DEFAULT_HEADER:string ='phoenix-auth-token';
export const API_GET:string ='GET';
export const API_POST:string ='POST';
export const API_PUT:string ='PUT';
export const API_DELETE:string ='DELETE';

type API_METHOD = 'GET' | 'POST' | 'PUT' | 'DELETE'

export const callFetch = (method: API_METHOD,url: string,payload?: string,authToken?: string,authHeader?:string) => {
    let header=DEFAULT_HEADER;
    
    if (authHeader) {
        header=authHeader;
    }
    
    let headers={};
    if (authToken){
        headers[header]=authToken;
    }
    headers['Content-Type']='application/json';
    
    if (method===API_GET){
        return fetch(url, {
            method: method,
            headers,
            credentials: "same-origin"
        });
    }else {
        return fetch(url, {
            method: method,
            body: JSON.stringify(payload),
            headers,
            credentials: "same-origin"
        });
    }
}