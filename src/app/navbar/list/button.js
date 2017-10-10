import React from 'react'
import SocialLogin from 'react-social-login'
import './link.css'
const Button = ({ triggerLogin, ...props }) => (
<a onClick={triggerLogin} {...props}>Login</a>

)

export default SocialLogin(Button)
