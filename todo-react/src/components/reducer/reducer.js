const reducer = (state, action) => {
    switch(action.type) {
        case "addTodo":
            return [...state, {id: `${Date.now()}`, value: `${action.payload}`, isCompleted: false, isVisible: true}]

        case "completeTodo":
            return state.map(item => {
                if (item.id === action.payload) {
                    item.isCompleted = !item.isCompleted
                }
                return item
            })

        case "deleteTodo":
            return state.filter(item => item.id !== action.payload)

        case "completeAllTodo":
            const newTodos = [...state]
            newTodos.filter(item => !item.isCompleted).length
                ? newTodos.forEach(item => item.isCompleted = true)
                : newTodos.forEach(item => item.isCompleted = false)
            return [...newTodos]

        case "allTodos":
            return state.map(item => {
                item.isVisible = true
                return item
            })

        case "uncompleteTodos":
            return state.map(item => {
                item.isVisible = !item.isCompleted
                return item
            })

        case "completeTodos":
            return state.map(item => {
                item.isVisible = item.isCompleted
                return item
            })

        case "clearCompleted":
            return state.filter(item => !item.isCompleted)

        default:
            return state;
    }
}

export default reducer;
