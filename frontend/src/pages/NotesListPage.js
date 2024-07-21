import React, {useState, useEffect} from 'react';
import ListItem from '../components/ListItem';

import Header from '../components/Header';
const NotesListPage = () => {
    const [notes, setNotes] = useState([])
    
    const getNotes = async () => {
        let response = await fetch('api/notes/')
        let data = await response.json()
        console.log(notes)
        setNotes(data)
        console.log(notes)
    }

    useEffect(() => {
        getNotes()
    }, [])

    return (<div>{window.innerHeight >= 700 ? <Header/> : null}
    <div className='w-full '>
            <h2 className='text-2xl lg:mx-[17%] mx-[8%]'>My Notes</h2>
            <div className='h-[1px] bg-white lg:w-2/3 w-[90%] mx-auto my-5'></div>
        {notes.map((note, index) => (
            <ListItem key={index} note = {note} getNotes = {getNotes}/>
                ))}
    </div>
    </div>
    )
}



export default NotesListPage;