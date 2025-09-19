import React from 'react'

const CustomerInfoPanel = () => (
    <div className="cs-info">
        <div className="cs-col">
            <div className="cs-row"><span className="cs-key">Name:</span><span className="cs-val">Lokesh Khandelwal</span></div>
            <div className="cs-row"><span className="cs-key">Account Type:</span><span className="cs-val">Student</span></div>
            <div className="cs-row"><span className="cs-key">Account Created On:</span><span className="cs-val">1st Sep 2025</span></div>
            <div className="cs-row"><span className="cs-key">Account Status:</span><span className="cs-val">Active</span></div>
        </div>
        <div className="cs-col">
            <div className="cs-row"><span className="cs-key">School:</span><span className="cs-val">Oberoi International School</span></div>
            <div className="cs-row"><span className="cs-key">Grade:</span><span className="cs-val">6th</span></div>
            <div className="cs-row"><span className="cs-key">Board:</span><span className="cs-val">CBSE</span></div>
            <div className="cs-row"><span className="cs-key">Location:</span><span className="cs-val">Kota</span></div>
        </div>
    </div>
)

export default CustomerInfoPanel



