import axiosClient from './axiosClient';

const step2Api = {
    getAll(params) {
        const url = '/step2';
        return axiosClient.get(url, { params });
    },

    get(id) {
        const url = `/step2/${id}`;
        return axiosClient.get(url);
    },
};

export default step2Api;
