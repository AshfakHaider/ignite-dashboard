import React from 'react';
import AddCause from '../Components/AddCause';
import AddEvents from '../Components/AddEvents';

const HomeEdit = () => {
    return (
        <div className='mt-3'>
            <h3 className='headingDashboard' style={{color:'red'}}>Add Home Page Contents</h3>
            <AddCause/>
            <AddEvents/>
        </div>
    );
};

export default HomeEdit;