import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Form from './components/Form';
import LoginForm from './components/LoginForm';
import ForgotOtpVerify from './components/ForgotOtpVerify';
import AdminDashboard from './components/AdminDashboard';
import CreateNewPassword from './components/CreateNewPassword';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Form />} />
      <Route path="/forgot" element={<LoginForm />} />
      <Route path="/ForgotOtpVerify" element={<ForgotOtpVerify />} />
      <Route path="/dashboard" element={<AdminDashboard />} />
      <Route path="/create-password" element={<CreateNewPassword />} />


      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;