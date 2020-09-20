import React, { Component,createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        isAuthentication: false
      }

      toggleAuth = () => {
          this.setState({isAuthentication: !this.state.isAuthentication});
      }
    render() { 
        return ( 
            <AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth}}>
                {this.props.children}
            </AuthContext.Provider>
         );
    }
}
 
export default AuthContextProvider;
