export function addTaskRequest (id, value, completed) {
    axios.post(`http://localhost:4000/api/ADD/task`, {
        id: id,
        value: value,
        completed
    })
        .then((response) => response.data)
        .catch(function(error) {
            console.log(error)
        })
}

export function changeTaskRequest (id, value) {
    axios.put(`http://localhost:4000/api/CHANGE/task`, {
        id: id,
        value: value
    })
        .then((response) => response.data)
        .catch(function(error) {
            console.log(error)
        })
}

export function completeTaskRequest (id) {
    axios.put(`http://localhost:4000/api/COMPLETE/task`, {
        id: id
    })
        .then((response) => response.data)
        .catch(function(error) {
            console.log(error)
        })
}

export function deleteTaskRequest (id) {
    axios.delete(`http://localhost:4000/api/DELETE/task?id=${id}`, {
    })
        .then((response) => response.data)
        .catch(function(error) {
            console.log(error)
        })
}
