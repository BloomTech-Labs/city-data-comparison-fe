import React from 'react';

const SCPrestaurants = (props) => {

    return (
        <>
            {/* <h3>Restaurants</h3> */}
            {/* {props.restaurants.businesses.map(item => (
                <div className="SCPresources">
                    <div>

                    </div>
                    <div className="resourcesContainer">
                        <div className="resCat">

                            <img className="resImg" src={item.image_url} />
                            <h5>{item.name}</h5>
                        </div>
                        <div className="resCat">
                <img className="resImg" />
                <h5>Shopping</h5>
            </div>
            <div className="resCat">
                <img className="resImg" />
                <h5>Lodging</h5>
            </div>
                    </div>
                </div>
            ))} */}
            <h3>Restaurants</h3>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {props.restaurants.businesses.map(item => (
                <div style={{ width: '200px', height: '200px' }}>
                    <img className="resImg" style={{ width: '25%', height: '25%' }} src={item.image_url} />
                    <h5>{item.name}</h5>
                    <a href={item.url}>Website</a>
                </div>

            ))}
            </div>


        </>
    )
}

export default SCPrestaurants;