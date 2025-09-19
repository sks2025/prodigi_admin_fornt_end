import React from 'react'

const CustomerActions = () => (
    <div className="cs-actions">
        <div className="cs-actions-left">
            <button type="button" className="btn-primary">Approve</button>
            <button type="button" className="btn-outline">Resend Confirmation Link</button>
        </div>
        <div className="cs-actions-right">
            <button type="button" className="btn-danger">Close Request</button>
        </div>
    </div>
)

export default CustomerActions



