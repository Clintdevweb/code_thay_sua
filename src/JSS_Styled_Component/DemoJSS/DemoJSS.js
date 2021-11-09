import React, { Component } from 'react'
// import { ButtonStyle, SmallButton } from '../../Components/Button'
import { StyleLink } from '../Components/Link'
import { TextField } from '../Components/TextField'

export default class DemoJSS extends Component {
    render() {
        return (
            <div className='container text-center'>
                {/* <ButtonStyle primary className='btn_style' >Hello</ButtonStyle>
                <ButtonStyle className='btn_style' >Hello Hanh</ButtonStyle>
                <SmallButton>Hello pro dev</SmallButton> */}
                <StyleLink>Hello men</StyleLink>
                <TextField InputColor="green"/>
            </div>
        )
    }
}
