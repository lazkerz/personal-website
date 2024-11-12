'use client'
import React from 'react';
import { Contact } from '@/lib/constants/contacts'; // Sesuaikan path import
import ContactCard from '@/components/mollecul/ContactCard'; // Sesuaikan path import

interface ContactListProps {
  contacts: Contact[];
}

const ContactList: React.FC<ContactListProps> = ({ contacts }) => {
  return (
    <div className="max-w-full mx-auto p-6">
      <div className="grid grid-cols-1 gap-6">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;