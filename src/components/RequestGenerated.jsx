import React from 'react';
import './customerTheme.css';
import './requestGenerated.css';

const RequestGenerated = ({ referenceId = '100000462829' }) => {
  return (
    <div className="page request-generated">
      <div className="center">
        <div className="big-check">✓</div>
        <h2>Request Generated</h2>
        <p>A confirmation link has been sent to the customer's Email ID.</p>
        <p><strong>Reference ID:</strong> {referenceId}</p>
        <button type="button">Back</button>
      </div>
    </div>
  );
};

export default RequestGenerated;


