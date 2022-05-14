import axiosClient from './axiosClient';

const navLeftApi = {
    getAll(params) {
        const url = '/step';
        return axiosClient.get(url, { params });
    },

    get(id) {
        const url = `/step/${id}`;
        return axiosClient.get(url);
    },
};

export default navLeftApi;
