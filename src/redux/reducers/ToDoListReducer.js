/* eslint-disable no-fallthrough */
/* eslint-disable import/no-anonymous-default-export */
import { arrayTheme } from "../../JSS_Styled_Component/Themes/ThemeManagers"
import { ToDoListDarkTheme } from "../../JSS_Styled_Component/Themes/ToDoListDarkTheme"
import { addTask, changeTheme, doneTask, deleteTask, editTask, updateTask } from "../types/ToDoListTypes"

const initialState = {
    themeToDoList: ToDoListDarkTheme,
    taskList: [
        { id: "task-1", taskName: 'task 1', done: true },
        { id: "task-2", taskName: 'task 2', done: false },
        { id: "task-3", taskName: 'task 3', done: false },
        { id: "task-4", taskName: 'task 4', done: true },

    ],
    taskEdit: { id: "-1", taskName: '', done: false }

}

export default (state = initialState, action) => {
    // console.log(action.themeId)
    switch (action.type) {

        case addTask: {
            // Kiem tra rong
            if (action.newTask.taskName.trim() === '') {
                alert('Task name is required')
                return { ...state }
            }
            // Kiem tra ton tai
            let taskListUpdate = [...state.taskList]
            let index = taskListUpdate.findIndex( task => task.taskName === action.newTask.taskName)
            // Xu ly xong gan task moi vao task list
            if (index !== -1) {
                alert('task is exist')
                return { ...state }
            }
            state.taskList = [...taskListUpdate, action.newTask]
            return { ...state }


        }   

        case changeTheme: {
            let theme = arrayTheme.find(theme => theme.id === action.themeId)
            // console.log(theme)
            if(theme){
                
                state.themeToDoList = {...theme.theme}
                return {...state}
            }
        }

        case doneTask: {
            let taskListUpdate = [...state.taskList]

            let index = taskListUpdate.findIndex(task => task.id === action.taskId)
            if(index !== -1){
                taskListUpdate[index].done = true
            }
           
            return {...state,taskList:taskListUpdate}
        }

        case deleteTask: {
            let taskListUpdate = [...state.taskList]
            taskListUpdate = taskListUpdate.filter(task => task.id !== action.taskId)
            return {...state, taskList:taskListUpdate}
        }

        case editTask :{
            return {...state, taskEdit:action.task}
        }

        case updateTask :{
            state.taskEdit = {...state.taskEdit,taskName: action.taskName}

            let taskListUpdate = [...state.taskList]

            let index = taskListUpdate.findIndex(task => task.id === state.taskEdit.id)
            if(index !== -1){
                taskListUpdate[index] = state.taskEdit
            }
                    
            state.taskList = taskListUpdate
            state.taskList = {id:'-1', taskName:'', done:false}

            return {...state}
        }

        default:
            return { ...state }
    }
}