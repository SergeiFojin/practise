export function addTaskRequest (id, value, completed) {
    axios.post(`http://localhost:4000/api/add-task`, {
        id: `${id}`,
        value: `${value}`,
        completed: completed
    })

        .catch(function(error) {
            console.log(error)
        })
}

export function changeTaskRequest (id, value) {
    axios.post(`http://localhost:4000/api/change-task`, {
        id: `${id}`,
        value: `${value}`
    })

        .catch(function(error) {
            console.log(error)
        })
}

export function completeTaskRequest (id) {
    axios.post(`http://localhost:4000/api/complete-task`, {
        id: `${id}`
    })

        .catch(function(error) {
            console.log(error)
        })
}

export function removeTaskRequest (id) {
    axios.post(`http://localhost:4000/api/remove-task`, {
        id: `${id}`
    })

        .catch(function(error) {
            console.log(error)
        })
}


