import React, {useState} from 'react'


const Settings = ()=> {

    const [userEdit, setUserEdit] = useState({
        password: '',
        email: '',
        first_name: '',
        last_name: ''
    })

    const handleChange = e => {
        setUserEdit({
            ...userEdit,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h2>Settings Preferences</h2>

            <form className='edit-form'>
                <input
                    onChange={handleChange}
                    className='edit-password'
                    name='password'
                    type='password'
                    placeholder='Password'
                    value={userEdit.password}
                />
                <input
                    onChange={handleChange}
                    className='edit-email'
                    name='email'
                    type='email'
                    placeholder='Email'
                    value={userEdit.Email}
                />
                <input
                    onChange={handleChange}
                    className='edit-first-name'
                    name='first_name'
                    type='first_name'
                    placeholder='First Name'
                    value={userEdit.first_name}
                />
                <input
                    onChange={handleChange}
                    className='edit-last-name'
                    name='last_name'
                    type='last_name'
                    placeholder='Last Name'
                    value={userEdit.last_name}
                />
            </form>

        </div>
    )
}

export default Settings;