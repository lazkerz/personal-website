'use client'
import React from 'react';
import { Contact } from '@/lib/constants/contacts';

interface ContactCardProps {
  contact: Contact;
}

const ContactCard = ({ contact }: ContactCardProps) => {
  const Icon = contact.icon;
  
  return (
    <a
      href={contact.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center gap-6">
          <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg group-hover:text-blue-500 transition-colors">
            <Icon className="w-8 h-8" />
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">{contact.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {contact.description}
            </p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center text-gray-400 group-hover:text-blue-500 transition-colors">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default ContactCard;