import React from 'react';
import NotesList from './components/NotesList';
import './styles/notes.css';

const NotesPage = () => {
    return (
        <div className="container">
            <NotesList />
        </div>
    );
};

export default NotesPage;
