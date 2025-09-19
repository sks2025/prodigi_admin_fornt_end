import React from 'react';
import './customerTheme.css';
import './customerOverview.css';

const sampleRequests = [
  { id: '1000004628155', request: 'Delete User', status: 'Open', raisedBy: 'Saumyata Khandelwal' },
  { id: '1000006348923', request: 'Modify User details', status: 'Open', raisedBy: 'Saumyata Khandelwal' },
  { id: '100053856234', request: 'Payment issue', status: 'In progress', raisedBy: 'Saumyata Khandelwal' },
  { id: '100000462947', request: 'Create Competition', status: 'Closed', raisedBy: 'Saumyata Khandelwal' },
  { id: '100003759362', request: 'Reset Password', status: 'Closed', raisedBy: 'Santosh Kumar' }
];

const CustomerOverview = ({ customer = {
  name: 'Lokesh Khandelwal',
  type: 'Student',
  createdOn: '1st Sep 2025',
  status: 'Active',
  school: 'Oberoi International School',
  grade: '6th',
  board: 'CBSE',
  location: 'Kota'
} }) => {
  return (
    <div className="page customer-overview">
      <h2>Customer Overview</h2>

      <section className="customer-summary">
        <div><strong>Name:</strong> {customer.name}</div>
        <div><strong>Account Type:</strong> {customer.type}</div>
        <div><strong>Account Created On:</strong> {customer.createdOn}</div>
        <div><strong>Account Status:</strong> {customer.status}</div>
        <div><strong>School:</strong> {customer.school}</div>
        <div><strong>Grade:</strong> {customer.grade}</div>
        <div><strong>Board:</strong> {customer.board}</div>
        <div><strong>Location:</strong> {customer.location}</div>
      </section>

      <h3>Open Requests</h3>
      <div className="table-wrap">
        <table className="requests">
          <thead>
            <tr>
              <th>Reference ID</th>
              <th>Customer Name</th>
              <th>Request</th>
              <th>Raised by</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {sampleRequests.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{customer.name}</td>
                <td>{r.request}</td>
                <td>{r.raisedBy}</td>
                <td><span className={`status ${r.status.replace(' ', '-').toLowerCase()}`}>{r.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="actions">
        <button type="button">Create New Request</button>
      </div>
    </div>
  );
};

export default CustomerOverview;


