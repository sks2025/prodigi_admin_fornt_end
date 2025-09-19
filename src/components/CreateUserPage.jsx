import React, { useState } from 'react'

const CreateUserPage = () => {
  const [form, setForm] = useState({ name: '', email: '', role: '' })

  const isValid = form.name && form.email && form.role

  return (
    <div style={{ padding: 24 }}>
      <h2>Create New User</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 720, marginTop: 24 }}>
        <div>
          <label style={{ display: 'block', color: '#64748b', fontSize: 12, marginBottom: 6 }}>Full Name</label>
          <input
            type="text"
            className="input"
            placeholder="Enter full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label style={{ display: 'block', color: '#64748b', fontSize: 12, marginBottom: 6 }}>Email</label>
          <input
            type="email"
            className="input"
            placeholder="Enter email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <label style={{ display: 'block', color: '#64748b', fontSize: 12, marginBottom: 6 }}>Role</label>
          <select
            className="input"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            style={{ height: 40 }}
          >
            <option value="">Select</option>
            <option value="organiser">Organiser</option>
            <option value="rm">RM</option>
            <option value="customer">Customer</option>
          </select>
        </div>
      </div>
      <div style={{ marginTop: 18 }}>
        <button type="button" className="btn-primary" disabled={!isValid}>Create</button>
      </div>
    </div>
  )
}

export default CreateUserPage



