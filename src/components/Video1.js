import React from 'react';
import videoBg from '../file/videoBg.mp4';

const Video1 = () => {
    return (
        <div className='vid'>
         <video src={videoBg} autoPlay loop muted />
        </div>
    );
};
export default Video1;
