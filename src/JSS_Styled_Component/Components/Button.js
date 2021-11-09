import styled from 'styled-components'

export const ButtonStyle = styled.button`
    background: ${props => props.primary ? 'blue' : 'red'};
    color:#fff;
    border:none;
    border-radius:0.5rem;
    font-weight:bold;
    padding:1rem;
    opacity:1;
        &:hover{
            opacity:0.7;
            transition:all 0.5s;
            background: linear-gradient(yellow, green)

        }
        &.btn_style{
            font-size:25px;
            
        }
`

export const SmallButton = styled(ButtonStyle)`
    color: pink;
    font-size:10px
`