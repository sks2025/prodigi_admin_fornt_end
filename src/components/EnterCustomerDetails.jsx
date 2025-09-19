import React, { useState } from 'react';
import './customerTheme.css';
import './enterCustomerDetails.css';

const EnterCustomerDetails = () => {
  const [userType, setUserType] = useState('');
  const [method, setMethod] = useState('mobile');
  const [mobile, setMobile] = useState('');
  const [verifiedName, setVerifiedName] = useState('');

  const handleVerify = (e) => {
    e.preventDefault();
    // Placeholder verify action
    if (mobile.trim().length >= 10) {
      setVerifiedName('Lokesh Khandelwal');
    } else {
      setVerifiedName('');
    }
  };

  return (
    <div className="page enter-customer-details">
      <h2>Enter Customer Details</h2>
      <form className="grid" onSubmit={handleVerify}>
        <label>
          <span>User Type</span>
          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="">Select</option>
            <option value="student">Student</option>
            <option value="parent">Parent</option>
            <option value="teacher">Teacher</option>
          </select>
        </label>

        <label>
          <span>Verification Method</span>
          <select value={method} onChange={(e) => setMethod(e.target.value)}>
            <option value="mobile">Mobile Number</option>
            <option value="email">Email</option>
          </select>
        </label>

        <label>
          <span>Mobile Number</span>
          <input
            type="tel"
            placeholder="Enter customer's mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </label>

        <div className="actions"><button type="submit">Verify</button><button type="button">Continue</button></div>
      </form>

      {verifiedName && (
        <div className="notice success">The Account belongs to: {verifiedName}</div>
      )}
    </div>
  );
};

export default EnterCustomerDetails;


