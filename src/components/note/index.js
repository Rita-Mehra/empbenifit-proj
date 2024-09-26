import React from 'react';
import { Info } from '@mui/icons-material';
import './note.scss';

const Note = ({ text }) => {
  return (
    <>
        <div className='note flex justify-center'>
            <div className='icon'><Info /></div>
            <div className="note-text flex items-center">{text}</div>
        </div>
    </>
  )
}

export default Note