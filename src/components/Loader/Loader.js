import React from 'react';
import { SyncLoader } from 'react-spinners';

const Loader = () => (

    <div className='loader'>
        <SyncLoader
            sizeUnit={"px"}
            size={20}
            color={'green'}
        />
    </div> 
)

export default Loader