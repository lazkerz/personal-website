import { 
    FaGithub,
    FaLinkedin,
    FaInstagram
  } from "react-icons/fa";
  import { IconType } from 'react-icons';
  
  

  export interface Contact {
    id: number;
    title: string;
    icon: IconType;
    description: string;
    url: string;
  }
  
  export const contacts: Contact[] = [

    {
        id: 1,
        title: "Github",
        icon: FaGithub,
        description: "Explore the source code for all my projects on GitHub.",
        url: "https://github.com/lazkerz",
    },
    {
        id: 2,
        title: "Linkedin",
        icon: FaLinkedin,
        description: "Connect for collaboration or explore my professional experience.",
        url: "https://www.linkedin.com/in/nurullazira/",
    },
    {
        id: 3,
        title: "Instagram",
        icon: FaInstagram,
        description: "Follow my social media",
        url: "https://www.instagram.com/thinkaboutlazira",
    },
  ];
  