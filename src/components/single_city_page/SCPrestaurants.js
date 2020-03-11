import React from 'react';

const SCPrestaurants = (props) => {
console.log('propsRest', props.restaurants)
    return (
        <>
        <div>
            <h3>Restaurants</h3>
            <div>
            {props.restaurants.businesses.slice(0,3).map(item => (
                <div>
                    <img src={item.image_url} />
                    <h5>{item.name}</h5>
                    <a href={item.url}>Website</a>
                </div>
            ))}
            </div>
        </div>


        </>
    )
}

export default SCPrestaurants;