import React,{ useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContex';

// class Navbar extends Component {
//     // below using context type to get data from the context , can also use context consumer
//   //static contextType = ThemeContext;
    
//   render() { 
//         return ( 
//           // below we used consumer for access context 
//           // benefit of below is it can be used with functional components and 
//           //multiple context can be aacess in same components
//           <AuthContext.Consumer>{(authContext) => (
//               <ThemeContext.Consumer>{(themeContext => {
//               const {isLightTheme, light,dark} = themeContext;
//               const {isAuthentication,toggleAuth} = authContext;
             
//               return(
               
//               )
//             })}</ThemeContext.Consumer>
//           )}
//             </AuthContext.Consumer>
//          );
//     }
// }

const NavBar = () => {
  const {isLightTheme, light,dark} = useContext(ThemeContext);
  const {isAuthentication,toggleAuth} = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  return ( 
    <nav style={{background: theme.ui, color: theme.syntax}}>
    <h1>Context App</h1>
      <div onClick={toggleAuth}>
          {isAuthentication ? 'Logged In': 'Logged Out'}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
  </nav>
   );
}
 
export default NavBar;