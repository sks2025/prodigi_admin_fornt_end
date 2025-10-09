import React, { useState } from 'react';
import './customerTheme.css';
import './modifyMobileNumberRequest.css';

const ModifyMobileNumberRequest = ({ onNavigate }) => {
  const [oldMobile, setOldMobile] = useState('');
  const [newMobile, setNewMobile] = useState('');
  const [comment, setComment] = useState('');

  const handleConfirm = (e) => {
    e.preventDefault();
    // Navigate to RequestGenerated page
    if (onNavigate) {
      onNavigate('request-generated');
    }
  };

  return (
    <div className="page modify-mobile-request">
      <h2>Create New Request</h2>

      <div className="form">
        <div className="row">
          <label>
            <span>Old Mobile Number</span>
            <input
              type="tel"
              placeholder="Enter customer's old mobile number"
              value={oldMobile}
              onChange={(e) => setOldMobile(e.target.value)}
            />
          </label>

          <label>
            <span>New Mobile Number</span>
            <input
              type="tel"
              placeholder="Enter customer's new mobile number"
              value={newMobile}
              onChange={(e) => setNewMobile(e.target.value)}
            />
          </label>
          <div className="actions"><button onClick={handleConfirm}>Confirm</button></div>
        </div>

        <p className="note">Note: A confirmation link will be sent to customer's registered email ID.</p>

        <label>
          <span>Comment</span>
          <textarea
            rows={8}
            placeholder="Add details..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default ModifyMobileNumberRequest;


