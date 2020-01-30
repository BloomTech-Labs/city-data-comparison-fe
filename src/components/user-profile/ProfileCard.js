import React, {useState, useEffect, useContext} from 'react'
import {NavLink}  from "react-router-dom";
import axios from 'axios'
import ProfileImage from './icons/profileimage.png'
import './profile.scss'

import {UserContext} from "../../contexts/UserContext"





const ProfileCard = (props)=> {

    //state for logged in user
    const { user, setUser } = useContext(UserContext)
    const [userInfo, setUserInfo] = useState(user)
    const [userImage, setUserImage] = useState({usersimage:null, users_id: userInfo.id})
    
    const userPost = {
        first_name: userInfo.first_name,
        last_name: userInfo.last_name,
        email: userInfo.email,
        city: userInfo.city,
        state: userInfo.state
    }

    console.log(userPost)


    console.log(userInfo, 'user state')

    const handleChange = e => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }
    

    const handleFile = e => {
        let file = e.target.files[0]
        setUserImage({
            ...userImage,
            userimage: file
        })
    }
    // Edit state toggle

    const [nameEdit, setNameEdit] = useState({status:'closed'})
    const [emailEdit, setEmailEdit] = useState({status:'closed'})
    const [locationEdit, setLocationEdit] = useState({status:'open'})
    const [imageUpload, setImageUpload] = useState({status:'closed'})

    const toggleName = () => {
        if (nameEdit.status === 'open') {
            setNameEdit({...nameEdit, status:'closed'}) 
        } else if (nameEdit.status === 'closed') {
            setNameEdit({...nameEdit, status:'open'})
        } 
    }

    const toggleEmail = () => {
        if (emailEdit.status === 'closed') {
            setEmailEdit({...emailEdit, status:'open'}) 
        } else if (emailEdit.status === 'open') {
            setEmailEdit({...emailEdit, status:'closed'})
        } 
    }

    const toggleLocation = () => {
        if (locationEdit.status === 'closed') {
            setLocationEdit({...locationEdit, status:'open'}) 
        } else if (locationEdit.status === 'open') {
            setLocationEdit({...locationEdit, status:'closed'})
        } 
    }

    const toggleImage = () => {
        if (imageUpload.status === 'closed') {
            setImageUpload({...imageUpload, status: 'open'}) 
        } else if (imageUpload.status === 'open') {
            setImageUpload({...imageUpload, status: 'closed'}) 
        } 
    }

    const id = userInfo.id;
    

    //User information axios call
    
    useEffect(() => {
        axios
            .get(`https://citrics-staging.herokuapp.com/api/users/profile/${id}/image`)
            .then(res => {
                const image = res.data[0].userimage
                setUserImage({...userImage, usersimage: image})
            })
            .catch(err => {
                console.log('Unable to get image', err)
            })
    },[]);
    
    // useEffect(() => {
    //     axios
    //         .get(`https://citrics-staging.herokuapp.com/api/users/profile/${id}`)
    //         .then(res => {
                
    //             const information = res.data[0]
    //             setUserInfo(information)
    //         })
    //         .catch(err => {
    //             console.error('Unable to get user information', err);
    //         });

    // },[]);

    

   

    const updateUser = () => {
        
        axios
            .put(`https://citrics-staging.herokuapp.com/api/users/${id}/profile`, userPost)
            .then(res => {
                
                setUser(userInfo)
                
            })
            .catch(err => {

                console.log('Unable to get user information', user);
            });
    }
    
    const postImage = () => {
        
        
        const formData = new FormData()
        formData.append('userimage', userImage.userimage)
        formData.append('users_id', userImage.users_id)

        if (user.userimage !== null) {
            axios
                .delete(`https://citrics-staging.herokuapp.com/api/users/profile/${id}/image`)
                .then(res => {
                    axios
                        .post('https://citrics-staging.herokuapp.com/api/users/', formData)
                        .then(res => {
                            axios
                                .get(`https://citrics-staging.herokuapp.com/api/users/profile/${id}/image`)
                                .then(res => {
                                    const image = res.data[0].userimage
                                     setUserImage({...userImage, usersimage: image})
                                     setUser({...user, userimage : image})
                                     
                                })
                        })
                })

        } else {

        axios
            .post('https://citrics-staging.herokuapp.com/api/users/', formData)
            .then(res => {
                console.log('image uploaded', res)
                console.log(formData)
                axios.get(`https://citrics-staging.herokuapp.com/api/users/profile/${id}/image`)
                .then(res => {
                    const image = res.data[0].userimage
                    setUserImage({...userImage, usersimage: image})
                    console.log(image) 
            })
        })
            .catch(err => {
                console.log('Unable to upload', err)
            })
        }
    }

    const onSubmit = e => {
        e.preventDefault();
    }
    
    

    return (
        <div className='profile-container'>
            <div className='profile-contents'>
                <div className='avatar-tab'>
                    <img src={userImage.usersimage === null ? `${ProfileImage}` : `https://citrics-staging.herokuapp.com/${userImage.usersimage}`} />
                    <form className={`edit-image ${imageUpload.status}`} action='/uploads' enctype="multipart/form-data" onSubmit={onSubmit}>
                        <input 
                        className='image-input'
                        type='file'
                        name='usersimage'
                        onChange={(e) => handleFile(e)}
                        />
                    </form>
                    <button className={`edit-image-btn ${imageUpload.status}`} onClick={toggleImage}>Upload Image</button>
                    <button className={`save-image-btn ${imageUpload.status}`} onClick={() => {toggleImage(); postImage()}} >Save</button>
                </div>
                <div className= ' info'>
                <div className='name-tab'>
                    <p>Name</p>
                    <h2 className={`user-name`}>{userInfo.first_name} {userInfo.last_name}</h2>
                    {/* Added function where onSubmit is to make the update user so that it does not execute everytime when the page loads */}
                    <form className={`edit-name ${nameEdit.status}`} onSubmit={updateUser}>
                    <input
                        onChange={handleChange}
                        className='edit-first-name'
                        name='first_name'
                        type='first_name'
                        value={userInfo.first_name}
                        placeholder='First Name'
                    />
                    <input
                        onChange={handleChange}
                        className='edit-last-name'
                        name='last_name'
                        type='last_name'
                        value={userInfo.last_name}
                        placeholder='Last Name'
                    />
                    </form>
                </div>
                <div className='email-tab'>
                    <p>Email</p>
                    <h2 className={`user-email ${emailEdit.status}`}>{userInfo.email}</h2>
                    <form className={`edit-email ${emailEdit.status}`} onSubmit={updateUser}>
                    <input
                        onChange={handleChange}
                        className='edit-email'
                        name='email'
                        type='email'
                        value={userInfo.email} 
                        placeholder='Email'
                    />
                    </form>
                </div>
                <div className='city-tab'>
                    <p>City, State of Residence</p>
                    <h2 className={`user-location ${locationEdit.status}`}>{userInfo.city} {userInfo.state}</h2>
                    <form className={`edit-location ${locationEdit.status}`}>
                    <input
                        onChange={handleChange}
                        className='edit-city'
                        name='city'
                        type='city'
                        placeholder='City'
                        value={userInfo.city}
                    />
                    <input
                        onChange={handleChange}
                        className='edit-state'
                        name='state'
                        type='state'
                        placeholder='State'
                        value={userInfo.state}
                    />
                    </form>
                    <button className={`edit-location-btn ${locationEdit.status}`} onClick={() => {toggleLocation(); toggleEmail(); toggleName()}}>Edit Profile</button> 
                    <button className={`save-location-btn ${locationEdit.status}`} onClick={() => {toggleLocation(); toggleEmail(); toggleName(); updateUser()}}  >Save</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;