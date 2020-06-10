import {request} from "./request";

export function getDetailData(iid){
    return request({
        url: 'malldata',
        params: {
            iid
        }
    })
}

