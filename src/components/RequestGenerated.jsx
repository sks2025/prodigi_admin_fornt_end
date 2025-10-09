import React from 'react';
import './customerTheme.css';
import './requestGenerated.css';

const RequestGenerated = ({ referenceId = '100000462829', customerId, customerData, onNavigate }) => {
  const handleBack = () => {
    if (onNavigate) {
      onNavigate('enter-details');
    }
  };

  const handleViewCustomer = () => {
    if (onNavigate && customerData) {
      onNavigate('customer-overview', customerData);
    }
  };

  return (
    <div className="page request-generated">
      <div className="center">
        <div className="big-check">✓</div>
        <h2>Request Generated</h2>
        <p>A confirmation link has been sent to the customer's Email ID.</p>
        <p><strong>Reference ID:</strong> {referenceId}</p>
        {customerId && (
          <p><strong>Customer ID:</strong> {customerId}</p>
        )}
        <div className="actions">
          <button type="button" onClick={handleBack}>Back to Search</button>
          {customerData && (
            <button type="button" onClick={handleViewCustomer} style={{ marginLeft: '10px' }}>
              View Customer
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestGenerated;


