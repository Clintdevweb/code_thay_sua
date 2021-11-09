// import React from 'react'
import styled, {ThemeProvider} from 'styled-components'
import React, { Component } from 'react'

const configDarkTheme = {
    bg: '#000',
    color: '#FFF',
    fontSize:'15px',
    fontWeight:'bold'
}

const configLightTheme = {
    bg:"#6633FF",
    color:'#FFF',
    fontSize:'20px',
    fontWeight:'300'
}

export default class ThemeDemo extends Component {

    state ={
        currentTheme: configDarkTheme
    }

    handleChangeTheme = (e) => {
        this.setState({
            currentTheme: e.target.value === '1' ? configDarkTheme : configLightTheme
        })
    }

    render() {
        
    
        const DivStyle = styled.div`
            color:${props => props.theme.color};
            padding:5%;
            background-color:${props => props.theme.bg};
            font-size:${props =>props.theme.fontSize};
            font-weight: ${props => props.theme.fontWeight}
        `
        return (                 
           
                <ThemeProvider theme={this.state.currentTheme}>
                    <DivStyle>
                        Hello
                    </DivStyle>
                    <select onChange={this.handleChangeTheme}>
                        <option value="1">Dark Theme</option>
                        <option value="2">Light Theme</option>      
                    </select>
                </ThemeProvider>
            
        )
    }
}
