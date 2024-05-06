import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, About, Projects, Contact } from './pages';

const App = () => {
    return (
        <main className='bg-slate-300/20 h-full'>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/villasis_portfolio' element={<Home />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/villasis_portfolio/about' element={<About />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/villasis_portfolio/projects' element={<Projects />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/villasis_portfolio/contact' element={<Contact />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </Router>
        </main>
    )
}

export default App