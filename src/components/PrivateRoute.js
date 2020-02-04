import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return(
    <Route
      {...rest}
      render={props => {
        if (JSON.parse(localStorage.getItem('user'))) {
          return <Component {...props} />
        }
        return <Redirect to='/' />
      }}
    />
  )
}
export default PrivateRoute