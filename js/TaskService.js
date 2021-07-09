export default class TaskService {
  addTask(task) {
    return axios({
      url: "https://60bc9af6b8ab37001759f4f5.mockapi.io/api/Tasks",
      method: "POST",
      data: task,
    });
  }

  getListTask() {
    return axios({
      url: "https://60bc9af6b8ab37001759f4f5.mockapi.io/api/Tasks",
      method: "GET",
    });
  }

  deleteTask(id) {
    return axios({
      url: `https://60bc9af6b8ab37001759f4f5.mockapi.io/api/Tasks/${id}`,
      method: "DELETE",
    });
  }

  getTaskById(id) {
    return axios({
      url: `https://60bc9af6b8ab37001759f4f5.mockapi.io/api/Tasks/${id}`,
      method: "GET",
    });
  }

  updateTask(task) {
    return axios({
      url: `https://60bc9af6b8ab37001759f4f5.mockapi.io/api/Tasks/${task.id}`,
      method: "PUT",
      data: task,
    });
  }
}
