import React from 'react';
import NotesList from './components/NotesList';
import './styles/notes.css';

const Notes = () => {
    return (
        <div className="container">
            <NotesList />
        </div>
    );
};

export default Notes;
