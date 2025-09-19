import React from 'react'
import CustomerInfoPanel from './CustomerInfoPanel'
import CustomerSummaryCard from './CustomerSummaryCard'
import CustomerActions from './CustomerActions'

const CustomerServicePage = () => (
    <div className="cs-container">
        <div className="cs-ref">Ref ID: <span>100004628155</span></div>
        <CustomerInfoPanel />
        <CustomerSummaryCard />
        <CustomerActions />
    </div>
)

export default CustomerServicePage;

