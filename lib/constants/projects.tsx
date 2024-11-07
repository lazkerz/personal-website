import { 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiLaravel, 
  SiMysql, 
  SiFigma,
  SiPhp,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiJavascript,
  SiNextdotjs,
} from "react-icons/si";
import { IconType } from 'react-icons';

export interface ProjectImage {
  url: string;
  alt: string;
}

export interface Technology {
  name: string;
  icon: IconType;
  color: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  images: ProjectImage[];
  technologies: Technology[];
  demo: string;
  type: 'Web' | 'Mobile';
}

export const projects: Project[] = [

  //Project Web
  {
    id: 1,
    title: "Siphani",
    description: "A platform that connects farmers with buyers, simplifying transactions for the sale of agricultural and plantation products",
    images: [
      {
        url: "/projects/siphani/siphani-preview.jpg",
        alt: "Siphani Preview 1"
      },
      {
        url: "/projects/siphani/siphani-preview2.jpg",
        alt: "Siphani Preview 2"
      },
      {
        url: "/projects/siphani/siphani-preview3.jpg",
        alt: "Siphani Preview 3"
      }
    ],
    technologies: [
      {
        name: "React",
        icon: SiReact,
        color: "bg-[#61DAFB]/20"
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "bg-[#3178C6]/20"
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
        color: "bg-[#06B6D4]/20"
      },
      {
        name: "PHP",
        icon: SiPhp,
        color: "bg-[#06B6D4]/20"
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "bg-[#4479A1]/20"
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "bg-[#F24E1E]/20"
      }
    ],
    demo: "https://siphani.com/",
    type: "Web",
  },
  {
    id: 2,
    title: "Sistem Report Honor Senat Polmed",
    description: "Organized meeting results and attendance records to ensure accurate and timely honor disbursements. Analyzed attendance data and calculated honorarium for university senate members based on meeting participation. Developed an efficient process for data collection and representation",
    images: [
      {
        url: "/projects/senat/senat-preview.png",
        alt: "Senat Preview 1"
      },
      {
        url: "/projects/senat/senat-preview2.jpg",
        alt: "Senat Preview 2"
      },
      {
        url: "/projects/senat/senat-preview3.png",
        alt: "Senat Preview 3"
      }
    ],
    technologies: [
      {
        name: "PHP",
        icon: SiPhp,
        color: "bg-[#06B6D4]/20"
      },
      {
        name: "Laravel",
        icon: SiLaravel,
        color: "bg-[#FF2D20]/20"
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
        color: "bg-[#06B6D4]/20"
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "bg-[#4479A1]/20"
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "bg-[#F24E1E]/20"
      }
    ],
    demo: "https://senat.polmed.ac.id/",
    type: "Web",
  },
  {
    id: 3,
    title: "SIMKATMAWA",
    description: " Managing the latest data on student achievements, organizing and visualize data to track performance metrics and perform analytics to provide insights",
    images: [
      {
        url: "/projects/simkatmawa/simkatmawa-preview.png",
        alt: "Simkatmawa Preview 1"
      },
      {
        url: "/projects/simkatmawa/simkatmawa-preview2.jpg",
        alt: "Senat Preview 2"
      },
    ],
    technologies: [
      {
        name: "PHP",
        icon: SiPhp,
        color: "bg-[#06B6D4]/20"
      },
      {
        name: "Laravel",
        icon: SiLaravel,
        color: "bg-[#FF2D20]/20"
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
        color: "bg-[#06B6D4]/20"
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "bg-[#4479A1]/20"
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "bg-[#F24E1E]/20"
      }
    ],
    demo: "",
    type: "Web",
  },
  {
    id: 4,
    title: "Web Pelaporan Satgas Polmed",
    description: "A dedicated platform for reporting incidents of sexual harassment on campus, managed by the Polmed PPKS Task Force. This portal also provides updates on actions and activities undertaken by the task force to ensure a safe and supportive campus environment",
    images: [
      {
        url: "/projects/satgas/satgas-preview.jpg",
        alt: "Satgas Preview 1"
      },
      {
        url: "/projects/satgas/satgas-preview2.jpg",
        alt: "Satgas Preview 2"
      },
      {
        url: "/projects/satgas/satgas-preview2.jpg",
        alt: "Satgas Preview 2"
      },
    ],
    technologies: [
      {
        name: "Javascript",
        icon: SiJavascript,
        color: "bg-[#06B6D4]/20"
      },
      {
        name: "Typescript",
        icon: SiTypescript,
        color: "bg-[#06B6D4]/20"
      },
      {
        name: "Node Js",
        icon: SiNodedotjs,
        color: "bg-[#FF2D20]/20"
      },
      {
        name: "Express Js",
        icon: SiExpress,
        color: "bg-[#FF2D20]/20"
      },
      {
        name: "Next.Js",
        icon: SiNextdotjs,
        color: "bg-[#FF2D20]/20"
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
        color: "bg-[#06B6D4]/20"
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "bg-[#4479A1]/20"
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "bg-[#F24E1E]/20"
      }
    ],
    demo: "",
    type: "Web",
  },
  {
    id: 5,
    title: "Fastfixx",
    description: "An all-in-one platform for managing workshops and mechanics, designed to streamline service orders and customer interactions. Available on both mobile and web, this platform offers a seamless experience for workshop management and customer bookings.",
    images: [
      {
        url: "/projects/fastfixx/fastfixx-preview.png",
        alt: "fastfixx Preview 1"
      },
      {
        url: "/projects/fastfixx/fastfixx-preview2.png",
        alt: "fastfixx Preview 2"
      },
      {
        url: "/projects/fastfixx/fastfixx-preview3.png",
        alt: "fastfixx Preview 3"
      },
    ],
    technologies: [
      {
        name: "Javascript",
        icon: SiJavascript,
        color: "bg-[#06B6D4]/20"
      },
      {
        name: "Node Js",
        icon: SiNodedotjs,
        color: "bg-[#FF2D20]/20"
      },
      {
        name: "Express Js",
        icon: SiExpress,
        color: "bg-[#FF2D20]/20"
      },
      {
        name: "React",
        icon: SiReact,
        color: "bg-[#FF2D20]/20"
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "bg-[#4479A1]/20"
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "bg-[#F24E1E]/20"
      }
    ],
    demo: "",
    type: "Web",
  },
  {
    id: 6,
    title: "KIKI Wedding",
    description: "A comprehensive platform for booking complete wedding packages, connecting you with top vendors for venues, decorations, photography, and more. Find and customize everything you need for your dream wedding in one place",
    images: [
      {
        url: "/projects/wedding/wedding-preview.jpg",
        alt: "fastfixx Preview 1"
      },
      {
        url: "/projects/wedding/wedding-preview2.jpg",
        alt: "fastfixx Preview 2"
      },
      {
        url: "/projects/wedding/wedding-preview3.jpg",
        alt: "fastfixx Preview 3"
      },
    ],
    technologies: [
      {
        name: "Javascript",
        icon: SiJavascript,
        color: "bg-[#06B6D4]/20"
      },
      {
        name: "Node Js",
        icon: SiNodedotjs,
        color: "bg-[#FF2D20]/20"
      },
      {
        name: "Express Js",
        icon: SiExpress,
        color: "bg-[#FF2D20]/20"
      },
      {
        name: "React",
        icon: SiReact,
        color: "bg-[#FF2D20]/20"
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "bg-[#4479A1]/20"
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "bg-[#F24E1E]/20"
      }
    ],
    demo: "",
    type: "Web",
  },

 //Project Mobile
 {
  id: 7,
  title: "Museum Digital",
  description: "",
  images: [
    {
      url: "/projects/wedding/wedding-preview.jpg",
      alt: "fastfixx Preview 1"
    },
    {
      url: "/projects/wedding/wedding-preview2.jpg",
      alt: "fastfixx Preview 2"
    },
    {
      url: "/projects/wedding/wedding-preview3.jpg",
      alt: "fastfixx Preview 3"
    },
  ],
  technologies: [
    {
      name: "Javascript",
      icon: SiJavascript,
      color: "bg-[#06B6D4]/20"
    },
    {
      name: "Node Js",
      icon: SiNodedotjs,
      color: "bg-[#FF2D20]/20"
    },
    {
      name: "Express Js",
      icon: SiExpress,
      color: "bg-[#FF2D20]/20"
    },
    {
      name: "React",
      icon: SiReact,
      color: "bg-[#FF2D20]/20"
    },
    {
      name: "MySQL",
      icon: SiMysql,
      color: "bg-[#4479A1]/20"
    },
    {
      name: "Figma",
      icon: SiFigma,
      color: "bg-[#F24E1E]/20"
    }
  ],
  demo: "",
  type: "Mobile",

 },
 {
  id: 8,
  title: "MateUp",
  description: "",
  images: [
    {
      url: "/projects/wedding/wedding-preview.jpg",
      alt: "fastfixx Preview 1"
    },
    {
      url: "/projects/wedding/wedding-preview2.jpg",
      alt: "fastfixx Preview 2"
    },
    {
      url: "/projects/wedding/wedding-preview3.jpg",
      alt: "fastfixx Preview 3"
    },
  ],
  technologies: [
    {
      name: "Javascript",
      icon: SiJavascript,
      color: "bg-[#06B6D4]/20"
    },
    {
      name: "Node Js",
      icon: SiNodedotjs,
      color: "bg-[#FF2D20]/20"
    },
    {
      name: "Express Js",
      icon: SiExpress,
      color: "bg-[#FF2D20]/20"
    },
    {
      name: "React",
      icon: SiReact,
      color: "bg-[#FF2D20]/20"
    },
    {
      name: "MySQL",
      icon: SiMysql,
      color: "bg-[#4479A1]/20"
    },
    {
      name: "Figma",
      icon: SiFigma,
      color: "bg-[#F24E1E]/20"
    }
  ],
  demo: "",
  type: "Mobile",

 },
 {
  id: 9,
  title: "Scada Technical Tirtanadi",
  description: "",
  images: [
    {
      url: "/projects/wedding/wedding-preview.jpg",
      alt: "fastfixx Preview 1"
    },
    {
      url: "/projects/wedding/wedding-preview2.jpg",
      alt: "fastfixx Preview 2"
    },
    {
      url: "/projects/wedding/wedding-preview3.jpg",
      alt: "fastfixx Preview 3"
    },
  ],
  technologies: [
    {
      name: "Javascript",
      icon: SiJavascript,
      color: "bg-[#06B6D4]/20"
    },
    {
      name: "Node Js",
      icon: SiNodedotjs,
      color: "bg-[#FF2D20]/20"
    },
    {
      name: "Express Js",
      icon: SiExpress,
      color: "bg-[#FF2D20]/20"
    },
    {
      name: "React",
      icon: SiReact,
      color: "bg-[#FF2D20]/20"
    },
    {
      name: "MySQL",
      icon: SiMysql,
      color: "bg-[#4479A1]/20"
    },
    {
      name: "Figma",
      icon: SiFigma,
      color: "bg-[#F24E1E]/20"
    }
  ],
  demo: "",
  type: "Mobile",

 },
 {
  id: 10,
  title: "Fastfixx",
  description: "",
  images: [
    {
      url: "/projects/wedding/wedding-preview.jpg",
      alt: "fastfixx Preview 1"
    },
    {
      url: "/projects/wedding/wedding-preview2.jpg",
      alt: "fastfixx Preview 2"
    },
    {
      url: "/projects/wedding/wedding-preview3.jpg",
      alt: "fastfixx Preview 3"
    },
  ],
  technologies: [
    {
      name: "Javascript",
      icon: SiJavascript,
      color: "bg-[#06B6D4]/20"
    },
    {
      name: "Node Js",
      icon: SiNodedotjs,
      color: "bg-[#FF2D20]/20"
    },
    {
      name: "Express Js",
      icon: SiExpress,
      color: "bg-[#FF2D20]/20"
    },
    {
      name: "React",
      icon: SiReact,
      color: "bg-[#FF2D20]/20"
    },
    {
      name: "MySQL",
      icon: SiMysql,
      color: "bg-[#4479A1]/20"
    },
    {
      name: "Figma",
      icon: SiFigma,
      color: "bg-[#F24E1E]/20"
    }
  ],
  demo: "",
  type: "Mobile",

 }
  
];
