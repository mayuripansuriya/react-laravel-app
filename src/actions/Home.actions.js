import { GET_ALL_SLOTS } from './actionTypes';
// import { TimeSlotData } from '../../src/service/Data'

const getAllRecords = () => {
  return {
    type: GET_ALL_SLOTS,
    payload : new Promise(async(resolve, reject) => {
      // try {
      //   let response = await TimeSlotData.all()
      //   if(response)
      //       resolve({
      //         data : response
      //       })
      //   else
      //       reject({
      //         data : "error occurred"
      //       })
      // }
      // catch(error) { 
      //     return reject({ data : error })
      // }
    })
  }
}

export const  _getAllRecords = () => {
  return (dispatch, getState) => { 
      dispatch(getAllRecords()).catch(error => {})
  }
}