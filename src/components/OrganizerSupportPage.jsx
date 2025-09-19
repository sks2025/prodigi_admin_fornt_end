import React, { useMemo, useState } from 'react'
import OrganizerForm from './OrganizerForm'
import OrganizerOverview from './OrganizerOverview'
import OrganizerHistory from './OrganizerHistory'

const OrganizerSupportPage = () => {
    const [step, setStep] = useState(1)
    const [form, setForm] = useState({ organiserId: '', rmId: '', rmPassword: '' })

    const isFormValid = useMemo(() => {
        return form.organiserId && form.rmId && form.rmPassword
    }, [form])

    const rows = [
        { id: '100004628155', name: 'Indian Olympiad Foundation', req: 'Create Competition', raisedBy: 'Saumyata Khandelwal', status: 'open' },
        { id: '100006348923', name: 'Indian Olympiad Foundation', req: 'Create Competition', raisedBy: 'Saumyata Khandelwal', status: 'open' },
        { id: '100053856234', name: 'Indian Olympiad Foundation', req: 'Create Competition', raisedBy: 'Saumyata Khandelwal', status: 'progress' },
        { id: '100000462947', name: 'Indian Olympiad Foundation', req: 'Change Bank Account', raisedBy: 'Saumyata Khandelwal', status: 'closed' },
        { id: '100003759362', name: 'Indian Olympiad Foundation', req: 'Update Profile', raisedBy: 'Saumyata Khandelwal', status: 'closed' }
    ]

    return (
        <div style={{ padding: 24 }}>
            {step === 1 && (
                <OrganizerForm
                    form={form}
                    setForm={setForm}
                    isFormValid={isFormValid}
                    onVerify={() => setStep(2)}
                />
            )}

            {step === 2 && (
                <OrganizerOverview rows={rows} onShowHistory={() => setStep(3)} />
            )}

            {step === 3 && (
                <OrganizerHistory onBack={() => setStep(2)} />
            )}
        </div>
    )
}

export default OrganizerSupportPage

