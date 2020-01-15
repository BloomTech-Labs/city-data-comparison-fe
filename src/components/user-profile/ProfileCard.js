import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { CityContext } from "../../contexts/CityContext"
import './profile.scss'



const ProfileCard = ()=> {

    //state for logged in user

    const [userInfo, setUserInfo] = useState({
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@citrics.io',
        city: 'Murrieta',
        state: 'Ca'
    })

    const handleChange = e => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }
    
    const {user, setUser} = useContext(CityContext);
    console.log('Current user state',user)

    // Edit state toggle

    const [nameEdit, setNameEdit] = useState({status:'closed'})
    const [emailEdit, setEmailEdit] = useState({status:'closed'})
    const [locationEdit, setLocationEdit] = useState({status:'closed'})

    const toggleName = () => {
        if (nameEdit.status === 'closed') {
            setNameEdit({...nameEdit, status:'open'}) 
        } else if (nameEdit.status === 'open') {
            setNameEdit({...nameEdit, status:'closed'})
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
        if (nameEdit.status === 'closed') {
            setNameEdit({...nameEdit, status:'open'}) 
        } else if (nameEdit.status === 'open') {
            setNameEdit({...nameEdit, status:'closed'})
        }
    }

    
    // Edit user

    const [userEdit, setUserEdit] = useState({
        password: '',
        email: '',
        first_name: '',
        last_name: ''
    })

    // const handleChange = e => {
    //     setUserEdit({
    //         ...userEdit,
    //         [e.target.name]: e.target.value
    //     })
    // }

    //User information axios call
    useEffect(() => {
        axios
            .get('')
            .then(res => {
                console.log('Response from user call',res)
                setUser(res.data)
            })
            .catch(err => {
                console.error('Unable to get user information', err);
            });
    }, []);


    return (
        <div>
            <h2>Profile Page</h2>
            <div className='profile-contents'>
                <div>
                    <p>Name</p>
                    <h2 className={`name ${nameEdit.status}`}>{userInfo.first_name} {userInfo.last_name}</h2>
                    <form className={`edit-name ${nameEdit.status}`}>
                    <input
                        onChange={handleChange}
                        className='edit-first-name'
                        name='first_name'
                        type='first_name'
                        placeholder='First Name'
                        value={userInfo.first_name}
                    />
                    <input
                        onChange={handleChange}
                        className='edit-last-name'
                        name='last_name'
                        type='last_name'
                        placeholder='Last Name'
                        value={userInfo.last_name}
                    />
                    </form>
                    <button className={`edit-name-btn ${nameEdit.status}`}onClick={toggleName}>Edit Name</button>
                    <button className={`save-name-btn ${nameEdit.status}`}onClick={toggleName}>Save</button>
                </div>
                <div>
                    <p>Email</p>
                    <h2 className={`user-email ${emailEdit.status}`}>johndoe@citrics.io</h2>
                    <form className={`edit-email ${emailEdit.status}`}>
                    <input
                        onChange={handleChange}
                        className='edit-email'
                        name='email'
                        type='email'
                        placeholder='Email'
                        value={userInfo.email}
                    />
                    </form>
                    <button className={`edit-email-btn ${emailEdit.status}`}onClick={toggleEmail}>Edit Email</button>
                    <button className={`save-email-btn ${emailEdit.status}`}onClick={toggleEmail}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;