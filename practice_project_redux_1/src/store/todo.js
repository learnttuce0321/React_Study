import { createSlice } from '@reduxjs/toolkit'

const todoInitialState = {
    todo: [],
    inProgress: [],
    completed: []
}
const todoSlice = createSlice({
    name: 'todo',
    initialState: todoInitialState,
    reducers: {
        addTodo(state, action) {
            state.todo.push({
                id: Date.now(),
                title: action.payload.title,
                progress: 'todo',
            })
        },
        changeToTodo(state, action) {
            const { id } = action.payload

            const matchedIndex = state.inProgress.findIndex(item => item.id === id)
            const matchedItem = state.inProgress.splice(matchedIndex, 1)[0]
            matchedItem.progress = 'todo'
            state.todo.push(matchedItem)
        },
        changeToInProgress(state, action) {
            const { status, id } = action.payload
            
            if(status === 'todo') {
                const matchedIndex = state.todo.findIndex(item => item.id === id)
                const matchedItem = state.todo.splice(matchedIndex, 1)[0]
                matchedItem.progress = 'inProgress'
                state.inProgress.push(matchedItem)
            } else if(status === 'completed') {
                const matchedIndex = state.completed.findIndex(item => item.id === id)
                const matchedItem = state.completed.splice(matchedIndex, 1)[0]
                matchedItem.progress = 'inProgress'
                state.inProgress.push(matchedItem)
            }
        },
        changeToCompleted(state, action) {
            const { id } = action.payload

            const matchedIndex = state.inProgress.findIndex(item => item.id === id)
            const matchedItem = state.inProgress.splice(matchedIndex, 1)[0]
            matchedItem.progress = 'completed'
            state.completed.push(matchedItem)
        },
    }
})

export const { addTodo, changeToTodo, changeToInProgress, changeToCompleted } = todoSlice.actions
export default todoSlice