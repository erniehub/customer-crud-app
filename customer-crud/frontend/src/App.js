import React, { useState } from 'react';
import CustomerList from './CustomerList';
import CustomerForm from './CustomerForm';

const App = () => {
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    const handleCustomerSave = () => {
        setSelectedCustomer(null); // Reset after save
    };

    return (
        <div>
            <CustomerList />
            <CustomerForm customer={selectedCustomer} onSave={handleCustomerSave} />
        </div>
    );
};

export default App;
