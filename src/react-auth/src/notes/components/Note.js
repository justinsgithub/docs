import React from 'react';
import '../styles/notes.css'
import { MdDeleteForever } from 'react-icons/md';
const Note = () => {
    return (
        <div className="note">
            <span>my first note</span>
            <div className="note-footer">
                <small>02/12/22</small>
                <MdDeleteForever className="delete-icon" size="1.3em" />
            </div>
        </div>
    );
};

export default Note;
