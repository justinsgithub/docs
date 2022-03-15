import * as React from 'react';
import {
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
    Navigate,
    Outlet,
} from 'react-router-dom';
import Home from './home';
import Notes from './notes';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes" element={<Notes />} />
        </Routes>
    );
};

export default App;
