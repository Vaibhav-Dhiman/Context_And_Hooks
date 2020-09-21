import React,{useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs,setSongs] = useState([
        {title: 'almost home', id:1},
        {title: 'memory gospel', id:2},
        {title: 'this wild darkness', id:3}
    ]);

    const [age,setAge] = useState(21);

   const addSong = (title) => {
    setSongs([...songs,{title, id: uuidv4()}]);
    }
    useEffect(() => {
        console.log('use effect hook', songs);
    },[songs])
        return (  
        <div>
            <ul>
                {songs.map(song => {
                    return (<li key={song.id}>{song.title}</li>);
                })}
            </ul>
            <NewSongForm addSong={addSong}/>
            <button onClick={() => setAge(age +1)}>Add Age: {age}</button>
        </div>
    );
}
 
export default SongList;