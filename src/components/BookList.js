import React, { Component } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

class BookList extends Component {
  static contextType = ThemeContext;
       render() { 
          const {isLightTheme,light,dark} = this.context;
          const theme = isLightTheme ? light : dark;
        return (  
            <div className = "book-list" style={{color: theme.syntax, background: theme.bg}}>
                <li style={{background: theme.ui}}>dw</li>
                <li style={{background: theme.ui}}>fr</li>
                <li style={{background: theme.ui}}>th</li>
            </div>
        );
    }
}
 
export default BookList;