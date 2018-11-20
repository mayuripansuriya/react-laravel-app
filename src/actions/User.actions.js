import { LOGIN_USER, REGISTER_USER, GETBYID, USER_EDIT } from './actionTypes';
import { LOGIN_URL, REGISTER_URL, GETBYID_URL, EDIT_USER_URL } from '../utils/constants';
import axios from 'axios'

export const login = ({email, password}) => ({
    type: LOGIN_USER,
    payload: new Promise(async (resolve, reject) => {
        try {
            const userdata = {
                email,
                password,
            };
            const response = await axios.post(
                LOGIN_URL,
                userdata,
            );
            const {
                user, message, success
            } = response.data;

            if (user && user.token) {
                await localStorage.setItem('user', JSON.stringify(user));

                return resolve({
                    data: response.data,
                });
            } else { 
                return reject({
                    data: message
                })
            }
        } catch (error) {
             return reject(error.response.data.message);
        }
    }),
});

export const register = (first_name, last_name, email, password, password_confirmation, address, city, image) => ({

    type: REGISTER_USER,
    payload: new Promise(async (resolve, reject) => {
        try {
            let formData = new FormData();
            formData.append('image', image);
            formData.append('first_name', first_name);
            formData.append('last_name', last_name);
            formData.append('address', address);
            formData.append('city', city);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('password_confirmation', password_confirmation);
           
            const response = await axios.post(
                REGISTER_URL,
                formData,
            );
            const {
                user, message, success
            } = response.data;

            if (user && user.token) {
                await localStorage.setItem('user', JSON.stringify(user));

                return resolve({
                    data: response.data,
                });
            } else { 
                return reject({
                    data: message
                })
            }
        } catch (error) {
            return reject(error.response.data.message);
        }
    }),
});

export const getById = (id) => ({

    type: GETBYID,
    payload: new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(
                `${GETBYID_URL}${id}`,
            );
            const {
                user, message, success
            } = response.data;

            if (user && user.token) {
                return resolve({
                    data: response.data,
                });
            } else { 
                return reject({
                    data: message
                })
            }
        } catch (error) {
            return reject(error.response.data.message);
        }
    }),
});

export const update = (id, first_name, last_name, email, password, password_confirmation, address, city, image) => ({

    type: USER_EDIT,
    payload: new Promise(async (resolve, reject) => {
        try {
            let formData = new FormData();
            formData.append('image', image);
            formData.append('first_name', first_name);
            formData.append('last_name', last_name);
            formData.append('address', address);
            formData.append('city', city);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('password_confirmation', password_confirmation);

            const response = await axios.post(
                GETBYID_URL + id,
            );
            const {
                user, message, success
            } = response.data;

            if (user && user.token) {
                return resolve({
                    data: response.data,
                });
            } else { 
                return reject({
                    data: message
                })
            }
        } catch (error) {
            return reject(error.response.data.message);
        }
    }),
});
