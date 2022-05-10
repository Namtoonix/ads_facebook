import axiosClient from './axiosClient';

const navLeftApi = {
    getAll(params) {
        const url = '/menu';
        return axiosClient.get(url, { params });
    },

    get(id) {
        const url = `/menu/${id}`;
        return axiosClient.get(url);
    },
};

export default navLeftApi;
