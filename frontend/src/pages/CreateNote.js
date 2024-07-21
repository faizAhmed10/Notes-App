import React, { useState } from 'react';
import Notification from '../components/Notification'
import MobileHeader from '../components/MobileHeader';
const CreateNote = () => {
    const [note, setNote] = useState('');
    const [message, setMessage] = useState(null)
    const createNote = async () => {
        try {
            let response = await fetch("/api/note/create/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    body:note
                })
            });

            const data = await response.json();
            setMessage("Note Created!")
            console.log(data);
            
        } catch (error) {
            console.error("Error creating note:", error);
            setMessage("Some error occured")
        }
    };

    const handleNoteChange = (e) => {
        setNote(e.target.value);
    };

    return (
        <div>
            {message ? <Notification message = {message}/> : null}
            <div>
            {window.innerHeight >= 700 ? <MobileHeader/> : null}
                <textarea
            className="bg-black block
            bg-opacity-90 lg:ring ring-white ring-opacity-30 text-xl
            text-white w-[90%] lg:h-[40dvw] h-[100dvw] p-4 border-none mx-auto"
            value={note}
            onChange={handleNoteChange}
            placeholder="Enter your note here..."
          />
            </div>
            <button onClick={createNote} className='bg-orange-500 rounded p-1
            mx-auto block my-3 text-black
            '>Save Note</button>
        </div>
    );
};

export default CreateNote;
