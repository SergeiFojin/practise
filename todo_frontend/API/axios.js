export function addTaskRequest (id, value, completed) {
    axios.post(`http://localhost:4000/api/task`, {
        id,
        value,
        completed
    })
        .then((response) => response.data)
        .catch(function(error) {
            console.log(error)
        })
}

export function changeTaskRequest (id, value, complete) {
    axios.put(`http://localhost:4000/api/task`, {
        id,
        value,
        complete
    })
        .then((response) => response.data)
        .catch(function(error) {
            console.log(error)
        })
}

export function deleteTaskRequest (id) {
    axios.delete(`http://localhost:4000/api/task?id=${id}`, {
    })
        .then((response) => response.data)
        .catch(function(error) {
            console.log(error)
        })
}
