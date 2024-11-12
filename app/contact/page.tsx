'use client'

import Wrapper from "@/components/organ/wrapper";
import { contacts } from "@/lib/constants/contacts";
import ContactList from "@/components/mollecul/ContactList";

export default function Contact(){
    return(
        <Wrapper>
            <div className="min-h-screen md:m-10 md:mt-0 p-5 bg-gray-100 space-y-8">
                <div className="flex flex-col gap-3">
                <p className="text-2xl font-medium text-gray-700">Contact</p>
                <p className="max-w-3xl leading-relaxed text-md text-gray-600 justify-text">Always interested in hearing about new projects and opportunities. Whether you have a question, want to collaborate, feel free to reach out through any of these platforms.</p>
                </div>
                <ContactList contacts={contacts} />
            </div>
        </Wrapper>
    );
}



