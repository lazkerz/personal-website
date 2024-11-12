import { 
    SiGithub,
    SiLinkedin,
    SiInstagram
  } from "react-icons/si";
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
        icon: SiGithub,
        description: "Explore the source code for all my projects on GitHub.",
        url: "https://github.com/lazkerz",
    },
    {
        id: 2,
        title: "Linkedin",
        icon: SiLinkedin,
        description: "Connect for collaboration or explore my professional experience.",
        url: "https://www.linkedin.com/in/nurullazira/",
    },
    {
        id: 3,
        title: "Instagram",
        icon: SiInstagram,
        description: "Follow my social media",
        url: "https://www.instagram.com/thinkaboutlazira",
    },
  ];
  