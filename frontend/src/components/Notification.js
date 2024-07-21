import React, { useState } from 'react';

const Notification = ({message}) => {

    let [state, setState] = useState("")

    setTimeout(()=>{
        setState("hidden")
    }, 1000)
    return <div className={`bg-white ${state} w-1/2 mx-auto rounded my-2`}>
        <p className='text-black text-center text-lg'>{message}</p>
    </div>;
}


export default Notification;