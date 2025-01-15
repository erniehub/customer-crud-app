import React, { useState } from 'react';
import axios from 'axios';

const CustomerForm = ({ customer, onSave }) => {
    const [firstName, setFirstName] = useState(customer ? customer.first_name : '');
    const [lastName, setLastName] = useState(customer ? customer.last_name : '');
    const [email, setEmail] = useState(customer ? customer.email : '');
    const [contactNumber, setContactNumber] = useState(customer ? customer.contact_number : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const customerData = { first_name: firstName, last_name: lastName, email, contact_number: contactNumber };
        if (customer) {
            axios.put(`http://localhost:8000/api/customers/${customer.id}`, customerData)
                .then(() => onSave());
        } else {
            axios.post('http://localhost:8000/api/customers', customerData)
                .then(() => onSave());
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Contact Number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
            <button type="submit">Save</button>
        </form>
    );
};

export default CustomerForm;
