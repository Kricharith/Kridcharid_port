import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Profile from './pages/Profile';
import Activities from './pages/Activities';
import Certificate from './pages/Certificate';
import Contact from './pages/Contact';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/profile" replace />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
};

export default AppRoutes;