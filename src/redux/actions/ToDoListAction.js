import { addTask, changeTheme, doneTask, deleteTask, editTask, updateTask} from "../types/ToDoListTypes";




export const addTaskAction = (newTask) =>({
    type: addTask,
    newTask
})

export const changeThemeToDo = (themeId) => ({
    type: changeTheme,
    themeId
})

export const doneTaskAction = (taskId) => ({
    type: doneTask,
    taskId
})

export const deleteTaskAction = (taskId) => ({
    type: deleteTask,
    taskId
})

export const editTaskAction = (task) => ({
    type: editTask,
    task
})

export const updateTaskAction = (taskName) => ({
    type: updateTask,
    taskName
})

