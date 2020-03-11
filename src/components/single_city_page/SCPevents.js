import React from "react";

const SCPevents = (props) => {
    return (
        <>
          <div>
            <h3>Events</h3>
            <div>
            {props.events.events.slice(0,3).map(item => (
                <div>
                    <img src={item.image_url} />
                    <h5>{item.name}</h5>
                    <a href={item.event_site_url}>Event Website</a>
                </div>
            ))}
            </div>
        </div>
        </>
    )
};

export default SCPevents;