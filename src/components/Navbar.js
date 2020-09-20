import React,{Component} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

class Navbar extends Component {
    // below using context type to get data from the context , can also use context consumer
  //static contextType = ThemeContext;
    
  render() { 
        return ( 
          // below we used consumer for access context 
          // benefit of below is it can be used with functional components and 
          //multiple context can be aacess in same components
            <ThemeContext.Consumer>{(context => {
              const {isLightTheme, light,dark} = context;
              const theme = isLightTheme ? light : dark;
              return(
                <nav style={{background: theme.ui, color: theme.syntax}}>
                <h1>Context App</h1>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
              </nav>
              )
            })}</ThemeContext.Consumer>
         );
    }
}
 
export default Navbar;