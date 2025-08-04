
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  data: [], 
};

const CertificateSlice = createSlice({
  name: 'certificates',
  initialState,
  reducers: {
   
    setCertificateData: (state, action) => {
      if (Array.isArray(action.payload)) {
        state.data = action.payload;
      } else {
        state.data = []; 
      }
    },
   //Add
    addCertificate: (state, action) => {
      if (Array.isArray(state.data)) {
        state.data.push(action.payload);
      } else {
        console.error("addCertificate");
        state.data = [action.payload]; 
      }
    },
 //Update
    updateCertificateData: (state, action) => {
      if (!Array.isArray(state.data)) {
        console.error("updateCertificateData");
        return;
      }
      const index = state.data.findIndex(cert => cert._id === action.payload._id);
      if (index !== -1) {
        state.data[index] = action.payload;
      } else {
        console.warn(" updateCertificateData: certificate not found", action.payload._id);
      }
    },

    //Delete
    deleteCertificate: (state, action) => {
      if (Array.isArray(state.data)) {
        state.data = state.data.filter(item => item._id !== action.payload);
      } else {
        console.error("deleteCertificate");
      }
    }
  },
});


export const {
  setCertificateData,
  addCertificate,
  updateCertificateData,
  deleteCertificate,
} = CertificateSlice.actions;

export default CertificateSlice.reducer;



