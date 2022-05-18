import { CREATE_ACCOUNT } from './constant'

export const createAccount = payload => {
    return {
        type: CREATE_ACCOUNT,
        payload
    }
}