import {request} from "./request";

export function getHomeData(){
    return request({
        url: 'data'
    })
}

export function getHomeGoods(type, page){
    return request({
        url: 'data',
        params: {
            type,
            page
        }
    })
}