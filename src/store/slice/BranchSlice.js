import { createSlice } from '@reduxjs/toolkit';

const BranchSlice = createSlice({
  name: 'branch',
  initialState: {
    selectedBranch: "IOB Mens Hostel",
  },
  reducers: {
    setSelectedBranch: (state, action) => {
      state.selectedBranch = action.payload;
    },
  },
});

export const { setSelectedBranch } = BranchSlice.actions;
export default BranchSlice.reducer;
