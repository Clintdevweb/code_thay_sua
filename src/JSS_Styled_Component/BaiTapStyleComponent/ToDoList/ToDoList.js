import React, { Component } from 'react'
import { Container } from '../../BaiTapStyleComponent/componentsToDoList/Container'
import { ThemeProvider } from 'styled-components'
import { ToDoListDarkTheme } from '../../Themes/ToDoListDarkTheme'
import { ToDoListLightTheme } from '../../Themes/ToDoListLightTheme'
import { ToDoListPrimaryTheme } from '../../Themes/ToDoListPrimaryTheme'
import { Dropdown } from '../componentsToDoList/Dropdown'
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from '../../Components/Heading'
import { Label, TextField } from '../componentsToDoList/TextField'
import { Button } from '../componentsToDoList/Button'
import { Table, Tr, Td, Th, Thead, Tbody } from '../componentsToDoList/Table'
import { connect } from 'react-redux'
import { addTaskAction, changeThemeToDo, deleteTaskAction, doneTaskAction, editTaskAction, updateTaskAction } from '../../../redux/actions/ToDoListAction'
import { arrayTheme } from '../../Themes/ThemeManagers'
import _ from 'lodash'

class ToDoList extends Component {

    state = {
        taskName: "",
        disabled: true
    }

    // hanChange = (e) => {
    //     let {name, value} = e.target
    //     this.setState({
    //         [name]:value
    //     })
    // }

    renderTaskToDo = () => {
        return this.props.taskList.filter(task => !task.done).map((task, index) => {
            return (
                <Tr key={index}>
                    <Th style={{ verticalAlign: "middle" }}>{task.taskName}</Th>
                    <Th style={{ verticalAlign: "middle" }} className='text-right'>
                        <Button onClick={() => {
                            this.setState({
                                disabled: false
                            }, () => {
                                this.props.dispatch(editTaskAction(task))
                            })
                        }} className='ml-1'><i className='fa fa-edit'></i></Button>

                        <Button onClick={() => {
                            this.props.dispatch(doneTaskAction(task.id))
                        }} className='ml-1'><i className='fa fa-check'></i></Button>

                        <Button onClick={() => {
                            this.props.dispatch(deleteTaskAction(task.id))
                        }} className='ml-1'><i className='fa fa-trash'></i></Button>
                    </Th>

                </Tr>
            )
        })
    }

    renderTaskComplete = () => {
        return this.props.taskList.filter(task => task.done).map((task, index) => {
            return (
                <Tr key={index}>
                    <Th style={{ verticalAlign: "middle" }}>{task.taskName}</Th>
                    <Th style={{ verticalAlign: "middle" }} className='text-right'>
                        <Button onClick={() => {
                            this.props.dispatch(deleteTaskAction(task.id))
                        }} className='ml-1'><i className='fa fa-trash'></i></Button>
                    </Th>
                </Tr>
            )
        })
    }

    renderTheme = () => {
        return arrayTheme.map((theme, index) => {
            return <option key={index} value={theme.id}>{theme.name}</option>
        })
    }

    // componentWillReceiveProps(newProps){
    //     this.setState({
    //         taskName:newProps.taskEdit.taskName
    //     })
    // }

    // Life cycle tinh khong truy xuat duoc con tro this
    // static getDerivedStateFromProps(newProps, currentState){
    //     let newState = {...currentState, taskName: newProps.taskEdit.taskName}

    //     return {...newState}

    //     // return null
    // }

    // shouldComponentUpdate(newProps, newState){
    //     if(!_.isEqual(newProps, this.props)){
    //         return true
    //     }
    //     return false
    // }

    render() {

        return (
            <ThemeProvider theme={this.props.theme}>
                <div>
                    <Container className='w-50'>
                        <Dropdown onChange={(e) => {
                            let { value } = e.target
                            this.props.dispatch(changeThemeToDo(value))
                        }}>
                            {this.renderTheme()}
                        </Dropdown>
                        <Heading3>To Do List</Heading3>
                        <TextField value={this.state.taskName} onChange={(e) => {

                            this.setState({
                                taskName: e.target.value
                            })
                            // console.log(this.state)

                        }} name="taskName" label='Task name' className='w-50'></TextField>
                        <Button onClick={() => {
                            let { taskName } = this.state
                            console.log(taskName)
                            let newTask = {
                                id: Date.now(),
                                taskName: taskName,
                                done: false

                            }

                            this.props.dispatch(addTaskAction(newTask))
                        }} className='ml-2'><i className="fa fa-plus"></i> Add Task</Button>

                        {/* button update */}

                        {this.state.disabled ? <Button disabled onClick={() => {
                            this.props.dispatch(updateTaskAction(this.state.taskName))
                        }} className='ml-2'><i className="fa fa-upload ml-1"></i> Update Task</Button> : <Button  onClick={() => {
                            let {taskName} = this.state
                            this.setState({
                                taskName:''
                            }, () =>{

                            this.props.dispatch(updateTaskAction(taskName))
                            })
                        }} className='ml-2'><i className="fa fa-upload ml-1"></i> Update Task</Button>}



                        <hr />
                        <Heading3>Task To Do</Heading3>
                        <Table>
                            <Thead>
                                {this.renderTaskToDo()}
                            </Thead>
                        </Table>
                        <Heading3>Task Completed</Heading3>
                        <Table>
                            <Thead>
                                {this.renderTaskComplete()}

                            </Thead>
                        </Table>
                    </Container>
                </div>
            </ThemeProvider>
        )
    }


    componentDidUpdate(prevProps, prevState) {
        // So sanh neu nhu props truoc do (taskEdit truoc ma khac taskEdit hien tai thi minh moi setState)
        if (prevProps.taskEdit.id !== this.props.taskEdit.id) {
            this.setState({
                taskName: this.props.taskEdit.taskName
                
            })
        }

    }
}

const mapStateToProps = (rootReducer) => {
    return {
        theme: rootReducer.ToDoListReducer.themeToDoList,
        taskList: rootReducer.ToDoListReducer.taskList,
        taskEdit: rootReducer.ToDoListReducer.taskEdit

    }
}

export default connect(mapStateToProps)(ToDoList)