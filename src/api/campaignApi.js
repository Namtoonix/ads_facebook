import axiosClient from './axiosClient';

const campaignApi = {
    getAll(params) {
        const url = '/campaign';
        return axiosClient.get(url, { params });
    },

    get(id) {
        const url = `/campaign/${id}`;
        return axiosClient.get(url);
    },

    add(data) {
        const url = `/campaign`;
        return axiosClient.post(url, data);
    }
};

export default campaignApi;