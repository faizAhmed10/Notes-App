import React from 'react';
import { Link } from 'react-router-dom';
import left from  "../assets/left-chevron.png" 

const BackButton = () => {
    return <div>
        <Link to="/" className=''>

            <img src={left} className='lg:w-10 w-[30px] 
            '/>
        </Link>
    </div>;
}


export default BackButton;