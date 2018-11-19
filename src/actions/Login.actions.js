import { GET_ALL_SLOTS } from './actionTypes';
// import { TimeSlotData } from '../../src/service/Data'

const API_URL = 'http://localhost:8000/';
// function login(email, password) {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password })
//     };
//     return fetch(`${API_URL}/api/login`, requestOptions)
//         .then(handleResponse)
//         .then(user => {
//             // login successful if there's a jwt token in the response
//             if (user.token) {
//                 // store user details and jwt token in local storage to keep user logged in between page refreshes
//                 localStorage.setItem('user', JSON.stringify(user));
//             }

//             return user;
//         });
// }


export const login = (email, password) => ({
    type: LOGIN_USER,
    payload: new Promise(async (resolve, reject) => {
        try {
            const userdata = {
                email,
                password,
            };
            const response = await axios.post(
                loginUser,
                userdata,
            );
            const {
                status, userid, msg,
            } = response.data;
            if (user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                return resolve({
                    data: response.data,
                });
            }
            return reject(new Error(msg));
        } catch (error) {
            return reject(new Error({ data: 'error occured' }));
        }
    }),
});







// export const  _getAllRecords = () => {
//   return (dispatch, getState) => { 
//       dispatch(getAllRecords()).catch(error => {})
//   }
// }