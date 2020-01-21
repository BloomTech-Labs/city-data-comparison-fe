import React from 'react'; 


const Member = props => {
    return(
        <div className='member'>
        <h3>The Masterminds Behind Citrics</h3>

            <div className='member-display'>
                <img src={props.member.image} alt={props.member.name}/>

                <div className="member-info">
                    <p className="member-name">{props.member.name}</p>
                    <p className="member-role">{props.member.role}</p>
                    <div className="member-social">
                        {/*social media*/}
                    </div>

                    <p className="member-about">
                        {props.member.about}
                    </p>

                    <div className="member-portfolio">
                        View {props.member.name}'s Portfolio
                    </div>
                </div>


            </div>
            
        </div>
    )
}

export default Member