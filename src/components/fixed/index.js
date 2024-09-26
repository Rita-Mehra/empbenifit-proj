import React from 'react';
import { Button } from '@mui/material';
import './fixed.scss';

const FixedFooter = () => {
  return (
    <div className='footer'>
        <div className='flex fr'>
        <div>
             <Button variant="contained" className='round arial font-bold text-capital' component="span"> Next </Button>
        </div> 
        <div className='ml4'>   
            <Button variant="text" className="arial font-bold btn-padding text-grey-6 text-capital">Back</Button>
        </div> 
        </div>
    </div>
  )
}

export default FixedFooter