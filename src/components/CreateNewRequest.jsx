import React, { useState } from 'react';
import './customerTheme.css';
import './createNewRequest.css';

const REQUEST_TYPES = [
  { value: '', label: 'Select' },
  { value: 'modify_mobile', label: 'Modify Mobile Number' },
  { value: 'reset_password', label: 'Reset Password' },
  { value: 'payment_issue', label: 'Payment Issue' }
];

const CreateNewRequest = () => {
  const [type, setType] = useState('');

  return (
    <div className="page create-new-request">
      <h2>Create New Request</h2>
      <div className="form">
        <label>
          <span>Request Type</span>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            {REQUEST_TYPES.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </label>

        {type === 'modify_mobile' && (
          <div className="hint">Proceed to Modify Mobile Number form.</div>
        )}
      </div>
    </div>
  );
};

export default CreateNewRequest;


