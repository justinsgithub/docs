import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="project" element={<Project />} />
        </Routes>
    );
};

export default App;
