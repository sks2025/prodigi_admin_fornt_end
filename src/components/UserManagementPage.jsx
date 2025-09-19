import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserManagementPage = () => {
  const [userType, setUserType] = useState('')
  const navigate = useNavigate()

  return (
    <div style={{ padding: 24 }}>
      <h2>Enter Customer Details</h2>

      <div style={{ marginTop: 24, maxWidth: 520 }}>
        <label style={{ display: 'block', color: '#64748b', fontSize: 12, marginBottom: 6 }}>User Type</label>
        <select
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          style={{ width: 320, padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: 4 }}
        >
          <option value="">Select</option>
          <option value="organiser">Organiser</option>
          <option value="rm">RM</option>
          <option value="customer">Customer</option>
        </select>
      </div>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 24 }}>
        <button type="button" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center' }}>
          Upload User Details
        </button>
      </div>

      <div style={{ marginTop: 18 }}>
        <button type="button" className="btn-primary" onClick={() => navigate('/dashboard/create-user')}>Create User</button>
      </div>
    </div>
  )
}

export default UserManagementPage
