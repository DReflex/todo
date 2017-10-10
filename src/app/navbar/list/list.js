import React from 'react';
import SocialButton from './button'

class List extends React.Component {

  handleSocialLogin = (user) => {
  console.log(user)
  fetch(`/api/user/${user._profile.id}`).then(res => res.json())
  .then((res) => {
    if(res.status === 404){
    fetch('/api/user', {
              method: 'POST',
              mode: 'CORS',
              body: JSON.stringify({
                name:user._profile.name,
                image: user._profile.profilePicURL,
                id: user._profile.id,
                accessToken: user._token.accessToken,
                expiresAt:user._token.expiresAt
              }),
              headers: {
                  'Content-Type': 'application/json'
              }
          })
    }
    else{
      fetch(`/api/user/${user._profile.id}`, {
                method: 'PUT',
                mode: 'CORS',
                body: JSON.stringify({
                  accessToken: user._token.accessToken,
                  expiresAt:user._token.expiresAt
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
    }
  })

  //this should update global state and block log in
  //use state to render rest of the app
}

handleSocialLoginFailure = (err) => {
  console.error(err)
}

  render(){
    return(
      <div>
        <SocialButton
      provider='facebook'
      appId='354675081620273'
      onLoginSuccess={this.handleSocialLogin}
      onLoginFailure={this.handleSocialLoginFailure}
    >
      Login with Facebook
    </SocialButton>
      </div>
    )
  }
}
export default List
