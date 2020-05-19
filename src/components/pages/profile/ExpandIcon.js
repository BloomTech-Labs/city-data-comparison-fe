import React from 'react'

const ExpandIcon = (props) => {

    return (
        <div className= {`${props.name} ${props.expand}`} onClick={props.toggle}>
                        <div className="bar1" key="b1" />
                        <div className="bar2" key="b2" />
                    </div>
    )

}


export default ExpandIcon;