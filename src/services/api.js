import {REACT_APP_API_BASE_URL} from "../common/constants"

export const getCvById = async (id) => {
    let res = await fetch(`${REACT_APP_API_BASE_URL}/api/services/app/Cvs/GetCvById?Id=${id}&HasAcc=true&TId=3`, {
        headers: {
            'content-type': 'application/json',
            'Abp.TenantId': 1,
        }
    });
    let jsonResult = await res?.json();
    if (res.ok) {
        return jsonResult?.result;
    } else {
        throw jsonResult?.message;
    }
}
export const getImageByCvId = async (id) => {
    let res = await fetch(`${REACT_APP_API_BASE_URL}/api/services/app/Cvs/GetImageByCvId?Id=${id}&HasAcc=true&TId=3`, {
        headers: {
            'content-type': 'application/json',
            'Abp.TenantId': 1,
        }
    });
    let jsonResult = await res?.json();
    if (res.ok) {
        return jsonResult?.result;
    } else {
        throw jsonResult?.message;
    }
}