import React, {useContext } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

//class BookList extends Component {
    // below using context type to get data from the context , can also use context consumer
//   static contextType = ThemeContext;
//        render() { 
//           const {isLightTheme,light,dark} = this.context;
//           const theme = isLightTheme ? light : dark;
//         return (  
//             <div className = "book-list" style={{color: theme.syntax, background: theme.bg}}>
//                 <li style={{background: theme.ui}}>dw</li>
//                 <li style={{background: theme.ui}}>fr</li>
//                 <li style={{background: theme.ui}}>th</li>
//             </div>
//         );
//     }
// }

const BookList = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (  
        <div className = "book-list" style={{color: theme.syntax, background: theme.bg}}>
            <li style={{background: theme.ui}}>dw</li>
            <li style={{background: theme.ui}}>fr</li>
            <li style={{background: theme.ui}}>th</li>
       </div>
    );
}
 
export default BookList;