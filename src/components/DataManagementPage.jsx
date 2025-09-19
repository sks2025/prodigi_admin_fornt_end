import React, { useState } from 'react'

const DataManagementPage = () => {
    const [activeTab, setActiveTab] = useState('download')
    const [reportType, setReportType] = useState('')
    const [duration, setDuration] = useState('')
    const [uploadType, setUploadType] = useState('')

    const brandGreen = '#22c55e'
    const textPrimary = '#1f2937'
    const textMuted = '#64748b'
    const borderColor = '#d1d5db'

    const selectBaseStyle = {
        width: 320,
        padding: '10px 12px',
        paddingRight: 40,
        border: `1px solid ${borderColor}`,
        borderRadius: 6,
        appearance: 'none',
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        backgroundColor: '#ffffff',
        color: textPrimary,
        fontSize: 14
    }

    const LabeledSelect = ({ label, value, onChange, children }) => (
        <div style={{ position: 'relative', width: 320 }}>
            <label style={{ display: 'block', color: textMuted, fontSize: 12, marginBottom: 6 }}>{label}</label>
            <select value={value} onChange={onChange} style={selectBaseStyle}>
                {children}
            </select>
            <svg
                aria-hidden
                viewBox="0 0 20 20"
                width="18"
                height="18"
                style={{ position: 'absolute', right: 12, top: 34, pointerEvents: 'none', fill: '#374151' }}
            >
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.116l3.71-2.885a.75.75 0 11.92 1.178l-4.2 3.266a.75.75 0 01-.92 0l-4.2-3.266a.75.75 0 01-.02-1.06z" />
            </svg>
        </div>
    )

    return (
        <div style={{ padding: 24 }}>
            <h2>Enter Customer Details</h2>

            <div style={{ display: 'flex', gap: 24, marginTop: 12, borderBottom: '1px solid #e5e7eb' }}>
                <button
                    type="button"
                    style={{
                        border: 'none',
                        background: 'transparent',
                        padding: '10px 16px',
                        borderBottom: activeTab === 'download' ? '3px solid #22c55e' : '3px solid transparent',
                        color: activeTab === 'download' ? '#22c55e' : '#1f2937',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'none'
                    }}
                    onClick={() => setActiveTab('download')}
                >
                    Download Report
                </button>
                <button
                    type="button"
                    style={{
                        border: 'none',
                        background: 'transparent',
                        padding: '10px 16px',
                        borderBottom: activeTab === 'update' ? '3px solid #22c55e' : '3px solid transparent',
                        color: activeTab === 'update' ? '#22c55e' : '#1f2937',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'none'
                    }}
                    onClick={() => setActiveTab('update')}
                >
                    Update database
                </button>
            </div>

            {activeTab === 'download' ? (
                <div style={{ marginTop: 24 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, maxWidth: 900 }}>
                        <LabeledSelect label="Report Type" value={reportType} onChange={(e) => setReportType(e.target.value)}>
                            <option value="">Select</option>
                            <option value="users">Users</option>
                            <option value="orders">Orders</option>
                            <option value="activity">Activity</option>
                        </LabeledSelect>
                        <LabeledSelect label="Duration" value={duration} onChange={(e) => setDuration(e.target.value)}>
                            <option value="">Select</option>
                            <option value="7d">Last 7 days</option>
                            <option value="30d">Last 30 days</option>
                            <option value="90d">Last 90 days</option>
                        </LabeledSelect>
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <button
                            type="button"
                            disabled={!reportType || !duration}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 10,
                                backgroundColor: brandGreen,
                                color: '#ffffff',
                                border: 'none',
                                padding: '10px 16px',
                                borderRadius: 8,
                                fontWeight: 600,
                                opacity: !reportType || !duration ? 0.6 : 1,
                                cursor: !reportType || !duration ? 'not-allowed' : 'pointer',
                                transition: 'none',
                                boxShadow: 'none'
                            }}
                        >
                            <svg aria-hidden viewBox="0 0 24 24" width="18" height="18" style={{ fill: 'currentColor' }}>
                                <path d="M12 3a1 1 0 011 1v9.586l2.293-2.293a1 1 0 111.414 1.414l-4.007 4.007a1 1 0 01-1.414 0L7.279 12.707a1 1 0 011.414-1.414L11 13.586V4a1 1 0 011-1z" />
                                <path d="M5 19a2 2 0 002 2h10a2 2 0 002-2v-2a1 1 0 10-2 0v2H7v-2a1 1 0 10-2 0v2z" />
                            </svg>
                            Download Report
                        </button>
                    </div>
                </div>
            ) : (
                <div style={{ marginTop: 24 }}>
                    <div style={{ maxWidth: 520 }}>
                        <LabeledSelect label="Report Type" value={uploadType} onChange={(e) => setUploadType(e.target.value)}>
                            <option value="">Select</option>
                            <option value="users">Users</option>
                            <option value="orders">Orders</option>
                            <option value="activity">Activity</option>
                        </LabeledSelect>
                    </div>

                    <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 16 }}>
                        <label
                            htmlFor="data-upload"
                            style={{
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 10,
                                color: brandGreen,
                                border: `1px solid ${brandGreen}`,
                                padding: '10px 16px',
                                borderRadius: 8,
                                fontWeight: 600,
                                transition: 'none'
                            }}
                        >
                            <svg aria-hidden viewBox="0 0 24 24" width="18" height="18" style={{ fill: brandGreen }}>
                                <path d="M12 21a1 1 0 01-1-1v-9.586l-2.293 2.293a1 1 0 11-1.414-1.414l4.007-4.007a1 1 0 011.414 0l4.007 4.007a1 1 0 11-1.414 1.414L13 10.414V20a1 1 0 01-1 1z" />
                                <path d="M5 4a2 2 0 00-2 2v2a1 1 0 102 0V6h10v2a1 1 0 102 0V6a2 2 0 00-2-2H5z" />
                            </svg>
                            Upload Details
                        </label>
                        <input id="data-upload" type="file" style={{ display: 'none' }} />
                    </div>

                    <div style={{ marginTop: 18 }}>
                        <button
                            type="button"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 10,
                                border: `1px solid ${!uploadType ? '#9ca3af' : brandGreen}`,
                                color: !uploadType ? '#374151' : brandGreen,
                                padding: '10px 16px',
                                borderRadius: 8,
                                fontWeight: 600,
                                opacity: !uploadType ? 0.6 : 1,
                                cursor: !uploadType ? 'not-allowed' : 'pointer',
                                background: '#ffffff',
                                transition: 'none',
                                boxShadow: 'none'
                            }}
                            disabled={!uploadType}
                        >
                            <svg aria-hidden viewBox="0 0 24 24" width="18" height="18" style={{ fill: !uploadType ? '#374151' : brandGreen }}>
                                <path d="M12 3a1 1 0 011 1v9.586l2.293-2.293a1 1 0 111.414 1.414l-4.007 4.007a1 1 0 01-1.414 0L7.279 12.707a1 1 0 011.414-1.414L11 13.586V4a1 1 0 011-1z" />
                                <path d="M5 19a2 2 0 002 2h10a2 2 0 002-2v-2a1 1 0 10-2 0v2H7v-2a1 1 0 10-2 0v2z" />
                            </svg>
                            Upload
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DataManagementPage

