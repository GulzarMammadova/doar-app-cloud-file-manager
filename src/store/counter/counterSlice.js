import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    counterList: [
        {
            name: "Itenarary"
        }
    ]
  },
  reducers: {
    addMemorySize: (usedMemory) => {
        usedMemory.counterList.push()
    }
    // increment: (state) => {
    //   state.value += 1
    // },
  },
})

export const { addMemorySize} = counterSlice.actions;

export default counterSlice.reducer 