export let array = [];

export function startRender() {
    axios.get('http://localhost:4000/')
        .then((response) => array = response.data)
        .catch(function(error) {
            console.log(error)
        })
}

export function addTaskRequest (id, value, completed) {
    axios.post(`http://localhost:4000/api/task`, {
        id,
        value,
        completed
    })
        .then((response) => array = response.data)
        .catch(function(error) {
            console.log(error)
        })
}

export function changeTaskRequest (id, value, checkComplete, completed) {
    axios.put(`http://localhost:4000/api/task`, {
        id,
        value,
        checkComplete,
        completed
    })
        .then((response) => array = response.data)
        .catch(function(error) {
            console.log(error)
        })
}

export function deleteTaskRequest (id) {
    axios.delete(`http://localhost:4000/api/task?id=${id}`, {
    })
        .then((response) => array = response.data)
        .catch(function(error) {
            console.log(error)
        })
}
