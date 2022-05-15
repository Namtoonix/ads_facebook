import axiosClient from './axiosClient';

const stepApi = {
    getAll(params) {
        const url = '/step';
        return axiosClient.get(url, { params });
    },

    get(id) {
        const url = `/step/${id}`;
        return axiosClient.get(url);
    },
};

export default stepApi;
