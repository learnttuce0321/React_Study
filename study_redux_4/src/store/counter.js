import {createSlice} from '@reduxjs/toolkit'

const initialCountState = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCountState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.payload.amount
        },
        ToggleEvent(state) {
            state.showCounter = !state.showCounter
        }
    }
})

export const {increment, decrement, increase, ToggleEvent} = counterSlice.actions
export default counterSlice