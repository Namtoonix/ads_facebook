import { CREATE_CAMPAIGN, ADD_CAMPAIGN } from './constant'

export const createCampaign = payload => {
    return {
        type: CREATE_CAMPAIGN,
        payload
    }
}
export const addCampaign = payload => {
    return {
        type: ADD_CAMPAIGN,
        payload
    }
}