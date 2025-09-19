import React from 'react'

const OrganizerHistory = ({ onBack }) => (
    <div>
        <h2>Activity History</h2>
        <p style={{ color: '#64748b' }}>This is a placeholder for activity history. You can bring your own data source later.</p>
        <button className="btn" type="button" onClick={onBack}>Back to Overview</button>
    </div>
)

export default OrganizerHistory



