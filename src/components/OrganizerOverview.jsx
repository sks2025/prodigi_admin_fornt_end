import React from 'react'

const OrganizerOverview = ({ rows, onShowHistory }) => (
    <div>
        <h2>Organiser Overview</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, maxWidth: 980, marginTop: 16 }}>
            <div>
                <div style={{ margin: '6px 0' }}><strong>Name:</strong> Indian Olympiad Foundation</div>
                <div style={{ margin: '6px 0' }}><strong>Location:</strong> Kota</div>
                <div style={{ margin: '6px 0' }}><strong>Account Created On:</strong> 1st Sep 2025</div>
                <div style={{ margin: '6px 0' }}><strong>Account Status:</strong> Active</div>
            </div>
            <div>
                <div style={{ margin: '6px 0' }}><strong>Admin Name:</strong> Lokesh Khandelwal</div>
                <div style={{ margin: '6px 0' }}><strong>Admin Mobile No.:</strong> +91 9876543210</div>
                <div style={{ margin: '6px 0' }}><strong>Admin Email ID:</strong> lokesh@gmail.com</div>
                <div style={{ margin: '6px 0' }}><strong>RM Name:</strong> Saumyata Khandelwal</div>
            </div>
        </div>

        <div style={{ marginTop: 20, border: '1px solid #e5e7eb', borderRadius: 8, overflow: 'hidden' }}>
            <div style={{ display: 'flex', gap: 16, padding: '10px 16px', background: '#f3f4f6', borderBottom: '1px solid #e5e7eb' }}>
                <button className="btn" type="button">Open Requests</button>
                <button className="btn" type="button" onClick={onShowHistory}>Activity History</button>
            </div>
            <table className="table">
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
                    {rows.map((r) => (
                        <tr key={r.id}>
                            <td><input type="checkbox" style={{ marginRight: 28 }} /> {r.id}</td>
                            <td>{r.name}</td>
                            <td>{r.req}</td>
                            <td>{r.raisedBy}</td>
                            <td><button type="button" className={`status ${r.status}`}>{r.status === 'progress' ? 'In progress' : r.status.charAt(0).toUpperCase() + r.status.slice(1)}</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
            <button type="button" className="btn-primary">Create New Request</button>
            <button type="button" className="btn-outline">Send Report</button>
        </div>
    </div>
)

export default OrganizerOverview



