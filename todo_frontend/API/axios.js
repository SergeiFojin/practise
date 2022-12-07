export async function getTasksRequest() {
    try {
        const response = await axios.get('http://localhost:4000/');
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

export async function addTaskRequest (id, value, completed) {
    try {
        const response = await axios.post(`http://localhost:4000/api/task`, {
            id,
            value,
            completed
        })
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

export async function changeTaskRequest (id, value, checkComplete, completed) {
    try {
        const response = await axios.put(`http://localhost:4000/api/task`, {
            id,
            value,
            checkComplete,
            completed
        })
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

export async function deleteTaskRequest (id) {
    try {
        const response = await axios.delete(`http://localhost:4000/api/task?id=${id}`, {
        });
        return response.data;
    } catch (e) {
        console.log(e);
    }
}
