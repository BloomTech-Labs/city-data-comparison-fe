import React, {useEffect} from 'react'; 


const Member = props => {
    return(
        <div className='member'>
        <h3>The Masterminds Behind Citrics</h3>

            <div className='member-display'>
                <img src={props.image} alt={props.name}/>

                <div className="member-info">
                    <p className="member-name">{props.name}</p>
                    <p className="member-role">{props.role}</p>
                    <div className="member-social">
                        {/*social media*/}
                    </div>

                    <p className="member-about">
                        {props.about}
                    </p>

                    <div className="member-portfolio">
                        View {props.name}'s Portfolio
                    </div>
                </div>


            </div>
            
        </div>
    )
}