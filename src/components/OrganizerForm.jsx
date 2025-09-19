import React from 'react'

const OrganizerForm = ({ form, setForm, isFormValid, onVerify }) => (
    <div>
        <h2>Enter Customer Details</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 840, marginTop: 24 }}>
            <div>
                <label>Organiser ID</label>
                <input type="text" placeholder="Enter Organiser ID" value={form.organiserId} onChange={(e) => setForm({ ...form, organiserId: e.target.value })} className="input"/>
            </div>
            <div>
                <label>RM Password</label>
                <input type="password" placeholder="Enter RM Password" value={form.rmPassword} onChange={(e) => setForm({ ...form, rmPassword: e.target.value })} className="input"/>
            </div>
            <div>
                <label>RM ID</label>
                <input type="text" placeholder="Enter RM ID" value={form.rmId} onChange={(e) => setForm({ ...form, rmId: e.target.value })} className="input"/>
            </div>
            <div style={{ display: 'flex', alignItems: 'end' }}>
                <button type="button" className="btn-primary" disabled={!isFormValid} onClick={onVerify}>Verify</button>
            </div>
        </div>
    </div>
)

export default OrganizerForm



