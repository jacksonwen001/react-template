const ACCESS_TOKEN = 'ACCESS_TOKEN'
const REFRESH_TOKEN = 'REFRESH_TOKEN'

export function getAccessToken(){
    return localStorage.getItem(ACCESS_TOKEN); 
}

export function setAccessToken(val: string){
    localStorage.setItem(ACCESS_TOKEN, val); 
}

export function getRefreshToken(){
    return localStorage.getItem(REFRESH_TOKEN); 
}

export function setRefreshToken(val: string) {
    localStorage.setItem(REFRESH_TOKEN, val); 
}

export function removeAllToken(){
    localStorage.removeItem(ACCESS_TOKEN); 
    localStorage.removeItem(REFRESH_TOKEN); 
}
