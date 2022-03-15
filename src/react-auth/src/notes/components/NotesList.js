import React from 'react';
import Note from './Note';
import '../styles/notes.css'

const NotesList = () => {
    return (
        <div className="notes-list">
            <Note />
            <Note />
            <Note />
            <Note />
        </div>
    );
};

export default NotesList;
