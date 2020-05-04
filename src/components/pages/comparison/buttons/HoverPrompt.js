import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const Prompt = styled.div`
    background-color: white;
    width: auto;
    padding: .3rem .65rem;
    border-radius: 5px
    border-bottom-right-radius: 0
    border-bottom-left-radius: 0
    position: absolute;
    bottom: 4.2rem;
    font-size: 1rem;
`
const HoverPrompt = (props) => {
    const [popUpOpen, setPopupOpen] = useState(false)
    useEffect(() => {
        if (props.hover) {
            setTimeout(() => {
                setPopupOpen(true)
            }, 600)
        }
        else {
            setTimeout(() => {
                setPopupOpen(false)
            }, 300)
        }
    }, [props.hover])
    return (
        <Prompt style={{visibility: popUpOpen ? 'visible' : 'hidden'}}>
            {props.children}
        </Prompt>
    )
}
export default HoverPrompt;