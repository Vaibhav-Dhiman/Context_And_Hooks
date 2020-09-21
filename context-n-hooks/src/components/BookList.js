import React, {useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
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
    const { books } = useContext(BookContext);
    const theme = isLightTheme ? light : dark;
    return (  
        <div className = "book-list" style={{color: theme.syntax, background: theme.bg}}>
            <ul>
                {books.map(book => {
                 return(
                 <li key={book.id} style={{background: theme.ui}}>{book.title}</li>
                 )
                })}
            </ul>
       </div>
    );
}
 
export default BookList;