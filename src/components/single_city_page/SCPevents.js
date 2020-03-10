import React from "react";

const SCPevents = (props) => {
    return (
        <>
          <div style={{ width: '870px' }}>
            <h3 style={{ fontStyle: 'normal', fontWeight:   500, fontSize: '42px', lineHeight: '50px', margin: 0 }}>Events</h3>
            <div style={{display: 'flex', flexWrap: 'wrap', padding: '20px 0' }}>
            {props.events.events.slice(0,3).map(item => (
                <div style={{ height: '270px', width: '290px' }}>
                    <img  style={{ height: '170px', width: '290px', paddingRight: '20px' }} src={item.image_url} />
                    <h5 style={{ fontStyle: 'normal', fontWeight: 'bold',
                fontSize: '24px', lineHeight: '28px', margin: '10px 0 0 0' }}>{item.name}</h5>
                    <a style={{ textDecoration: 'none' }} href={item.event_site_url}>Event Website</a>
                </div>
            ))}
            </div>
        </div>
        </>
    )
};

export default SCPevents;