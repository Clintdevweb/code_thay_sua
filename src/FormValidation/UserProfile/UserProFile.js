import React, { Component } from 'react'
import './UserProFile.css'
import Swal from 'sweetalert2'

export default class UserProFile extends Component {

    state = {
        values: {
            FirstName: '',
            LastName: '',
            UserName: '',
            Email: '',
            Password: '',
            ConfirmPassword: ''
        },
        error: {
            FirstName: '',
            LastName: '',
            UserName: '',
            Email: '',
            Password: '',
            ConfirmPassword: ''
        }
    }

    handleChange = (event) => {
        let { name, value, type } = event.target
        // console.log(name)
        let newValue = {...this.state.values, [name]:value}
        // console.log(newValue)
        let newError = {...this.state.error}
        
        if(value.trim() === ''){
            newError[name] = name + " is required"
            // console.log(newError)
        }else{
            newError[name] = ""
        }

        if(type === 'email'){
            const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if(!regexEmail.test(value)){
                newError[name] = name + " is invalid"
            }else{
                newError[name] = ""
            }
        }

        if(name === "ConfirmPassword"){
            if(value === newValue["Password"]){
                newError[name] = ""
            }else{
                newError[name] = name + ' is invalid'
            }
        }
        // console.log(newValue)
        
        this.setState({
            values: newValue,
            error:newError
        })
        // console.log(this.state.error)
    }

    handelSubmit = (event) => {
        event.preventDefault()
        let {values, error} = this.state
        let valid = true
        let proFileContent = ''
        let errorContent = ''
        for (let key in values){
            if(values[key] === ''){
                valid= false
              
            }
            proFileContent += `
                <p className='text-left'><b>${key}:</b> ${values[key]}</p>
            `
        }

        for (let key in error){
            if(error[key] !== ''){
                valid = false
                errorContent += `
                <p class='text-left text-danger'><b>${key}:</b> ${error[key]}</p>
            `
            }
            
            
        }

        if(valid){
            Swal.fire({
                title: 'Your Info!',
                html: proFileContent,
                icon: 'success',
                confirmButtonText: 'Ok'
              })
        }else{
            Swal.fire({
                title: 'Your Info!',
                html: errorContent,
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        }
    }
    
    render() {
        // console.log(this.state.error.LastName)
        return (
            <div style={{ backgroundColor: '#EEEEEE', position: 'relative', height: '100%', width: '100%' }}>
                <form onSubmit={this.handelSubmit} action="">
                    <h1 className='text-center'>User Profile</h1>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-6">
                                <div className='group'>
                                    <input type="text" value={this.state.values.FirstName} name='FirstName'  onChange={this.handleChange} />
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>FirstName</label>
                                    <span className='text text-danger'>{this.state.error.FirstName}</span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className='group'>
                                    <input type="text" value={this.state.values.LastName} name='LastName'  onChange={this.handleChange} />
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>LastName</label>
                                    <span className='text-danger'>{this.state.error.LastName}</span>

                                </div>
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='group'>
                                    <input type="text" value={this.state.values.UserName} name='UserName' style={{ width: '100%' }} required onChange={this.handleChange} />
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>UserName</label>
                                    <span className='text-danger'>{this.state.error.UserName}</span>
                                    
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='group'>
                                    <input type="email" value={this.state.values.Email} name='Email' style={{ width: '100%' }} required onChange={this.handleChange} />
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>Email</label>
                                    <span className='text-danger'>{this.state.error.Email}</span>

                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-6">
                                <div className='group'>
                                    <input type="password" value={this.state.values.Password} name='Password' required onChange={this.handleChange} />
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>Password</label>
                                    <span className='text-danger'>{this.state.error.Password}</span>

                                </div>
                            </div>
                            <div className="col-6">
                                <div className='group'>
                                    <input type="password" value={this.state.values.ConfirmPassword} name='ConfirmPassword' required onChange={this.handleChange} />
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>ConfirmPassword</label>
                                    <span className='text-danger'>{this.state.error.ConfirmPassword}</span>

                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <button className='btn btn-success w-100 col-12'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
